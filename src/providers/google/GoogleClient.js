const assert = require("assert");
const urljoin = require("url-join");
const CoreClient = require("../CoreClient");
const AxiosMaker = require("../AxiosMaker");
const BASE_URL = "https://compute.googleapis.com/compute/v1/";
const logger = require("../../logger")({ prefix: "GoogleClient" });
const toString = (x) => JSON.stringify(x, null, 4);

const onResponseList = (data) => {
  const { items = [] } = data;
  return { total: items.length, items };
};

module.exports = GoogleClient = ({
  url,
  spec,
  config,
  configDefault,
  findName,
}) => {
  assert(url);
  assert(spec);
  assert(spec.type);
  assert(config);

  const core = CoreClient({
    type: "google",
    spec,
    onResponseList,
    configDefault,
    findName,
    axios: AxiosMaker({
      baseURL: urljoin(BASE_URL, url),
      onHeaders: () => ({
        Authorization: `Bearer ${config.accessToken}`,
      }),
    }),
  });

  return core;
};
