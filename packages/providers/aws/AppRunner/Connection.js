const assert = require("assert");
const { map, pipe, tap, get, pick } = require("rubico");
const { defaultsDeep } = require("rubico/x");

const { buildTags, findNamespaceInTags } = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");
const {
  createAppRunner,
  ignoreErrorCodes,
  tagResource,
  untagResource,
} = require("./AppRunnerCommon");

const findName = get("live.ConnectionName");
const findId = get("live.ConnectionArn");
const pickId = pick(["ConnectionName"]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ACM.html
exports.AppRunnerConnection = ({ spec, config }) => {
  const appRunner = createAppRunner(config);
  const client = AwsClient({ spec, config })(appRunner);

  const findDependencies = ({ live, lives }) => [];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AppRunner.html#describeService-property
  const getById = client.getById({
    pickId,
    method: "listConnections",
    getParam: "ConnectionSummaryList",
    ignoreErrorCodes,
  });

  const getByName = pipe([({ name }) => ({ ConnectionName: name }), getById]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AppRunner.html#listConnections-property
  const getList = client.getList({
    method: "listConnections",
    getParam: "ConnectionSummaryList",
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AppRunner.html#createConnection-property
  const create = client.create({
    method: "createConnection",
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AppRunner.html#deleteConnection-property
  const destroy = client.destroy({
    pickId: pick(["ConnectionArn"]),
    method: "deleteConnection",
    getById,
    ignoreErrorCodes,
  });

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies,
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        ConnectionName: name,
        Tags: buildTags({ name, namespace, config, UserTags: Tags }),
      }),
    ])();

  return {
    type: "Connection",
    spec,
    getById,
    findId,
    findDependencies,
    findNamespace: findNamespaceInTags(config),
    getByName,
    getById,
    findName,
    create,
    destroy,
    getList,
    configDefault,
    tagResource: tagResource({ appRunner }),
    untagResource: untagResource({ appRunner }),
  };
};
