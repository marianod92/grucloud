const assert = require("assert");
const path = require("path");
const { pipe, tap } = require("rubico");
const { callProp } = require("rubico/x");

const { AzureProvider } = require("../AzureProvider");

describe("AzResourcesList", async function () {
  it("resourcesList", async function () {
    pipe([
      () =>
        AzureProvider({
          config: () => ({}),
        }),
      callProp("resourcesList", {
        commandOptions: {
          output: path.resolve(
            __filename,
            "../../../../../docusaurus/docs/azure/AzureResources.md"
          ),
        },
      }),
    ])();
  });
});
