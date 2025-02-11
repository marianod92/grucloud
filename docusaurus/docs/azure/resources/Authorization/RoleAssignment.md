---
id: RoleAssignment
title: RoleAssignment
---
Provides a **RoleAssignment** from the **Authorization** group
## Examples
### Create role assignment for subscription
```js
exports.createResources = () => [
  {
    type: "RoleAssignment",
    group: "Authorization",
    name: "myRoleAssignment",
    properties: () => ({
      properties: {
        roleDefinitionId:
          "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d",
        principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",
        principalType: "User",
      },
    }),
    dependencies: ({}) => ({
      scopeResourceGroup: "myResourceGroup",
      scopeVirtualMachine: "myVirtualMachine",
      roleDefinition: "myRoleDefinition",
      principalManagedCluster: "myManagedCluster",
      principalDiskEncryptionSet: "myDiskEncryptionSet",
      principalVirtualMachine: "myVirtualMachine",
    }),
  },
];

```

### Create role assignment for resource group
```js
exports.createResources = () => [
  {
    type: "RoleAssignment",
    group: "Authorization",
    name: "myRoleAssignment",
    properties: () => ({
      properties: {
        roleDefinitionId:
          "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d",
        principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",
        principalType: "User",
      },
    }),
    dependencies: ({}) => ({
      scopeResourceGroup: "myResourceGroup",
      scopeVirtualMachine: "myVirtualMachine",
      roleDefinition: "myRoleDefinition",
      principalManagedCluster: "myManagedCluster",
      principalDiskEncryptionSet: "myDiskEncryptionSet",
      principalVirtualMachine: "myVirtualMachine",
    }),
  },
];

```

### Create role assignment for resource
```js
exports.createResources = () => [
  {
    type: "RoleAssignment",
    group: "Authorization",
    name: "myRoleAssignment",
    properties: () => ({
      properties: {
        roleDefinitionId:
          "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d",
        principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",
        principalType: "User",
      },
    }),
    dependencies: ({}) => ({
      scopeResourceGroup: "myResourceGroup",
      scopeVirtualMachine: "myVirtualMachine",
      roleDefinition: "myRoleDefinition",
      principalManagedCluster: "myManagedCluster",
      principalDiskEncryptionSet: "myDiskEncryptionSet",
      principalVirtualMachine: "myVirtualMachine",
    }),
  },
];

```
## Dependencies
- [ResourceGroup](../Resources/ResourceGroup.md)
- [VirtualMachine](../Compute/VirtualMachine.md)
- [RoleDefinition](../Authorization/RoleDefinition.md)
- [ManagedCluster](../ContainerService/ManagedCluster.md)
- [DiskEncryptionSet](../Compute/DiskEncryptionSet.md)
- [VirtualMachine](../Compute/VirtualMachine.md)
## Swagger Schema
```js
{
  properties: {
    properties: {
      'x-ms-client-flatten': true,
      description: 'Role assignment properties.',
      properties: {
        scope: {
          readOnly: true,
          type: 'string',
          description: 'The role assignment scope.'
        },
        roleDefinitionId: { type: 'string', description: 'The role definition ID.' },
        principalId: { type: 'string', description: 'The principal ID.' },
        principalType: {
          type: 'string',
          description: 'The principal type of the assigned principal ID.',
          enum: [
            'User',
            'Group',
            'ServicePrincipal',
            'ForeignGroup',
            'Device'
          ],
          default: 'User',
          'x-ms-enum': { name: 'PrincipalType', modelAsString: true }
        },
        description: {
          type: 'string',
          description: 'Description of role assignment'
        },
        condition: {
          type: 'string',
          description: "The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'"
        },
        conditionVersion: {
          type: 'string',
          description: "Version of the condition. Currently accepted value is '2.0'"
        },
        createdOn: {
          readOnly: true,
          type: 'string',
          description: 'Time it was created',
          format: 'date-time'
        },
        updatedOn: {
          readOnly: true,
          type: 'string',
          description: 'Time it was updated',
          format: 'date-time'
        },
        createdBy: {
          readOnly: true,
          type: 'string',
          description: 'Id of the user who created the assignment'
        },
        updatedBy: {
          readOnly: true,
          type: 'string',
          description: 'Id of the user who updated the assignment'
        },
        delegatedManagedIdentityResourceId: {
          type: 'string',
          description: 'Id of the delegated managed identity resource'
        }
      },
      required: [ 'roleDefinitionId', 'principalId' ],
      type: 'object'
    }
  },
  required: [ 'properties' ],
  type: 'object',
  description: 'Role assignment create parameters.'
}
```
## Misc
The resource version is `2021-04-01-preview`.

The Swagger schema used to generate this documentation can be found [here](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/authorization-RoleAssignmentsCalls.json).
