const assert = require("assert");
const ScalewayProvider = require("./ScalewayProvider");

const config = {
  zone: "fr-par-1",
  organization: process.env.SCALEWAY_ORGANISATION_ID,
};

describe("ScalewayIp", function () {
  const provider = ScalewayProvider({ name: "scaleway" }, config);

  const ip = provider.makeIp({ name: "myip" }, ({}) => ({}));

  after(async () => {
    await provider.destroyAll();
  });

  it("ip config", async function () {
    const config = await ip.config();
    assert(config);
  });

  it("plan", async function () {
    const plan = await provider.plan();
    assert.equal(plan.destroy.length, 0);
    assert.equal(plan.newOrUpdate.length, 1);
  });
  it("deploy plan", async function () {
    await provider.listLives();
    const plan = await provider.plan();
    assert.equal(plan.destroy.length, 0);
    assert.equal(plan.newOrUpdate.length, 1);
    await provider.deployPlan(plan);

    {
      const plan = await provider.plan();
      assert.equal(plan.destroy.length, 0);
      assert.equal(plan.newOrUpdate.length, 0);
    }
    //console.log(JSON.stringify(plan, null, 4));
  });
});
