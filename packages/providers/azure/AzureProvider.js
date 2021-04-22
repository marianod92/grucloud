const assert = require("assert");
const { pipe, eq, get } = require("rubico");

const { defaultsDeep, isFunction } = require("rubico/x");

const CoreProvider = require("@grucloud/core/CoreProvider");
const AzClient = require("./AzClient");
const logger = require("@grucloud/core/logger")({ prefix: "AzProvider" });
const AzTag = require("./AzTag");
const { getField, notAvailable } = require("@grucloud/core/ProviderCommon");
const { AzAuthorize } = require("./AzAuthorize");
const { isUpByIdCore } = require("@grucloud/core/Common");
const { checkEnv } = require("@grucloud/core/Utils");
const { tos } = require("@grucloud/core/tos");

const fnSpecs = (config) => {
  const { location, managedByKey, managedByValue, stageTagKey, stage } = config;
  const subscriptionId = process.env.SUBSCRIPTION_ID;

  //TODO move isInstanceUp and  isUpByIdFactory in AzClient
  const getStateName = (instance) => {
    const { provisioningState } = instance.properties;
    assert(provisioningState);
    logger.debug(`az stateName ${provisioningState}`);
    return provisioningState;
  };

  const isInstanceUp = (instance) => {
    return ["Succeeded"].includes(getStateName(instance));
  };
  const isUpByIdFactory = ({ getById }) =>
    isUpByIdCore({
      isInstanceUp,
      getById,
    });

  const isOurMinion = AzTag.isOurMinion;

  const buildTags = () => ({
    [managedByKey]: managedByValue,
    [stageTagKey]: stage,
  });

  const isDefaultResourceGroup = eq(get("name"), "NetworkWatcherRG");

  return [
    {
      // https://docs.microsoft.com/en-us/rest/api/resources/resourcegroups
      // GET    https://management.azure.com/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}?api-version=2019-10-01
      // PUT    https://management.azure.com/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}?api-version=2019-10-01
      // DELETE https://management.azure.com/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}?api-version=2019-10-01
      // LIST   https://management.azure.com/subscriptions/{subscriptionId}/resourcegroups?api-version=2019-10-01

      type: "ResourceGroup",
      Client: ({ spec }) =>
        AzClient({
          spec,
          pathBase: `/subscriptions/${subscriptionId}/resourcegroups`,
          pathSuffix: () => "",
          queryParameters: () => "?api-version=2019-10-01",
          isUpByIdFactory,
          isInstanceUp,
          config,
          configDefault: ({ properties }) =>
            defaultsDeep({
              location,
              tags: buildTags(config),
            })(properties),
          isDefault: isDefaultResourceGroup,
          cannotBeDeleted: isDefaultResourceGroup,
        }),
      isOurMinion,
    },
    {
      // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/virtualnetworks
      // GET, PUT, DELETE, LIST: https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}?api-version=2020-05-01
      // LISTALL                 https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks?api-version=2020-05-01

      type: "VirtualNetwork",
      dependsOn: ["ResourceGroup"],
      Client: ({ spec }) =>
        AzClient({
          spec,
          pathBase: `/subscriptions/${subscriptionId}`,
          pathSuffix: ({ dependencies: { resourceGroup } }) => {
            assert(resourceGroup, "missing resourceGroup dependency");
            return `/resourceGroups/${resourceGroup.name}/providers/Microsoft.Network/virtualNetworks`;
          },
          pathSuffixList: () => `/providers/Microsoft.Network/virtualNetworks`,
          queryParameters: () => "?api-version=2020-05-01",
          isUpByIdFactory,
          isInstanceUp,
          config,
          configDefault: ({ properties }) =>
            defaultsDeep({
              location,
              tags: buildTags(config),
            })(properties),
        }),
      isOurMinion,
    },
    {
      // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networksecuritygroups
      // GET, PUT, DELETE, LIST: https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}?api-version=2020-05-01
      // LISTALL                 https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/networkSecurityGroups?api-version=2020-05-01
      type: "SecurityGroup",
      dependsOn: ["ResourceGroup"],
      Client: ({ spec }) =>
        AzClient({
          spec,

          pathBase: `/subscriptions/${subscriptionId}`,
          pathSuffix: ({ dependencies: { resourceGroup } }) => {
            assert(resourceGroup, "missing resourceGroup dependency");
            return `/resourceGroups/${resourceGroup.name}/providers/Microsoft.Network/networkSecurityGroups`;
          },
          pathSuffixList: () =>
            `/providers/Microsoft.Network/networkSecurityGroups`,
          queryParameters: () => "?api-version=2020-05-01",
          isUpByIdFactory,
          isInstanceUp,
          config,
          configDefault: ({ properties }) =>
            defaultsDeep({
              location,
              tags: buildTags(config),
            })(properties),
        }),
      isOurMinion,
    },
    {
      // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/publicipaddresses
      // GET, PUT, DELETE, LIST https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}?api-version=2020-05-01
      // LISTALL                https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPAddresses?api-version=2020-05-01

      type: "PublicIpAddress",
      dependsOn: ["ResourceGroup"],

      Client: ({ spec }) =>
        AzClient({
          spec,
          pathBase: `/subscriptions/${subscriptionId}`,
          pathSuffix: ({ dependencies: { resourceGroup } }) => {
            assert(resourceGroup, "missing resourceGroup dependency");
            return `/resourceGroups/${resourceGroup.name}/providers/Microsoft.Network/publicIPAddresses`;
          },
          pathSuffixList: () =>
            `/providers/Microsoft.Network/publicIPAddresses`,
          queryParameters: () => "?api-version=2020-05-01",
          isUpByIdFactory,
          isInstanceUp,
          config,
          configDefault: ({ properties, dependencies }) => {
            return defaultsDeep({
              location,
              tags: buildTags(config),
              properties: {},
            })(properties);
          },
        }),
      isOurMinion,
    },
    {
      // https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networkinterfaces
      // GET, PUT, DELETE, LIST: https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}?api-version=2020-05-01
      // LISTALL                 https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Network/networkInterfaces?api-version=2020-05-01
      type: "NetworkInterface",
      dependsOn: [
        "ResourceGroup",
        "VirtualNetwork",
        "SecurityGroup",
        "PublicIpAddress",
      ],
      Client: ({ spec }) =>
        AzClient({
          spec,
          pathBase: `/subscriptions/${subscriptionId}`,
          pathSuffix: ({ dependencies: { resourceGroup } }) => {
            assert(resourceGroup, "missing resourceGroup dependency");
            return `/resourceGroups/${resourceGroup.name}/providers/Microsoft.Network/networkInterfaces`;
          },
          pathSuffixList: () =>
            `/providers/Microsoft.Network/networkInterfaces`,
          queryParameters: () => "?api-version=2020-05-01",
          isInstanceUp,
          config,
          configDefault: async ({ properties, dependencies }) => {
            const {
              securityGroup,
              virtualNetwork,
              subnet,
              publicIpAddress,
            } = dependencies;
            assert(virtualNetwork, "dependencies is missing virtualNetwork");
            assert(subnet, "dependencies is missing subnet");
            assert(publicIpAddress, "dependencies is missing publicIpAddress");
            logger.debug(
              `NetworkInterface configDefault ${tos({
                properties,
                subnet,
                virtualNetwork,
              })}`
            );

            const findSubnetId = (subnetName, vnetLive) => {
              if (!vnetLive) {
                logger.debug(`findSubnetId no id yet`);
                return notAvailable(subnetName, "id");
              }
              assert(
                vnetLive.properties.subnets,
                "virtual network is missing subnets"
              );
              const subnet = vnetLive.properties.subnets.find(
                (item) => item.name === subnetName
              );
              if (!subnet) {
                const message = `cannot find subnet ${subnetName} in the virtual network subnet: ${tos(
                  { subnet: vnetLive.properties.subnet }
                )}`;
                logger.error(msg);
                throw { code: 422, message };
              }
              logger.debug(
                `findSubnetId ${tos({ subnetName, id: subnet.id })}`
              );

              return subnet.id;
            };
            return defaultsDeep({
              location,
              tags: buildTags(config),
              properties: {
                ...(securityGroup && {
                  networkSecurityGroup: { id: getField(securityGroup, "id") },
                }),
                ipConfigurations: [
                  {
                    properties: {
                      subnet: {
                        id: findSubnetId(subnet, virtualNetwork.live),
                      },
                      ...(publicIpAddress && {
                        publicIPAddress: {
                          id: getField(publicIpAddress, "id"),
                        },
                      }),
                    },
                  },
                ],
              },
            })(properties);
          },
        }),
      isOurMinion,
    },

    {
      // https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines
      // GET, PUT, DELETE, LIST: https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}?api-version=2019-12-01
      // LISTALL                 https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachines?api-version=2019-12-01

      type: "VirtualMachine",
      dependsOn: ["ResourceGroup", "NetworkInterface"],
      Client: ({ spec }) =>
        AzClient({
          spec,
          pathBase: `/subscriptions/${subscriptionId}`,
          pathSuffix: ({ dependencies: { resourceGroup } }) => {
            assert(resourceGroup, "missing resourceGroup dependency");
            return `/resourceGroups/${resourceGroup.name}/providers/Microsoft.Compute/virtualMachines`;
          },
          pathSuffixList: () => `/providers/Microsoft.Compute/virtualMachines`,
          queryParameters: () => "?api-version=2019-12-01",
          isUpByIdFactory,
          isInstanceUp,
          config,
          configDefault: ({ properties, dependencies }) => {
            const { networkInterface } = dependencies;
            assert(
              networkInterface,
              "networkInterfaces is missing VirtualMachine"
            );
            return defaultsDeep({
              location,
              tags: buildTags(config),
              properties: {
                networkProfile: {
                  networkInterfaces: [
                    {
                      id: getField(networkInterface, "id"),
                    },
                  ],
                },
              },
            })(properties);
          },
        }),
      isOurMinion,
    },
  ];
};

exports.AzureProvider = ({ name = "azure", config, ...other }) => {
  assert(isFunction(config), "config must be a function");

  const mandatoryEnvs = ["TENANT_ID", "SUBSCRIPTION_ID", "APP_ID", "PASSWORD"];
  checkEnv(mandatoryEnvs);

  const { TENANT_ID, APP_ID, PASSWORD, SUBSCRIPTION_ID } = process.env;

  let bearerToken;
  const start = async () => {
    const result = await AzAuthorize({
      tenantId: TENANT_ID,
      appId: APP_ID,
      password: PASSWORD,
    });
    bearerToken = result.bearerToken;
  };

  const configProviderDefault = {
    bearerToken: () => bearerToken,
    retryCount: 60,
    retryDelay: 10e3,
  };

  const info = () => ({
    subscriptionId: SUBSCRIPTION_ID,
    tenantId: TENANT_ID,
    appId: APP_ID,
  });

  const core = CoreProvider({
    ...other,
    type: "azure",
    name,
    mandatoryConfigKeys: ["location"],
    get config() {
      return pipe([
        () => config(configProviderDefault),
        defaultsDeep(configProviderDefault),
      ])();
    },
    fnSpecs,
    start,
    info,
  });

  return core;
};
