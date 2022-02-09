---
id: StaticSite
title: StaticSite
---
Provides a **StaticSite** from the **Web** group
## Examples
### Create or update a static site
```js
exports.createResources = () => [
  {
    type: "StaticSite",
    group: "Web",
    name: "myStaticSite",
    properties: () => ({
      location: "West US 2",
      properties: {
        repositoryUrl: "https://github.com/username/RepoName",
        branch: "master",
        repositoryToken: "repoToken123",
        buildProperties: {
          appLocation: "app",
          apiLocation: "api",
          appArtifactLocation: "build",
        },
      },
      sku: { name: "Basic", tier: "Basic" },
    }),
    dependencies: ({}) => ({
      resourceGroup: "myResourceGroup",
      managedIdentities: ["myUserAssignedIdentity"],
    }),
  },
];

```
## Dependencies
- [ResourceGroup](../Resources/ResourceGroup.md)
- [UserAssignedIdentity](../ManagedIdentity/UserAssignedIdentity.md)
## Swagger Schema
```js
{
  description: 'Static Site ARM resource.',
  type: 'object',
  allOf: [
    {
      description: 'Azure resource. This resource is tracked in Azure Resource Manager',
      required: [ 'location' ],
      type: 'object',
      properties: {
        id: { description: 'Resource Id.', type: 'string', readOnly: true },
        name: {
          description: 'Resource Name.',
          type: 'string',
          readOnly: true
        },
        kind: { description: 'Kind of resource.', type: 'string' },
        location: { description: 'Resource Location.', type: 'string' },
        type: {
          description: 'Resource type.',
          type: 'string',
          readOnly: true
        },
        tags: {
          description: 'Resource tags.',
          type: 'object',
          additionalProperties: { type: 'string' }
        }
      },
      'x-ms-azure-resource': true
    }
  ],
  properties: {
    properties: {
      description: 'Core resource properties',
      type: 'object',
      'x-ms-client-flatten': true,
      properties: {
        defaultHostname: {
          description: 'The default autogenerated hostname for the static site.',
          type: 'string',
          readOnly: true
        },
        repositoryUrl: {
          description: 'URL for the repository of the static site.',
          type: 'string'
        },
        branch: {
          description: 'The target branch in the repository.',
          type: 'string'
        },
        customDomains: {
          description: 'The custom domains associated with this static site.',
          type: 'array',
          items: { type: 'string' },
          readOnly: true
        },
        repositoryToken: {
          description: "A user's github repository token. This is used to setup the Github Actions workflow file and API secrets.",
          type: 'string'
        },
        buildProperties: {
          description: 'Build properties to configure on the repository.',
          type: 'object',
          properties: {
            appLocation: {
              description: 'The path to the app code within the repository.',
              type: 'string'
            },
            apiLocation: {
              description: 'The path to the api code within the repository.',
              type: 'string'
            },
            appArtifactLocation: {
              description: 'Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)',
              type: 'string'
            },
            outputLocation: {
              description: 'The output path of the app after building.',
              type: 'string'
            },
            appBuildCommand: {
              description: 'A custom command to run during deployment of the static content application.',
              type: 'string'
            },
            apiBuildCommand: {
              description: 'A custom command to run during deployment of the Azure Functions API application.',
              type: 'string'
            },
            skipGithubActionWorkflowGeneration: {
              description: 'Skip Github Action workflow generation.',
              type: 'boolean'
            },
            githubActionSecretNameOverride: {
              description: 'Github Action secret name override.',
              type: 'string'
            }
          }
        },
        privateEndpointConnections: {
          description: 'Private endpoint connections',
          type: 'array',
          items: {
            description: 'Message envelope that contains the common Azure resource manager properties and the resource provider specific content.',
            type: 'object',
            properties: {
              id: {
                description: 'Resource Id. Typically ID is populated only for responses to GET requests. Caller is responsible for passing in this\n' +
                  'value for GET requests only.\n' +
                  'For example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupId}/providers/Microsoft.Web/sites/{sitename}',
                type: 'string'
              },
              name: { description: 'Name of resource.', type: 'string' },
              type: {
                description: 'Type of resource e.g "Microsoft.Web/sites".',
                type: 'string'
              },
              location: {
                description: 'Geographical region resource belongs to e.g. SouthCentralUS, SouthEastAsia.',
                type: 'string'
              },
              tags: {
                description: 'Tags associated with resource.',
                type: 'object',
                additionalProperties: { type: 'string' }
              },
              plan: {
                description: 'Azure resource manager plan.',
                type: 'object',
                properties: {
                  name: { description: 'The name.', type: 'string' },
                  publisher: { description: 'The publisher.', type: 'string' },
                  product: { description: 'The product.', type: 'string' },
                  promotionCode: {
                    description: 'The promotion code.',
                    type: 'string'
                  },
                  version: {
                    description: 'Version of product.',
                    type: 'string'
                  }
                }
              },
              properties: {
                description: 'Resource specific properties.',
                type: 'object',
                allOf: [
                  {
                    description: 'Azure proxy only resource. This resource is not tracked by Azure Resource Manager.',
                    type: 'object',
                    properties: {
                      id: {
                        description: 'Resource Id.',
                        type: 'string',
                        readOnly: true
                      },
                      name: {
                        description: 'Resource Name.',
                        type: 'string',
                        readOnly: true
                      },
                      kind: {
                        description: 'Kind of resource.',
                        type: 'string'
                      },
                      type: {
                        description: 'Resource type.',
                        type: 'string',
                        readOnly: true
                      }
                    },
                    'x-ms-azure-resource': true
                  }
                ],
                properties: {
                  properties: {
                    description: 'RemotePrivateEndpointConnection resource specific properties',
                    type: 'object',
                    properties: {
                      provisioningState: { type: 'string', readOnly: true },
                      privateEndpoint: {
                        description: 'PrivateEndpoint of a remote private endpoint connection',
                        type: 'object',
                        properties: { id: { type: 'string', readOnly: true } }
                      },
                      privateLinkServiceConnectionState: {
                        description: 'The state of a private link connection',
                        type: 'object',
                        properties: {
                          status: {
                            description: 'Status of a private link connection',
                            type: 'string'
                          },
                          description: {
                            description: 'Description of a private link connection',
                            type: 'string'
                          },
                          actionsRequired: {
                            description: 'ActionsRequired for a private link connection',
                            type: 'string'
                          }
                        }
                      },
                      ipAddresses: {
                        description: 'Private IPAddresses mapped to the remote private endpoint',
                        type: 'array',
                        items: { type: 'string' }
                      }
                    },
                    'x-ms-client-flatten': true
                  }
                }
              },
              sku: {
                description: 'SKU description of the resource.',
                type: 'object',
                properties: {
                  name: {
                    description: 'Name of the resource SKU.',
                    type: 'string'
                  },
                  tier: {
                    description: 'Service tier of the resource SKU.',
                    type: 'string'
                  },
                  size: {
                    description: 'Size specifier of the resource SKU.',
                    type: 'string'
                  },
                  family: {
                    description: 'Family code of the resource SKU.',
                    type: 'string'
                  },
                  capacity: {
                    format: 'int32',
                    description: 'Current number of instances assigned to the resource.',
                    type: 'integer'
                  },
                  skuCapacity: {
                    description: 'Min, max, and default scale values of the SKU.',
                    type: 'object',
                    properties: {
                      minimum: {
                        format: 'int32',
                        description: 'Minimum number of workers for this App Service plan SKU.',
                        type: 'integer'
                      },
                      maximum: {
                        format: 'int32',
                        description: 'Maximum number of workers for this App Service plan SKU.',
                        type: 'integer'
                      },
                      elasticMaximum: {
                        format: 'int32',
                        description: 'Maximum number of Elastic workers for this App Service plan SKU.',
                        type: 'integer'
                      },
                      default: {
                        format: 'int32',
                        description: 'Default number of workers for this App Service plan SKU.',
                        type: 'integer'
                      },
                      scaleType: {
                        description: 'Available scale configurations for an App Service plan.',
                        type: 'string'
                      }
                    }
                  },
                  locations: {
                    description: 'Locations of the SKU.',
                    type: 'array',
                    items: { type: 'string' }
                  },
                  capabilities: {
                    description: 'Capabilities of the SKU, e.g., is traffic manager enabled?',
                    type: 'array',
                    items: {
                      description: 'Describes the capabilities/features allowed for a specific SKU.',
                      type: 'object',
                      properties: {
                        name: {
                          description: 'Name of the SKU capability.',
                          type: 'string'
                        },
                        value: {
                          description: 'Value of the SKU capability.',
                          type: 'string'
                        },
                        reason: {
                          description: 'Reason of the SKU capability.',
                          type: 'string'
                        }
                      }
                    }
                  }
                }
              },
              status: {
                description: 'Azure-AsyncOperation Status info.',
                type: 'string'
              },
              error: {
                description: 'Azure-AsyncOperation Error info.',
                type: 'object',
                properties: <ref *1> {
                  extendedCode: { description: 'Type of error.', type: 'string' },
                  messageTemplate: { description: 'Message template.', type: 'string' },
                  parameters: {
                    description: 'Parameters for the template.',
                    type: 'array',
                    items: { type: 'string' }
                  },
                  innerErrors: {
                    description: 'Inner errors.',
                    type: 'array',
                    items: {
                      description: 'Body of the error response returned from the API.',
                      type: 'object',
                      properties: [Circular *1]
                    }
                  },
                  details: {
                    description: 'Error Details.',
                    type: 'array',
                    items: {
                      description: 'Body of the error response returned from the API.',
                      type: 'object',
                      properties: [Circular *1]
                    }
                  },
                  target: { description: 'The error target.', type: 'string' },
                  code: { description: 'Basic error code.', type: 'string' },
                  message: {
                    description: 'Any details of the error.',
                    type: 'string'
                  }
                }
              },
              identity: {
                description: 'MSI resource',
                type: 'object',
                properties: {
                  type: {
                    description: 'Type of managed service identity.',
                    enum: [
                      'SystemAssigned',
                      'UserAssigned',
                      'SystemAssigned, UserAssigned',
                      'None'
                    ],
                    type: 'string',
                    'x-ms-enum': {
                      name: 'ManagedServiceIdentityType',
                      modelAsString: false
                    }
                  },
                  tenantId: {
                    description: 'Tenant of managed service identity.',
                    type: 'string',
                    readOnly: true
                  },
                  principalId: {
                    description: 'Principal Id of managed service identity.',
                    type: 'string',
                    readOnly: true
                  },
                  userAssignedIdentities: {
                    description: "The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}",
                    type: 'object',
                    additionalProperties: {
                      description: 'User Assigned identity.',
                      type: 'object',
                      properties: {
                        principalId: {
                          description: 'Principal Id of user assigned identity',
                          type: 'string',
                          readOnly: true
                        },
                        clientId: {
                          description: 'Client Id of user assigned identity',
                          type: 'string',
                          readOnly: true
                        }
                      }
                    }
                  }
                }
              },
              zones: {
                description: 'Logical Availability Zones the service is hosted in',
                type: 'array',
                items: { type: 'string' }
              }
            }
          },
          readOnly: true
        },
        stagingEnvironmentPolicy: {
          description: 'State indicating whether staging environments are allowed or not allowed for a static web app.',
          enum: [ 'Enabled', 'Disabled' ],
          type: 'string',
          'x-ms-enum': { name: 'StagingEnvironmentPolicy', modelAsString: false }
        },
        allowConfigFileUpdates: {
          description: '<code>false</code> if config file is locked for this static web app; otherwise, <code>true</code>.',
          type: 'boolean'
        },
        templateProperties: {
          description: 'Template options for generating a new repository.',
          type: 'object',
          properties: {
            templateRepositoryUrl: {
              description: 'URL of the template repository. The newly generated repository will be based on this one.',
              type: 'string'
            },
            owner: {
              description: 'Owner of the newly generated repository.',
              type: 'string'
            },
            repositoryName: {
              description: 'Name of the newly generated repository.',
              type: 'string'
            },
            description: {
              description: 'Description of the newly generated repository.',
              type: 'string'
            },
            isPrivate: {
              description: 'Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).',
              type: 'boolean'
            }
          }
        },
        contentDistributionEndpoint: {
          description: 'The content distribution endpoint for the static site.',
          type: 'string',
          readOnly: true
        },
        keyVaultReferenceIdentity: {
          description: 'Identity to use for Key Vault Reference authentication.',
          type: 'string',
          readOnly: true
        },
        userProvidedFunctionApps: {
          description: 'User provided function apps registered with the static site',
          type: 'array',
          items: {
            description: 'A static site user provided function.',
            type: 'object',
            allOf: [
              {
                description: 'Azure proxy only resource. This resource is not tracked by Azure Resource Manager.',
                type: 'object',
                properties: {
                  id: {
                    description: 'Resource Id.',
                    type: 'string',
                    readOnly: true
                  },
                  name: {
                    description: 'Resource Name.',
                    type: 'string',
                    readOnly: true
                  },
                  kind: { description: 'Kind of resource.', type: 'string' },
                  type: {
                    description: 'Resource type.',
                    type: 'string',
                    readOnly: true
                  }
                },
                'x-ms-azure-resource': true
              }
            ],
            properties: {
              properties: {
                description: 'StaticSiteUserProvidedFunctionApp resource specific properties',
                type: 'object',
                properties: {
                  functionAppResourceId: {
                    description: 'The resource id of the function app registered with the static site',
                    type: 'string'
                  },
                  functionAppRegion: {
                    description: 'The region of the function app registered with the static site',
                    type: 'string'
                  },
                  createdOn: {
                    format: 'date-time',
                    description: 'The date and time on which the function app was registered with the static site.',
                    type: 'string',
                    readOnly: true
                  }
                },
                'x-ms-client-flatten': true
              }
            }
          },
          readOnly: true
        },
        provider: {
          description: 'The provider that submitted the last deployment to the primary environment of the static site.',
          type: 'string'
        },
        enterpriseGradeCdnStatus: {
          description: 'State indicating the status of the enterprise grade CDN serving traffic to the static web app.',
          enum: [ 'Enabled', 'Enabling', 'Disabled', 'Disabling' ],
          type: 'string',
          'x-ms-enum': { name: 'EnterpriseGradeCdnStatus', modelAsString: true }
        }
      }
    },
    sku: {
      description: 'Description of a SKU for a scalable resource.',
      type: 'object',
      properties: {
        name: { description: 'Name of the resource SKU.', type: 'string' },
        tier: {
          description: 'Service tier of the resource SKU.',
          type: 'string'
        },
        size: {
          description: 'Size specifier of the resource SKU.',
          type: 'string'
        },
        family: {
          description: 'Family code of the resource SKU.',
          type: 'string'
        },
        capacity: {
          format: 'int32',
          description: 'Current number of instances assigned to the resource.',
          type: 'integer'
        },
        skuCapacity: {
          description: 'Min, max, and default scale values of the SKU.',
          type: 'object',
          properties: {
            minimum: {
              format: 'int32',
              description: 'Minimum number of workers for this App Service plan SKU.',
              type: 'integer'
            },
            maximum: {
              format: 'int32',
              description: 'Maximum number of workers for this App Service plan SKU.',
              type: 'integer'
            },
            elasticMaximum: {
              format: 'int32',
              description: 'Maximum number of Elastic workers for this App Service plan SKU.',
              type: 'integer'
            },
            default: {
              format: 'int32',
              description: 'Default number of workers for this App Service plan SKU.',
              type: 'integer'
            },
            scaleType: {
              description: 'Available scale configurations for an App Service plan.',
              type: 'string'
            }
          }
        },
        locations: {
          description: 'Locations of the SKU.',
          type: 'array',
          items: { type: 'string' }
        },
        capabilities: {
          description: 'Capabilities of the SKU, e.g., is traffic manager enabled?',
          type: 'array',
          items: {
            description: 'Describes the capabilities/features allowed for a specific SKU.',
            type: 'object',
            properties: {
              name: {
                description: 'Name of the SKU capability.',
                type: 'string'
              },
              value: {
                description: 'Value of the SKU capability.',
                type: 'string'
              },
              reason: {
                description: 'Reason of the SKU capability.',
                type: 'string'
              }
            }
          }
        }
      }
    },
    identity: {
      description: 'Managed service identity.',
      type: 'object',
      properties: {
        type: {
          description: 'Type of managed service identity.',
          enum: [
            'SystemAssigned',
            'UserAssigned',
            'SystemAssigned, UserAssigned',
            'None'
          ],
          type: 'string',
          'x-ms-enum': { name: 'ManagedServiceIdentityType', modelAsString: false }
        },
        tenantId: {
          description: 'Tenant of managed service identity.',
          type: 'string',
          readOnly: true
        },
        principalId: {
          description: 'Principal Id of managed service identity.',
          type: 'string',
          readOnly: true
        },
        userAssignedIdentities: {
          description: "The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}",
          type: 'object',
          additionalProperties: {
            description: 'User Assigned identity.',
            type: 'object',
            properties: {
              principalId: {
                description: 'Principal Id of user assigned identity',
                type: 'string',
                readOnly: true
              },
              clientId: {
                description: 'Client Id of user assigned identity',
                type: 'string',
                readOnly: true
              }
            }
          }
        }
      }
    }
  }
}
```
## Misc
The resource version is `2021-03-01`.

The Swagger schema used to generate this documentation can be found [here](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2021-03-01/StaticSites.json).