// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Route53.makeHostedZone({
    name: "grucloud.org.",
    dependencies: () => ({
      domain: "grucloud.org",
    }),
  });

  provider.Route53.makeRecord({
    properties: ({}) => ({
      Name: "grucloud.org.",
      Type: "TXT",
      TTL: 60,
      ResourceRecords: [
        {
          Value:
            '"google-site-verification=q_tZuuK8OFGzYbrhd_VXoqtOTtruiAmH811iULb-m30"',
        },
      ],
    }),
    dependencies: () => ({
      hostedZone: "grucloud.org.",
    }),
  });

  provider.Route53Domains.useDomain({
    name: "grucloud.org",
  });
};

exports.createResources = createResources;
