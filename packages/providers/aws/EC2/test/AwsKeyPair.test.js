const assert = require("assert");
const { ConfigLoader } = require("@grucloud/core/ConfigLoader");
const { AwsProvider } = require("../../AwsProvider");

describe.skip("AwsKeyPair", async function () {
  let config;
  let provider;
  let keyPair;

  before(async function () {
    try {
      config = ConfigLoader({ path: "../../../examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = AwsProvider({
      config: () => ({ projectName: "gru-test" }),
    });

    await provider.start();

    keyPair = await provider.useKeyPair({
      name: "kp",
    });
  });
  after(async () => {});
  it("keyPair name", async function () {
    assert.equal(keyPair.name, "kp");
  });
  it("keyPair getLive", async function () {
    const live = await keyPair.getLive();
    assert.equal(live.KeyName, keyPair.name);
  });

  it("keyPair name not found on server", async function () {
    await provider.useKeyPair({
      name: "idonotexist",
    });
    // Shoult not throw at this time
  });
});