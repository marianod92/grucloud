// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Storage.makeBlob({
    properties: ({}) => ({
      properties: {
        contentType: "text/html",
      },
      source: "assets/index1.html",
      name: "index.html",
    }),
    dependencies: ({ resources }) => ({
      resourceGroup: resources.Resources.ResourceGroup["rg-storage-web"],
      container:
        resources.Storage.BlobContainer["rg-storage-web::gcstorageweb::$web"],
    }),
  });
};

exports.createResources = createResources;
