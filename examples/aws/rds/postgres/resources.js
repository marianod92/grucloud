// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.makeVpc({
    name: "vpc-postgres",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/16",
      DnsSupport: true,
      DnsHostnames: true,
    }),
  });

  provider.EC2.makeInternetGateway({
    name: "ig-postgres",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-postgres"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "subnet-1",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/19",
      AvailabilityZone: `${config.region}a`,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-postgres"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "subnet-2",
    properties: ({ config }) => ({
      CidrBlock: "192.168.32.0/19",
      AvailabilityZone: `${config.region}b`,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-postgres"],
    }),
  });

  provider.EC2.makeRouteTable({
    name: "route-table-public",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-postgres"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table-public"],
      subnet: resources.EC2.Subnet["subnet-1"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table-public"],
      subnet: resources.EC2.Subnet["subnet-2"],
    }),
  });

  provider.EC2.makeRoute({
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["route-table-public"],
      ig: resources.EC2.InternetGateway["ig-postgres"],
    }),
  });

  provider.EC2.makeSecurityGroup({
    name: "security-group",
    properties: ({ config }) => ({
      Description: "Managed By GruCloud",
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-postgres"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "sg-rule-ingress-postgres",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "tcp",
        FromPort: 5432,
        ToPort: 5432,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup["security-group"],
    }),
  });

  provider.IAM.makePolicy({
    name: "lambda-policy",
    properties: ({ config }) => ({
      PolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: ["logs:*"],
            Effect: "Allow",
            Resource: "*",
          },
          {
            Action: ["sqs:*"],
            Effect: "Allow",
            Resource: "*",
          },
        ],
      },
      Path: "/",
      Description: "Allow logs",
    }),
  });

  provider.KMS.makeKey({
    name: "secret-key-test",
  });

  provider.RDS.makeDBSubnetGroup({
    name: "subnet-group-postgres",
    properties: ({ config }) => ({
      DBSubnetGroupDescription: "db subnet group",
    }),
    dependencies: ({ resources }) => ({
      subnets: [
        resources.EC2.Subnet["subnet-1"],
        resources.EC2.Subnet["subnet-2"],
      ],
    }),
  });

  provider.RDS.makeDBInstance({
    name: "db-instance",
    properties: ({ config }) => ({
      DBInstanceClass: "db.t2.micro",
      Engine: "postgres",
      EngineVersion: "12.5",
      AllocatedStorage: 20,
      MaxAllocatedStorage: 1000,
      PubliclyAccessible: true,
      PreferredBackupWindow: "22:10-22:40",
      PreferredMaintenanceWindow: "fri:23:40-sat:00:10",
      BackupRetentionPeriod: 1,
      MasterUsername: process.env.DB_INSTANCE_MASTER_USERNAME,
      MasterUserPassword: process.env.DB_INSTANCE_MASTER_USER_PASSWORD,
    }),
    dependencies: ({ resources }) => ({
      dbSubnetGroup: resources.RDS.DBSubnetGroup["subnet-group-postgres"],
      securityGroups: [resources.EC2.SecurityGroup["security-group"]],
    }),
  });
};

exports.createResources = createResources;
