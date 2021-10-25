// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.makeKeyPair({
    name: "kp-ec2-example",
  });

  provider.EC2.makeElasticIpAddress({
    name: "eip",
  });

  provider.EC2.makeInstance({
    name: "web-server-ec2-example",
    properties: ({ config }) => ({
      InstanceType: "t2.micro",
      ImageId: "ami-02e136e904f3da870",
    }),
    dependencies: ({ resources }) => ({
      keyPair: resources.EC2.KeyPair["kp-ec2-example"],
      eip: resources.EC2.ElasticIpAddress["eip"],
    }),
  });
};

exports.createResources = createResources;
