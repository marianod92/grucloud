const pkg = require("./package.json");
module.exports = ({ stage }) => ({
  projectName: pkg.name,
  ec2: {
    Vpc: {
      vpcDefault: {
        name: "vpc-default",
        properties: {
          CidrBlock: "172.31.0.0/16",
          DnsSupport: true,
          DnsHostnames: true,
        },
      },
      vpcEc2Example: {
        name: "vpc-ec2-example",
        properties: {
          CidrBlock: "10.1.0.0/16",
          DnsSupport: true,
          DnsHostnames: false,
        },
      },
    },
    Subnet: {
      subnet: {
        name: "subnet",
        properties: {
          CidrBlock: "10.1.0.0/24",
          AvailabilityZone: "eu-west-2a",
          MapPublicIpOnLaunch: false,
          MapCustomerOwnedIpOnLaunch: false,
        },
      },
    },
    KeyPair: {
      kp: {
        name: "kp",
      },
    },
    Volume: {
      volume: {
        name: "volume",
        properties: {
          Size: 5,
          VolumeType: "standard",
        },
      },
    },
    ElasticIpAddress: {
      myip: {
        name: "myip",
      },
    },
    SecurityGroup: {
      securityGroup: {
        name: "security-group",
        properties: {
          Description: "Security Group Description",
        },
      },
      sgDefaultVpcEc2Example: {
        name: "sg-default-vpc-ec2-example",
        properties: {
          Description: "default VPC security group",
        },
      },
      sgDefaultVpcDefault: {
        name: "sg-default-vpc-default",
        properties: {
          Description: "default VPC security group",
        },
      },
    },
    SecurityGroupRuleIngress: {
      sgRuleIngressSsh: {
        name: "sg-rule-ingress-ssh",
        properties: {
          IpPermissions: [
            {
              FromPort: 22,
              IpProtocol: "tcp",
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
              ToPort: 22,
            },
          ],
        },
      },
      sgRuleIngressIcmp: {
        name: "sg-rule-ingress-icmp",
        properties: {
          IpPermissions: [
            {
              FromPort: -1,
              IpProtocol: "icmp",
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
              ToPort: -1,
            },
          ],
        },
      },
    },
    InternetGateway: {
      ig: {
        name: "ig",
      },
    },
    Instance: {
      webServerEc2Vpc: {
        name: "web-server-ec2-vpc",
        properties: {
          InstanceType: "t2.micro",
          ImageId: "ami-0baa0a5cc6cd768ac",
          Placement: {
            AvailabilityZone: "eu-west-2a",
          },
        },
      },
    },
  },
});
