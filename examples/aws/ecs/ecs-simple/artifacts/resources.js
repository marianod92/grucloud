// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.AutoScaling.makeAutoScalingGroup({
    name: "EcsInstanceAsg",
    properties: ({ config }) => ({
      MinSize: 0,
      MaxSize: 1,
      DesiredCapacity: 1,
      DefaultCooldown: 300,
      HealthCheckType: "EC2",
      HealthCheckGracePeriod: 0,
    }),
    dependencies: ({ resources }) => ({
      subnets: [
        resources.EC2.Subnet["PubSubnetAz1"],
        resources.EC2.Subnet["PubSubnetAz2"],
      ],
      launchConfiguration:
        resources.AutoScaling.LaunchConfiguration[
          "EC2ContainerService-cluster-EcsInstanceLc-COYK3CQZ0QRJ"
        ],
    }),
  });

  provider.AutoScaling.makeLaunchConfiguration({
    name: "EC2ContainerService-cluster-EcsInstanceLc-COYK3CQZ0QRJ",
    properties: ({ config }) => ({
      InstanceType: "t2.micro",
      ImageId: "ami-02e136e904f3da870",
      UserData:
        "IyEvYmluL2Jhc2gKZWNobyBFQ1NfQ0xVU1RFUj1jbHVzdGVyID4+IC9ldGMvZWNzL2Vjcy5jb25maWc7ZWNobyBFQ1NfQkFDS0VORF9IT1NUPSA+PiAvZXRjL2Vjcy9lY3MuY29uZmlnOw==",
      InstanceMonitoring: {
        Enabled: true,
      },
      BlockDeviceMappings: [
        {
          DeviceName: "/dev/xvda",
          Ebs: {
            VolumeSize: 30,
            VolumeType: "gp2",
          },
        },
      ],
      EbsOptimized: false,
    }),
    dependencies: ({ resources }) => ({
      instanceProfile: resources.IAM.InstanceProfile["ecsInstanceRole"],
      securityGroups: [resources.EC2.SecurityGroup["EcsSecurityGroup"]],
    }),
  });

  provider.EC2.makeVpc({
    name: "Vpc",
    properties: ({ config }) => ({
      CidrBlock: "10.0.0.0/16",
    }),
  });

  provider.EC2.makeInternetGateway({
    name: "InternetGateway",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["Vpc"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "PubSubnetAz1",
    properties: ({ config }) => ({
      CidrBlock: "10.0.0.0/24",
      AvailabilityZone: `${config.region}a`,
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
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["Vpc"],
    }),
  });

  provider.EC2.makeRouteTable({
    name: "RouteViaIgw",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["Vpc"],
      subnets: [
        resources.EC2.Subnet["PubSubnetAz1"],
        resources.EC2.Subnet["PubSubnetAz2"],
      ],
    }),
  });

  provider.EC2.makeRoute({
    name: "RouteViaIgw-igw",
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["RouteViaIgw"],
      ig: resources.EC2.InternetGateway["InternetGateway"],
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

  provider.ECS.makeCapacityProvider({
    name: "cp",
    properties: ({ config }) => ({
      autoScalingGroupProvider: {
        managedScaling: {
          status: "ENABLED",
          targetCapacity: 100,
          minimumScalingStepSize: 1,
          maximumScalingStepSize: 10000,
          instanceWarmupPeriod: 300,
        },
        managedTerminationProtection: "DISABLED",
      },
    }),
    dependencies: ({ resources }) => ({
      autoScalingGroup:
        resources.AutoScaling.AutoScalingGroup["EcsInstanceAsg"],
    }),
  });

  provider.ECS.makeCluster({
    name: "cluster",
    properties: ({ config }) => ({
      settings: [
        {
          name: "containerInsights",
          value: "enabled",
        },
      ],
    }),
    dependencies: ({ resources }) => ({
      capacityProviders: [resources.ECS.CapacityProvider["cp"]],
    }),
  });

  provider.ECS.makeTaskDefinition({
    name: "nginx",
    properties: ({ config }) => ({
      containerDefinitions: [
        {
          name: "nginx",
          image: "nginx",
          cpu: 0,
          memory: 512,
          portMappings: [
            {
              containerPort: 80,
              hostPort: 80,
              protocol: "tcp",
            },
          ],
          essential: true,
          environment: [],
          mountPoints: [],
          volumesFrom: [],
        },
      ],
      placementConstraints: [],
      requiresCompatibilities: ["EC2"],
    }),
  });

  provider.ECS.makeService({
    name: "service-nginx",
    properties: ({ config }) => ({
      launchType: "EC2",
      desiredCount: 1,
      deploymentConfiguration: {
        deploymentCircuitBreaker: {
          enable: false,
          rollback: false,
        },
        maximumPercent: 200,
        minimumHealthyPercent: 100,
      },
      placementConstraints: [],
      placementStrategy: [
        {
          type: "spread",
          field: "attribute:ecs.availability-zone",
        },
        {
          type: "spread",
          field: "instanceId",
        },
      ],
      schedulingStrategy: "REPLICA",
      enableECSManagedTags: true,
      enableExecuteCommand: false,
    }),
    dependencies: ({ resources }) => ({
      cluster: resources.ECS.Cluster["cluster"],
      taskDefinition: resources.ECS.TaskDefinition["nginx"],
    }),
  });

  provider.IAM.makeRole({
    name: "ecsInstanceRole",
    properties: ({ config }) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2008-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: "ec2.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
    }),
    dependencies: ({ resources }) => ({
      policies: [
        resources.IAM.Policy[
          "service-role/AmazonEC2ContainerServiceforEC2Role"
        ],
      ],
    }),
  });

  provider.IAM.usePolicy({
    name: "service-role/AmazonEC2ContainerServiceforEC2Role",
    properties: ({ config }) => ({
      Arn: "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role",
    }),
  });

  provider.IAM.makeInstanceProfile({
    name: "ecsInstanceRole",
    dependencies: ({ resources }) => ({
      roles: [resources.IAM.Role["ecsInstanceRole"]],
    }),
  });
};

exports.createResources = createResources;
