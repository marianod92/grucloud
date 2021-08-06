// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  const { config } = provider;

  provider.s3.makeBucket({
    name: config.s3.Bucket.grucloudBucket_0.name,
  });

  provider.s3.makeBucket({
    name: config.s3.Bucket.grucloudBucket_1.name,
  });

  provider.s3.makeBucket({
    name: config.s3.Bucket.grucloudSimpleBucket.name,
    namespace: "My namespace",
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