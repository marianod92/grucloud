const assert = require("assert");
const md5File = require("md5-file");
const {
  pipe,
  tap,
  omit,
  get,
  map,
  filter,
  and,
  eq,
  pick,
  tryCatch,
  assign,
  reduce,
  not,
  or,
  switchCase,
  fork,
} = require("rubico");
const {
  isObject,
  find,
  callProp,
  groupBy,
  values,
  first,
  pluck,
  isDeepEqual,
  isString,
  when,
  identity,
  unless,
  isEmpty,
  keys,
  defaultsDeep,
  append,
} = require("rubico/x");
const util = require("util");
const { detailedDiff } = require("deep-object-diff");
const Diff = require("diff");
const shell = require("shelljs");

const logger = require("./logger")({ prefix: "Common" });
const { tos } = require("./tos");

const configProviderDefault = {
  tag: "gc-managed-by-gru",
  managedByKey: "gc-managed-by",
  managedByValue: "grucloud",
  managedByDescription: "Managed By GruCloud",
  createdByProviderKey: "gc-created-by-provider",
  projectNameKey: "gc-project-name",
  stageTagKey: "gc-stage",
  nameKey: "Name",
  namespaceKey: "gc-namespace",
  stage: "dev",
  retryCount: 30,
  retryDelay: 10e3,
};

exports.configProviderDefault = configProviderDefault;

exports.mapPoolSize = 20;
exports.TitleDeploying = "Deploying";
exports.TitleDestroying = "Destroying";
exports.TitleQuery = "Querying";
exports.TitleListing = "Listing";

exports.HookType = {
  ON_DEPLOYED: "onDeployed",
  ON_DESTROYED: "onDestroyed",
};

const omitPathIfEmpty = (path) => (obj) =>
  pipe([() => obj, when(pipe([get(path), isEmpty]), omit([path]))])();

const omitIfEmpty = (paths) => (obj) =>
  pipe([
    () => paths,
    reduce((acc, path) => pipe([() => acc, omitPathIfEmpty(path)])(), obj),
    tap((params) => {
      assert(true);
    }),
  ])();
exports.omitIfEmpty = omitIfEmpty;

const differenceObject = (exclude) => (target) =>
  pipe([
    tap(() => {
      assert(target);
      assert(exclude);
    }),
    () => target,
    keys,
    reduce(
      (acc, key) =>
        pipe([
          switchCase([
            () => exclude.hasOwnProperty(key),
            switchCase([
              () => isObject(exclude[key]),
              pipe([
                () => differenceObject(exclude[key])(target[key]),
                switchCase([
                  isEmpty,
                  () => acc,
                  (value) => ({ ...acc, [key]: value }),
                ]),
              ]),
              switchCase([
                eq(exclude[key], target[key]),
                () => acc,
                () => ({ ...acc, [key]: target[key] }),
              ]),
            ]),
            () => ({ ...acc, [key]: target[key] }),
          ]),
          tap((params) => {
            assert(true);
          }),
        ])(),
      {}
    ),
  ])();

exports.differenceObject = differenceObject;

const typeFromResources = pipe([first, get("type")]);
exports.typeFromResources = typeFromResources;

const groupFromResources = pipe([first, get("group")]);
exports.groupFromResources = groupFromResources;

exports.planToResourcesPerType = ({ providerName, plans = [] }) =>
  pipe([
    tap(() => {
      logger.debug("planToResourcesPerType");
      assert(providerName);
    }),
    () => plans,
    pluck("resource"),
    groupBy("type"),
    values,
    map((resources) => ({
      type: typeFromResources(resources),
      group: groupFromResources(resources),
      provider: providerName,
      resources,
    })),
    tap((obj) => {
      logger.debug("planToResourcesPerType");
    }),
  ])();

exports.axiosErrorToJSON = (error = {}) => {
  const message = get("response.data.message", error.message)(error);
  const exception = new Error(message);
  exception.isAxiosError = error.isAxiosError;
  exception.name = error.name;
  exception.config = pick(["url", "method", "baseURL"])(error.config);
  exception.code = error.code;
  exception.response = {
    status: error.response?.status,
    data: error.response?.data,
  };

  return exception;
};

const safeJsonParse = when(
  isString,
  tryCatch(JSON.parse, (error, result) => result)
);

exports.convertError = ({ error, name, procedure, params }) => {
  assert(error, "error");
  if (error.config) {
    const { baseURL = "", url, method } = error.config;
    return {
      Command: name,
      Message: `${error.message} ${get(
        "response.data.error.message",
        ""
      )(error)}`,
      Status: error.response?.status,
      Code: error.code,
      Output: safeJsonParse(error.response?.data),
      Input: {
        url: `${method} ${baseURL}${url}`,
        data: safeJsonParse(error.config?.data),
      },
    };
  } else if (error.requestId) {
    return {
      Command: name,
      name: error.name,
      code: error.code,
      statusCode: error.statusCode,
      procedure,
      params,
      message: error.message,
      region: error.region,
      requestId: error.requestId,
      retryable: error.retryable,
      retryDelay: error.retryDelay,
      time: error.time,
    };
  } else if (error.stack) {
    return {
      Command: name,
      name: error.name,
      code: error.code,
      message: error.message,
      stack: error.stack,
    };
  } else {
    return error;
  }
};

exports.getByNameCore =
  ({ findName, getList, deep = true }) =>
  ({ name, resources, lives }) =>
    pipe([
      tap(() => {
        logger.info(`getByNameCore ${name}`);
        assert(name, "name");
        assert(findName, "findName");
        assert(getList, "getList");
        if (!lives) {
          //assert(lives);
        }
      }),
      () => getList({ deep, lives, resources }),
      tap((items) => {
        assert(Array.isArray(items));
      }),
      find((live) => isDeepEqual(name, findName({ live, lives }))), //TODO check on meta
      tap((instance) => {
        logger.info(`getByNameCore ${name}: ${instance ? "UP" : "DOWN"}`);
        logger.debug(`getByNameCore ${name}: ${tos({ instance })}`);
      }),
    ])();

exports.isUpByIdCore =
  ({ isInstanceUp, getById }) =>
  async ({ id, name, type, live }) => {
    logger.debug(`isUpById ${JSON.stringify({ type, name, id })}`);
    assert(id || live, "isUpByIdCore id");
    assert(getById, "isUpByIdCore getById");
    let up = false;
    const instance = await getById({ type, name, id, deep: false, live });
    if (instance) {
      //TODO use default isInstanceUp
      if (isInstanceUp) {
        up = await isInstanceUp(instance);
      } else {
        up = true;
      }
    }
    logger.info(
      `isUpById ${JSON.stringify({ type, name, id })} ${up ? "UP" : "NOT UP"}`
    );
    return up ? instance : undefined;
  };

exports.isDownByIdCore =
  ({ type, name, isInstanceDown, getById, getList, findId }) =>
  async ({ id, live }) => {
    logger.debug(`isDownById ${id}`);
    assert(id || live, "isDownByIdCore id");
    assert(getById, "isDownByIdCore getById");

    let down = false;

    const theGet = getList ? getByIdCore : getById;
    const instance = await theGet({
      type,
      name,
      id,
      getList,
      findId,
      deep: false,
      live,
    });
    if (instance) {
      if (isInstanceDown) {
        down = isInstanceDown(instance);
      }
    } else {
      down = true;
    }

    logger.info(
      `isDownById ${JSON.stringify({ type, name, id })} ${
        down ? "DOWN" : "NOT DOWN"
      }`
    );
    return down;
  };

exports.logError = (prefix, error = {}) => {
  logger.error(`${prefix} error:${util.inspect(error)}`);
  error.stack && logger.error(error.stack);

  if (error.response) {
    if (error.response.data) {
      logger.error(`data: ${tos(error.response.data)}`);
    }
    if (error.config) {
      const { baseURL = "", url, method } = error.config;
      logger.error(`config: ${method} ${baseURL}${url}`);
    }
    if (error.message) {
      logger.error(`message: ${error.message}`);
    }
  }
  //logger.error(`${prefix} stack:${error.stack}`);
};

exports.md5FileBase64 = pipe([
  md5File,
  (md5) => new Buffer.from(md5, "hex").toString("base64"),
]);

exports.buildTagsObject = ({ name, namespace, config, userTags = {} }) => {
  const {
    nameKey,
    managedByKey,
    managedByValue,
    stageTagKey,
    createdByProviderKey,
    stage,
    providerName,
    projectNameKey,
    projectName,
    namespaceKey,
  } = config;

  assert(name);
  assert(providerName);
  assert(stage);
  return {
    [nameKey]: name,
    [managedByKey]: managedByValue,
    [createdByProviderKey]: providerName,
    ...(namespace && {
      [namespaceKey]: namespace,
    }),
    [stageTagKey]: stage,
    ...(projectName && {
      [projectNameKey]: projectName,
    }),
    ...userTags,
  };
};

exports.isOurMinionObject = ({ tags, config }) => {
  const {
    stage,
    projectName,
    stageTagKey,
    projectNameKey,
    providerName,
    createdByProviderKey,
  } = config;
  return pipe([
    () => tags,
    tap(() => {
      assert(stage);
      assert(providerName);
    }),
    and([
      eq(get(stageTagKey), stage),
      eq(get(createdByProviderKey), providerName),
    ]),
    tap((minion) => {
      // logger.debug(
      //   `isOurMinionObject ${minion}, ${JSON.stringify({
      //     stage,
      //     projectName,
      //     tags,
      //   })}`
      // );
    }),
  ])();
};

const removeOurTagObject = ({ tags = "tags" }) =>
  pipe([
    assign({
      [tags]: pipe([
        get(tags),
        unless(
          or([isEmpty, Array.isArray]),
          pipe([
            tap((params) => {
              assert(true);
            }),
            map.entries(([key, value]) => [
              key,
              key.startsWith("gc-") || key.startsWith("aws:") || key == "Name"
                ? undefined
                : value,
            ]),
            filter(not(isEmpty)),
          ])
        ),
      ]),
    }),
    omitIfEmpty([tags]),
  ]);

const removeOurTags = pipe([
  removeOurTagObject({ tags: "tags" }),
  removeOurTagObject({ tags: "Tags" }),
]);

exports.removeOurTags = removeOurTags;

exports.compare = ({
  filterAll = () => identity,
  filterTarget = () => identity,
  filterTargetDefault = identity,
  filterLive = () => identity,
  filterLiveDefault = identity,
} = {}) =>
  pipe([
    tap((params) => {
      assert(filterTarget);
    }),
    assign({
      liveIn: get("live"),
      target: ({
        target = {},
        propertiesDefault = {},
        omitProperties = [],
        pickProperties,
        ...otherProps
      }) =>
        pipe([
          () => target,
          tap((params) => {
            assert(propertiesDefault);
          }),
          defaultsDeep(propertiesDefault),
          removeOurTags,
          filterTarget(otherProps),
          filterAll(otherProps),
          filterTargetDefault,
          //TODO
          //when(() => pickProperties, pick(pickProperties)),

          omit(omitProperties),
          tap((params) => {
            assert(true);
          }),
        ])(),
      live: ({
        live = {},
        propertiesDefault,
        omitProperties = [],
        pickProperties,
        ...otherProps
      }) =>
        pipe([
          tap((params) => {
            assert(omitProperties);
          }),
          () => live,
          removeOurTags,
          defaultsDeep(propertiesDefault),
          filterLive(otherProps),
          filterAll(otherProps),
          filterLiveDefault,
          // TODO
          //when(() => pickProperties, pick(pickProperties)),
          omit(omitProperties),
          tap((params) => {
            assert(true);
          }),
        ])(),
    }),
    tap((params) => {
      assert(true);
    }),
    assign({
      targetDiff: pipe([
        ({ target, live }) => detailedDiff(target, live),
        omitIfEmpty(["deleted", "updated", "added"]),
        tap((params) => {
          assert(true);
        }),
      ]),
      liveDiff: pipe([
        ({ target, live }) => detailedDiff(live, target),
        omitIfEmpty(["added", "updated", "deleted"]),
        tap((params) => {
          assert(true);
        }),
      ]),
      jsonDiff: pipe([
        ({ target = {}, live = {} }) => Diff.diffJson(live, target),
        tap((params) => {
          assert(true);
        }),
      ]),
    }),
    tap((diff) => {
      // logger.debug(`compare ${tos(diff)}`);
    }),
  ]);

const replaceId = (idResource) => callProp("replace", idResource, "");

const buildGetId =
  ({ id = "", path = "id" } = {}) =>
  ({ type, group, name, id: idResource }) =>
    pipe([
      tap(() => {
        assert(type);
        assert(name);
        assert(idResource);
      }),
      () => "",
      append("getId({ type:'"),
      append(type),
      append("', group:'"),
      append(group),
      append("', name:'"),
      append(name),
      append("'"),
      unless(
        eq(path, "id"),
        pipe([append(", path:'"), append(path), append("'")])
      ),
      unless(
        or([
          () => isEmpty(id),
          pipe([() => idResource, replaceId(id), isEmpty]),
        ]),
        pipe([
          append(", suffix:'"),
          append(replaceId(idResource)(id)),
          append("'"),
        ])
      ),
      append("})"),
    ])();
exports.buildGetId = buildGetId;

exports.replaceWithName =
  ({ groupType, pathLive = "id", path = "name" }) =>
  ({ lives, Id }) =>
    pipe([
      tap(() => {
        assert(groupType);
        //assert(Id);
      }),
      () => lives,
      filter(eq(get("groupType"), groupType)),
      tap((params) => {
        assert(true);
      }),
      find(pipe([get(pathLive), (id) => Id.match(new RegExp(id))])),
      tap((params) => {
        assert(true);
      }),
      switchCase([
        isEmpty,
        () => Id,
        (resource) =>
          pipe([
            () => resource,
            buildGetId({ path }),
            tap((params) => {
              assert(true);
            }),
            (getId) => () =>
              "`" +
              Id.replace(
                new RegExp(get(pathLive)(resource)),
                "${" + getId + "}"
              ) +
              "`",
          ])(),
      ]),
    ])();

exports.shellRun = (fullCommand) =>
  pipe([
    tap(() => {
      logger.debug(`shellRun: ${fullCommand}`);
    }),
    () =>
      shell.exec(fullCommand, {
        silent: true,
      }),
    switchCase([
      eq(get("code"), 0),
      get("stdout"),
      (result) => {
        throw {
          message: `command '${fullCommand}' failed`,
          ...result,
        };
      },
    ]),
  ])();
