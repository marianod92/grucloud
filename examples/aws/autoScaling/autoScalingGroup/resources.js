// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.AutoScaling.makeAutoScalingGroup({
    name: "asg",
    properties: ({ config }) => ({
      MinSize: 1,
      MaxSize: 1,
      DesiredCapacity: 1,
      DefaultCooldown: 300,
      HealthCheckType: "EC2",
      HealthCheckGracePeriod: 300,
    }),
    dependencies: ({ resources }) => ({
      subnets: [
        resources.EC2.Subnet["PubSubnetAz1"],
        resources.EC2.Subnet["PubSubnetAz2"],
      ],
      launchTemplate: resources.EC2.LaunchTemplate["lt-ec2-micro"],
    }),
  });

  provider.EC2.makeKeyPair({
    name: "kp-ecs",
  });

  provider.EC2.makeVpc({
    name: "Vpc",
    properties: ({ config }) => ({
      CidrBlock: "10.0.0.0/16",
      DnsSupport: true,
      DnsHostnames: true,
    }),
  });

  provider.EC2.makeSubnet({
    name: "PubSubnetAz1",
    properties: ({ config }) => ({
      CidrBlock: "10.0.0.0/24",
      AvailabilityZone: `${config.region}a`,
      MapPublicIpOnLaunch: false,
      MapCustomerOwnedIpOnLaunch: false,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["Vpc"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "PubSubnetAz2",
    properties: ({ config }) => ({
      CidrBlock: "10.0.1.0/24",
      AvailabilityZone: `${config.region}b`,
      MapPublicIpOnLaunch: false,
      MapCustomerOwnedIpOnLaunch: false,
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["Vpc"],
    }),
  });

  provider.EC2.makeSecurityGroup({
    name: "EcsSecurityGroup",
    properties: ({ config }) => ({
      Description: "Managed By GruCloud",
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["Vpc"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "EcsSecurityGroup-rule-ingress-tcp-80-v4",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "tcp",
        FromPort: 80,
        ToPort: 80,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup["EcsSecurityGroup"],
    }),
  });

  provider.EC2.makeLaunchTemplate({
    name: "lt-ec2-micro",
    properties: ({ config }) => ({
      LaunchTemplateData: {
        EbsOptimized: false,
        ImageId: "ami-02e136e904f3da870",
        InstanceType: "t2.micro",
        KeyName: "kp-ecs",
      },
    }),
    dependencies: ({ resources }) => ({
      keyPair: resources.EC2.KeyPair["kp-ecs"],
      iamInstanceProfile: resources.IAM.InstanceProfile["role-ecs"],
    }),
  });

  provider.IAM.makeRole({
    name: "role-ecs",
    properties: ({ config }) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "ec2.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
    }),
  });

  provider.IAM.makeInstanceProfile({
    name: "role-ecs",
    dependencies: ({ resources }) => ({
      roles: [resources.IAM.Role["role-ecs"]],
    }),
  });
};

exports.createResources = createResources;
