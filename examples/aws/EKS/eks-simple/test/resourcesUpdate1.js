// Generated by 'gc gencode'
const { pipe, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

exports.createResources = () => [
  {
    type: "Cluster",
    group: "EKS",
    name: "my-cluster",
    properties: ({ config }) => ({
      version: "1.20",
      resourcesVpcConfig: {
        endpointPublicAccess: false,
        endpointPrivateAccess: true,
      },
      tags: { mykey1: "value" },
    }),
    dependencies: () => ({
      subnets: [
        "SubnetPrivateUSEAST1D",
        "SubnetPrivateUSEAST1F",
        "SubnetPublicUSEAST1D",
        "SubnetPublicUSEAST1F",
      ],
      securityGroups: ["ControlPlaneSecurityGroup"],
      role: "eksctl-my-cluster-cluster-ServiceRole-1T8YHA5ZIYVRB",
    }),
  },
  {
    type: "NodeGroup",
    group: "EKS",
    name: "ng-1",
    properties: ({ config }) => ({
      capacityType: "ON_DEMAND",
      scalingConfig: {
        minSize: 1,
        maxSize: 2,
        desiredSize: 2,
      },
      labels: {
        "alpha.eksctl.io/nodegroup-name": "ng-1",
        "alpha.eksctl.io/cluster-name": "my-cluster",
      },
      tags: { mykey1: "value" },
    }),
    dependencies: () => ({
      cluster: "my-cluster",
      subnets: ["SubnetPublicUSEAST1D", "SubnetPublicUSEAST1F"],
      role: "eksctl-my-cluster-nodegroup-ng-1-NodeInstanceRole-1LT5OVYUG2SEI",
      launchTemplate: "eksctl-my-cluster-nodegroup-ng-1",
    }),
  },
];
