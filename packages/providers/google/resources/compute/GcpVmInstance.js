const assert = require("assert");
const path = require("path");

const {
  get,
  eq,
  switchCase,
  pipe,
  tap,
  map,
  omit,
  assign,
  tryCatch,
  or,
} = require("rubico");
const { defaultsDeep, pluck, find, includes } = require("rubico/x");
const { detailedDiff } = require("deep-object-diff");

const logger = require("@grucloud/core/logger")({ prefix: "GcpVmInstance" });
const { tos } = require("@grucloud/core/tos");

const GoogleClient = require("../../GoogleClient");
const { buildLabel, createAxiosMakerGoogle } = require("../../GoogleCommon");
const { toTagName } = require("@grucloud/core/TagName");
const { getField } = require("@grucloud/core/ProviderCommon");
const {
  isUpByIdCore,
  isDownByIdCore,
  axiosErrorToJSON,
} = require("@grucloud/core/Common");
const { GCP_COMPUTE_BASE_URL } = require("./GcpComputeCommon");
const { retryCall } = require("@grucloud/core//Retry");

// https://cloud.google.com/compute/docs/reference/rest/v1

exports.GoogleVmInstance = ({ spec, config: configProvider }) => {
  assert(spec);
  assert(configProvider);
  assert(configProvider.stage);
  const { providerName } = configProvider;
  assert(providerName);
  const { projectId, region, zone, managedByTag } = configProvider;
  assert(projectId);

  const url = `/projects/${projectId(configProvider)}/zones/${zone}/instances`;

  const axios = createAxiosMakerGoogle({
    baseURL: GCP_COMPUTE_BASE_URL,
    url,
    config: configProvider,
  });

  const findDependencies = ({ live, lives }) => [
    {
      type: "Network",
      ids: pipe([
        () => live,
        get("networkInterfaces"),
        pluck("network"),
        map((network) =>
          pipe([
            () => lives.getByType({ type: "Network", providerName }),
            get("resources", []),
            find(eq(get("live.selfLink"), network)),
            get("id"),
          ])()
        ),
      ])(),
    },
    {
      type: "SubNetwork",
      ids: pipe([
        () => live,
        get("networkInterfaces"),
        pluck("subnetwork"),
        map((network) =>
          pipe([
            () => lives.getByType({ type: "SubNetwork", providerName }),
            get("resources", []),
            find(eq(get("live.selfLink"), network)),
            get("id"),
          ])()
        ),
      ])(),
    },
  ];

  const configDefault = ({ name, properties, dependencies }) => {
    logger.debug(`configDefault ${tos({ properties, dependencies })}`);
    const { ip, serviceAccount, subNetwork } = dependencies;
    const {
      machineType,
      diskType,
      sourceImage,
      diskSizeGb,
      metadata,
      ...otherProperties
    } = properties;

    const buildServiceAccount = ({ serviceAccount }) => {
      if (serviceAccount) {
        return [
          {
            email: getField(serviceAccount, "email"),
            scopes: ["https://www.googleapis.com/auth/cloud-platform"],
          },
        ];
      }
    };

    const buildSubNetwork = switchCase([
      (subNetwork) => subNetwork,
      (subNetwork) => subNetwork.resource.name,
      () => "default",
    ]);

    const config = defaultsDeep({
      kind: "compute#instance",
      name,
      zone: `${GCP_COMPUTE_BASE_URL}/projects/${projectId(
        configProvider
      )}/zones/${zone}`,
      machineType: `${GCP_COMPUTE_BASE_URL}/projects/${projectId(
        configProvider
      )}/zones/${zone}/machineTypes/${machineType}`,
      labels: buildLabel(configProvider),
      metadata: defaultsDeep({
        kind: "compute#metadata",
      })(metadata || {}),
      serviceAccounts: buildServiceAccount({ serviceAccount }),
      disks: [
        {
          kind: "compute#attachedDisk",
          type: "PERSISTENT",
          boot: true,
          mode: "READ_WRITE",
          autoDelete: true,
          deviceName: toTagName(name, managedByTag),
          initializeParams: {
            sourceImage,
            diskType: `projects/${projectId(
              configProvider
            )}/zones/${zone}/diskTypes/${diskType}`,
            diskSizeGb,
          },
          diskEncryptionKey: {},
        },
      ],
      networkInterfaces: [
        {
          kind: "compute#networkInterface",
          subnetwork: `projects/${projectId(
            configProvider
          )}/regions/${region}/subnetworks/${buildSubNetwork(subNetwork)}`,
          accessConfigs: [
            {
              ...(ip && { natIP: getField(ip, "address") }),
              kind: "compute#accessConfig",
              name: "External NAT",
              type: "ONE_TO_ONE_NAT",
              networkTier: "PREMIUM",
            },
          ],
          aliasIpRanges: [],
        },
      ],
      displayDevice: {
        enableDisplay: false,
      },
      canIpForward: false,
      scheduling: {
        preemptible: false,
        onHostMaintenance: "MIGRATE",
        automaticRestart: true,
        nodeAffinities: [],
      },
      deletionProtection: false,
      reservationAffinity: {
        consumeReservationType: "ANY_RESERVATION",
      },
      shieldedInstanceConfig: {
        enableSecureBoot: false,
        enableVtpm: true,
        enableIntegrityMonitoring: true,
      },
      confidentialInstanceConfig: {
        enableConfidentialCompute: false,
      },
    })(otherProperties);
    logger.debug(`configDefault ${name} result: ${tos(config)}`);
    return config;
  };

  const isInstanceUp = eq(get("status"), "RUNNING");
  const isInstanceDown = pipe([eq(get("status"), "TERMINATED")]);

  const isUpByIdFactory = ({ getById }) =>
    isUpByIdCore({
      isInstanceUp,
      getById,
    });

  const isDownByIdFactory = ({ getById }) =>
    isDownByIdCore({
      isInstanceDown,
      getById,
    });

  const client = GoogleClient({
    spec,
    baseURL: GCP_COMPUTE_BASE_URL,
    url: `/projects/${projectId(configProvider)}/zones/${zone}/instances`,
    config: configProvider,
    isUpByIdFactory,
    isDownByIdFactory,
    configDefault,
    findDependencies,
  });

  const instanceStop = ({ name, id }) =>
    pipe([
      tap(() => {
        logger.debug(`instanceStop ${name}, id: ${id}`);
      }),
      () => axios.post(`${name}/stop`),
      tap(() =>
        retryCall({
          name: `instance isDownById name: ${name}`,
          fn: () => client.isDownById({ id, name }),
          config: configProvider,
        })
      ),
      tap(() => {
        logger.debug(`instanceStop done`);
      }),
    ])();

  const instanceStart = ({ name, id }) =>
    pipe([
      tap(() => {
        logger.debug(`instanceStart ${name}`);
      }),
      () => axios.post(`${name}/start`),
      tap(() =>
        retryCall({
          name: `instance isDownById name: ${name}`,
          fn: () => client.isUpById({ id, name }),
          config: configProvider,
        })
      ),
      tap(() => {
        logger.debug(`instanceStart done`);
      }),
    ])();

  const update = async ({ name, payload, dependencies, diff, live, id }) =>
    tryCatch(
      pipe([
        tap(() => {
          logger.debug(
            `update ${name}, payload: ${tos({ payload, diff, live, id })}`
          );
          assert(name);
          assert(payload);
          assert(!spec.singleton);
          assert(!spec.listOnly);
        }),
        () => diff,
        switchCase([
          get("updateNeedRestart"),
          pipe([
            tap(() => {
              logger.debug(`updateNeedRestart`);
            }),
            () => instanceStop({ name, id }),
            () => client.getById({ id }),
            ({ fingerprint }) =>
              axios.put(name, {
                ...payload,
                fingerprint,
              }),
            () => instanceStart({ name, id }),
          ]),
          get("updateNeedRefresh"),
          pipe([
            tap(() => {
              logger.debug(`updateNeedRefresh`);
            }),
            () =>
              axios.put(name, {
                ...payload,
                fingerprint: live.fingerprint,
              }),
          ]),
          () => {
            throw Error("TODO update vm");
          },
        ]),
      ]),
      (error) => {
        throw axiosErrorToJSON(error);
      }
    )();

  return { ...client, update };
};

const filterItem = ({ config, item }) =>
  pipe([
    tap(() => {
      assert(config.zone);
      assert(config.projectId);
    }),
    () => item,
    omit(["disks", "networkInterfaces", "scheduling", "serviceAccounts"]),
    assign({
      machineType: ({ machineType }) =>
        machineType.replace(
          `${GCP_COMPUTE_BASE_URL}/projects/${config.projectId()}/zones/${
            config.zone
          }/machineTypes/`,
          ""
        ),
    }),
    tap((xxx) => {
      assert(true);
    }),
  ])();

// See https://cloud.google.com/compute/docs/instances/update-instance-properties#updatable-properties
const VM_INSTANCE_ATTRIBUTES_RESTART = [
  "reservationAffinity",
  "disk",
  "displayDevice",
  "guestAccelerator",
  "machineType",
  "minCpuPlatform",
  "scheduling",
  "serviceAccount",
  "shieldedInstanceConfig",
];

const VM_INSTANCE_ATTRIBUTES_REFRESH = [
  "deletionProtection",
  "description",
  "disk",
  "labels",
  "metadata",
  "tags",
];

exports.compareVmInstance = pipe([
  tap((xxx) => {
    assert(true);
  }),
  assign({
    target: ({ target, config }) => filterItem({ config, item: target }),
    live: ({ live, config }) => filterItem({ config, item: live }),
  }),
  ({ target, live }) => ({
    targetDiff: pipe([
      () => detailedDiff(target, live),
      omit(["added", "deleted"]),
    ])(),
    liveDiff: pipe([
      () => detailedDiff(live, target),
      omit(["added", "deleted"]),
    ])(),
  }),
  assign({
    // TODO change image ?
    // updateNeedDestroy: pipe([
    //   get("liveDiff.updated"),
    //   Object.keys,
    //   or([find((key) => includes(key)(["ImageId"]))]),
    // ]),
    updateNeedRefresh: pipe([
      get("liveDiff.updated"),
      Object.keys,
      or([find((key) => includes(key)(VM_INSTANCE_ATTRIBUTES_REFRESH))]),
    ]),
    updateNeedRestart: pipe([
      get("liveDiff.updated"),
      Object.keys,
      or([find((key) => includes(key)(VM_INSTANCE_ATTRIBUTES_RESTART))]),
    ]),
  }),
  tap((diff) => {
    logger.debug(`compareVmInstance ${tos(diff)}`);
  }),
]);