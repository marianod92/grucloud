const assert = require("assert");
const querystring = require("querystring");
const {
  map,
  pipe,
  tap,
  tryCatch,
  get,
  filter,
  fork,
  eq,
  assign,
  pick,
  or,
  not,
  gte,
  any,
} = require("rubico");
const {
  find,
  includes,
  defaultsDeep,
  size,
  isEmpty,
  first,
  last,
  keys,
  when,
} = require("rubico/x");
const moment = require("moment");
const logger = require("@grucloud/core/logger")({ prefix: "IamPolicy" });
const { tos } = require("@grucloud/core/tos");
const { buildTags, findNamespaceInTags, isOurMinion } = require("../AwsCommon");
const { mapPoolSize, getByNameCore } = require("@grucloud/core/Common");

const { AwsClient } = require("../AwsClient");
const {
  createIAM,
  tagResourceIam,
  untagResourceIam,
  createFetchPolicyDocument,
} = require("./AwsIamCommon");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#tagPolicy-property
const tagResource = tagResourceIam({
  field: "PolicyArn",
  method: "tagPolicy",
});

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#untagPolicy-property
const untagResource = untagResourceIam({
  field: "PolicyArn",
  method: "untagPolicy",
});

const pickId = pipe([
  tap(({ Arn }) => {
    assert(Arn, "Arn");
  }),
  ({ Arn }) => ({ PolicyArn: Arn }),
]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html
exports.AwsIamPolicy = ({ spec, config }) => {
  const iam = createIAM(config);
  const client = AwsClient({ spec, config })(iam);
  const fetchPolicyDocument = createFetchPolicyDocument({ iam });
  const findId = get("live.Arn");

  const findName = ({ live }) =>
    pipe([
      () => live,
      get("name"),
      when(isEmpty, () => live.PolicyName),
      tap((name) => {
        if (!name) {
          assert(name, `no name in ${JSON.stringify(live)}`);
        }
      }),
    ])();

  const findNamespace = ({ live }) =>
    pipe([
      () => live,
      get("namespace"),
      when(isEmpty, () => findNamespaceInTags(config)({ live })),
      tap((namespace) => {
        logger.debug(`findNamespace ${namespace}`);
      }),
    ])();

  const addTargets = ({ resources = [], policies } = {}) =>
    pipe([
      tap(() => {
        logger.info(
          `addTargets #policies: ${size(policies)}, #resources: ${size(
            resources
          )}`
        );
      }),
      () => resources,
      filter(get("readOnly")),
      map(
        pipe([
          ({ name, namespace, properties }) => ({
            name,
            ...(namespace && { namespace }),
            ...properties({ config }),
          }),
          assign({
            PolicyDocument: pipe([
              assign({ Versions: fetchPolicyVersion }),
              ({ Arn, Versions }) =>
                fetchPolicyDocument({ PolicyArn: Arn, Versions }),
            ]),
          }),
        ])
      ),
      (readOnlyResources) => [...policies, ...readOnlyResources],
      tap((policiesAll) => {
        logger.info(`addTargets #policies  ${size(policiesAll)}`);
      }),
    ])();

  const fetchPolicyVersion = pipe([
    ({ Arn }) => iam().listPolicyVersions({ PolicyArn: Arn }),
    get("Versions"),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#listPolicies-property
  const getList = ({ params, resources } = {}) =>
    pipe([
      tap(() => {
        logger.debug(`getList iam policy`);
      }),
      () => iam().listPolicies({ ...params, Scope: "Local", MaxItems: 1e3 }),
      tap(({ Policies }) => {
        logger.debug(`getList: ${Policies.length}`);
      }),
      get("Policies"),
      filter((policy) => moment(policy.CreateDate).isAfter("2020-09-11")),
      tap((policies) => {
        logger.debug(`getList: ${policies.length}`);
      }),
      map.pool(
        mapPoolSize,
        tryCatch(getById, (error, policy) =>
          pipe([
            tap(() => {
              logger.error(
                `getList policy error: ${tos({
                  error,
                  policy,
                })}`
              );
            }),
            () => ({ error, policy }),
          ])()
        )
      ),
      tap((policies) => {
        logger.debug(`getList policy managed: ${tos(policies)}`);
      }),
      (policies) => addTargets({ policies, resources }),
    ])();

  const getByName = getByNameCore({ getList, findName });

  const getById = client.getById({
    pickId,
    method: "getPolicy",
    getField: "Policy",
    ignoreErrorCodes: ["NoSuchEntity"],
    decorate: () =>
      pipe([
        assign({
          Versions: fetchPolicyVersion,
        }),
        assign({
          PolicyDocument: ({ Arn, Versions }) =>
            fetchPolicyDocument({ PolicyArn: Arn, Versions }),
          EntitiesForPolicy: pipe([
            ({ Arn }) =>
              iam().listEntitiesForPolicy({
                PolicyArn: Arn,
              }),
            pick(["PolicyGroups", "PolicyUsers", "PolicyRoles"]),
          ]),
        }),
      ]),
  });

  const filterPayload = assign({
    PolicyDocument: pipe([get("PolicyDocument"), JSON.stringify]),
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createPolicy-property
  const create = client.create({
    method: "createPolicy",
    filterPayload,
    pickCreated: () => get("Policy"),
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createPolicyVersion-property
  const update = client.update({
    preUpdate: ({ live: { Arn, Versions } }) =>
      pipe([
        () => Versions,
        filter(not(get("IsDefaultVersion"))),
        tap.if(
          gte(size, 4),
          pipe([last, deletePolicyVersion({ PolicyArn: Arn })])
        ),
      ]),
    pickId,
    method: "createPolicyVersion",
    filterParams: ({ payload, live }) =>
      pipe([
        () => payload,
        pick(["PolicyDocument"]),
        filterPayload,
        defaultsDeep({ SetAsDefault: true }),
        defaultsDeep(pickId(live)),
      ])(),
    getById,
    config,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#deletePolicy-property
  const detatchPolicy = ({ live: { Arn: PolicyArn } }) =>
    pipe([
      tap(() => {
        assert(PolicyArn);
      }),
      () =>
        iam().listEntitiesForPolicy({
          PolicyArn,
        }),
      tap((result) => {
        logger.debug(`listEntitiesForPolicy ${tos(result)}`);
      }),
      fork({
        PolicyUsers: pipe([
          get("PolicyUsers"),
          tap((policyUsers) => {
            logger.debug(`destroy detachUserPolicy ${tos(policyUsers)}`);
          }),
          map(({ UserName }) =>
            iam().detachUserPolicy({
              PolicyArn,
              UserName,
            })
          ),
        ]),
        PolicyGroups: pipe([
          get("PolicyGroups"),
          tap((policyGroups) => {
            logger.debug(`destroy detachGroupPolicy ${tos(policyGroups)}`);
          }),
          map(({ GroupName }) =>
            iam().detachGroupPolicy({
              PolicyArn,
              GroupName,
            })
          ),
        ]),
        PolicyRoles: pipe([
          get("PolicyRoles"),
          tap((policyRoles) => {
            logger.debug(`destroy detachRolePolicy ${tos(policyRoles)}`);
          }),
          map(({ RoleName }) =>
            iam().detachRolePolicy({
              PolicyArn,
              RoleName,
            })
          ),
        ]),
      }),
    ])();

  const deletePolicyVersion = ({ PolicyArn }) =>
    tryCatch(
      pipe([
        tap(({ VersionId }) => {
          assert(PolicyArn);
          assert(VersionId);
        }),
        ({ VersionId }) => ({ PolicyArn, VersionId }),
        iam().deletePolicyVersion,
      ]),
      pipe([
        tap((error) => {
          logger.error(`error in deletePolicyVersion ${PolicyArn}`);
          logger.error(error);
        }),
      ])
    );

  const detatchPolicyVersions = ({ live: { Arn: PolicyArn, Versions = [] } }) =>
    pipe([
      tap(() => {
        assert(PolicyArn);
      }),
      () => Versions,
      filter(not(get("IsDefaultVersion"))),
      map(deletePolicyVersion({ PolicyArn })),
    ])();

  const destroy = client.destroy({
    preDestroy: pipe([tap(detatchPolicy), tap(detatchPolicyVersions)]),
    pickId,
    method: "deletePolicy",
    getById,
    ignoreErrorCodes: ["NoSuchEntity"],
  });

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: {},
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        PolicyName: name,
        Tags: buildTags({ name, namespace, config, UserTags: Tags }),
      }),
    ])();

  const cannotBeDeleted = ({ live }) =>
    pipe([
      tap(() => {
        assert(live);
      }),
      () => live,
      get("name"),
      tap((name) => {
        //assert(name);
      }),
      (name) =>
        pipe([
          () => ["Amazon", "AWS"],
          any((prefix) => includes(prefix)(name)),
        ])(),
    ])();

  return {
    spec,
    findId,
    findNamespace,
    getByName,
    findName,
    create,
    update,
    destroy,
    getList,
    configDefault,
    managedByOther: cannotBeDeleted,
    cannotBeDeleted: cannotBeDeleted,
    tagResource: tagResource({ iam }),
    untagResource: untagResource({ iam }),
  };
};

exports.isOurMinionIamPolicy = (item) =>
  pipe([
    () => item,
    tap(({ live }) => {
      assert(live);
    }),
    or([get("resource.readOnly"), isOurMinion]),
    tap((isOurMinion) => {
      //logger.debug(`isOurMinionIamPolicy '${item.live.name}' ${isOurMinion}`);
    }),
  ])();
