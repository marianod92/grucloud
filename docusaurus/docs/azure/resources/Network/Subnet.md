---
id: Subnet
title: Subnet
---
Provides a **Subnet** from the **Network** group
## Examples
### Create subnet
```js
exports.createResources = () => [
  {
    type: "Subnet",
    group: "Network",
    name: "mySubnet",
    properties: () => ({ properties: { addressPrefix: "10.0.0.0/16" } }),
    dependencies: ({}) => ({
      resourceGroup: "myResourceGroup",
      virtualNetwork: "myVirtualNetwork",
      natGateway: "myNatGateway",
    }),
  },
];

```

### Create subnet with service endpoints
```js
exports.createResources = () => [
  {
    type: "Subnet",
    group: "Network",
    name: "mySubnet",
    properties: () => ({
      properties: {
        addressPrefix: "10.0.0.0/16",
        serviceEndpoints: [{ service: "Microsoft.Storage" }],
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "myResourceGroup",
      virtualNetwork: "myVirtualNetwork",
      natGateway: "myNatGateway",
    }),
  },
];

```

### Create subnet with a delegation
```js
exports.createResources = () => [
  {
    type: "Subnet",
    group: "Network",
    name: "mySubnet",
    properties: () => ({ properties: { addressPrefix: "10.0.0.0/16" } }),
    dependencies: ({}) => ({
      resourceGroup: "myResourceGroup",
      virtualNetwork: "myVirtualNetwork",
      natGateway: "myNatGateway",
    }),
  },
];

```
## Dependencies
- [ResourceGroup](../Resources/ResourceGroup.md)
- [VirtualNetwork](../Network/VirtualNetwork.md)
- [NatGateway](../Network/NatGateway.md)
## Swagger Schema
```js
<ref *2> {
  properties: <ref *3> {
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
          properties: <ref *1> {
            properties: {
              'x-ms-client-flatten': true,
              description: 'Properties of the network security group.',
              properties: {
                securityRules: {
                  type: 'array',
                  items: {
                    properties: {
                      properties: {
                        'x-ms-client-flatten': true,
                        description: 'Properties of the security rule.',
                        properties: {
                          description: {
                            type: 'string',
                            description: 'A description for this rule. Restricted to 140 chars.'
                          },
                          protocol: {
                            type: 'string',
                            description: 'Network protocol this rule applies to.',
                            enum: [ 'Tcp', 'Udp', 'Icmp', 'Esp', '*', 'Ah' ],
                            'x-ms-enum': {
                              name: 'SecurityRuleProtocol',
                              modelAsString: true
                            }
                          },
                          sourcePortRange: {
                            type: 'string',
                            description: "The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports."
                          },
                          destinationPortRange: {
                            type: 'string',
                            description: "The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports."
                          },
                          sourceAddressPrefix: {
                            type: 'string',
                            description: "The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from."
                          },
                          sourceAddressPrefixes: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'The CIDR or source IP ranges.'
                          },
                          sourceApplicationSecurityGroups: {
                            type: 'array',
                            items: {
                              properties: { properties: [Object], etag: [Object] },
                              allOf: [ [Object] ],
                              description: 'An application security group in a resource group.'
                            },
                            description: 'The application security group specified as source.'
                          },
                          destinationAddressPrefix: {
                            type: 'string',
                            description: "The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used."
                          },
                          destinationAddressPrefixes: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'The destination address prefixes. CIDR or destination IP ranges.'
                          },
                          destinationApplicationSecurityGroups: {
                            type: 'array',
                            items: {
                              properties: { properties: [Object], etag: [Object] },
                              allOf: [ [Object] ],
                              description: 'An application security group in a resource group.'
                            },
                            description: 'The application security group specified as destination.'
                          },
                          sourcePortRanges: {
                            type: 'array',
                            items: {
                              type: 'string',
                              description: 'The source port.'
                            },
                            description: 'The source port ranges.'
                          },
                          destinationPortRanges: {
                            type: 'array',
                            items: {
                              type: 'string',
                              description: 'The destination port.'
                            },
                            description: 'The destination port ranges.'
                          },
                          access: {
                            description: 'The network traffic is allowed or denied.',
                            type: 'string',
                            enum: [ 'Allow', 'Deny' ],
                            'x-ms-enum': {
                              name: 'SecurityRuleAccess',
                              modelAsString: true
                            }
                          },
                          priority: {
                            type: 'integer',
                            format: 'int32',
                            description: 'The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.'
                          },
                          direction: {
                            description: 'The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.',
                            type: 'string',
                            enum: [ 'Inbound', 'Outbound' ],
                            'x-ms-enum': {
                              name: 'SecurityRuleDirection',
                              modelAsString: true
                            }
                          },
                          provisioningState: {
                            readOnly: true,
                            description: 'The provisioning state of the security rule resource.',
                            type: 'string',
                            enum: [
                              'Succeeded',
                              'Updating',
                              'Deleting',
                              'Failed'
                            ],
                            'x-ms-enum': {
                              name: 'ProvisioningState',
                              modelAsString: true
                            }
                          }
                        },
                        required: [ 'protocol', 'access', 'direction' ]
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
                      type: {
                        type: 'string',
                        description: 'The type of the resource.'
                      }
                    },
                    allOf: [
                      {
                        properties: {
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          }
                        },
                        description: 'Reference to another subresource.',
                        'x-ms-azure-resource': true
                      }
                    ],
                    description: 'Network security rule.'
                  },
                  description: 'A collection of security rules of the network security group.'
                },
                defaultSecurityRules: {
                  readOnly: true,
                  type: 'array',
                  items: {
                    properties: {
                      properties: {
                        'x-ms-client-flatten': true,
                        description: 'Properties of the security rule.',
                        properties: {
                          description: {
                            type: 'string',
                            description: 'A description for this rule. Restricted to 140 chars.'
                          },
                          protocol: {
                            type: 'string',
                            description: 'Network protocol this rule applies to.',
                            enum: [ 'Tcp', 'Udp', 'Icmp', 'Esp', '*', 'Ah' ],
                            'x-ms-enum': {
                              name: 'SecurityRuleProtocol',
                              modelAsString: true
                            }
                          },
                          sourcePortRange: {
                            type: 'string',
                            description: "The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports."
                          },
                          destinationPortRange: {
                            type: 'string',
                            description: "The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports."
                          },
                          sourceAddressPrefix: {
                            type: 'string',
                            description: "The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from."
                          },
                          sourceAddressPrefixes: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'The CIDR or source IP ranges.'
                          },
                          sourceApplicationSecurityGroups: {
                            type: 'array',
                            items: {
                              properties: { properties: [Object], etag: [Object] },
                              allOf: [ [Object] ],
                              description: 'An application security group in a resource group.'
                            },
                            description: 'The application security group specified as source.'
                          },
                          destinationAddressPrefix: {
                            type: 'string',
                            description: "The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used."
                          },
                          destinationAddressPrefixes: {
                            type: 'array',
                            items: { type: 'string' },
                            description: 'The destination address prefixes. CIDR or destination IP ranges.'
                          },
                          destinationApplicationSecurityGroups: {
                            type: 'array',
                            items: {
                              properties: { properties: [Object], etag: [Object] },
                              allOf: [ [Object] ],
                              description: 'An application security group in a resource group.'
                            },
                            description: 'The application security group specified as destination.'
                          },
                          sourcePortRanges: {
                            type: 'array',
                            items: {
                              type: 'string',
                              description: 'The source port.'
                            },
                            description: 'The source port ranges.'
                          },
                          destinationPortRanges: {
                            type: 'array',
                            items: {
                              type: 'string',
                              description: 'The destination port.'
                            },
                            description: 'The destination port ranges.'
                          },
                          access: {
                            description: 'The network traffic is allowed or denied.',
                            type: 'string',
                            enum: [ 'Allow', 'Deny' ],
                            'x-ms-enum': {
                              name: 'SecurityRuleAccess',
                              modelAsString: true
                            }
                          },
                          priority: {
                            type: 'integer',
                            format: 'int32',
                            description: 'The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.'
                          },
                          direction: {
                            description: 'The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.',
                            type: 'string',
                            enum: [ 'Inbound', 'Outbound' ],
                            'x-ms-enum': {
                              name: 'SecurityRuleDirection',
                              modelAsString: true
                            }
                          },
                          provisioningState: {
                            readOnly: true,
                            description: 'The provisioning state of the security rule resource.',
                            type: 'string',
                            enum: [
                              'Succeeded',
                              'Updating',
                              'Deleting',
                              'Failed'
                            ],
                            'x-ms-enum': {
                              name: 'ProvisioningState',
                              modelAsString: true
                            }
                          }
                        },
                        required: [ 'protocol', 'access', 'direction' ]
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
                      type: {
                        type: 'string',
                        description: 'The type of the resource.'
                      }
                    },
                    allOf: [
                      {
                        properties: {
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          }
                        },
                        description: 'Reference to another subresource.',
                        'x-ms-azure-resource': true
                      }
                    ],
                    description: 'Network security rule.'
                  },
                  description: 'The default security rules of network security group.'
                },
                networkInterfaces: {
                  readOnly: true,
                  type: 'array',
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
                            properties: {
                              id: {
                                type: 'string',
                                description: 'Resource ID.'
                              }
                            },
                            description: 'Reference to another subresource.',
                            'x-ms-azure-resource': true,
                            readOnly: true
                          },
                          networkSecurityGroup: {
                            description: 'The reference to the NetworkSecurityGroup resource.',
                            properties: [Circular *1],
                            allOf: [
                              {
                                properties: [Object],
                                description: 'Common resource representation.',
                                'x-ms-azure-resource': true
                              }
                            ]
                          },
                          privateEndpoint: {
                            readOnly: true,
                            description: 'A reference to the private endpoint to which the network interface is linked.',
                            properties: {
                              extendedLocation: {
                                description: 'The extended location of the load balancer.',
                                properties: [Object]
                              },
                              properties: {
                                'x-ms-client-flatten': true,
                                description: 'Properties of the private endpoint.',
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
                          ipConfigurations: {
                            type: 'array',
                            items: {
                              properties: {
                                properties: [Object],
                                name: [Object],
                                etag: [Object],
                                type: [Object]
                              },
                              allOf: [ [Object] ],
                              description: 'IPConfiguration in a network interface.'
                            },
                            description: 'A list of IPConfigurations of the network interface.'
                          },
                          tapConfigurations: {
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
                              description: 'Tap configuration in a Network Interface.'
                            },
                            description: 'A list of TapConfigurations of the network interface.'
                          },
                          dnsSettings: {
                            description: 'The DNS settings in network interface.',
                            properties: {
                              dnsServers: {
                                type: 'array',
                                items: [Object],
                                description: "List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection."
                              },
                              appliedDnsServers: {
                                readOnly: true,
                                type: 'array',
                                items: [Object],
                                description: 'If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.'
                              },
                              internalDnsNameLabel: {
                                type: 'string',
                                description: 'Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.'
                              },
                              internalFqdn: {
                                readOnly: true,
                                type: 'string',
                                description: 'Fully qualified DNS name supporting internal communications between VMs in the same virtual network.'
                              },
                              internalDomainNameSuffix: {
                                readOnly: true,
                                type: 'string',
                                description: 'Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.'
                              }
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
                            properties: {
                              id: {
                                type: 'string',
                                description: 'Resource ID.'
                              }
                            },
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
                            enum: [
                              'Succeeded',
                              'Updating',
                              'Deleting',
                              'Failed'
                            ],
                            'x-ms-enum': {
                              name: 'ProvisioningState',
                              modelAsString: true
                            }
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
                              extendedLocation: {
                                description: 'The extended location of the load balancer.',
                                properties: [Object]
                              },
                              properties: {
                                'x-ms-client-flatten': true,
                                description: 'Properties of the private link service.',
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
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          },
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
                          location: {
                            type: 'string',
                            description: 'Resource location.'
                          },
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
                  description: 'A collection of references to network interfaces.'
                },
                subnets: {
                  readOnly: true,
                  type: 'array',
                  items: [Circular *2],
                  description: 'A collection of references to subnets.'
                },
                flowLogs: {
                  readOnly: true,
                  type: 'array',
                  items: {
                    properties: {
                      properties: {
                        'x-ms-client-flatten': true,
                        description: 'Properties of the flow log.',
                        required: [ 'targetResourceId', 'storageId' ],
                        properties: {
                          targetResourceId: {
                            description: 'ID of network security group to which flow log will be applied.',
                            type: 'string'
                          },
                          targetResourceGuid: {
                            readOnly: true,
                            description: 'Guid of network security group to which flow log will be applied.',
                            type: 'string'
                          },
                          storageId: {
                            description: 'ID of the storage account which is used to store the flow log.',
                            type: 'string'
                          },
                          enabled: {
                            description: 'Flag to enable/disable flow logging.',
                            type: 'boolean'
                          },
                          retentionPolicy: {
                            description: 'Parameters that define the retention policy for flow log.',
                            properties: {
                              days: {
                                description: 'Number of days to retain flow log records.',
                                type: 'integer',
                                format: 'int32',
                                default: 0
                              },
                              enabled: {
                                description: 'Flag to enable/disable retention.',
                                type: 'boolean',
                                default: false
                              }
                            }
                          },
                          format: {
                            description: 'Parameters that define the flow log format.',
                            properties: {
                              type: {
                                type: 'string',
                                description: 'The file type of flow log.',
                                enum: [Array],
                                'x-ms-enum': [Object]
                              },
                              version: {
                                description: 'The version (revision) of the flow log.',
                                type: 'integer',
                                format: 'int32',
                                default: 0
                              }
                            }
                          },
                          flowAnalyticsConfiguration: {
                            description: 'Parameters that define the configuration of traffic analytics.',
                            properties: {
                              networkWatcherFlowAnalyticsConfiguration: {
                                description: 'Parameters that define the configuration of traffic analytics.',
                                properties: [Object]
                              }
                            }
                          },
                          provisioningState: {
                            readOnly: true,
                            description: 'The provisioning state of the flow log.',
                            type: 'string',
                            enum: [
                              'Succeeded',
                              'Updating',
                              'Deleting',
                              'Failed'
                            ],
                            'x-ms-enum': {
                              name: 'ProvisioningState',
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
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          },
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
                          location: {
                            type: 'string',
                            description: 'Resource location.'
                          },
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
                    description: 'A flow log resource.'
                  },
                  description: 'A collection of references to flow log resources.'
                },
                resourceGuid: {
                  readOnly: true,
                  type: 'string',
                  description: 'The resource GUID property of the network security group resource.'
                },
                provisioningState: {
                  readOnly: true,
                  description: 'The provisioning state of the network security group resource.',
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
          ]
        },
        routeTable: {
          description: 'The reference to the RouteTable resource.',
          properties: {
            properties: {
              'x-ms-client-flatten': true,
              description: 'Properties of the route table.',
              properties: {
                routes: {
                  type: 'array',
                  items: {
                    properties: {
                      properties: {
                        'x-ms-client-flatten': true,
                        description: 'Properties of the route.',
                        properties: {
                          addressPrefix: {
                            type: 'string',
                            description: 'The destination CIDR to which the route applies.'
                          },
                          nextHopType: {
                            description: 'The type of Azure hop the packet should be sent to.',
                            type: 'string',
                            enum: [
                              'VirtualNetworkGateway',
                              'VnetLocal',
                              'Internet',
                              'VirtualAppliance',
                              'None'
                            ],
                            'x-ms-enum': {
                              name: 'RouteNextHopType',
                              modelAsString: true
                            }
                          },
                          nextHopIpAddress: {
                            type: 'string',
                            description: 'The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.'
                          },
                          provisioningState: {
                            readOnly: true,
                            description: 'The provisioning state of the route resource.',
                            type: 'string',
                            enum: [
                              'Succeeded',
                              'Updating',
                              'Deleting',
                              'Failed'
                            ],
                            'x-ms-enum': {
                              name: 'ProvisioningState',
                              modelAsString: true
                            }
                          },
                          hasBgpOverride: {
                            type: 'boolean',
                            description: 'A value indicating whether this route overrides overlapping BGP routes regardless of LPM.'
                          }
                        },
                        required: [ 'nextHopType' ]
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
                      type: {
                        type: 'string',
                        description: 'The type of the resource.'
                      }
                    },
                    allOf: [
                      {
                        properties: {
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          }
                        },
                        description: 'Reference to another subresource.',
                        'x-ms-azure-resource': true
                      }
                    ],
                    description: 'Route resource.'
                  },
                  description: 'Collection of routes contained within a route table.'
                },
                subnets: {
                  readOnly: true,
                  type: 'array',
                  items: [Circular *2],
                  description: 'A collection of references to subnets.'
                },
                disableBgpRoutePropagation: {
                  type: 'boolean',
                  description: 'Whether to disable the routes learned by BGP on that route table. True means disable.'
                },
                provisioningState: {
                  readOnly: true,
                  description: 'The provisioning state of the route table resource.',
                  type: 'string',
                  enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                  'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                },
                resourceGuid: {
                  type: 'string',
                  readOnly: true,
                  description: 'The resource GUID property of the route table.'
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
          ]
        },
        natGateway: {
          properties: { id: { type: 'string', description: 'Resource ID.' } },
          description: 'Reference to another subresource.',
          'x-ms-azure-resource': true
        },
        serviceEndpoints: {
          type: 'array',
          items: {
            properties: {
              service: {
                type: 'string',
                description: 'The type of the endpoint service.'
              },
              locations: {
                type: 'array',
                items: { type: 'string' },
                description: 'A list of locations.'
              },
              provisioningState: {
                readOnly: true,
                description: 'The provisioning state of the service endpoint resource.',
                type: 'string',
                enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
              }
            },
            description: 'The service endpoint properties.'
          },
          description: 'An array of service endpoints.'
        },
        serviceEndpointPolicies: {
          type: 'array',
          items: {
            properties: {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the service end point policy.',
                properties: {
                  serviceEndpointPolicyDefinitions: {
                    type: 'array',
                    items: {
                      properties: {
                        properties: {
                          'x-ms-client-flatten': true,
                          description: 'Properties of the service endpoint policy definition.',
                          properties: {
                            description: {
                              type: 'string',
                              description: 'A description for this rule. Restricted to 140 chars.'
                            },
                            service: {
                              type: 'string',
                              description: 'Service endpoint name.'
                            },
                            serviceResources: {
                              type: 'array',
                              items: { type: 'string' },
                              description: 'A list of service resources.'
                            },
                            provisioningState: {
                              readOnly: true,
                              description: 'The provisioning state of the service endpoint policy definition resource.',
                              type: 'string',
                              enum: [
                                'Succeeded',
                                'Updating',
                                'Deleting',
                                'Failed'
                              ],
                              'x-ms-enum': {
                                name: 'ProvisioningState',
                                modelAsString: true
                              }
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
                        type: {
                          type: 'string',
                          description: 'The type of the resource.'
                        }
                      },
                      allOf: [
                        {
                          properties: {
                            id: {
                              type: 'string',
                              description: 'Resource ID.'
                            }
                          },
                          description: 'Reference to another subresource.',
                          'x-ms-azure-resource': true
                        }
                      ],
                      description: 'Service Endpoint policy definitions.'
                    },
                    description: 'A collection of service endpoint policy definitions of the service endpoint policy.'
                  },
                  subnets: {
                    readOnly: true,
                    type: 'array',
                    items: [Circular *2],
                    description: 'A collection of references to subnets.'
                  },
                  resourceGuid: {
                    type: 'string',
                    readOnly: true,
                    description: 'The resource GUID property of the service endpoint policy resource.'
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the service endpoint policy resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  },
                  serviceAlias: {
                    type: 'string',
                    description: 'The alias indicating if the policy belongs to a service'
                  },
                  contextualServiceEndpointPolicies: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'A collection of contextual service endpoint policy.'
                  }
                }
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              },
              kind: {
                readOnly: true,
                type: 'string',
                description: 'Kind of service endpoint policy. This is metadata used for the Azure portal experience.'
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
            description: 'Service End point policy resource.'
          },
          description: 'An array of service endpoint policies.'
        },
        privateEndpoints: {
          readOnly: true,
          type: 'array',
          items: {
            properties: <ref *4> {
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
                    'x-ms-enum': {
                      name: 'ExtendedLocationTypes',
                      modelAsString: true
                    }
                  }
                }
              },
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the private endpoint.',
                properties: {
                  subnet: {
                    description: 'The ID of the subnet from which the private IP will be allocated.',
                    properties: [Circular *3],
                    allOf: [
                      {
                        properties: {
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          }
                        },
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
                              properties: <ref *1> {
                                properties: [Object],
                                etag: [Object]
                              },
                              allOf: [ [Object] ]
                            },
                            privateEndpoint: {
                              readOnly: true,
                              description: 'A reference to the private endpoint to which the network interface is linked.',
                              properties: [Circular *4],
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
                              enum: [
                                'Succeeded',
                                'Updating',
                                'Deleting',
                                'Failed'
                              ],
                              'x-ms-enum': {
                                name: 'ProvisioningState',
                                modelAsString: true
                              }
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
                            id: {
                              type: 'string',
                              description: 'Resource ID.'
                            },
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
                            location: {
                              type: 'string',
                              description: 'Resource location.'
                            },
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
                              enum: [
                                'Succeeded',
                                'Updating',
                                'Deleting',
                                'Failed'
                              ],
                              'x-ms-enum': {
                                name: 'ProvisioningState',
                                modelAsString: true
                              }
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
                          properties: {
                            id: {
                              type: 'string',
                              description: 'Resource ID.'
                            }
                          },
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
                              enum: [
                                'Succeeded',
                                'Updating',
                                'Deleting',
                                'Failed'
                              ],
                              'x-ms-enum': {
                                name: 'ProvisioningState',
                                modelAsString: true
                              }
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
                          properties: {
                            id: {
                              type: 'string',
                              description: 'Resource ID.'
                            }
                          },
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
                              enum: [
                                'Succeeded',
                                'Updating',
                                'Deleting',
                                'Failed'
                              ],
                              'x-ms-enum': {
                                name: 'ProvisioningState',
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
                            id: {
                              type: 'string',
                              description: 'Resource ID.'
                            },
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
                            location: {
                              type: 'string',
                              description: 'Resource location.'
                            },
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
          },
          description: 'An array of references to private endpoints.'
        },
        ipConfigurations: {
          readOnly: true,
          type: 'array',
          items: {
            properties: <ref *5> {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the IP configuration.',
                properties: {
                  privateIPAddress: {
                    type: 'string',
                    description: 'The private IP address of the IP configuration.'
                  },
                  privateIPAllocationMethod: {
                    description: 'The private IP address allocation method.',
                    default: 'Dynamic',
                    type: 'string',
                    enum: [ 'Static', 'Dynamic' ],
                    'x-ms-enum': { name: 'IPAllocationMethod', modelAsString: true }
                  },
                  subnet: {
                    description: 'The reference to the subnet resource.',
                    properties: [Circular *3],
                    allOf: [
                      {
                        properties: {
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          }
                        },
                        description: 'Reference to another subresource.',
                        'x-ms-azure-resource': true
                      }
                    ]
                  },
                  publicIPAddress: {
                    description: 'The reference to the public IP resource.',
                    properties: <ref *6> {
                      extendedLocation: {
                        description: 'The extended location of the public ip address.',
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
                      sku: {
                        description: 'The public IP address SKU.',
                        properties: {
                          name: {
                            type: 'string',
                            description: 'Name of a public IP address SKU.',
                            enum: [ 'Basic', 'Standard' ],
                            'x-ms-enum': {
                              name: 'PublicIPAddressSkuName',
                              modelAsString: true
                            }
                          },
                          tier: {
                            type: 'string',
                            description: 'Tier of a public IP address SKU.',
                            enum: [ 'Regional', 'Global' ],
                            'x-ms-enum': {
                              name: 'PublicIPAddressSkuTier',
                              modelAsString: true
                            }
                          }
                        }
                      },
                      properties: {
                        'x-ms-client-flatten': true,
                        description: 'Public IP address properties.',
                        properties: {
                          publicIPAllocationMethod: {
                            description: 'The public IP address allocation method.',
                            type: 'string',
                            enum: [ 'Static', 'Dynamic' ],
                            'x-ms-enum': {
                              name: 'IPAllocationMethod',
                              modelAsString: true
                            }
                          },
                          publicIPAddressVersion: {
                            description: 'The public IP address version.',
                            type: 'string',
                            enum: [ 'IPv4', 'IPv6' ],
                            'x-ms-enum': { name: 'IPVersion', modelAsString: true }
                          },
                          ipConfiguration: {
                            readOnly: true,
                            description: 'The IP configuration associated with the public IP address.',
                            properties: [Circular *5],
                            allOf: [
                              {
                                properties: [Object],
                                description: 'Reference to another subresource.',
                                'x-ms-azure-resource': true
                              }
                            ]
                          },
                          dnsSettings: {
                            description: 'The FQDN of the DNS record associated with the public IP address.',
                            properties: {
                              domainNameLabel: {
                                type: 'string',
                                description: 'The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.'
                              },
                              fqdn: {
                                type: 'string',
                                description: 'The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.'
                              },
                              reverseFqdn: {
                                type: 'string',
                                description: 'The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.'
                              }
                            }
                          },
                          ddosSettings: {
                            description: 'The DDoS protection custom policy associated with the public IP address.',
                            properties: {
                              ddosCustomPolicy: {
                                properties: [Object],
                                description: 'Reference to another subresource.',
                                'x-ms-azure-resource': true,
                                readOnly: false
                              },
                              protectionCoverage: {
                                readOnly: false,
                                type: 'string',
                                enum: [Array],
                                'x-ms-enum': [Object],
                                description: 'The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.'
                              },
                              protectedIP: {
                                readOnly: false,
                                type: 'boolean',
                                description: 'Enables DDoS protection on the public IP.'
                              }
                            }
                          },
                          ipTags: {
                            type: 'array',
                            items: {
                              properties: { ipTagType: [Object], tag: [Object] },
                              description: 'Contains the IpTag associated with the object.'
                            },
                            description: 'The list of tags associated with the public IP address.'
                          },
                          ipAddress: {
                            type: 'string',
                            description: 'The IP address associated with the public IP address resource.'
                          },
                          publicIPPrefix: {
                            properties: {
                              id: {
                                type: 'string',
                                description: 'Resource ID.'
                              }
                            },
                            description: 'Reference to another subresource.',
                            'x-ms-azure-resource': true
                          },
                          idleTimeoutInMinutes: {
                            type: 'integer',
                            format: 'int32',
                            description: 'The idle timeout of the public IP address.'
                          },
                          resourceGuid: {
                            readOnly: true,
                            type: 'string',
                            description: 'The resource GUID property of the public IP address resource.'
                          },
                          provisioningState: {
                            readOnly: true,
                            description: 'The provisioning state of the public IP address resource.',
                            type: 'string',
                            enum: [
                              'Succeeded',
                              'Updating',
                              'Deleting',
                              'Failed'
                            ],
                            'x-ms-enum': {
                              name: 'ProvisioningState',
                              modelAsString: true
                            }
                          },
                          servicePublicIPAddress: {
                            description: 'The service public IP address of the public IP address resource.',
                            properties: [Circular *6],
                            allOf: [
                              {
                                properties: [Object],
                                description: 'Common resource representation.',
                                'x-ms-azure-resource': true
                              }
                            ]
                          },
                          natGateway: {
                            description: 'The NatGateway for the Public IP address.',
                            properties: {
                              sku: {
                                description: 'The nat gateway SKU.',
                                properties: [Object]
                              },
                              properties: {
                                'x-ms-client-flatten': true,
                                description: 'Nat Gateway properties.',
                                properties: [Object]
                              },
                              zones: {
                                type: 'array',
                                items: [Object],
                                description: 'A list of availability zones denoting the zone in which Nat Gateway should be deployed.'
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
                          migrationPhase: {
                            type: 'string',
                            description: 'Migration phase of Public IP Address.',
                            enum: [
                              'None',
                              'Prepare',
                              'Commit',
                              'Abort',
                              'Committed'
                            ],
                            'x-ms-enum': {
                              name: 'PublicIPAddressMigrationPhase',
                              modelAsString: true
                            }
                          },
                          linkedPublicIPAddress: {
                            description: 'The linked public IP address of the public IP address resource.',
                            properties: [Circular *6],
                            allOf: [
                              {
                                properties: [Object],
                                description: 'Common resource representation.',
                                'x-ms-azure-resource': true
                              }
                            ]
                          },
                          deleteOption: {
                            type: 'string',
                            description: 'Specify what happens to the public IP address when the VM using it is deleted',
                            enum: [ 'Delete', 'Detach' ],
                            'x-ms-enum': {
                              name: 'DeleteOptions',
                              modelAsString: true
                            }
                          }
                        }
                      },
                      etag: {
                        readOnly: true,
                        type: 'string',
                        description: 'A unique read-only string that changes whenever the resource is updated.'
                      },
                      zones: {
                        type: 'array',
                        items: { type: 'string' },
                        description: 'A list of availability zones denoting the IP allocated for the resource needs to come from.'
                      }
                    },
                    allOf: [
                      {
                        properties: {
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          },
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
                          location: {
                            type: 'string',
                            description: 'Resource location.'
                          },
                          tags: {
                            type: 'object',
                            additionalProperties: { type: 'string' },
                            description: 'Resource tags.'
                          }
                        },
                        description: 'Common resource representation.',
                        'x-ms-azure-resource': true
                      }
                    ]
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the IP configuration resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
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
              }
            },
            allOf: [
              {
                properties: { id: { type: 'string', description: 'Resource ID.' } },
                description: 'Reference to another subresource.',
                'x-ms-azure-resource': true
              }
            ],
            description: 'IP configuration.'
          },
          description: 'An array of references to the network interface IP configurations using subnet.'
        },
        ipConfigurationProfiles: {
          readOnly: true,
          type: 'array',
          items: {
            properties: {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the IP configuration profile.',
                properties: {
                  subnet: {
                    properties: [Circular *3],
                    allOf: [
                      {
                        properties: {
                          id: {
                            type: 'string',
                            description: 'Resource ID.'
                          }
                        },
                        description: 'Reference to another subresource.',
                        'x-ms-azure-resource': true
                      }
                    ],
                    description: 'Subnet in a virtual network resource.'
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the IP configuration profile resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  }
                }
              },
              name: {
                type: 'string',
                description: 'The name of the resource. This name can be used to access the resource.'
              },
              type: {
                readOnly: true,
                type: 'string',
                description: 'Sub Resource type.'
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
            description: 'IP configuration profile child resource.'
          },
          description: 'Array of IP configuration profiles which reference this subnet.'
        },
        ipAllocations: {
          type: 'array',
          items: {
            properties: { id: { type: 'string', description: 'Resource ID.' } },
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
              properties: {
                'x-ms-client-flatten': true,
                description: 'Resource navigation link properties format.',
                properties: {
                  linkedResourceType: {
                    type: 'string',
                    description: 'Resource type of the linked resource.'
                  },
                  link: {
                    type: 'string',
                    description: 'Link to the external resource.'
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the resource navigation link resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  }
                }
              },
              name: {
                type: 'string',
                description: 'Name of the resource that is unique within a resource group. This name can be used to access the resource.'
              },
              id: {
                type: 'string',
                readOnly: true,
                description: 'Resource navigation link identifier.'
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              },
              type: {
                readOnly: true,
                type: 'string',
                description: 'Resource type.'
              }
            },
            allOf: [
              {
                properties: { id: { type: 'string', description: 'Resource ID.' } },
                description: 'Reference to another subresource.',
                'x-ms-azure-resource': true
              }
            ],
            description: 'ResourceNavigationLink resource.'
          },
          description: 'An array of references to the external resources using subnet.'
        },
        serviceAssociationLinks: {
          readOnly: true,
          type: 'array',
          items: {
            properties: {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Resource navigation link properties format.',
                properties: {
                  linkedResourceType: {
                    type: 'string',
                    description: 'Resource type of the linked resource.'
                  },
                  link: {
                    type: 'string',
                    description: 'Link to the external resource.'
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the service association link resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  },
                  allowDelete: {
                    type: 'boolean',
                    description: 'If true, the resource can be deleted.'
                  },
                  locations: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'A list of locations.'
                  }
                }
              },
              name: {
                type: 'string',
                description: 'Name of the resource that is unique within a resource group. This name can be used to access the resource.'
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              },
              type: {
                readOnly: true,
                type: 'string',
                description: 'Resource type.'
              }
            },
            allOf: [
              {
                properties: { id: { type: 'string', description: 'Resource ID.' } },
                description: 'Reference to another subresource.',
                'x-ms-azure-resource': true
              }
            ],
            description: 'ServiceAssociationLink resource.'
          },
          description: 'An array of references to services injecting into this subnet.'
        },
        delegations: {
          type: 'array',
          items: {
            properties: {
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the subnet.',
                properties: {
                  serviceName: {
                    type: 'string',
                    description: 'The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).'
                  },
                  actions: {
                    readOnly: true,
                    type: 'array',
                    items: { type: 'string' },
                    description: 'The actions permitted to the service upon delegation.'
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the service delegation resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  }
                }
              },
              name: {
                type: 'string',
                description: 'The name of the resource that is unique within a subnet. This name can be used to access the resource.'
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
            ],
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
              properties: {
                'x-ms-client-flatten': true,
                description: 'Properties of the application gateway IP configuration.',
                properties: {
                  subnet: {
                    properties: {
                      id: { type: 'string', description: 'Resource ID.' }
                    },
                    description: 'Reference to another subresource.',
                    'x-ms-azure-resource': true
                  },
                  provisioningState: {
                    readOnly: true,
                    description: 'The provisioning state of the application gateway IP configuration resource.',
                    type: 'string',
                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],
                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
                  }
                }
              },
              name: {
                type: 'string',
                description: 'Name of the IP configuration that is unique within an Application Gateway.'
              },
              etag: {
                readOnly: true,
                type: 'string',
                description: 'A unique read-only string that changes whenever the resource is updated.'
              },
              type: {
                readOnly: true,
                type: 'string',
                description: 'Type of the resource.'
              }
            },
            allOf: [
              {
                properties: { id: { type: 'string', description: 'Resource ID.' } },
                description: 'Reference to another subresource.',
                'x-ms-azure-resource': true
              }
            ],
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
  ],
  description: 'Subnet in a virtual network resource.'
}
```
## Misc
The resource version is `2021-05-01`.

The Swagger schema used to generate this documentation can be found [here](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/virtualNetwork.json).
