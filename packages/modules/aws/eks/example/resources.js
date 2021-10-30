// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.makeVpc({
    name: "VPC",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/16",
      DnsHostnames: true,
    }),
  });

  provider.EC2.makeInternetGateway({
    name: "InternetGateway",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeNatGateway({
    name: "NATGateway",
    dependencies: ({ resources }) => ({
      subnet: resources.EC2.Subnet["SubnetPublicUSEAST1F"],
      eip: resources.EC2.ElasticIpAddress["NATIP"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "SubnetPrivateUSEAST1D",
    properties: ({ config }) => ({
      CidrBlock: "192.168.96.0/19",
      AvailabilityZone: `${config.region}d`,
      Tags: [
        {
          Key: "kubernetes.io/role/internal-elb",
          Value: "1",
        },
      ],
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "SubnetPrivateUSEAST1F",
    properties: ({ config }) => ({
      CidrBlock: "192.168.64.0/19",
      AvailabilityZone: `${config.region}f`,
      Tags: [
        {
          Key: "kubernetes.io/role/internal-elb",
          Value: "1",
        },
      ],
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "SubnetPublicUSEAST1D",
    properties: ({ config }) => ({
      CidrBlock: "192.168.32.0/19",
      AvailabilityZone: `${config.region}d`,
      MapPublicIpOnLaunch: true,
      Tags: [
        {
          Key: "kubernetes.io/role/elb",
          Value: "1",
        },
      ],
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeSubnet({
    name: "SubnetPublicUSEAST1F",
    properties: ({ config }) => ({
      CidrBlock: "192.168.0.0/19",
      AvailabilityZone: `${config.region}f`,
      MapPublicIpOnLaunch: true,
      Tags: [
        {
          Key: "kubernetes.io/role/elb",
          Value: "1",
        },
      ],
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeRouteTable({
    name: "PrivateRouteTableUSEAST1D",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeRouteTable({
    name: "PrivateRouteTableUSEAST1F",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeRouteTable({
    name: "PublicRouteTable",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["PrivateRouteTableUSEAST1D"],
      subnet: resources.EC2.Subnet["SubnetPrivateUSEAST1D"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["PrivateRouteTableUSEAST1F"],
      subnet: resources.EC2.Subnet["SubnetPrivateUSEAST1F"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["PublicRouteTable"],
      subnet: resources.EC2.Subnet["SubnetPublicUSEAST1D"],
    }),
  });

  provider.EC2.makeRouteTableAssociation({
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["PublicRouteTable"],
      subnet: resources.EC2.Subnet["SubnetPublicUSEAST1F"],
    }),
  });

  provider.EC2.makeRoute({
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["PrivateRouteTableUSEAST1D"],
      natGateway: resources.EC2.NatGateway["NATGateway"],
    }),
  });

  provider.EC2.makeRoute({
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["PrivateRouteTableUSEAST1F"],
      natGateway: resources.EC2.NatGateway["NATGateway"],
    }),
  });

  provider.EC2.makeRoute({
    properties: ({ config }) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({ resources }) => ({
      routeTable: resources.EC2.RouteTable["PublicRouteTable"],
      ig: resources.EC2.InternetGateway["InternetGateway"],
    }),
  });

  provider.EC2.makeSecurityGroup({
    name: "ClusterSharedNodeSecurityGroup",
    properties: ({ config }) => ({
      Description: "Communication between all nodes in the cluster",
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.makeSecurityGroup({
    name: "ControlPlaneSecurityGroup",
    properties: ({ config }) => ({
      Description:
        "Communication between the control plane and worker nodegroups",
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["VPC"],
    }),
  });

  provider.EC2.useSecurityGroup({
    name: "eks-cluster-sg-my-cluster-1909614887",
    properties: ({ config }) => ({
      Description:
        "EKS created security group applied to ENI that is attached to EKS Control Plane master nodes, as well as any managed workloads.",
      Tags: [
        {
          Key: "kubernetes.io/cluster/my-cluster",
          Value: "owned",
        },
      ],
    }),
    filterLives: ({ resources }) =>
      pipe([
        () => resources,
        find(
          pipe([
            get("live.Tags"),
            find(
              and([
                eq(get("Key"), "aws:eks:cluster-name"),
                eq(get("Value"), "my-cluster"),
              ])
            ),
          ])
        ),
      ])(),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "ClusterSharedNodeSecurityGroup-rule-ingress-all-from-ClusterSharedNodeSecurityGroup",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup:
        resources.EC2.SecurityGroup["ClusterSharedNodeSecurityGroup"],
      securityGroupFrom:
        resources.EC2.SecurityGroup["ClusterSharedNodeSecurityGroup"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "ClusterSharedNodeSecurityGroup-rule-ingress-all-from-eks-cluster-sg-my-cluster-1909614887",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup:
        resources.EC2.SecurityGroup["ClusterSharedNodeSecurityGroup"],
      securityGroupFrom:
        resources.EC2.SecurityGroup["eks-cluster-sg-my-cluster-1909614887"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "eks-cluster-sg-my-cluster-1909614887-rule-ingress-all-from-ClusterSharedNodeSecurityGroup",
    properties: ({ config }) => ({
      IpPermission: {
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup:
        resources.EC2.SecurityGroup["eks-cluster-sg-my-cluster-1909614887"],
      securityGroupFrom:
        resources.EC2.SecurityGroup["ClusterSharedNodeSecurityGroup"],
    }),
  });

  provider.EC2.makeElasticIpAddress({
    name: "NATIP",
  });

  provider.EC2.makeLaunchTemplate({
    name: "eksctl-my-cluster-nodegroup-ng-1",
    properties: ({ config }) => ({
      LaunchTemplateData: {
        BlockDeviceMappings: [
          {
            DeviceName: "/dev/xvda",
            Ebs: {
              Iops: 3000,
              VolumeSize: 80,
              VolumeType: "gp3",
              Throughput: 125,
            },
          },
        ],
        MetadataOptions: {
          HttpTokens: "optional",
          HttpPutResponseHopLimit: 2,
        },
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroups: [
        resources.EC2.SecurityGroup["eks-cluster-sg-my-cluster-1909614887"],
      ],
    }),
  });

  provider.EKS.makeCluster({
    name: "my-cluster",
    properties: ({ config }) => ({
      version: "1.20",
    }),
    dependencies: ({ resources }) => ({
      subnets: [
        resources.EC2.Subnet["SubnetPrivateUSEAST1D"],
        resources.EC2.Subnet["SubnetPrivateUSEAST1F"],
        resources.EC2.Subnet["SubnetPublicUSEAST1D"],
        resources.EC2.Subnet["SubnetPublicUSEAST1F"],
      ],
      securityGroups: [
        resources.EC2.SecurityGroup["ControlPlaneSecurityGroup"],
      ],
      role: resources.IAM.Role[
        "eksctl-my-cluster-cluster-ServiceRole-1T8YHA5ZIYVRB"
      ],
    }),
  });

  provider.EKS.makeNodeGroup({
    name: "ng-1",
    properties: ({ config }) => ({
      capacityType: "ON_DEMAND",
      scalingConfig: {
        minSize: 1,
        maxSize: 1,
        desiredSize: 1,
      },
      labels: {
        "alpha.eksctl.io/nodegroup-name": "ng-1",
        "alpha.eksctl.io/cluster-name": "my-cluster",
      },
    }),
    dependencies: ({ resources }) => ({
      cluster: resources.EKS.Cluster["my-cluster"],
      subnets: [
        resources.EC2.Subnet["SubnetPublicUSEAST1D"],
        resources.EC2.Subnet["SubnetPublicUSEAST1F"],
      ],
      role: resources.IAM.Role[
        "eksctl-my-cluster-nodegroup-ng-1-NodeInstanceRole-1LT5OVYUG2SEI"
      ],
      launchTemplate:
        resources.EC2.LaunchTemplate["eksctl-my-cluster-nodegroup-ng-1"],
    }),
  });

  provider.IAM.makeRole({
    name: "eksctl-my-cluster-cluster-ServiceRole-1T8YHA5ZIYVRB",
    properties: ({ config }) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "eks.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      Policies: [
        {
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Action: ["cloudwatch:PutMetricData"],
                Resource: `*`,
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "eksctl-my-cluster-cluster-PolicyCloudWatchMetrics",
        },
        {
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Action: [
                  "ec2:DescribeAccountAttributes",
                  "ec2:DescribeAddresses",
                  "ec2:DescribeInternetGateways",
                ],
                Resource: `*`,
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "eksctl-my-cluster-cluster-PolicyELBPermissions",
        },
      ],
    }),
    dependencies: ({ resources }) => ({
      policies: [
        resources.IAM.Policy["AmazonEKSClusterPolicy"],
        resources.IAM.Policy["AmazonEKSVPCResourceController"],
      ],
    }),
  });

  provider.IAM.makeRole({
    name: "eksctl-my-cluster-nodegroup-ng-1-NodeInstanceRole-1LT5OVYUG2SEI",
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
    dependencies: ({ resources }) => ({
      policies: [
        resources.IAM.Policy["AmazonEC2ContainerRegistryReadOnly"],
        resources.IAM.Policy["AmazonEKSWorkerNodePolicy"],
        resources.IAM.Policy["AmazonEKS_CNI_Policy"],
        resources.IAM.Policy["AmazonSSMManagedInstanceCore"],
      ],
    }),
  });

  provider.IAM.usePolicy({
    name: "AmazonEC2ContainerRegistryReadOnly",
    properties: ({ config }) => ({
      Arn: "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
    }),
  });

  provider.IAM.usePolicy({
    name: "AmazonEKS_CNI_Policy",
    properties: ({ config }) => ({
      Arn: "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
    }),
  });

  provider.IAM.usePolicy({
    name: "AmazonEKSClusterPolicy",
    properties: ({ config }) => ({
      Arn: "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
    }),
  });

  provider.IAM.usePolicy({
    name: "AmazonEKSVPCResourceController",
    properties: ({ config }) => ({
      Arn: "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController",
    }),
  });

  provider.IAM.usePolicy({
    name: "AmazonEKSWorkerNodePolicy",
    properties: ({ config }) => ({
      Arn: "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
    }),
  });

  provider.IAM.usePolicy({
    name: "AmazonSSMManagedInstanceCore",
    properties: ({ config }) => ({
      Arn: "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
    }),
  });
};

exports.createResources = createResources;
