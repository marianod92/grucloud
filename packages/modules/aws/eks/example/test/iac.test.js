const assert = require("assert");
const path = require("path");
const { testEnd2End } = require("@grucloud/core/qa");
const { createStack } = require("../iac");
const config = require("../config");

const title = "EKS Module";
describe(title, async function () {
  it("run", async function () {
    await testEnd2End({
      programOptions: { workingDirectory: path.resolve(__dirname, "../") },
      title,
      steps: [
        { createStack, configs: [config] },
        { createStack, configs: [require("./configUpdate1"), config] },
      ],
    });
  }).timeout(50 * 60e3);
});
