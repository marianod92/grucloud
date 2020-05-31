const assert = require("assert");
const CoreClient = require("../CoreClient");
const urljoin = require("url-join");
const AxiosMaker = require("../AxiosMaker");
const logger = require("../../logger")({ prefix: "ScalewayClient" });
const toString = (x) => JSON.stringify(x, null, 4);

const BASE_URL = "https://api.scaleway.com/instance/v1/";

module.exports = ScalewayClient = ({
  spec,
  url,
  onResponseList,
  config,
  configDefault,
}) => {
  assert(url);
  assert(spec);
  assert(spec.type);
  assert(config);
  assert(config.secretKey);
  const { type } = spec;

  const findName = (item) => {
    assert(item);
    logger.debug(`findName: ${toString(item)}`);
    if (item.name) {
      return item.name;
    }
    const tagName = item.tags.find((tag) => tag.includes("name:"));
    if (tagName) {
      const name = tagName.replace("name:", "");
      logger.debug(`findName: is ${name} `);
      return name;
    } else {
      logger.debug(`findName: cannot find name in ${toString(item)}`);
    }
  };

  const core = CoreClient({
    type: "scaleway",
    spec,
    onResponseList,
    findName,
    configDefault,
    axios: AxiosMaker({
      baseURL: urljoin(BASE_URL, "zones", config.zone, url),
      onHeaders: () => ({ "X-Auth-Token": config.secretKey }),
    }),
  });

  return core;
};
