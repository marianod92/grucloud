// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  const { config } = provider;

  provider.ec2.makeVpc({
    name: config.ec2.Vpc.vpcPostgres.name,
    properties: () => config.ec2.Vpc.vpcPostgres.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnet_1.name,
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpcPostgres,
    }),
    properties: () => config.ec2.Subnet.subnet_1.properties,
  });

  provider.ec2.makeSubnet({
    name: config.ec2.Subnet.subnet_2.name,
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpcPostgres,
    }),
    properties: () => config.ec2.Subnet.subnet_2.properties,
  });

  provider.ec2.makeInternetGateway({
    name: config.ec2.InternetGateway.igPostgres.name,
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpcPostgres,
    }),
  });

  provider.ec2.makeRouteTable({
    name: config.ec2.RouteTable.routeTablePublic.name,
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpcPostgres,
      subnets: [resources.ec2.Subnet.subnet_2, resources.ec2.Subnet.subnet_1],
    }),
  });

  provider.ec2.makeRoute({
    name: config.ec2.Route.routePublic.name,
    dependencies: ({ resources }) => ({
      routeTable: resources.ec2.RouteTable.routeTablePublic,
      ig: resources.ec2.InternetGateway.igPostgres,
    }),
    properties: () => config.ec2.Route.routePublic.properties,
  });

  provider.ec2.makeSecurityGroup({
    name: config.ec2.SecurityGroup.securityGroup.name,
    dependencies: ({ resources }) => ({
      vpc: resources.ec2.Vpc.vpcPostgres,
    }),
    properties: () => config.ec2.SecurityGroup.securityGroup.properties,
  });

  provider.ec2.makeSecurityGroupRuleIngress({
    name: config.ec2.SecurityGroupRuleIngress.sgRuleIngressPostgres.name,
    dependencies: ({ resources }) => ({
      securityGroup: resources.ec2.SecurityGroup.securityGroup,
    }),
    properties: () =>
      config.ec2.SecurityGroupRuleIngress.sgRuleIngressPostgres.properties,
  });

  provider.rds.makeDBInstance({
    name: config.rds.DBInstance.dbInstance.name,
    dependencies: ({ resources }) => ({
      dbSubnetGroup: resources.rds.DBSubnetGroup.subnetGroupPostgres,
      securityGroups: [resources.ec2.SecurityGroup.securityGroup],
    }),
    properties: () => config.rds.DBInstance.dbInstance.properties,
  });

  provider.rds.makeDBSubnetGroup({
    name: config.rds.DBSubnetGroup.subnetGroupPostgres.name,
    dependencies: ({ resources }) => ({
      subnets: [resources.ec2.Subnet.subnet_1, resources.ec2.Subnet.subnet_2],
    }),
    properties: () => config.rds.DBSubnetGroup.subnetGroupPostgres.properties,
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