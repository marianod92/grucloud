const assert = require("assert");
const { get, pipe, eq, map, tap } = require("rubico");
const { defaultsDeep, find } = require("rubico/x");
const GoogleClient = require("../../GoogleClient");
const { GCP_COMPUTE_BASE_URL } = require("./GcpComputeCommon");
const { getField } = require("@grucloud/core/ProviderCommon");

// https://cloud.google.com/compute/docs/reference/rest/v1/globalForwardingRules
exports.GcpGlobalForwardingRule = ({ spec, config }) => {
  assert(spec);
  assert(config);

  const { projectId, managedByDescription, providerName } = config;

  const configDefault = ({ name, properties, dependencies }) => {
    const { httpsTargetProxy } = dependencies;
    return defaultsDeep({
      name,
      description: managedByDescription,
      target: getField(httpsTargetProxy, "selfLink"),
      portRange: "443",
    })(properties);
  };

  const isInstanceUp = get("IPAddress");

  const findDependencies = ({ live, lives }) => [
    {
      type: "HttpsTargetProxy",
      group: "compute",
      ids: pipe([
        () => live,
        get("target"),
        (target) => [
          pipe([
            () =>
              lives.getByType({
                type: "HttpsTargetProxy",
                group: "compute",
                providerName,
              }),
            find(eq(get("live.selfLink"), target)),
            get("id"),
          ])(),
        ],
      ])(),
    },
  ];
  return GoogleClient({
    spec,
    baseURL: GCP_COMPUTE_BASE_URL,
    url: `/projects/${projectId}/global/forwardingRules`,
    config,
    configDefault,
    isInstanceUp,
    findDependencies,
  });
};
