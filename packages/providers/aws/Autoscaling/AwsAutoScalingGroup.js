const assert = require("assert");
const { map, pipe, tap, tryCatch, get, or, eq, not } = require("rubico");
const {
  find,
  defaultsDeep,
  pluck,
  isEmpty,
  first,
  includes,
} = require("rubico/x");

const logger = require("@grucloud/core/logger")({ prefix: "AutoScalingGroup" });
const { retryCall } = require("@grucloud/core/Retry");
const { tos } = require("@grucloud/core/tos");
const {
  AutoScalingNew,
  shouldRetryOnException,
  findValueInTags,
  findNameInTags,
  findNamespaceInTagsOrEksCluster,
  hasKeyInTags,
} = require("../AwsCommon");
const { isOurMinionObject } = require("../AwsCommon");

const findId = get("live.AutoScalingGroupARN");

const findName = (params) => {
  const fns = [findNameInTags({ findId }), get("live.AutoScalingGroupName")];
  for (fn of fns) {
    const name = fn(params);
    if (!isEmpty(name)) {
      return name;
    }
  }
  assert(false, "should have a name");
};

const findClusterName = findValueInTags({ key: "eks:cluster-name" });

const findClusterNameFromLives = ({ clusterName, clusters }) =>
  pipe([
    tap(() => {
      logger.debug(`findClusterNameFromLives ${clusterName}`);
      //assert(clusterName);
      //assert(clusters);
    }),
    () => clusters,
    find(eq(get("name"), clusterName)),
    tap((resource) => {
      assert(true);
    }),
    get("live"),
  ])();

exports.autoScalingGroupIsOurMinion = ({ live, lives, config }) =>
  pipe([
    tap(() => {
      assert(live);
      assert(lives);
      assert(config.providerName);
      logger.debug(`autoScalingGroupIsOurMinion`);
    }),
    () => findClusterName(live),
    (clusterName) =>
      findClusterNameFromLives({
        clusterName,
        clusters: lives.getByType({
          providerName: config.providerName,
          type: "Cluster",
          group: "eks",
        }),
      }),
    tap((clusterLive) => {
      logger.debug(`autoScalingGroupIsOurMinion clusterLive: ${clusterLive}`);
    }),
    get("tags"),
    (tags) => isOurMinionObject({ tags, config }),
    tap((result) => {
      logger.debug(`autoScalingGroupIsOurMinion result: ${result}`);
    }),
  ])();

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html
exports.AwsAutoScalingGroup = ({ spec, config }) => {
  const autoScaling = AutoScalingNew(config);

  const managedByOther = or([
    hasKeyInTags({
      key: "eks:cluster-name",
    }),
    hasKeyInTags({
      key: "AmazonECSManaged",
    }),
  ]);

  const findDependencies = ({ live }) => [
    { type: "TargetGroup", group: "elb", ids: live.TargetGroupARNs },
    {
      type: "Instance",
      group: "ec2",
      ids: pipe([() => live, get("Instances"), pluck("InstanceId")])(),
    },
  ];

  const findNamespace = pipe([
    tap((params) => {
      assert(true);
    }),
    findNamespaceInTagsOrEksCluster({
      config,
      key: "eks:cluster-name",
    }),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#describeAutoScalingGroups-property
  const getList = ({ params } = {}) =>
    pipe([
      tap(() => {
        logger.info(`getList autoscaling group ${tos(params)}`);
      }),
      () => params,
      autoScaling().describeAutoScalingGroups,
      get("AutoScalingGroups"),
      tap((params) => {
        assert(true);
      }),
    ])();

  const getByName = ({ name }) =>
    pipe([
      tap(() => {
        logger.info(`getByName ${tos(name)}`);
      }),
      () =>
        autoScaling().describeAutoScalingGroups({
          AutoScalingGroupNames: [name],
        }),
      get("AutoScalingGroups"),
      first,
      tap((result) => {
        logger.debug(`getByName: ${name}, result: ${tos(result)}`);
      }),
    ])();

  const isDownByName = pipe([getByName, isEmpty]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#deleteAutoScalingGroup-property
  const destroy = ({ live, lives }) =>
    pipe([
      () => ({ name: findName({ live, lives }) }),
      ({ name }) =>
        pipe([
          tap(() => {
            logger.info(
              `destroy autoscaling group ${JSON.stringify({ name })}`
            );
          }),
          tryCatch(
            pipe([
              //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#updateAutoScalingGroup-property
              () => ({ AutoScalingGroupName: name, ForceDelete: true }),
              autoScaling().deleteAutoScalingGroup,
              tap(() =>
                retryCall({
                  name: `isDownByName: ${name}`,
                  fn: () => isDownByName({ name }),
                  config,
                })
              ),
            ]),
            tap.if(
              pipe([
                get("message"),
                not(includes("AutoScalingGroup name not found")),
              ]),
              (error) => {
                throw Error(error.message);
              }
            )
          ),

          tap(() => {
            logger.info(
              `destroyed autoscaling group ${JSON.stringify({ name })}`
            );
          }),
        ])(),
    ])();

  const configDefault = async ({ name, properties, dependencies }) =>
    defaultsDeep({})(properties);

  return {
    type: "AutoScalingGroup",
    spec,
    findId,
    findDependencies,
    findNamespace,
    findName,
    getByName,
    findName,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
    managedByOther,
  };
};
