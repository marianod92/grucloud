const assert = require("assert");
const { pipe, tap, get, eq, pick } = require("rubico");
const { defaultsDeep } = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");
const { getByNameCore } = require("@grucloud/core/Common");
const { AwsClient } = require("../AwsClient");
const {
  createAppSync,
  findDependenciesGraphqlApi,
  ignoreErrorCodes,
  tagResource,
  untagResource,
} = require("./AppSyncCommon");

const findId = get("live.dataSourceArn");
const findName = get("live.name");

const pickId = pipe([
  tap(({ apiId }) => {
    assert(apiId);
  }),
  pick(["apiId", "name"]),
]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AppSync.html
exports.AppSyncDataSource = ({ spec, config }) => {
  const appSync = createAppSync(config);

  const client = AwsClient({ spec, config })(appSync);

  // findDependencies for AppSyncDataSource
  const findDependencies = ({ live, lives }) => [
    findDependenciesGraphqlApi({ live, lives, config }),
    {
      type: "Role",
      group: "IAM",
      ids: [live.serviceRoleArn],
    },
    {
      type: "Function",
      group: "Lambda",
      ids: [get("lambdaConfig.lambdaFunctionArn")(live)],
    },
    {
      type: "DBCluster",
      group: "RDS",
      ids: [
        get(
          "relationalDatabaseConfig.rdsHttpEndpointConfig.dbClusterIdentifier"
        )(live),
      ],
    },
    {
      type: "Table",
      group: "DynamoDB",
      ids: [
        pipe([
          () => live,
          get("dynamodbConfig.tableName"),
          (name) =>
            lives.getByName({
              name,
              type: "Table",
              group: "DynamoDB",
              providerName: config.providerName,
            }),
          get("id"),
        ])(),
      ],
    },
  ];

  const findNamespace = pipe([() => ""]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AppSync.html#listDataSources-property
  const getList = client.getListWithParent({
    parent: { type: "GraphqlApi", group: "AppSync" },
    pickKey: pick(["apiId"]),
    method: "listDataSources",
    getParam: "dataSources",
    config,
    decorate: ({ lives, parent: { apiId } }) => pipe([defaultsDeep({ apiId })]),
  });

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AppSync.html#getDataSource-property
  const getById = client.getById({
    pickId,
    method: "getDataSource",
    getField: "dataSource",
    ignoreErrorCodes,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AppSync.html#createDataSource-property
  const create = client.create({
    pickCreated: ({ payload: { apiId } }) =>
      pipe([get("dataSource"), defaultsDeep({ apiId })]),
    method: "createDataSource",
    getById,
  });

  const destroy = client.destroy({
    pickId,
    method: "deleteDataSource",
    getById,
    ignoreErrorCodes,
  });

  const configDefault = ({
    name,
    namespace,
    properties,
    dependencies: { graphqlApi, serviceRole, lambdaFunction },
  }) =>
    pipe([
      tap(() => {
        assert(graphqlApi, "missing 'graphqlApi' dependency");
        assert(serviceRole, "missing 'serviceRole' dependency");
      }),
      () => properties,
      tap.if(eq(get("type"), "AWS_LAMBDA"), () => {
        assert(lambdaFunction, "missing 'lambdaFunction'");
      }),
      defaultsDeep({
        name,
        apiId: getField(graphqlApi, "apiId"),
        serviceRoleArn: getField(serviceRole, "Arn"),
        ...(lambdaFunction && {
          lambdaConfig: {
            lambdaFunctionArn: getField(
              lambdaFunction,
              "Configuration.FunctionArn"
            ),
          },
        }),
      }),
    ])();

  return {
    spec,
    findId,
    findNamespace,
    findDependencies,
    getByName,
    getById,
    findName,
    create,
    destroy,
    getList,
    configDefault,
    tagResource: tagResource({ appSync }),
    untagResource: untagResource({ appSync }),
  };
};
