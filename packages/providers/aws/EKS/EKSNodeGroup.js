const assert = require("assert");
const {
  map,
  flatMap,
  pipe,
  tap,
  get,
  switchCase,
  pick,
  filter,
  eq,
  not,
} = require("rubico");
const { defaultsDeep, isEmpty, pluck, find } = require("rubico/x");
const { AwsClient } = require("../AwsClient");

const logger = require("@grucloud/core/logger")({ prefix: "EKSNodeGroup" });
const { tos } = require("@grucloud/core/tos");

const { getByNameCore, buildTagsObject } = require("@grucloud/core/Common");
const {
  EKSNew,
  shouldRetryOnException,
  findNamespaceInTagsObject,
} = require("../AwsCommon");

const { getField } = require("@grucloud/core/ProviderCommon");
const { waitForUpdate } = require("./EKSCommon");
const findName = get("live.nodegroupName");
const findId = findName;
const pickId = pick(["nodegroupName", "clusterName"]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html
exports.EKSNodeGroup = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const eks = EKSNew(config);

  const findDependencies = ({ live, lives }) => [
    { type: "Cluster", group: "EKS", ids: [live.clusterName] },
    { type: "Subnet", group: "EC2", ids: live.subnets },
    {
      type: "AutoScalingGroup",
      group: "AutoScaling",
      ids: pipe([
        () => live,
        get("resources.autoScalingGroups"),
        pluck("name"),
        map((name) =>
          pipe([
            () =>
              lives.getByType({
                type: "AutoScalingGroup",
                group: "AutoScaling",
                providerName: config.providerName,
              }),
            find(eq(get("live.AutoScalingGroupName"), name)),
            get("id"),
          ])()
        ),
      ])(),
    },
    { type: "Role", group: "IAM", ids: [live.nodeRole] },
    {
      type: "LaunchTemplate",
      group: "EC2",
      ids: [pipe([() => live, get("launchTemplate.id")])()],
    },
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#listNodegroups-property
  const getList = ({ resources = [] } = {}) =>
    pipe([
      tap(() => {
        logger.info(`getList nodeGroup`);
      }),
      //TODO
      // () =>
      // lives.getByType({
      //   providerName: config.providerName,
      //   type: "Cluster",
      //   group: "EKS",
      // }),
      eks().listClusters,
      get("clusters"),
      flatMap((clusterName) =>
        pipe([
          () =>
            eks().listNodegroups({
              clusterName,
            }),
          get("nodegroups"),
          map(
            pipe([
              (nodegroupName) =>
                eks().describeNodegroup({ clusterName, nodegroupName }),
              get("nodegroup"),
            ])
          ),
        ])()
      ),
      filter(not(isEmpty)),
    ])();

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#describeNodegroup-property
  const getById = client.getById({
    pickId,
    method: "describeNodegroup",
    getField: "nodegroup",
    ignoreErrorCodes: ["ResourceNotFoundException"],
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#createNodegroup-property
  const create = client.create({
    method: "createNodegroup",
    pickId,
    pickCreated: () =>
      pipe([
        tap((params) => {
          assert(true);
        }),
        get("nodegroup"),
      ]),
    isInstanceUp: eq(get("status"), "ACTIVE"),
    getById,
    configIsUp: { retryCount: 12 * 25, retryDelay: 5e3 },
  });

  //TODO
  /*
    labels: {
    addOrUpdateLabels: {
      '<labelKey>': 'STRING_VALUE',
       '<labelKey>': ... 
    },
    removeLabels: [
      'STRING_VALUE',
       more items 
    ]
  },
  */

  // TODO instanceTypes needs a destroy

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#updateNodegroupConfig-property
  const update = ({ name, payload, diff, live }) =>
    pipe([
      tap(() => {
        logger.info(`updateNodegroupConfig: ${name}`);
        logger.debug(tos({ payload, diff, live }));
      }),
      () => payload,
      pick([
        "clusterName",
        "nodegroupName",
        //"labels", //TODO
        "scalingConfig",
        //"taints", //TODO
        "updateConfig",
      ]),
      eks().updateNodegroupConfig,
      get("update"),
      tap((result) => {
        logger.info(`updateNodegroupConfig: ${tos({ result })}`);
      }),
      get("id"),
      (updateId) =>
        waitForUpdate({ eks })({
          name: live.clusterName,
          nodegroupName: live.nodegroupName,
          updateId,
        }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#deleteNodegroup-property
  const destroy = client.destroy({
    pickId,
    method: "deleteNodegroup",
    getById,
    ignoreErrorCodes: ["ResourceNotFoundException"],
    config,
  });

  const configDefault = ({
    name,
    namespace,
    properties,
    dependencies: { cluster, role, subnets, launchTemplate },
  }) =>
    pipe([
      () => properties,
      tap((params) => {
        assert(cluster, "missing 'cluster' dependency");
        assert(role, "missing 'role' dependency");
        assert(subnets, "missing 'subnets' dependency");
      }),
      defaultsDeep({
        subnets: map((subnet) => getField(subnet, "SubnetId"))(subnets),
        nodeRole: getField(role, "Arn"),
        clusterName: cluster.config.name,
        nodegroupName: name,
        capacityType: "ON_DEMAND",
        scalingConfig: {
          minSize: 1,
          maxSize: 1,
          desiredSize: 1,
        },
        tags: buildTagsObject({ config, namespace, name }),
      }),
      switchCase([
        () => launchTemplate,
        defaultsDeep({
          launchTemplate: {
            id: getField(launchTemplate, "LaunchTemplateId"),
          },
        }),
        defaultsDeep({
          amiType: "AL2_x86_64",
          instanceTypes: ["t3.medium"],
          diskSize: 20,
        }),
      ]),
    ])();

  return {
    spec,
    findId,
    findDependencies,
    findNamespace: findNamespaceInTagsObject(config),
    getByName,
    findName,
    update,
    create,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};
