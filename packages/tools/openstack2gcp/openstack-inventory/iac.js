const assert = require("assert");
const { OpenStackProvider } = require("@grucloud/provider-openstack");

const createResources = async ({ provider }) => {
  return {};
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(OpenStackProvider, {
    config: require("./config"),
  });
  const resources = await createResources({ provider });

  return {
    provider,
    resources,
  };
};
