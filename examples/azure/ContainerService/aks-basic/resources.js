// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Authorization.makeRoleAssignment({
    name: "1e63cb0c-1fb0-4e55-895b-76cfa17e45f1",
    properties: ({}) => ({
      properties: {
        roleName: "Contributor",
        principalName: "rg-aks-basic::cluster",
        principalType: "ServicePrincipal",
      },
    }),
    dependencies: ({ resources }) => ({
      scopeResourceGroup:
        resources.Resources.ResourceGroup[
          "mc_rg-aks-basic_cluster_canadacentral"
        ],
      principalManagedCluster:
        resources.ContainerService.ManagedCluster["rg-aks-basic::cluster"],
    }),
  });

  provider.ContainerService.makeManagedCluster({
    name: "rg-aks-basic::cluster",
    properties: ({}) => ({
      sku: {
        name: "Basic",
        tier: "Free",
      },
      identity: {
        type: "SystemAssigned",
      },
      properties: {
        kubernetesVersion: "1.21.7",
        dnsPrefix: "cluster-dns",
        agentPoolProfiles: [
          {
            name: "agentpool",
            count: 1,
            vmSize: "Standard_B4ms",
            osDiskSizeGB: 128,
            osDiskType: "Managed",
            kubeletDiskType: "OS",
            maxPods: 110,
            type: "VirtualMachineScaleSets",
            enableAutoScaling: false,
            orchestratorVersion: "1.21.7",
            enableNodePublicIP: false,
            mode: "System",
            osType: "Linux",
            osSKU: "Ubuntu",
            nodeImageVersion: "AKSUbuntu-1804gen2containerd-2022.01.19",
            enableFIPS: false,
          },
        ],
        addonProfiles: {
          azurepolicy: {
            enabled: false,
            config: null,
          },
          httpApplicationRouting: {
            enabled: false,
            config: null,
          },
        },
        oidcIssuerProfile: {
          enabled: false,
        },
        enableRBAC: true,
        networkProfile: {
          networkPlugin: "kubenet",
          podCidr: "10.244.0.0/16",
          serviceCidr: "10.0.0.0/16",
          dnsServiceIP: "10.0.0.10",
          dockerBridgeCidr: "172.17.0.1/16",
          outboundType: "loadBalancer",
          loadBalancerSku: "Standard",
          loadBalancerProfile: {
            managedOutboundIPs: {
              count: 1,
            },
          },
        },
        apiServerAccessProfile: {
          enablePrivateCluster: false,
        },
        servicePrincipalProfile: {
          clientId: "msi",
        },
      },
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-aks-basic"],
    }),
  });

  provider.Resources.makeResourceGroup({
    name: "rg-aks-basic",
  });
};

exports.createResources = createResources;
