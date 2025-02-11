const { OpenStackProvider } = require("@grucloud/provider-openstack");

exports.createStack = async ({ createProvider }) => {
  return {
    stacks: [
      {
        provider: createProvider(OpenStackProvider, {
          config: () => ({}),
        }),
      },
    ],
  };
};
