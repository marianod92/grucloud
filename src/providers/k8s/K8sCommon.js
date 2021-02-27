const assert = require("assert");
const {
  pipe,
  get,
  tap,
  eq,
  switchCase,
  assign,
  or,
  pick,
  and,
  not,
} = require("rubico");
const { find, first, isEmpty } = require("rubico/x");
const fs = require("fs");
const https = require("https");
const { detailedDiff } = require("deep-object-diff");
const logger = require("../../logger")({ prefix: "K8sCommon" });
const { tos } = require("../../tos");
const AxiosMaker = require("../AxiosMaker");
const { isOurMinionObject } = require("../Common");

const getNamespace = pipe([
  switchCase([isEmpty, () => `default`, get("name")]),
  tap((namespaceName) => {
    //logger.debug(`getNamespace namespaceName: ${namespaceName}`);
    assert(namespaceName);
  }),
]);

exports.getNamespace = getNamespace;

const pickCompare = pick(["spec", "data"]);

exports.compare = async ({ target, live }) =>
  pipe([
    tap(() => {
      logger.debug(`compare ${tos({ target, live })}`);
      assert(target);
      assert(live);
    }),
    () => detailedDiff(pickCompare(live), pickCompare(target)),
    tap((diff) => {
      logger.debug(`k8s compare ${tos(diff)}`);
    }),
  ])();

exports.resourceKeyDefault = pipe([
  tap((resource) => {
    assert(resource.provider);
    assert(resource.type);
    assert(resource.name || resource.id);
  }),
  ({ provider, type, name, id }) => `${provider}::${type}::${name || id}`,
]);

exports.resourceKeyNamespace = pipe([
  tap((resource) => {
    assert(resource.provider);
    assert(resource.type);
    assert(resource.name || resource.id);
  }),
  ({ provider, type, dependencies, name, id }) =>
    `${provider}::${type}::${getNamespace(dependencies?.namespace)}::${
      name || id
    }`,
]);

exports.displayNameResourceDefault = ({ name }) => name;
exports.displayNameResourceNamespace = ({ name, dependencies }) =>
  `${getNamespace(dependencies?.namespace)}::${name}`;

exports.displayNameDefault = ({ name }) => name;
exports.displayNameNamespace = ({ name, meta }) => {
  assert(meta.namespace);
  assert(name);
  return `${meta.namespace}::${name}`;
};

exports.shouldRetryOnException = ({ error, name }) => {
  logger.error(`k8s shouldRetryOnException ${tos({ name, error })}`);
  return false;
};

exports.getServerUrl = (kubeConfig) =>
  pipe([
    tap((kubeConfig) => {
      //logger.debug("getServerUrl");
    }),
    get("clusters"),
    find(eq(get("name"), kubeConfig["current-context"])),
    get("cluster.server"),
    tap.if(isEmpty, () => {
      throw Error(`missing clusters[0].server ${tos({ kubeConfig })}`);
    }),
    tap((server) => {
      logger.debug(`getServerUrl ${server}`);
    }),
  ])(kubeConfig);

exports.createAxiosMakerK8s = ({ config, contentType }) =>
  pipe([
    () => config.kubeConfig(),
    (kubeConfig) =>
      pipe([
        get("users"),
        find(eq(get("name"), kubeConfig["current-context"])),
        get("user"),
      ])(kubeConfig),
    tap((user) => {
      logger.debug(`createAxiosMakerK8s`);
    }),
    (user) => ({
      rejectUnauthorized: false,
      ...(user["client-certificate"] && {
        cert: fs.readFileSync(user["client-certificate"]),
      }),
      ...(user["client-key"] && { key: fs.readFileSync(user["client-key"]) }),
    }),
    tap(({ cert, key }) => {
      //logger.debug(`createAxiosMakerK8s agentParam ${tos({ cert, key })}`);
    }),
    (agentParam) => new https.Agent(agentParam),
    (httpsAgent) =>
      AxiosMaker({
        contentType,
        httpsAgent,
        onHeaders: () => {
          assert(config.accessToken, "config.accessToken function not set");
          const accessToken = config.accessToken();
          assert(accessToken, "accessToken not set");
          return {
            Authorization: `Bearer ${accessToken}`,
          };
        },
      }),
  ])();

exports.isOurMinion = ({ resource, lives, config }) =>
  or([
    () => isOurMinionObject({ tags: resource.metadata.annotations, config }),
    pipe([
      tap(() => {
        assert(lives);
        logger.info(`isOurMinionPod ${JSON.stringify({ resource })}`);
      }),
      () => first(resource.metadata.ownerReferences),
      switchCase([
        not(isEmpty),
        ({ kind, uid }) =>
          pipe([
            find(eq(get("type"), kind)),
            get("resources"),
            find(eq(get("live.metadata.uid"), uid)),
            get("managedByUs"),
            tap((result) => {
              logger.info(`isOurMinionPod ${resource.toString()}: ${result}`);
            }),
          ])(lives),
        () => false,
      ]),
    ]),
  ])();