const { isOurMinion } = require("../AwsCommon");
const { AwsHostedZone, compareHostedZone } = require("./AwsHostedZone");
const { Route53Record, compareRoute53Record } = require("./Route53Record");

module.exports = [
  {
    type: "HostedZone",
    dependsOn: ["Route53Domain"],
    Client: AwsHostedZone,
    isOurMinion,
    compare: compareHostedZone,
  },
  {
    type: "Route53Record",
    dependsOn: ["HostedZone", "Certificate"],
    Client: Route53Record,
    isOurMinion: () => true,
    compare: compareRoute53Record,
  },
];
