// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "ServiceAccount",
    group: "iam",
    name: "sa-test-vm",
    properties: ({}) => ({
      serviceAccount: {
        displayName: "SA dev",
        description: "Managed By GruCloud",
      },
    }),
  },
  {
    type: "Firewall",
    group: "compute",
    name: "firewall-22-80-433",
    properties: ({}) => ({
      description: "Managed By GruCloud",
      priority: 1000,
      sourceRanges: ["0.0.0.0/0"],
      allowed: [
        {
          IPProtocol: "tcp",
          ports: ["22", "80", "433"],
        },
      ],
      direction: "INGRESS",
      logConfig: {
        enable: false,
      },
    }),
  },
  {
    type: "Firewall",
    group: "compute",
    name: "firewall-icmp",
    properties: ({}) => ({
      description: "Managed By GruCloud",
      priority: 1000,
      sourceRanges: ["0.0.0.0/0"],
      allowed: [
        {
          IPProtocol: "icmp",
        },
      ],
      direction: "INGRESS",
      logConfig: {
        enable: false,
      },
    }),
  },
  {
    type: "Address",
    group: "compute",
    name: "ip-webserver",
    properties: ({}) => ({
      description: "Managed By GruCloud",
    }),
  },
  {
    type: "Disk",
    group: "compute",
    name: "disk",
    properties: ({}) => ({
      sizeGb: "20",
      type: "pd-standard",
    }),
  },
  {
    type: "VmInstance",
    group: "compute",
    name: "webserver",
    properties: ({}) => ({
      machineType: "f1-micro",
      metadata: {
        items: [
          {
            key: "enable-oslogin",
            value: "True",
          },
        ],
      },
      sourceImage:
        "projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20210927",
    }),
    dependencies: () => ({
      ip: "ip-webserver",
      disks: ["disk"],
    }),
  },
];
