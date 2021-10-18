// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.APIGateway.makeAccount({
    name: "default",
    dependencies: ({ resources }) => ({
      cloudwatchRole: resources.IAM.Role.roleApiGatewayCloudWatch,
    }),
  });

  provider.APIGateway.makeRestApi({
    name: "PetStore",
    properties: ({ config }) => ({
      apiKeySource: "HEADER",
      endpointConfiguration: {
        types: ["REGIONAL"],
      },
      schemaFile: "PetStore.oas30.json",
      deployment: {
        stageName: "dev",
      },
    }),
  });

  provider.APIGateway.makeStage({
    name: "dev",
    properties: ({ config }) => ({
      description: "dev",
      methodSettings: {
        "*/*": {
          metricsEnabled: false,
          dataTraceEnabled: false,
          throttlingBurstLimit: 5000,
          throttlingRateLimit: 10000,
          cachingEnabled: false,
          cacheTtlInSeconds: 300,
          cacheDataEncrypted: false,
          requireAuthorizationForCacheControl: true,
          unauthorizedCacheControlHeaderStrategy:
            "SUCCEED_WITH_RESPONSE_HEADER",
        },
      },
      cacheClusterEnabled: false,
      cacheClusterSize: "0.5",
      tracingEnabled: false,
    }),
    dependencies: ({ resources }) => ({
      restApi: resources.APIGateway.RestApi.petStore,
    }),
  });

  provider.APIGateway.makeStage({
    name: "prod",
    properties: ({ config }) => ({
      description: "prod",
      cacheClusterEnabled: false,
      tracingEnabled: false,
    }),
    dependencies: ({ resources }) => ({
      restApi: resources.APIGateway.RestApi.petStore,
    }),
  });

  provider.CloudWatchLogs.makeLogGroup({
    name: "restapi",
  });

  provider.IAM.makeRole({
    name: "roleApiGatewayCloudWatch",
    properties: ({ config }) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: "apigateway.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      policies: [resources.IAM.Policy.amazonApiGatewayPushToCloudWatchLogs],
    }),
  });

  provider.IAM.usePolicy({
    name: "AmazonAPIGatewayPushToCloudWatchLogs",
    properties: ({ config }) => ({
      Arn: "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs",
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