exports.iacTpl = ({ resourcesCode, resourcesVarNames = [] }) => `
// Generated by azure2gc
const { get } = require("rubico")
const { AzureProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  ${resourcesCode}
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AzureProvider, { config: require("./config") });
  createResources({
    provider,
  });

  return {
    provider,
  };
};
`;