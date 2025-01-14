const assert = require("assert");
const path = require("path");
const fs = require("fs");
const { pipe, tap, filter, switchCase, flatMap, not } = require("rubico");
const { isFunction, when } = require("rubico/x");
const { identity } = require("rxjs");
const logger = require("../logger")({ prefix: "Infra" });

const createProviderMaker =
  ({
    programOptions,
    stage,
    config: configOverride,
    configs: configsOverride = [],
    createResources: createResourcesUpdate,
  }) =>
  (
    provider,
    {
      createResources,
      config: configUser,
      configs: configsUser = [],
      ...otherProps
    } = {}
  ) =>
    pipe([
      tap(() => {
        assert(isFunction(provider), "provider must be a function");
        assert(
          isFunction(createResources) || Array.isArray(createResources),
          "createResources must be a function or an array of functions"
        );
      }),
      () => [configOverride, ...configsOverride, configUser, ...configsUser],
      // isEmpty does not work with function
      filter((x) => x),
      (configs) =>
        provider({
          configs,
          programOptions,
          stage,
          ...otherProps,
        }),
      tap((provider) =>
        pipe([
          () => createResources,
          switchCase([
            Array.isArray,
            identity,
            isFunction,
            (createResources) => [createResources],
            () => {
              throw Error(
                "createResources should be a function or an array of function"
              );
            },
          ]),
          (cr) => [...cr, createResourcesUpdate],
          // isEmpty does not work with function
          filter((x) => x),
          flatMap((cr) =>
            pipe([
              tap(() => {
                assert(isFunction(cr), "createResources should be a function");
              }),
              () => cr({ provider }),
            ])()
          ),
          filter(not(isEmpty)),
          provider.targetResourcesBuildMap,
        ])()
      ),
    ])();

exports.createProviderMaker = createProviderMaker;

const createStackFromFile = ({ infraFileName }) => {
  const InfraCode = require(infraFileName);
  if (!InfraCode.createStack) {
    throw { code: 400, message: `no createStack provided` };
  }
  return InfraCode.createStack;
};

const resolveFilename = ({ fileName, defaultName }) =>
  path.resolve(process.cwd(), fileName ? fileName : defaultName);

const checkFileExist = ({ fileName }) => {
  if (!fs.existsSync(fileName)) {
    const message = `Cannot open file ${fileName}`;
    console.log(message);
    throw { code: 422, message };
  }
};

const requireConfig = ({ fileName, stage }) => {
  if (!fileName) {
    //return ConfigLoader({ stage });
    return;
  }
  checkFileExist({ fileName });

  const configFileNameFull = path.resolve(process.cwd(), fileName);
  checkFileExist({ fileName: configFileNameFull });
  const config = require(configFileNameFull);
  return config;
};

const requireResources = ({ fileName }) => {
  if (!fileName) {
    return;
  }
  checkFileExist({ fileName });

  const resourceNameFull = path.resolve(process.cwd(), fileName);
  checkFileExist({ fileName: resourceNameFull });
  const resources = require(resourceNameFull);
  assert(resources.createResources);
  return resources.createResources;
};
exports.createInfra =
  ({ commandOptions, programOptions }) =>
  async ({ infraFileName, configFileName, stage = "dev" }) => {
    assert(programOptions);
    const infraFileNameFull = resolveFilename({
      fileName: infraFileName,
      defaultName: "iac.js",
    });
    checkFileExist({ fileName: infraFileNameFull });

    const config = requireConfig({ fileName: configFileName, stage });
    return {
      config,
      stage,
      createResources: requireResources({ fileName: programOptions.resource }),
      createStack: createStackFromFile({ infraFileName: infraFileNameFull }),
    };
  };
