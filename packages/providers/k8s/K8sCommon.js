const assert = require("assert");
const {
  pipe,
  set,
  get,
  tap,
  eq,
  switchCase,
  assign,
  or,
  and,
  pick,
  map,
  not,
  omit,
} = require("rubico");
const {
  find,
  first,
  isEmpty,
  isFunction,
  identity,
  defaultsDeep,
} = require("rubico/x");
const { detailedDiff } = require("deep-object-diff");
const Diff = require("diff");

const fs = require("fs");
const https = require("https");
const logger = require("@grucloud/core/logger")({ prefix: "K8sCommon" });
const { tos } = require("@grucloud/core/tos");
const AxiosMaker = require("@grucloud/core/AxiosMaker");
const {
  isOurMinionObject,
  omitIfEmpty,
  compare,
} = require("@grucloud/core/Common");

exports.inferNameNamespace = ({ properties }) =>
  pipe([
    tap(() => {
      assert(properties);
    }),
    () => properties,
    get("metadata"),
    ({ name, namespace = "default" }) => `${namespace}::${name}`,
    tap((params) => {
      assert(true);
    }),
  ])();

exports.inferNameNamespaceLess = ({ properties }) =>
  pipe([
    tap(() => {
      assert(properties);
    }),
    () => properties,
    get("metadata.name"),
    tap((name) => {
      assert(name);
    }),
  ])();

const getNamespace = pipe([
  switchCase([isEmpty, () => `default`, get("name")]),
  tap((namespaceName) => {
    //logger.debug(`getNamespace namespaceName: ${namespaceName}`);
    assert(namespaceName);
  }),
]);

exports.getNamespace = getNamespace;

const pickCompare = ({ metadata, spec, data }) => ({
  metadata: pick(["annotations", "labels"])(metadata),
  spec: pipe([
    () => spec,
    //TODO move in compare
    assign({
      template: pipe([
        get("template"),
        assign({
          spec: pipe([
            get("spec"),
            assign({
              containers: pipe([
                get("containers"),
                map(
                  assign({
                    volumeMounts: pipe([
                      get("volumeMounts"),
                      omit(["readOnly"]),
                    ]),
                  })
                ),
              ]),
            }),
          ]),
        }),
      ]),
    }),
  ])(),
  data,
});

exports.compareK8s = ({ filterAll, filterTarget, filterLive } = {}) =>
  pipe([
    compare({
      filterAll,
      filterTarget,
      filterTargetDefault: pipe([pickCompare]),
      filterLive,
      filterLiveDefault: pipe([
        pickCompare,
        omitIfEmpty([
          //TODO remove
          "spec.template.spec.containers[0].env",
          "metadata.annotations",
        ]),
      ]),
    }),
    omit(["targetDiff.added", "targetDiff.deleted"]),
    omitIfEmpty(["targetDiff.updated"]),
    omit(["liveDiff.deleted"]),
    omitIfEmpty([
      "liveDiff.added",
      "liveDiff.updated",
      "liveDiff.updated.data",
    ]),
  ]);

exports.displayNameResourceDefault = ({ name }) => name;
exports.displayNameResourceNamespace = ({ name, dependencies, properties }) =>
  pipe([
    tap(() => {
      assert(name);
      assert(isFunction(properties));
      assert(isFunction(dependencies));
    }),
    () => name,
  ])();

exports.displayNameDefault = pipe([get("name")]);
exports.displayNameNamespace = ({ name }) =>
  pipe([
    tap(() => {
      assert(name);
    }),
    () => name,
  ])();

exports.shouldRetryOnException = ({ error, name }) => {
  logger.error(`k8s shouldRetryOnException ${tos({ name, error })}`);
  return false;
};

exports.getServerUrl = (kubeConfig) =>
  pipe([
    () => kubeConfig,
    tap((kubeConfig) => {
      //logger.debug("getServerUrl");
      assert(kubeConfig);
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
  ])();

const findCluster = (kubeConfig) =>
  pipe([
    tap(() => {
      //assert(kubeConfig["current-context"]);
    }),
    () => kubeConfig,
    get("clusters"),
    find(eq(get("name"), kubeConfig["current-context"])),
    tap((cluster) => {
      assert(cluster);
    }),
  ])();

const findContext = (kubeConfig) =>
  pipe([
    tap(() => {
      //assert(kubeConfig["current-context"]);
    }),
    () => kubeConfig,
    get("contexts"),
    find(eq(get("name"), kubeConfig["current-context"])),
    tap((context) => {
      //assert(context);
    }),
  ])();

exports.findContext = findContext;

const findUser = (kubeConfig) =>
  pipe([
    tap(() => {
      assert(kubeConfig);
      //assert(kubeConfig["current-context"]);
      //assert(kubeConfig.users);
    }),
    () => kubeConfig,
    findContext,
    get("context.user"),
    tap((user) => {
      //assert(user);
    }),
    (user) =>
      pipe([
        () => kubeConfig.users,
        find(eq(get("name"), user)),
        get("user"),
      ])(),
    tap((params) => {
      assert(true);
    }),
  ])();
exports.findUser = findUser;

exports.createAxiosMakerK8s = ({ config, contentType }) =>
  pipe([
    config.kubeConfig,
    (kubeConfig) =>
      pipe([
        () => kubeConfig,
        findUser,
        tap((user) => {
          //assert(user);
        }),
        switchCase([
          // GCP GKE
          get("auth-provider.config"),
          pipe([
            () => kubeConfig,
            findCluster,
            get("cluster"),
            tap((cluster) => {
              assert(cluster);
            }),
            (cluster) =>
              new https.Agent({
                ca: [
                  Buffer.from(cluster["certificate-authority-data"], "base64"),
                ],
              }),
          ]),
          // AWS EKS, minikube
          and([get("client-certificate"), get("client-key")]),
          (user) =>
            new https.Agent({
              rejectUnauthorized: false,
              cert: fs.readFileSync(user["client-certificate"]),
              key: fs.readFileSync(user["client-key"]),
            }),
          // Azure AKS
          and([get("client-certificate-data"), get("client-key-data")]),
          (user) =>
            new https.Agent({
              rejectUnauthorized: false,
              cert: Buffer.from(user["client-certificate-data"], "base64"),
              key: Buffer.from(user["client-key-data"], "base64"),
            }),
          () => undefined,
        ]),
        (httpsAgent) =>
          AxiosMaker({
            contentType,
            httpsAgent,
            timeout: 15e3,
            onHeaders: pipe([
              tap(() => {
                assert(
                  config.accessToken,
                  "config.accessToken function not set"
                );
              }),
              () => config.accessToken(),
              switchCase([
                isEmpty,
                () => ({}),
                (accessToken) => ({
                  Authorization: `Bearer ${accessToken}`,
                }),
              ]),
            ]),
          }),
      ])(),
  ])();

exports.isOurMinion = ({ live, lives, config }) =>
  or([
    () => isOurMinionObject({ tags: live.metadata.annotations, config }),
    pipe([
      tap(() => {
        assert(lives);
        logger.info(`isOurMinion ${live.metadata.name}`);
      }),
      () => first(live.metadata.ownerReferences),
      switchCase([
        not(isEmpty),
        ({ kind, uid }) =>
          pipe([
            () =>
              lives.getByType({
                providerName: config.providerName,
                type: kind,
              }),
            find(eq(get("live.metadata.uid"), uid)),
            get("managedByUs"),
            tap((result) => {
              logger.info(`isOurMinion ${live.metadata?.name}: ${result}`);
            }),
          ])(),
        () => false,
      ]),
    ]),
  ])();
