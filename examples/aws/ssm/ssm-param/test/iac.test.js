const assert = require("assert");
const path = require("path");
const { testEnd2End } = require("@grucloud/core/qa");

const { createStack } = require("../iac");
const config = require("../config.js");

describe("SSM Parameter", async function () {
  it("ssm param", async function () {
    await testEnd2End({
      programOptions: { workingDirectory: path.resolve(__dirname, "../") },
      steps: [
        { createStack, configs: [config] },

        {
          createStack,
          createResources: require("./resourcesUpdate1").createResources,
          configs: [config],
        },
      ],
    });
  });
});
