// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  const { config } = provider;

  provider.s3.makeBucket({
    name: config.s3.Bucket.grucloudSimpleBucket.name,
    namespace: "My namespace",
    properties: () => config.s3.Bucket.grucloudSimpleBucket.properties,
  });

  provider.s3.makeObject({
    name: config.s3.Object.grucloudSimpleFileTest.name,
    namespace: "My namespace",
    dependencies: ({ resources }) => ({
      iamGroups: [resources.s3.Bucket.grucloudSimpleBucket],
    }),
    properties: () => config.s3.Object.grucloudSimpleFileTest.properties,
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
