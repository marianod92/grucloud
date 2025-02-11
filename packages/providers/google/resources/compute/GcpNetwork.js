const assert = require("assert");
const { eq, get } = require("rubico");
const { defaultsDeep } = require("rubico/x");
const logger = require("@grucloud/core/logger")({ prefix: "GcpNetwork" });
const { tos } = require("@grucloud/core/tos");
const GoogleClient = require("../../GoogleClient");
const { GCP_COMPUTE_BASE_URL } = require("./GcpComputeCommon");

// https://cloud.google.com/compute/docs/reference/rest/v1/networks
exports.GcpNetwork = ({ spec, config }) => {
  assert(spec);
  assert(config);

  const { projectId, managedByDescription } = config;
  const isDefault = eq(get("live.name"), "default");
  const cannotBeDeleted = isDefault;
  const managedByOther = isDefault;

  const configDefault = ({ name, properties }) =>
    defaultsDeep({
      name,
      description: managedByDescription,
    })(properties);

  return GoogleClient({
    spec,
    baseURL: GCP_COMPUTE_BASE_URL,
    url: `/projects/${projectId}/global/networks`,
    config,
    configDefault,
    isDefault,
    cannotBeDeleted,
    managedByOther,
  });
};
