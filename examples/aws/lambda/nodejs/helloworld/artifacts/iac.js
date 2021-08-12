// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  const { config } = provider;

  provider.iam.makePolicy({
    name: config.iam.Policy.lambdaPolicy.name,
    properties: () => config.iam.Policy.lambdaPolicy.properties,
  });

  provider.iam.makeRole({
    name: config.iam.Role.lambdaRole.name,
    dependencies: ({ resources }) => ({
      policies: [resources.iam.Policy.lambdaPolicy],
    }),
    properties: () => config.iam.Role.lambdaRole.properties,
  });

  provider.lambda.makeLayer({
    name: config.lambda.Layer.lambdaLayer.name,
    properties: () => config.lambda.Layer.lambdaLayer.properties,
  });

  provider.lambda.makeFunction({
    name: config.lambda.Function.lambdaHelloWorld.name,
    dependencies: ({ resources }) => ({
      layers: [resources.lambda.Layer.lambdaLayer],
      role: resources.iam.Role.lambdaRole,
    }),
    properties: () => config.lambda.Function.lambdaHelloWorld.properties,
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
