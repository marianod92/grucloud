// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.compute.makeVirtualMachine({
    name: "vm",
    properties: ({ config }) => ({
      properties: {
        hardwareProfile: {
          vmSize: "Standard_A2_v2",
        },
        storageProfile: {
          imageReference: {
            publisher: "Canonical",
            offer: "UbuntuServer",
            sku: "18.04-LTS",
            version: "latest",
          },
        },
        osProfile: {
          computerName: "myVM",
          adminUsername: "ops",
          linuxConfiguration: {
            disablePasswordAuthentication: false,
            provisionVMAgent: true,
          },
          allowExtensionOperations: true,
          adminPassword: process.env.VM_ADMIN_PASSWORD,
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup:
        resources.resourceManagement.ResourceGroup["resource-group"],
      networkInterface:
        resources.virtualNetworks.NetworkInterface["network-interface"],
    }),
  });
};

exports.createResources = createResources;
