const assert = require("assert");
const { pipe, tap, get } = require("rubico");
const { defaultsDeep } = require("rubico/x");

const { getByNameCore } = require("@grucloud/core/Common");
const { getField } = require("@grucloud/core/ProviderCommon");
const { AwsClient } = require("../AwsClient");
const {
  createAPIGateway,
  findDependenciesRestApi,
  ignoreErrorCodes,
} = require("./ApiGatewayCommon");

const findId = get("live.id");
const findName = get("live.name");
const pickId = ({ restApiId, id }) => ({ restApiId, authorizerId: id });

exports.Authorizer = ({ spec, config }) => {
  const apiGateway = createAPIGateway(config);
  const client = AwsClient({ spec, config })(apiGateway);

  const findDependencies = ({ live, lives }) => [
    findDependenciesRestApi({ live }),
    // {
    //   type: "Function",
    //   group: "Lambda",
    //   ids: [live.providerARNs],
    // },
    {
      type: "UserPool",
      group: "Cognito",
      ids: [live.providerARNs],
    },
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getAuthorizer-property
  const getById = client.getById({
    pickId,
    method: "getAuthorizer",
    ignoreErrorCodes,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getAuthorizers-property
  //TODO test
  const getList = client.getListWithParent({
    parent: { type: "RestApi", group: "APIGateway" },
    pickKey: pipe([({ id }) => ({ restApiId: id })]),
    method: "getAuthorizers",
    getParam: "items",
    config,
    decorate: ({ lives, parent: { id: restApiId, Tags } }) =>
      defaultsDeep({ restApiId, Tags }),
  });

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#createAuthorizer-property
  const configDefault = ({
    name,
    namespace,
    properties,
    dependencies: { restApi },
  }) =>
    pipe([
      tap(() => {
        assert(restApi, "missing 'restApi' dependency");
      }),
      () => properties,
      defaultsDeep({
        name,
        restApiId: getField(restApi, "id"),
      }),
    ])();

  const create = client.create({
    method: "createAuthorizer",
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#updateModel-property
  const update = client.update({
    pickId,
    method: "updateAuthorizer",
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#deleteAuthorizer-property
  const destroy = client.destroy({
    pickId,
    method: "deleteAuthorizer",
    getById,
    ignoreErrorCodes,
  });

  return {
    spec,
    findName,
    findId,
    getById,
    create,
    update,
    destroy,
    getByName,
    getList,
    configDefault,
    findDependencies,
  };
};
