// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Compute.makeVirtualMachine({
    name: "rg-vm::vm",
    properties: ({ getId }) => ({
      properties: {
        hardwareProfile: {
          vmSize: "Standard_A2_v2",
        },
        osProfile: {
          computerName: "myVM",
          adminUsername: "ops",
          adminPassword: process.env.RESOURCE_GROUP_VM_ADMIN_PASSWORD,
        },
        storageProfile: {
          imageReference: {
            publisher: "Canonical",
            offer: "UbuntuServer",
            sku: "18.04-LTS",
            version: "latest",
          },
          osDisk: {
            osType: "Linux",
            name: "vm_disk1_d3f89462e7604d6ca7a0d7fde3cfbe6c",
            createOption: "FromImage",
            caching: "ReadWrite",
            managedDisk: {
              storageAccountType: "Standard_LRS",
            },
            deleteOption: "Detach",
            diskSizeGB: 30,
          },
        },
        networkProfile: {
          networkInterfaces: [
            {
              id: getId({
                type: "NetworkInterface",
                group: "Network",
                name: "rg-vm::network-interface",
              }),
            },
          ],
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-vm"],
      networkInterfaces: [
        resources.Network.NetworkInterface["rg-vm::network-interface"],
      ],
    }),
  });
};

exports.createResources = createResources;
