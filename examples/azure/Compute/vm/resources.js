// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Compute.makeVirtualMachine({
    properties: ({ getId }) => ({
      name: "vm",
      properties: {
        hardwareProfile: {
          vmSize: "Standard_A1_v2",
        },
        osProfile: {
          computerName: "myVM",
          adminUsername: "ops",
          adminPassword: process.env.VM_ADMIN_PASSWORD,
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
                name: "network-interface",
              }),
            },
          ],
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["resource-group"],
      networkInterfaces: [
        resources.Network.NetworkInterface["network-interface"],
      ],
    }),
  });

  provider.Network.makeNetworkInterface({
    properties: ({}) => ({
      name: "network-interface",
      properties: {
        ipConfigurations: [
          {
            name: "ipconfig",
            properties: {
              privateIPAllocationMethod: "Dynamic",
            },
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["resource-group"],
      virtualNetwork: resources.Network.VirtualNetwork["virtual-network"],
      publicIpAddress: resources.Network.PublicIPAddress["ip"],
      securityGroup: resources.Network.NetworkSecurityGroup["security-group"],
      subnet: resources.Network.Subnet["subnet"],
    }),
  });

  provider.Network.makeNetworkSecurityGroup({
    properties: ({}) => ({
      name: "security-group",
      properties: {
        securityRules: [
          {
            name: "SSH",
            properties: {
              protocol: "Tcp",
              sourcePortRange: "*",
              destinationPortRange: "22",
              sourceAddressPrefix: "*",
              destinationAddressPrefix: "*",
              access: "Allow",
              priority: 1000,
              direction: "Inbound",
            },
          },
          {
            name: "ICMP",
            properties: {
              protocol: "Icmp",
              sourcePortRange: "*",
              destinationPortRange: "*",
              sourceAddressPrefix: "*",
              destinationAddressPrefix: "*",
              access: "Allow",
              priority: 1001,
              direction: "Inbound",
            },
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["resource-group"],
    }),
  });

  provider.Network.makePublicIPAddress({
    properties: ({}) => ({
      name: "ip",
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["resource-group"],
    }),
  });

  provider.Network.makeSubnet({
    properties: ({}) => ({
      name: "subnet",
      properties: {
        addressPrefix: "10.0.0.0/24",
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["resource-group"],
      virtualNetwork: resources.Network.VirtualNetwork["virtual-network"],
    }),
  });

  provider.Network.makeVirtualNetwork({
    properties: ({}) => ({
      name: "virtual-network",
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["resource-group"],
    }),
  });

  provider.Resources.makeResourceGroup({
    properties: ({}) => ({
      name: "resource-group",
    }),
  });
};

exports.createResources = createResources;
