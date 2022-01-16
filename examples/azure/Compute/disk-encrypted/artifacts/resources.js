// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Network.makeSubnet({
    properties: ({}) => ({
      name: "default",
      properties: {
        addressPrefix: "10.0.0.0/24",
        serviceEndpoints: [
          {
            service: "Microsoft.KeyVault",
            locations: ["*"],
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-disk-encrypted"],
      virtualNetwork: resources.Network.VirtualNetwork["vnet-vault"],
    }),
  });

  provider.Network.makeVirtualNetwork({
    properties: ({}) => ({
      name: "vnet-vault",
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-disk-encrypted"],
    }),
  });

  provider.Resources.makeResourceGroup({
    properties: ({}) => ({
      name: "rg-disk-encrypted",
    }),
  });
};

exports.createResources = createResources;
