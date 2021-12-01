---
id: VirtualMachine
title: Virtual Machine
---

Provides a Virtual Machine:

```js
provider.compute.makeVirtualMachine({
  name: "vm",
  properties: ({ config }) => ({
    properties: {
      hardwareProfile: {
        vmSize: "Standard_A1_v2",
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
    resourceGroup: resources.resourceManagement.ResourceGroup["resource-group"],
    networkInterface:
      resources.virtualNetworks.NetworkInterface["network-interface"],
  }),
});
```

Retrieve the list of all possible virtual machine on a given location:

```sh
az vm list-sizes  --output table --location uksouth
```

Regarding the _imageReference_, execute this command and select the desired image:

```sh
az vm image list  --output table
```

### Examples

- [basic example](https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/resources.js)

### Properties

- [all properties](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#request-body)

### Dependencies

- [ResourceGroup](../resourceManagement/ResourceGroup.md)
- [NetworkInterface](../virtualNetworks/NetworkInterface.md)