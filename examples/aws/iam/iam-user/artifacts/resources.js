// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "User",
    group: "IAM",
    name: "my-user",
    properties: ({}) => ({
      Path: "/",
      AttachedPolicies: [
        {
          PolicyName: "AmazonEC2ReadOnlyAccess",
          PolicyArn: "arn:aws:iam::aws:policy/AmazonEC2ReadOnlyAccess",
        },
      ],
      Tags: [
        {
          Key: "mytag",
          Value: "myvalue",
        },
      ],
    }),
  },
];
