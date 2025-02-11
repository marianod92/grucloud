// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "VirtualMachine",
    group: "Compute",
    properties: ({ getId }) => ({
      name: "vm",
      properties: {
        hardwareProfile: {
          vmSize: "Standard_A1_v2",
        },
        osProfile: {
          computerName: "myVM",
          adminUsername: "ops",
          adminPassword: process.env.RG_VM_VM_ADMIN_PASSWORD,
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
    dependencies: () => ({
      resourceGroup: "rg-vm",
      networkInterfaces: ["rg-vm::network-interface"],
    }),
  },
  {
    type: "NetworkInterface",
    group: "Network",
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
    dependencies: () => ({
      resourceGroup: "rg-vm",
      virtualNetwork: "rg-vm::virtual-network",
      publicIpAddress: "rg-vm::ip",
      securityGroup: "rg-vm::security-group",
      subnet: "rg-vm::virtual-network::subnet",
    }),
  },
  {
    type: "NetworkSecurityGroup",
    group: "Network",
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
    dependencies: () => ({
      resourceGroup: "rg-vm",
    }),
  },
  {
    type: "PublicIPAddress",
    group: "Network",
    properties: ({}) => ({
      name: "ip",
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm",
    }),
  },
  {
    type: "Subnet",
    group: "Network",
    properties: ({}) => ({
      name: "subnet",
      properties: {
        addressPrefix: "10.0.0.0/24",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm",
      virtualNetwork: "rg-vm::virtual-network",
    }),
  },
  {
    type: "VirtualNetwork",
    group: "Network",
    properties: ({}) => ({
      name: "virtual-network",
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-vm",
    }),
  },
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-vm",
    }),
  },
];
