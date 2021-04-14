const assert = require("assert");
const sinon = require("sinon");

const { createResources } = require("./MockStack");
const config404 = require("./config/config.404");
const { MockProvider } = require("../MockProvider");
const cliCommands = require("@grucloud/core/cli/cliCommands");
const { tos } = require("@grucloud/core/tos");

const makehookGlobal = ({ onDeployed, onDestroyed }) => () => ({
  name: "mock",
  onDeployed: {
    init: onDeployed.init,
  },
  onDestroyed: {
    init: onDestroyed.init,
  },
});

const makeHookGlobalThrowInit = () => () => ({
  name: "mock-run-ondeployed-init-throw",
  onDeployed: {
    init: () => {
      throw "i throw in onDeployed init";
    },
  },
  onDestroyed: {
    init: () => {
      throw "i throw in onDestroyed init";
    },
  },
});

describe("MockProviderHooksGlobal", async function () {
  it("onDeployed", async function () {
    const onDeployed = { init: sinon.spy() };
    const onDestroyed = { init: sinon.spy() };

    const provider = MockProvider({ config: () => ({}) });
    const resources = await createResources({ provider });

    const hookGlobal = makehookGlobal({ onDeployed, onDestroyed });

    const infra = { stacks: [{ provider, resources }], hookGlobal };

    await cliCommands.planApply({
      infra,
      commandOptions: { force: true },
    });

    assert(onDeployed.init.called);

    await cliCommands.planDestroy({
      infra,
      commandOptions: { force: true },
    });
    assert(onDestroyed.init.called);
  });
  it("onDeployed and onDestroyed called when apply fails", async function () {
    const onDeployed = { init: sinon.spy() };
    const onDestroyed = { init: sinon.spy() };

    const hookGlobal = makehookGlobal({ onDeployed, onDestroyed });

    const provider = MockProvider({
      config: config404,
    });
    const resources = await createResources({ provider });

    const infra = { stacks: [{ provider, resources }], hookGlobal };

    try {
      await cliCommands.planApply({
        infra,
        commandOptions: { force: true },
      });
      assert(false, "should not be here");
    } catch (error) {
      assert(error.error, tos(error));
    }

    assert(onDeployed.init.called);

    try {
      await cliCommands.planDestroy({
        infra,
        commandOptions: { force: true, all: true },
      });
      assert(false, "should not be here");
    } catch (error) {
      const lives = error.error.lives.json;
      assert.equal(lives[0].results[0].error.response.status, 404);
    }
    assert(onDestroyed.init.called);
  });
  it("planApply init throw ", async function () {
    const provider = MockProvider({ config: () => ({}) });
    const resources = await createResources({ provider });

    const hookGlobal = makeHookGlobalThrowInit();

    const infra = { stacks: [{ provider, resources }], hookGlobal };
    try {
      const result = await cliCommands.planApply({
        infra,
        commandOptions: { force: true },
      });
      assert(false, "should not be here", result);
    } catch (exception) {
      const { error } = exception;
      assert(error.error);
      const { resultHook } = error;
      assert(resultHook.error);
    }
    try {
      await cliCommands.planDestroy({
        infra,
        commandOptions: { force: true },
      });
      assert(false, "should not be here");
    } catch (ex) {
      const { error } = ex;
      const { resultHook } = error;
      assert(resultHook.error);
    }
  });
  it("run --onDeployed init throw ", async function () {
    const provider = MockProvider({ config: () => ({}) });
    const resources = await createResources({ provider });

    const hookGlobal = makeHookGlobalThrowInit();

    const infra = { stacks: [{ provider, resources }], hookGlobal };

    try {
      await cliCommands.planRunScript({
        infra,
        commandOptions: { onDeployedGlobal: true },
      });
      assert(false, "should not be here");
    } catch ({ error }) {
      assert(error.error);
    }
  });

  it("action throw ", async function () {
    const provider = MockProvider({ config: () => ({}) });
    const resources = await createResources({ provider });
    const message = "i throw in a command";

    const hookGlobal = () => ({
      name: "mock-run-ondeployed-init-throw",
      onDeployed: {
        init: () => {},
        actions: [
          {
            name: "Ping",
            command: async () => {},
          },
          {
            name: "SSH",
            command: async () => {
              throw Error(message);
            },
          },
        ],
      },
      onDestroyed: {
        init: () => {},
        actions: [
          {
            name: "Ping",
            command: async () => {},
          },
          {
            name: "SSH",
            command: async () => {
              throw Error(message);
            },
          },
        ],
      },
    });

    const infra = { stacks: [{ provider, resources }], hookGlobal };
    try {
      await cliCommands.planApply({
        infra,
        commandOptions: { force: true },
      });
      assert(false, "should not be here");
    } catch (ex) {
      const { error } = ex;
      const { resultHook } = error;
      assert(resultHook.error);
    }
    try {
      await cliCommands.planDestroy({
        infra,
        commandOptions: { force: true },
      });
      assert(false, "should not be here");
    } catch ({ error }) {
      assert(error.error);
      const { resultHook } = error;
      assert(resultHook.error);
    }
  });
});
