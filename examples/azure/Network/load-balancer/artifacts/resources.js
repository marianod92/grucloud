// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "SshPublicKey",
    group: "Compute",
    properties: ({}) => ({
      name: "vmss_key",
      properties: {
        publicKey:
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCxXnVXbmiV4UWi7FTpR4mWx4pp\r\nM+9t/77vpw3rwtFW/n0V/2N6+j9yuCP5Mu2Pi7c+i8UQ3bkofHOpjsk4uAu0vr8a\r\nC0/LPiHFmlvtEfKvomoNtLO5iRnTjpsPFFqvfNQJKDsOnGoBO4pAF2xdr96V2Doh\r\nggxdj5ZyGh0EbQqm/XKrW1boOYkoqxGQKO8EZj4l0qWzRmpMw2NXQtqOO+pJ2IVJ\r\nhQOwnXk4G/v9yxogwuUGp4cFu02bix72LzRgzXLfsFkQqwRSg50xlNqsoBysTPhb\r\nibQhLNbSHqJtyXgoPNuEohREjuH1EjU0tFJrv285xd7xWRnVyG2w6+WWckr84uwO\r\no3456BJWD9PoQvXTJVMhR1iR8J8FesqZP1JwrV3CLS205z6z5GLgcKulVsCal9/G\r\nvnxXM1Ob9zAEFd6QBAuK0ejbOb1tmXgwnhlFAWr7Fq1TbAfk0ga6Cm5chEmI21ZK\r\nVO9j0Reu0NAONyrPs09y7u3r38CgGTyot/VS5mU= generated-by-azure\r\n",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-load-balancer",
    }),
  },
  {
    type: "VirtualMachineScaleSet",
    group: "Compute",
    properties: ({ getId }) => ({
      name: "vmss",
      sku: {
        name: "Standard_B1ls",
        tier: "Standard",
        capacity: 1,
      },
      properties: {
        singlePlacementGroup: false,
        upgradePolicy: {
          mode: "Manual",
        },
        scaleInPolicy: {
          rules: ["Default"],
        },
        virtualMachineProfile: {
          osProfile: {
            computerNamePrefix: "vmssfxzig",
            adminUsername: "azureuser",
            linuxConfiguration: {
              disablePasswordAuthentication: true,
              ssh: {
                publicKeys: [
                  {
                    path: "/home/azureuser/.ssh/authorized_keys",
                  },
                ],
              },
              provisionVMAgent: true,
            },
            allowExtensionOperations: true,
            adminPassword: process.env.RG_LOAD_BALANCER_VMSS_ADMIN_PASSWORD,
          },
          storageProfile: {
            osDisk: {
              osType: "Linux",
              createOption: "FromImage",
              caching: "ReadWrite",
              managedDisk: {
                storageAccountType: "Premium_LRS",
              },
              diskSizeGB: 30,
            },
            imageReference: {
              publisher: "canonical",
              offer: "0001-com-ubuntu-server-focal",
              sku: "20_04-lts",
              version: "latest",
            },
          },
          diagnosticsProfile: {
            bootDiagnostics: {
              enabled: true,
            },
          },
          networkProfile: {
            networkInterfaceConfigurations: [
              {
                name: "vnet-nic01",
                properties: {
                  primary: true,
                  enableAcceleratedNetworking: false,
                  networkSecurityGroup: {
                    id: getId({
                      type: "NetworkSecurityGroup",
                      group: "Network",
                      name: "rg-load-balancer::basicnsgvnet-nic01",
                    }),
                  },
                  dnsSettings: {
                    dnsServers: [],
                  },
                  enableIPForwarding: false,
                  ipConfigurations: [
                    {
                      name: "vnet-nic01-defaultIpConfiguration",
                      properties: {
                        primary: true,
                        subnet: {
                          id: getId({
                            type: "Subnet",
                            group: "Network",
                            name: "rg-load-balancer::vnet::default",
                          }),
                        },
                        privateIPAddressVersion: "IPv4",
                        loadBalancerBackendAddressPools: [
                          {
                            id: getId({
                              type: "LoadBalancerBackendAddressPool",
                              group: "Network",
                              name: "rg-load-balancer::load-balancer::backendpool",
                            }),
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        overprovision: false,
        doNotRunExtensionsOnOverprovisionedVMs: false,
        platformFaultDomainCount: 1,
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-load-balancer",
      sshPublicKeys: ["rg-load-balancer::vmss_key"],
      networkSecurityGroups: ["rg-load-balancer::basicnsgvnet-nic01"],
      subnets: ["rg-load-balancer::vnet::default"],
      loadBalancerBackendAddressPools: [
        "rg-load-balancer::load-balancer::backendpool",
      ],
    }),
  },
  {
    type: "LoadBalancer",
    group: "Network",
    properties: ({ getId }) => ({
      name: "load-balancer",
      sku: {
        name: "Standard",
        tier: "Regional",
      },
      properties: {
        frontendIPConfigurations: [
          {
            name: "frontend",
            properties: {
              publicIPAddress: {
                id: getId({
                  type: "PublicIPAddress",
                  group: "Network",
                  name: "rg-load-balancer::ip",
                }),
              },
            },
          },
        ],
        loadBalancingRules: [],
        probes: [],
        inboundNatRules: [],
        outboundRules: [],
        inboundNatPools: [],
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-load-balancer",
      publicIPAddresses: ["rg-load-balancer::ip"],
    }),
  },
  {
    type: "LoadBalancerBackendAddressPool",
    group: "Network",
    properties: ({}) => ({
      name: "backendpool",
      properties: {},
    }),
    dependencies: () => ({
      resourceGroup: "rg-load-balancer",
      loadBalancer: "rg-load-balancer::load-balancer",
    }),
  },
  {
    type: "NetworkSecurityGroup",
    group: "Network",
    properties: ({}) => ({
      name: "basicnsgvnet-nic01",
      properties: {
        securityRules: [],
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-load-balancer",
    }),
  },
  {
    type: "PublicIPAddress",
    group: "Network",
    properties: ({}) => ({
      name: "ip",
      sku: {
        name: "Standard",
      },
      properties: {
        publicIPAllocationMethod: "Static",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-load-balancer",
    }),
  },
  {
    type: "Subnet",
    group: "Network",
    properties: ({}) => ({
      name: "default",
      properties: {
        addressPrefix: "10.0.0.0/16",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-load-balancer",
      virtualNetwork: "rg-load-balancer::vnet",
    }),
  },
  {
    type: "VirtualNetwork",
    group: "Network",
    properties: ({}) => ({
      name: "vnet",
      properties: {
        addressSpace: {
          addressPrefixes: ["10.0.0.0/16"],
        },
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-load-balancer",
    }),
  },
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-load-balancer",
    }),
  },
];
