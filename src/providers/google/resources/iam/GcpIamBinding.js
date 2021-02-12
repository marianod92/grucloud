const assert = require("assert");
const {
  pipe,
  tap,
  map,
  get,
  filter,
  tryCatch,
  switchCase,
  not,
} = require("rubico");

const {
  first,
  find,
  defaultsDeep,
  differenceWith,
  isDeepEqual,
  uniq,
} = require("rubico/x");
const { retryCallOnError } = require("../../../Retry");
const { getField } = require("../../../ProviderCommon");
const { isDownByIdCore } = require("../../../Common");
const logger = require("../../../../logger")({ prefix: "GcpIamPolicy" });
const { tos } = require("../../../../tos");
const { axiosErrorToJSON, logError } = require("../../../Common");
const {
  createAxiosMakerGoogle,
  shouldRetryOnException,
} = require("../../GoogleCommon");

const findName = get("role");
const findId = findName;

const isOurMinionIamBinding = ({ name, resource, resourceNames }) =>
  pipe([
    tap(() => {
      assert(resource, "resource");
      assert(Array.isArray(resourceNames), "resourceNames");
    }),
    find((item) => isDeepEqual(item, findName(resource))),
    tap((isOur) => {
      logger.debug(`isOurMinionIamBinding: ${name}: ${isOur}`);
    }),
  ])(resourceNames);

const cannotBeDeleted = not(isOurMinionIamBinding);

exports.isOurMinionIamBinding = isOurMinionIamBinding;

// https://cloud.google.com/iam/docs/granting-changing-revoking-access#iam-modify-policy-role-rests
exports.GcpIamBinding = ({ spec, config }) => {
  const { projectId } = config;

  const axios = createAxiosMakerGoogle({
    baseURL: `https://cloudresourcemanager.googleapis.com/v1`,
    url: `/projects/${projectId(config)}`,
    config,
  });

  const configDefault = ({ name, properties, dependencies }) =>
    pipe([
      () =>
        defaultsDeep({
          role: name,
          members: map((sa) => `serviceAccount:${getField(sa, "email")}`)(
            dependencies.serviceAccounts
          ),
        })(properties),
      tap((xx) => {
        //logger.debug(`configDefault`);
      }),
    ])();

  const getIamPolicy = tryCatch(
    pipe([
      () =>
        retryCallOnError({
          name: `getIamPolicy`,
          fn: () =>
            axios.request(":getIamPolicy", {
              method: "POST",
            }),
          config,
        }),
      get("data"),
      tap((result) => {
        logger.debug(`getIamPolicy ${tos(result)}`);
      }),
    ]),
    (error) => {
      logError(`getIamPolicy`, error);
      throw axiosErrorToJSON(error);
    }
  );

  const getList = tryCatch(
    pipe([
      getIamPolicy,
      ({ bindings }) => ({ total: bindings.length, items: bindings }),
    ]),
    (error) => {
      logError(`getList`, error);
      throw axiosErrorToJSON(error);
    }
  );

  const getByName = ({ name }) =>
    pipe([
      tap(() => {
        logger.debug(`getByName ${name}`);
      }),
      getList,
      get("items"),
      find((binding) => binding.role === name),
      tap((binding) => {
        logger.debug(`getByName result: ${tos(binding)}`);
      }),
    ])();

  const getById = ({ id }) => getByName({ name: id });

  const isDownById = isDownByIdCore({ getById, getList, findId });

  const create = ({ payload }) =>
    pipe([
      getIamPolicy,
      (policy) => ({ ...policy, bindings: [...policy.bindings, payload] }),
      tap((policy) => {
        logger.debug(`create policy: ${tos(policy)}`);
      }),
      (policy) =>
        retryCallOnError({
          name: `create iam binding`,
          fn: () =>
            axios.request(":setIamPolicy", {
              method: "POST",
              data: { policy },
            }),
          config,
        }),
      get("data"),
    ])();

  const updateBinding = ({ currentBindings, newBinding }) =>
    map(
      switchCase([
        (binding) => binding.role === newBinding.role,
        ({ role, members }) => ({
          role,
          members: uniq([...members, ...newBinding.members]),
        }),
        (binding) => binding,
      ])
    )(currentBindings);

  const update = ({ payload }) =>
    pipe([
      tap(() => {
        logger.info(`update new binding ${tos(payload)}`);
      }),
      getIamPolicy,
      ({ bindings, etag }) => ({
        etag,
        bindings: updateBinding({
          currentBindings: bindings,
          newBinding: payload,
        }),
      }),
      tap((policy) => {
        logger.debug(`update policy: ${tos(policy)}`);
      }),
      (policy) =>
        retryCallOnError({
          name: `update iam binding`,
          fn: () =>
            axios.request(":setIamPolicy", {
              method: "POST",
              data: { policy },
            }),
          config,
        }),
      get("data"),
      tap((xx) => {
        logger.info(`new binding updated ${tos(payload)}`);
      }),
    ])();

  const destroy = async ({ id }) =>
    pipe([
      tap(() => {
        logger.debug(`destroy ${id}`);
      }),
      getIamPolicy,
      ({ bindings, etag }) => ({
        etag,
        bindings: filter(({ role }) => role !== id)(bindings),
      }),
      (policy) =>
        retryCallOnError({
          name: `destroy iam binding ${id}`,
          fn: () =>
            axios.request(":setIamPolicy", {
              method: "POST",
              data: { policy },
            }),
          config,
        }),
      get("data"),
    ])();

  return {
    spec,
    config,
    findName,
    findId,
    getList,
    isDownById,
    create,
    update,
    destroy,
    getByName,
    configDefault,
    cannotBeDeleted,
    shouldRetryOnException,
  };
};

exports.compareIamBinding = pipe([
  ({ target, live }) => ({
    added: differenceWith(isDeepEqual, target.members)(live.members),
    deleted: differenceWith(isDeepEqual, live.members)(target.members),
  }),
  tap((diff) => {
    logger.debug(`compareIamBinding ${tos(diff)}`);
  }),
]);
