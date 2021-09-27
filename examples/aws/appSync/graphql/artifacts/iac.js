// Generated by aws2gc
const { get } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.IAM.makePolicy({
    name: get("config.IAM.Policy.appsyncDsDdbKq4ygeMyModelTypeDemoTable.name"),
    properties: get(
      "config.IAM.Policy.appsyncDsDdbKq4ygeMyModelTypeDemoTable.properties"
    ),
  });

  provider.IAM.makePolicy({
    name: get("config.IAM.Policy.appsyncDsDdbM66htuMyModelTypeTable.name"),
    properties: get(
      "config.IAM.Policy.appsyncDsDdbM66htuMyModelTypeTable.properties"
    ),
  });

  provider.IAM.makeRole({
    name: get("config.IAM.Role.appsyncDsDdbKq4ygeMyModelTypeDemoTable.name"),
    properties: get(
      "config.IAM.Role.appsyncDsDdbKq4ygeMyModelTypeDemoTable.properties"
    ),
    dependencies: ({ resources }) => ({
      policies: [resources.IAM.Policy.appsyncDsDdbKq4ygeMyModelTypeDemoTable],
    }),
  });

  provider.IAM.makeRole({
    name: get("config.IAM.Role.appsyncDsDdbM66htuMyModelTypeTable.name"),
    properties: get(
      "config.IAM.Role.appsyncDsDdbM66htuMyModelTypeTable.properties"
    ),
    dependencies: ({ resources }) => ({
      policies: [resources.IAM.Policy.appsyncDsDdbM66htuMyModelTypeTable],
    }),
  });

  provider.DynamoDB.makeTable({
    name: get("config.DynamoDB.Table.myModelTypeTable.name"),
    properties: get("config.DynamoDB.Table.myModelTypeTable.properties"),
  });

  provider.AppSync.makeGraphqlApi({
    name: get("config.AppSync.GraphqlApi.myAppSyncApp.name"),
    properties: get("config.AppSync.GraphqlApi.myAppSyncApp.properties"),
  });

  provider.AppSync.makeApiKey({
    name: get("config.AppSync.ApiKey.da2Kyhuzrhyvbcadm6geay6gk7eqm.name"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeApiKey({
    name: get("config.AppSync.ApiKey.da2Wbuvlxl5cfapbifytstbzthsxy.name"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.createMyModelTypeInput.name"),
    properties: get("config.AppSync.Type.createMyModelTypeInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.createPostInput.name"),
    properties: get("config.AppSync.Type.createPostInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.deleteMyModelTypeInput.name"),
    properties: get("config.AppSync.Type.deleteMyModelTypeInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.mutation.name"),
    properties: get("config.AppSync.Type.mutation.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.myModelType.name"),
    properties: get("config.AppSync.Type.myModelType.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.myModelTypeConnection.name"),
    properties: get("config.AppSync.Type.myModelTypeConnection.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.query.name"),
    properties: get("config.AppSync.Type.query.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.subscription.name"),
    properties: get("config.AppSync.Type.subscription.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.tableBooleanFilterInput.name"),
    properties: get("config.AppSync.Type.tableBooleanFilterInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.tableFloatFilterInput.name"),
    properties: get("config.AppSync.Type.tableFloatFilterInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.tableIdFilterInput.name"),
    properties: get("config.AppSync.Type.tableIdFilterInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.tableIntFilterInput.name"),
    properties: get("config.AppSync.Type.tableIntFilterInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.tableMyModelTypeFilterInput.name"),
    properties: get(
      "config.AppSync.Type.tableMyModelTypeFilterInput.properties"
    ),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.tableStringFilterInput.name"),
    properties: get("config.AppSync.Type.tableStringFilterInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeType({
    name: get("config.AppSync.Type.updateMyModelTypeInput.name"),
    properties: get("config.AppSync.Type.updateMyModelTypeInput.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });

  provider.AppSync.makeResolver({
    name: get("config.AppSync.Resolver.mutationCreateMyModelType.name"),
    properties: get(
      "config.AppSync.Resolver.mutationCreateMyModelType.properties"
    ),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
      dataSource: resources.AppSync.DataSource.myModelTypeTable,
    }),
  });

  provider.AppSync.makeResolver({
    name: get("config.AppSync.Resolver.mutationDeleteMyModelType.name"),
    properties: get(
      "config.AppSync.Resolver.mutationDeleteMyModelType.properties"
    ),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
      dataSource: resources.AppSync.DataSource.myModelTypeTable,
    }),
  });

  provider.AppSync.makeResolver({
    name: get("config.AppSync.Resolver.mutationUpdateMyModelType.name"),
    properties: get(
      "config.AppSync.Resolver.mutationUpdateMyModelType.properties"
    ),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
      dataSource: resources.AppSync.DataSource.myModelTypeTable,
    }),
  });

  provider.AppSync.makeResolver({
    name: get("config.AppSync.Resolver.queryGetMyModelType.name"),
    properties: get("config.AppSync.Resolver.queryGetMyModelType.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
      dataSource: resources.AppSync.DataSource.myModelTypeTable,
    }),
  });

  provider.AppSync.makeResolver({
    name: get("config.AppSync.Resolver.queryListMyModelTypes.name"),
    properties: get("config.AppSync.Resolver.queryListMyModelTypes.properties"),
    dependencies: ({ resources }) => ({
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
      dataSource: resources.AppSync.DataSource.myModelTypeTable,
    }),
  });

  provider.AppSync.makeDataSource({
    name: get("config.AppSync.DataSource.myModelTypeTable.name"),
    properties: get("config.AppSync.DataSource.myModelTypeTable.properties"),
    dependencies: ({ resources }) => ({
      serviceRole: resources.IAM.Role.appsyncDsDdbM66htuMyModelTypeTable,
      graphqlApi: resources.AppSync.GraphqlApi.myAppSyncApp,
    }),
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AwsProvider, { config: require("./config") });
  createResources({
    provider,
  });

  return {
    provider,
  };
};
