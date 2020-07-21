const assert = require("assert");
const ping = require("ping");
const Promise = require("bluebird");

const testPing = ({ host }) =>
  ping.promise.probe(host, {
    timeout: 10,
  });

module.exports = ({ resources }) => {
  return {
    onDeployed: {
      init: async () => {
        //console.log("onDeployed");
        const host = "www.google.com";
        //throw Error("throw in hook init");
        await Promise.delay(200);
        return {
          host,
        };
      },
      actions: [
        {
          name: "Ping",
          command: async ({ host }) => {
            const { alive } = await testPing({ host });
            assert(alive, `cannot ping ${host}`);
          },
        },
        {
          name: "SSH",
          command: async ({ host }) => {
            //throw Error("SSSSSSSSSS");
            await Promise.delay(200);
          },
        },
      ],
    },
    onDestroyed: {
      init: async () => {
        //throw Error("throw in onDestroyed hook init");
        await Promise.delay(200);
        //console.log("onDestroyed");
      },
      actions: [
        {
          name: "Check Ping KO",
          command: async () => {
            //throw Error("SSSSSSSSSS");
            await Promise.delay(200);
            //console.log("do ping");
          },
        },
      ],
    },
  };
};
