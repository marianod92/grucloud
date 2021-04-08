const assert = require("assert");
const { map, pipe, tap, get, not } = require("rubico");
const { first, defaultsDeep, isEmpty } = require("rubico/x");
const { getField } = require("@grucloud/core/ProviderCommon");

const logger = require("@grucloud/core/logger")({
  prefix: "ELBRule",
});

const { retryCall } = require("@grucloud/core/Retry");
const { tos } = require("@grucloud/core/tos");
const { isUpByIdCore, isDownByIdCore } = require("@grucloud/core/Common");
const {
  ELBv2New,
  buildTags,
  shouldRetryOnException,
  findNameInTags,
} = require("../AwsCommon");

const findName = findNameInTags;
const findId = get("RuleArn");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html

exports.ELBRule = ({ spec, config }) => {
  const elb = ELBv2New(config);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#describeRules-property
  const getList = async () =>
    pipe([
      tap(() => {
        logger.info(`getList rule`);
      }),

      () => elb().describeRules({}),
      get("Rules"),
      tap((results) => {
        logger.debug(`getList rule result: ${tos(results)}`);
      }),
      (items = []) => ({
        total: items.length,
        items,
      }),
      tap(({ total }) => {
        logger.info(`getList: rule #total: ${total}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#describeRules-property
  const getByName = ({ name }) =>
    pipe([
      tap(() => {
        logger.info(`getByName ${name}`);
      }),
      () => ({ Names: [name] }),
      (params) => elb().describeRules(params),
      get("Rules"),
      first,
      tap((result) => {
        logger.debug(`getByName result: ${tos(result)}`);
      }),
    ])();

  const getById = ({ id }) => getByName({ name: id });

  const isInstanceUp = not(isEmpty);

  const isUpById = isUpByIdCore({ isInstanceUp, getById });
  const isDownById = isDownByIdCore({ getById });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createRule-property
  const create = async ({ name, payload }) =>
    pipe([
      tap(() => {
        logger.info(`create rule : ${name}`);
        logger.debug(`${tos(payload)}`);
      }),
      () => elb().createRule(payload),
      get("Rules"),
      first,
      tap(({ RuleArn }) =>
        retryCall({
          name: `rule isUpById: ${name}, RuleArn: ${RuleArn}`,
          fn: () => isUpById({ name, id: RuleArn }),
          config,
        })
      ),
      tap((result) => {
        logger.info(`created rule ${name}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#deleteRule-property
  const destroy = async ({ live }) =>
    pipe([
      () => ({ id: findId(live), name: findName(live) }),
      ({ id, name }) =>
        pipe([
          tap(() => {
            logger.info(`destroy rule ${JSON.stringify({ id })}`);
          }),
          () => ({
            RuleArn: id,
          }),
          (params) => elb().deleteRule(params),
          tap(() =>
            retryCall({
              name: `rule isDownById: ${id}`,
              fn: () => isDownById({ id, name }),
              config,
            })
          ),
          tap(() => {
            logger.info(`destroyed rule ${JSON.stringify({ id, name })}`);
          }),
        ])(),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createRule-property
  const configDefault = async ({
    name,
    properties,
    dependencies: { listener },
  }) =>
    pipe([
      tap(() => {
        assert(listener);
      }),
      () => properties,
      defaultsDeep({
        ListenerArn: getField(listener, "VpcId"),
        Tags: buildTags({ name, config }),
      }),
    ])();

  return {
    type: "Rule",
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
