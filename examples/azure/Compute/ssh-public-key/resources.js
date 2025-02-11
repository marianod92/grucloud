// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "SshPublicKey",
    group: "Compute",
    properties: ({}) => ({
      name: "my-key-pair",
      publicKeyFile: "keys/my-key-pair.pub",
      properties: {},
    }),
    dependencies: () => ({
      resourceGroup: "rg-ssh-public-key",
    }),
  },
  {
    type: "ResourceGroup",
    group: "Resources",
    properties: ({}) => ({
      name: "rg-ssh-public-key",
    }),
  },
];
