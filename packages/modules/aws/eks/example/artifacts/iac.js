// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  const { config } = provider;

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEc2ContainerRegistryReadOnly.name,
    namespace: "EKS",
    properties: () =>
      config.iam.Policy.amazonEc2ContainerRegistryReadOnly.properties,
  });

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEksCniPolicy.name,
    namespace: "EKS",
    properties: () => config.iam.Policy.amazonEksCniPolicy.properties,
  });

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEksClusterPolicy.name,
    namespace: "EKS",
    properties: () => config.iam.Policy.amazonEksClusterPolicy.properties,
  });

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEksvpcResourceController.name,
    namespace: "EKS",
    properties: () =>
      config.iam.Policy.amazonEksvpcResourceController.properties,
  });

  provider.iam.usePolicy({
    name: config.iam.Policy.amazonEksWorkerNodePolicy.name,
    namespace: "EKS",
    properties: () => config.iam.Policy.amazonEksWorkerNodePolicy.properties,
  });

  provider.iam.makeRole({
    name: config.iam.Role.roleCluster.name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      policies: [
        resources.iam.Policy.amazonEksClusterPolicy,
        resources.iam.Policy.amazonEksvpcResourceController,
      ],
    }),
    properties: () => config.iam.Role.roleCluster.properties,
  });

  provider.iam.makeRole({
    name: config.iam.Role.roleNodeGroup.name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      policies: [
        resources.iam.Policy.amazonEksWorkerNodePolicy,
        resources.iam.Policy.amazonEc2ContainerRegistryReadOnly,
        resources.iam.Policy.amazonEksCniPolicy,
      ],
    }),
    properties: () => config.iam.Role.roleNodeGroup.properties,
  });

  provider.ec2.makeVpc({
    name: config.ec2.Vpc.vpc.name,
    namespace: "VPC",
    properties: () => config.ec2.Vpc.vpc.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnetPrivateA.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.Subnet.subnetPrivateA.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnetPrivateB.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.Subnet.subnetPrivateB.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnetPublicA.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.Subnet.subnetPublicA.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnetPublicB.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.Subnet.subnetPublicB.properties,
  });

  provider.ec2.makeElasticIpAddress({
    name: config.ec2.ElasticIpAddress.iep.name,
    namespace: "VPC",
  });

  provider.ec2.makeInternetGateway({
    name: config.ec2.InternetGateway.internetGateway.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
  });

  provider.ec2.makeNatGateway({
    name: config.ec2.NatGateway.natGateway.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      subnet: resources.ec2.Subnet.subnetPublicA,
      eip: resources.ec2.ElasticIpAddress.iep,
    }),
  });

  provider.ec2.makeRouteTable({
    name: config.ec2.RouteTable.routeTablePrivateA.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
      subnets: [resources.ec2.Subnet.subnetPrivateA],
    }),
  });

  provider.ec2.makeRouteTable({
    name: config.ec2.RouteTable.routeTablePrivateB.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
      subnets: [resources.ec2.Subnet.subnetPrivateB],
    }),
  });

  provider.ec2.makeRouteTable({
    name: config.ec2.RouteTable.routeTablePublic.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
      subnets: [
        resources.ec2.Subnet.subnetPublicB,
        resources.ec2.Subnet.subnetPublicA,
      ],
    }),
  });

  provider.ec2.makeRoute({
    name: config.ec2.Route.routePrivateA.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      routeTable: resources.ec2.RouteTable.routeTablePrivateA,
      natGateway: resources.ec2.NatGateway.natGateway,
    }),
    properties: () => config.ec2.Route.routePrivateA.properties,
  });

  provider.ec2.makeRoute({
    name: config.ec2.Route.routePrivateB.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      routeTable: resources.ec2.RouteTable.routeTablePrivateB,
      natGateway: resources.ec2.NatGateway.natGateway,
    }),
    properties: () => config.ec2.Route.routePrivateB.properties,
  });

  provider.ec2.makeRoute({
    name: config.ec2.Route.routePublic.name,
    namespace: "VPC",
    dependencies: ({ resources }) => ({
      routeTable: resources.ec2.RouteTable.routeTablePublic,
      ig: resources.ec2.InternetGateway.internetGateway,
    }),
    properties: () => config.ec2.Route.routePublic.properties,
  });

  provider.ec2.makeSecurityGroup({
    name: config.ec2.SecurityGroup.securityGroupCluster.name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.SecurityGroup.securityGroupCluster.properties,
  });

  provider.ec2.makeSecurityGroup({
    name: config.ec2.SecurityGroup.securityGroupNode.name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpc,
    }),
    properties: () => config.ec2.SecurityGroup.securityGroupNode.properties,
  });

  provider.ec2.makeSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress.sgClusterRuleIngressHttps.name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupCluster,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleIngress.sgClusterRuleIngressHttps.properties,
  });

  provider.ec2.makeSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress.sgRuleNodeGroupIngressCluster
      .name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupNode,
      securityGroupFrom: resources.ec2.SecurityGroup.securityGroupCluster,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleIngress.sgRuleNodeGroupIngressCluster
        .properties,
  });

  provider.ec2.makeSecurityGroupRuleEgress({
    name: config.ec2.SecurityGroupRuleEgress.sgClusterRuleEgress.name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroupCluster,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleEgress.sgClusterRuleEgress.properties,
  });

  provider.eks.makeCluster({
    name: config.eks.Cluster.cluster.name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      subnets: [
        resources.ec2.Subnet.subnetPublicA,
        resources.ec2.Subnet.subnetPublicB,
        resources.ec2.Subnet.subnetPrivateA,
        resources.ec2.Subnet.subnetPrivateB,
      ],
      securityGroups: [
        resources.ec2.SecurityGroup.securityGroupCluster,
        resources.ec2.SecurityGroup.securityGroupNode,
      ],
      role: resources.iam.Role.roleCluster,
    }),
    properties: () => config.eks.Cluster.cluster.properties,
  });

  provider.eks.makeNodeGroup({
    name: config.eks.NodeGroup.nodeGroupPrivateCluster.name,
    namespace: "EKS",
    dependencies: ({ resources }) => ({
      cluster: resources.eks.Cluster.cluster,
      subnets: [
        resources.ec2.Subnet.subnetPrivateA,
        resources.ec2.Subnet.subnetPrivateB,
      ],
      role: resources.iam.Role.roleNodeGroup,
    }),
    properties: () => config.eks.NodeGroup.nodeGroupPrivateCluster.properties,
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AwsProvider, { config: require("./config") });
  createResources({
    provider,
  });

  return {
    provider,
  };
};