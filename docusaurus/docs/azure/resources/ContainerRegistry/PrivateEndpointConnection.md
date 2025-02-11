---
id: PrivateEndpointConnection
title: PrivateEndpointConnection
---
Provides a **PrivateEndpointConnection** from the **ContainerRegistry** group
## Examples
### PrivateEndpointConnectionCreateOrUpdate
```js
exports.createResources = () => [
  {
    type: "PrivateEndpointConnection",
    group: "ContainerRegistry",
    name: "myPrivateEndpointConnection",
    properties: () => ({
      properties: {
        privateLinkServiceConnectionState: {
          status: "Approved",
          description: "Auto-Approved",
        },
      },
    }),
    dependencies: ({}) => ({
      resourceGroup: "myResourceGroup",
      privateEndpoint: "myPrivateEndpoint",
      registry: "myRegistry",
    }),
  },
];

```
## Dependencies
- [ResourceGroup](../Resources/ResourceGroup.md)
- [PrivateEndpoint](../Network/PrivateEndpoint.md)
- [Registry](../ContainerRegistry/Registry.md)
## Swagger Schema
```js
{
  description: 'An object that represents a private endpoint connection for a container registry.',
  type: 'object',
  allOf: [
    {
      description: 'The resource model definition for a ARM proxy resource. It will have everything other than required location and tags.',
      properties: {
        id: {
          description: 'The resource ID.',
          type: 'string',
          readOnly: true
        },
        name: {
          description: 'The name of the resource.',
          type: 'string',
          readOnly: true
        },
        type: {
          description: 'The type of the resource.',
          type: 'string',
          readOnly: true
        },
        systemData: {
          description: 'Metadata pertaining to creation and last modification of the resource.',
          type: 'object',
          readOnly: true,
          properties: {
            createdBy: {
              description: 'The identity that created the resource.',
              type: 'string'
            },
            createdByType: {
              description: 'The type of identity that created the resource.',
              enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],
              type: 'string',
              'x-ms-enum': { name: 'createdByType', modelAsString: true }
            },
            createdAt: {
              format: 'date-time',
              description: 'The timestamp of resource creation (UTC).',
              type: 'string'
            },
            lastModifiedBy: {
              description: 'The identity that last modified the resource.',
              type: 'string'
            },
            lastModifiedByType: {
              description: 'The type of identity that last modified the resource.',
              enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],
              type: 'string',
              'x-ms-enum': { name: 'lastModifiedByType', modelAsString: true }
            },
            lastModifiedAt: {
              format: 'date-time',
              description: 'The timestamp of resource modification (UTC).',
              type: 'string'
            }
          }
        }
      },
      'x-ms-azure-resource': true
    }
  ],
  properties: {
    properties: {
      description: 'The properties of a private endpoint connection.',
      'x-ms-client-flatten': true,
      type: 'object',
      properties: {
        privateEndpoint: {
          description: 'The resource of private endpoint.',
          type: 'object',
          properties: {
            id: {
              description: 'This is private endpoint resource created with Microsoft.Network resource provider.',
              type: 'string'
            }
          }
        },
        privateLinkServiceConnectionState: {
          description: 'A collection of information about the state of the connection between service consumer and provider.',
          type: 'object',
          properties: {
            status: {
              description: 'The private link service connection status.',
              enum: [ 'Approved', 'Pending', 'Rejected', 'Disconnected' ],
              type: 'string',
              'x-ms-enum': { name: 'ConnectionStatus', modelAsString: true }
            },
            description: {
              description: 'The description for connection status. For example if connection is rejected it can indicate reason for rejection.',
              type: 'string'
            },
            actionsRequired: {
              description: 'A message indicating if changes on the service provider require any updates on the consumer.',
              enum: [ 'None', 'Recreate' ],
              type: 'string',
              'x-ms-enum': { name: 'ActionsRequired', modelAsString: true }
            }
          }
        },
        provisioningState: {
          description: 'The provisioning state of private endpoint connection resource.',
          enum: [
            'Creating',
            'Updating',
            'Deleting',
            'Succeeded',
            'Failed',
            'Canceled'
          ],
          type: 'string',
          readOnly: true,
          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }
        }
      }
    }
  }
}
```
## Misc
The resource version is `2021-12-01-preview`.

The Swagger schema used to generate this documentation can be found [here](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2021-12-01-preview/containerregistry.json).
