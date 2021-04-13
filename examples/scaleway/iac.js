const assert = require("assert");
const ScalewayProvider = require("@grucloud/core").ScalewayProvider;

const createResources = async ({ provider }) => {
  const ip = await provider.makeIp({ name: "ip-web-server" });
  // Choose an image
  const image = await provider.useImage({
    name: "ubuntu",
    filterLives: ({ items: images }) => {
      const image = images.find(
        ({ name, arch, default_bootscript }) =>
          name.includes("Ubuntu") && arch === "x86_64" /*&& default_bootscript*/
      );
      assert(image, "missing image");
      return image;
    },
  });
  return {
    ip,
    image,
    server: await provider.makeServer({
      name: "web-server",
      dependencies: { image, ip },
      properties: () => ({
        name: "web-server",
        commercial_type: "DEV1-S",
        volumes: {
          0: {
            size: 20_000_000_000,
          },
        },
      }),
    }),
  };
};
exports.createResources = createResources;

exports.createStack = async ({ config }) => {
  // Create Scaleway provider
  const provider = ScalewayProvider({ name: "scaleway", config });
  const resources = await createResources({ provider });

  return {
    provider,
    resources,
  };
};
