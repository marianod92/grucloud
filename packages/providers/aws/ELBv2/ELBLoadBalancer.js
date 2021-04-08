const assert = require("assert");
const { map, pipe, tap, get, eq, assign } = require("rubico");
const { first, defaultsDeep, isEmpty } = require("rubico/x");
const { getField } = require("@grucloud/core/ProviderCommon");

const logger = require("@grucloud/core/logger")({
  prefix: "LoadBalancerV2",
});
const { retryCall } = require("@grucloud/core/Retry");
const { tos } = require("@grucloud/core/tos");
const { isUpByIdCore, isDownByIdCore } = require("@grucloud/core/Common");
const { ELBv2New, buildTags, shouldRetryOnException } = require("../AwsCommon");

const findName = get("LoadBalancerName");
const findId = get("LoadBalancerArn");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html

exports.ELBLoadBalancerV2 = ({ spec, config }) => {
  const elb = ELBv2New(config);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#describeLoadBalancers-property
  const getList = async () =>
    pipe([
      tap(() => {
        logger.info(`getList lbv2`);
      }),
      () => elb().describeLoadBalancers({}),
      get("LoadBalancers"),
      tap((results) => {
        logger.debug(`getList: result: ${tos(results)}`);
      }),
      map(
        assign({
          Tags: pipe([
            ({ LoadBalancerArn }) =>
              elb().describeTags({ ResourceArns: [LoadBalancerArn] }),
            get("TagDescriptions"),
            first,
            get("Tags"),
          ]),
        })
      ),
      (items = []) => ({
        total: items.length,
        items,
      }),
      tap(({ total }) => {
        logger.info(`getList: #total: ${total}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#describeLoadBalancers-property
  const getByName = ({ name }) =>
    pipe([
      tap(() => {
        logger.info(`getByName ${name}`);
      }),
      () => ({ LoadBalancerArns: [name] }),
      (params) => elb().describeLoadBalancers(params),
      get("LoadBalancers"),
      first,
      tap((result) => {
        logger.debug(`getByName result: ${tos(result)}`);
      }),
    ])();

  const getById = ({ id }) => getByName({ name: id });

  const isInstanceUp = eq(get("State"), "active");

  const isUpById = isUpByIdCore({ isInstanceUp, getById });
  const isDownById = isDownByIdCore({ getById });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createLoadBalancer-property
  const create = async ({ name, payload }) =>
    pipe([
      tap(() => {
        logger.info(`create: lbv2 ${name}`);
        logger.debug(`${tos(payload)}`);
      }),
      () => elb().createLoadBalancer(payload),
      get("LoadBalancers"),
      first,
      tap(({ LoadBalancerArn }) =>
        retryCall({
          name: `load balancer isUpById: ${name}, LoadBalancerArn: ${LoadBalancerArn}`,
          fn: () => isUpById({ name, id: LoadBalancerArn }),
          config,
        })
      ),
      tap(() => {
        logger.info(`created lbv2`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#deleteLoadBalancer-property
  const destroy = async ({ live }) =>
    pipe([
      () => ({ id: findId(live), name: findName(live) }),
      ({ id, name }) =>
        pipe([
          tap(() => {
            logger.info(`destroy lbv2 ${JSON.stringify({ id })}`);
          }),
          () => ({
            LoadBalancerArn: id,
          }),
          (params) => elb().deleteLoadBalancer(params),
          tap(() =>
            retryCall({
              name: `load balancer isDownById: ${id}`,
              fn: () => isDownById({ id }),
              config,
            })
          ),
          tap(() => {
            logger.info(`destroyed lbv2 ${JSON.stringify({ name })}`);
          }),
        ])(),
    ])();

  const configDefault = async ({
    name,
    properties,
    dependencies: { subnets },
  }) =>
    pipe([
      tap(() => {
        assert(Array.isArray(subnets));
      }),
      () => properties,
      defaultsDeep({
        Name: name,
        Type: "application",
        Scheme: "internet-facing",
        Tags: buildTags({ name, config }),
        Subnets: map((subnet) => getField(subnet, "SubnetId"))(subnets),
      }),
    ])();

  return {
    type: "LoadBalancer",
    spec,
    isInstanceUp,
    isUpById,
    isDownById,
    findId,
    getByName,
    getById,
    findName,
    create,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};
