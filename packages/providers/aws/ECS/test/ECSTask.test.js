const assert = require("assert");
const { AwsProvider } = require("../../AwsProvider");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { tryCatch, pipe, tap } = require("rubico");
const { ECSTask } = require("../ECSTask");

describe("ECSTask", async function () {
  let config;
  let provider;
  let task;

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({ config });
    task = ECSTask({ config: provider.config });
    await provider.start();
  });
  it(
    "delete with invalid id",
    pipe([
      () =>
        task.destroy({
          live: {
            clusterArn:
              "arn:aws:ecs:eu-west-2:840541460064:cluster/not-existing",
            taskArn:
              "arn:aws:ecs:eu-west-2:840541460064:task/demo/ee0e3ce2ad9a49ce90e6a257303c1773",
          },
        }),
    ])
  );
});