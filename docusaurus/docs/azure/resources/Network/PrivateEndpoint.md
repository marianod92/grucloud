---
id: PrivateEndpoint
title: PrivateEndpoint
---
Provides a **PrivateEndpoint** from the **Network** group
## Examples
### Create private endpoint
```js
provider.Network.makePrivateEndpoint({
  name: "myPrivateEndpoint",
  properties: () => ({ type: "EdgeZone", name: "edgeZone0" }),
  dependencies: ({ resources }) => ({
    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],
    virtualMachine: resources.Compute.VirtualMachine["myVirtualMachine"],
    dscpConfiguration:
      resources.Network.DscpConfiguration["myDscpConfiguration"],
    natGateway: resources.Network.NatGateway["myNatGateway"],
    workspace: resources.OperationalInsights.Workspace["myWorkspace"],
    ddosCustomPolicy: resources.Network.DdosCustomPolicy["myDdosCustomPolicy"],
    publicIpPrefix: resources.Network.PublicIPPrefix["myPublicIPPrefix"],
    privateLinkService:
      resources.Network.PrivateLinkService["myPrivateLinkService"],
  }),
});

```

### Create private endpoint with manual approval connection
```js
provider.Network.makePrivateEndpoint({
  name: "myPrivateEndpoint",
  properties: () => ({
    location: "eastus",
    properties: {
      manualPrivateLinkServiceConnections: [
        {
          properties: {
            privateLinkServiceId:
              "/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/privateLinkServices/testPls",
            groupIds: ["groupIdFromResource"],
            requestMessage: "Please manually approve my connection.",
          },
        },
      ],
      subnet: {
        id: "/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet",
      },
      ipConfigurations: [
        {
          name: "pestaticconfig",
          properties: {
            groupId: "file",
            memberName: "file",
            privateIPAddress: "192.168.0.5",
          },
        },
      ],
      customNetworkInterfaceName: "testPeNic",
    },
  }),
  dependencies: ({ resources }) => ({
    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],
    virtualMachine: resources.Compute.VirtualMachine["myVirtualMachine"],
    dscpConfiguration:
      resources.Network.DscpConfiguration["myDscpConfiguration"],
    natGateway: resources.Network.NatGateway["myNatGateway"],
    workspace: resources.OperationalInsights.Workspace["myWorkspace"],
    ddosCustomPolicy: resources.Network.DdosCustomPolicy["myDdosCustomPolicy"],
    publicIpPrefix: resources.Network.PublicIPPrefix["myPublicIPPrefix"],
    privateLinkService:
      resources.Network.PrivateLinkService["myPrivateLinkService"],
  }),
});

```

### Create private endpoint with application security groups
```js
provider.Network.makePrivateEndpoint({
  name: "myPrivateEndpoint",
  properties: () => ({ type: "EdgeZone", name: "edgeZone0" }),
  dependencies: ({ resources }) => ({
    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],
    virtualMachine: resources.Compute.VirtualMachine["myVirtualMachine"],
    dscpConfiguration:
      resources.Network.DscpConfiguration["myDscpConfiguration"],
    natGateway: resources.Network.NatGateway["myNatGateway"],
    workspace: resources.OperationalInsights.Workspace["myWorkspace"],
    ddosCustomPolicy: resources.Network.DdosCustomPolicy["myDdosCustomPolicy"],
    publicIpPrefix: resources.Network.PublicIPPrefix["myPublicIPPrefix"],
    privateLinkService:
      resources.Network.PrivateLinkService["myPrivateLinkService"],
  }),
});

```
## Dependencies
- [ResourceGroup](../Resources/ResourceGroup.md)
- [VirtualMachine](../Compute/VirtualMachine.md)
- [DscpConfiguration](../Network/DscpConfiguration.md)
- [NatGateway](../Network/NatGateway.md)
- [Workspace](../OperationalInsights/Workspace.md)
- [DdosCustomPolicy](../Network/DdosCustomPolicy.md)
- [PublicIPPrefix](../Network/PublicIPPrefix.md)
- [PrivateLinkService](../Network/PrivateLinkService.md)
## Swagger Schema
```js
<ref *1> {
  properties: <ref *2> {
    extendedLocation: {
      description: 'The extended location of the load balancer.',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the extended location.'
        },
        type: {
          description: 'The type of the extended location.',
          type: 'string',
          enum: [ 'EdgeZone' ],
          'x-ms-enum': { name: 'ExtendedLocationTypes', modelAsString: true }
        }
      }
    },
    properties: {
      'x-ms-client-flatten': true,
      description: 'Properties of the private endpoint.',
      properties: {
        subnet: {
          description: 'The ID of the subnet from which the private IP will be allocated.',
          properties: {
            properties: {
              'x-ms-client-flatten': true,
              description: 'Properties of the subnet.',
              properties: {
                addressPrefix: {
                  type: 'string',
                  description: 'The address prefix for the subnet.'
                },
                addressPrefixes: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'List of address prefixes for the subnet.'
                },
                networkSecurityGroup: {
                  description: 'The reference to the NetworkSecurityGroup resource.',
                  properties: {
                    properties: {
                      'x-ms-client-flatten': true,
                      description: 'Properties of the network security group.',
                      properties: [Object]
                    },
                    etag: {
                      readOnly: true,
                      type: 'string',
                      description: 'A unique read-only string that changes whenever the resource is updated.'
                    }
                  },
                  allOf: [
                    {
                      properties: [Object],
                      description: 'Common resource representation.',
                      'x-ms-azure-resource': true
                    }
                  ]
                },
                routeTable: {
                  description: 'The reference to the RouteTable resource.',
                  properties: {
                    properties: {
                      'x-ms-client-flatten': true,
                      description: 'Properties of the route table.',
                      properties: [Object]
                    },
                    etag: {
                      readOnly: true,
                      type: 'string',
                      description: 'A unique read-only string that changes whenever the resource is updated.'
                    }
                  },
                  allOf: [
                    {
                      properties: [Object],
                      description: 'Common resource representation.',
                      'x-ms-azure-resource': true
                    }
                  ]
                },
                natGateway: {
                  properties: {
                    id: { type: 'string', description: 'Resource ID.' }
                  },
                  description: 'Reference to another subresource.',
                  'x-ms-azure-resource': true
                },
                serviceEndpoints: {
                  type: 'array',
                  items: {
                    properties: {
                      service: [Object],
                      locations: [Object],
                      provisioningState: [Object]
                    },
                    description: 'The service endpoint properties.'
                  },
                  description: 'An array of service endpoints.'
                },
                serviceEndpointPolicies: {
                  type: 'array',
                  items: {
                    properties: {
                      properties: [Object],
                      etag: [Object],
                      kind: [Object]
                    },
                    allOf: [ [Object] ],
                    description: 'Service End point policy resource.'
                  },
                  description: 'An array of service endpoint policies.'
                },
                privateEndpoints: {
                  readOnly: true,
                  type: 'array',
                  items: [Circular *1],
                  description: 'An array of references to private endpoints.'
                },
                ipConfigurations: {
                  readOnly: true,
                  type: 'array',
                  items: {
                    properties: {
                      properties: [Object],
                      name: [Object],
                      etag: [Object]
                    },
                    allOf: [ [Object] ],
                    description: 'IP configuration.'
                  },
                  description: 'An array of references to the network interface IP configurations using subnet.'
                },
                ipConfigurationProfiles: {
                  readOnly: true,
                  type: 'array',
                  items: {
                    properties: {
                      properties: [Object],
                      name: [Object],
                      type: [Object],
                      etag: [Object]
                    },
                    allOf: [ [Object] ],
                    description: 'IP configuration profile child resource.'
                  },
                  description: 'Array of IP configuration profiles which reference this subnet.'
                },
                ipAllocations: {
                  type: 'array',
                  items: {
                    properties: { id: [Object] },
                    description: 'Reference to another subresource.',
                    'x-ms-azure-resource': true
                  },
                  description: 'Array of IpAllocation which reference this subnet.'
                },
                resourceNavigationLinks: {
                  readOnly: true,
                  type: 'array',
                  items: {
                    properties: {
                      properties: [Object],
                      name: [Object],
                      id: [Object],
                      etag: [Object],
                      type: [Object]
                    },
                    allOf: [ [Object] ],
                    description: 'ResourceNavigationLink resource.'
                  },
                  description: 'An array of references to the external resources using subnet.'
                },
                serviceAssociationLinks: {
                  readOnly: true,
                  type: 'array',
                  items: {
                    properties: {
                      properties: [Object],
                      name: [Object],
                      etag: [Object],
                      type: [Object]
                    },
                    allOf: [ [Object] ],
                    description: 'ServiceAssociationLink resource.'
                  },
                  description: 'An array of references to services injecting into this subnet.'
                },
                delegations: {
                  type: 'array',
                  items: {
                    properties: {
                      properties: [Object],
                      name: [Object],
                      etag: [Object],
                      type: [Object]
                    },
                    allOf: [ [Object] ],
                    description: 'Details the service to which the subnet is delegated.'
                  },
                  description: 'An array of references to the delegations on the subnet.'
                },
                purpose: {
                  type: 'string',
                  readOnly: true,
                  description: 'A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.'
                },
                provisioningState: {
                  readOnly: true,
                  description: 'The provisioning state of the subnet resource.',
                  type: 'string',
                  enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                  'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                },
                privateEndpointNetworkPolicies: {
                  type: 'string',
                  default: 'Enabled',
                  description: 'Enable or Disable apply network policies on private end point in the subnet.',
                  enum: [ 'Enabled', 'Disabled' ],
                  'x-ms-enum': {
                    name: 'VirtualNetworkPrivateEndpointNetworkPolicies',
                    modelAsString: true
                  }
                },
                privateLinkServiceNetworkPolicies: {
                  type: 'string',
                  default: 'Enabled',
                  description: 'Enable or Disable apply network policies on private link service in the subnet.',
                  enum: [ 'Enabled', 'Disabled' ],
                  'x-ms-enum': {
                    name: 'VirtualNetworkPrivateLinkServiceNetworkPolicies',
                    modelAsString: true
                  }
                },
                applicationGatewayIpConfigurations: {
                  type: 'array',
                  items: {
                    properties: {
                      properties: [Object],
                      name: [Object],
                      etag: [Object],
                      type: [Object]
                    },
                    allOf: [ [Object] ],
                    description: 'IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.'
                  },
                  description: 'Application gateway IP configurations of virtual network resource.'
                }
              }
            },
            name: {
              type: 'string',
              description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'
            },
            etag: {
              readOnly: true,
              type: 'string',
              description: 'A unique read-only string that changes whenever the resource is updated.'
            },
            type: { type: 'string', description: 'Resource type.' }
          },
          allOf: [
            {
              properties: { id: { type: 'string', description: 'Resource ID.' } },
              description: 'Reference to another subresource.',
              'x-ms-azure-resource': true
            }
          ]
        },
        networkInterfaces: {
          type: 'array',
          readOnly: true,
          items: {
            properties: {
              extendedLocation: {
                description: 'The extended location of the network interface.',
                properties: {
                  name: {
                    type: 'string',
                    description: 'The name of the extended location.'
                  },
                  type: {
                    description: 'The type of the extended location.',
                    type: 'string',
                    enum: [ 'EdgeZone' ],
                    'x-ms-enum': {
                      name: 'ExtendedLocationTypes',
                      modelAsString: true
                    }
                  }
                }
              },
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the network interface.',
                properties: {
                  virtualMachine: {
                    properties: { id: [Object] },
                    description: 'Reference to another subresource.',
                    'x-ms-azure-resource': true,
                    readOnly: true
                  },
                  networkSecurityGroup: {
                    description: 'The reference to the NetworkSecurityGroup resource.',
                    properties: { properties: [Object], etag: [Object] },
                    allOf: [ [Object] ]
                  },
                  privateEndpoint: {
                    readOnly: true,
                    description: 'A reference to the private endpoint to which the network interface is linked.',
                    properties: [Circular *2],
                    allOf: [ [Object] ]
                  },
                  ipConfigurations: {
                    type: 'array',
                    items: {
                      properties: [Object],
                      allOf: [Array],
                      description: 'IPConfiguration in a network interface.'
                    },
                    description: 'A list of IPConfigurations of the network interface.'
                  },
                  tapConfigurations: {
                    readOnly: true,
                    type: 'array',
                    items: {
                      properties: [Object],
                      allOf: [Array],
                      description: 'Tap configuration in a Network Interface.'
                    },
                    description: 'A list of TapConfigurations of the network interface.'
                  },
                  dnsSettings: {
                    description: 'The DNS settings in network interface.',
                    properties: {
                      dnsServers: [Object],
                      appliedDnsServers: [Object],
                      internalDnsNameLabel: [Object],
                      internalFqdn: [Object],
                      internalDomainNameSuffix: [Object]
                    }
                  },
                  macAddress: {
                    readOnly: true,
                    type: 'string',
                    description: 'The MAC address of the network interface.'
                  },
                  primary: {
                    readOnly: true,
                    type: 'boolean',
                    description: 'Whether this is a primary network interface on a virtual machine.'
                  },
                  vnetEncryptionSupported: {
                    readOnly: true,
                    type: 'boolean',
                    description: 'Whether the virtual machine this nic is attached to supports encryption.'
                  },
                  enableAcceleratedNetworking: {
                    type: 'boolean',
                    description: 'If the network interface is accelerated networking enabled.'
                  },
                  enableIPForwarding: {
                    type: 'boolean',
                    description: 'Indicates whether IP forwarding is enabled on this network interface.'
                  },
                  hostedWorkloads: {
                    type: 'array',
                    items: { type: 'string' },
                    readOnly: true,
                    description: 'A list of references to linked BareMetal resources.'
                  },
                  dscpConfiguration: {
                    properties: { id: [Object] },
                    description: 'Reference to another subresource.',
                    'x-ms-azure-resource': true,
                    readOnly: true
                  },
                  resourceGuid: {
                    readOnly: true,
                    type: 'string',
                    description: 'The resource GUID property of the network interface resource.'
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the network interface resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  },
                  workloadType: {
                    type: 'string',
                    description: 'WorkloadType of the NetworkInterface for BareMetal resources'
                  },
                  nicType: {
                    type: 'string',
                    description: 'Type of Network Interface resource.',
                    enum: [ 'Standard', 'Elastic' ],
                    'x-ms-enum': {
                      name: 'NetworkInterfaceNicType',
                      modelAsString: true
                    }
                  },
                  privateLinkService: {
                    description: 'Privatelinkservice of the network interface resource.',
                    properties: {
                      extendedLocation: [Object],
                      properties: [Object],
                      etag: [Object]
                    },
                    allOf: [ [Object] ]
                  },
                  migrationPhase: {
                    type: 'string',
                    description: 'Migration phase of Network Interface resource.',
                    enum: [
                      'None',
                      'Prepare',
                      'Commit',
                      'Abort',
                      'Committed'
                    ],
                    'x-ms-enum': {
                      name: 'NetworkInterfaceMigrationPhase',
                      modelAsString: true
                    }
                  }
                }
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              }
            },
            allOf: [
              {
                properties: {
                  id: { type: 'string', description: 'Resource ID.' },
                  name: {
                    readOnly: true,
                    type: 'string',
                    description: 'Resource name.'
                  },
                  type: {
                    readOnly: true,
                    type: 'string',
                    description: 'Resource type.'
                  },
                  location: { type: 'string', description: 'Resource location.' },
                  tags: {
                    type: 'object',
                    additionalProperties: { type: 'string' },
                    description: 'Resource tags.'
                  }
                },
                description: 'Common resource representation.',
                'x-ms-azure-resource': true
              }
            ],
            description: 'A network interface in a resource group.'
          },
          description: 'An array of references to the network interfaces created for this private endpoint.'
        },
        provisioningState: {
          readOnly: true,
          description: 'The provisioning state of the private endpoint resource.',
          type: 'string',
          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
        },
        privateLinkServiceConnections: {
          type: 'array',
          items: {
            properties: {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the private link service connection.',
                properties: {
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the private link service connection resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  },
                  privateLinkServiceId: {
                    type: 'string',
                    description: 'The resource id of private link service.'
                  },
                  groupIds: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.'
                  },
                  requestMessage: {
                    type: 'string',
                    description: 'A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.'
                  },
                  privateLinkServiceConnectionState: {
                    description: 'A collection of read-only information about the state of the connection to the remote resource.',
                    properties: {
                      status: [Object],
                      description: [Object],
                      actionsRequired: [Object]
                    }
                  }
                }
              },
              name: {
                type: 'string',
                description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'
              },
              type: {
                readOnly: true,
                type: 'string',
                description: 'The resource type.'
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              }
            },
            allOf: [
              {
                properties: { id: { type: 'string', description: 'Resource ID.' } },
                description: 'Reference to another subresource.',
                'x-ms-azure-resource': true
              }
            ],
            description: 'PrivateLinkServiceConnection resource.'
          },
          description: 'A grouping of information about the connection to the remote resource.'
        },
        manualPrivateLinkServiceConnections: {
          type: 'array',
          items: {
            properties: {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the private link service connection.',
                properties: {
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the private link service connection resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  },
                  privateLinkServiceId: {
                    type: 'string',
                    description: 'The resource id of private link service.'
                  },
                  groupIds: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.'
                  },
                  requestMessage: {
                    type: 'string',
                    description: 'A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.'
                  },
                  privateLinkServiceConnectionState: {
                    description: 'A collection of read-only information about the state of the connection to the remote resource.',
                    properties: {
                      status: [Object],
                      description: [Object],
                      actionsRequired: [Object]
                    }
                  }
                }
              },
              name: {
                type: 'string',
                description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'
              },
              type: {
                readOnly: true,
                type: 'string',
                description: 'The resource type.'
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              }
            },
            allOf: [
              {
                properties: { id: { type: 'string', description: 'Resource ID.' } },
                description: 'Reference to another subresource.',
                'x-ms-azure-resource': true
              }
            ],
            description: 'PrivateLinkServiceConnection resource.'
          },
          description: 'A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.'
        },
        customDnsConfigs: {
          type: 'array',
          items: {
            properties: {
              fqdn: {
                type: 'string',
                description: 'Fqdn that resolves to private endpoint ip address.'
              },
              ipAddresses: {
                type: 'array',
                items: { type: 'string' },
                description: 'A list of private ip addresses of the private endpoint.'
              }
            },
            description: 'Contains custom Dns resolution configuration from customer.'
          },
          description: 'An array of custom dns configurations.'
        },
        applicationSecurityGroups: {
          type: 'array',
          items: {
            properties: {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the application security group.',
                properties: {
                  resourceGuid: {
                    readOnly: true,
                    type: 'string',
                    description: 'The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.'
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the application security group resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  }
                }
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              }
            },
            allOf: [
              {
                properties: {
                  id: { type: 'string', description: 'Resource ID.' },
                  name: {
                    readOnly: true,
                    type: 'string',
                    description: 'Resource name.'
                  },
                  type: {
                    readOnly: true,
                    type: 'string',
                    description: 'Resource type.'
                  },
                  location: { type: 'string', description: 'Resource location.' },
                  tags: {
                    type: 'object',
                    additionalProperties: { type: 'string' },
                    description: 'Resource tags.'
                  }
                },
                description: 'Common resource representation.',
                'x-ms-azure-resource': true
              }
            ],
            description: 'An application security group in a resource group.'
          },
          description: 'Application security groups in which the private endpoint IP configuration is included.'
        },
        ipConfigurations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of private endpoint IP configurations.',
                type: 'object',
                properties: {
                  groupId: {
                    type: 'string',
                    description: 'The ID of a group obtained from the remote resource that this private endpoint should connect to.'
                  },
                  memberName: {
                    type: 'string',
                    description: 'The member name of a group obtained from the remote resource that this private endpoint should connect to.'
                  },
                  privateIPAddress: {
                    type: 'string',
                    description: "A private ip address obtained from the private endpoint's subnet."
                  }
                }
              },
              name: {
                type: 'string',
                description: 'The name of the resource that is unique within a resource group.'
              },
              type: {
                readOnly: true,
                type: 'string',
                description: 'The resource type.'
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              }
            },
            description: 'An IP Configuration of the private endpoint.'
          },
          description: "A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints."
        },
        customNetworkInterfaceName: {
          type: 'string',
          description: 'The custom name of the network interface attached to the private endpoint.'
        }
      }
    },
    etag: {
      readOnly: true,
      type: 'string',
      description: 'A unique read-only string that changes whenever the resource is updated.'
    }
  },
  allOf: [
    {
      properties: {
        id: { type: 'string', description: 'Resource ID.' },
        name: {
          readOnly: true,
          type: 'string',
          description: 'Resource name.'
        },
        type: {
          readOnly: true,
          type: 'string',
          description: 'Resource type.'
        },
        location: { type: 'string', description: 'Resource location.' },
        tags: {
          type: 'object',
          additionalProperties: { type: 'string' },
          description: 'Resource tags.'
        }
      },
      description: 'Common resource representation.',
      'x-ms-azure-resource': true
    }
  ],
  description: 'Private endpoint resource.'
}
```
## Misc
The resource version is `2021-05-01`.

The Swagger schema used to generate this documentation can be found [here](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/privateEndpoint.json).