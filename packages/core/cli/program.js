const assert = require("assert");
const path = require("path");
const { Command } = require("commander");
const { pipe, tryCatch, tap, assign } = require("rubico");
const { last } = require("rubico/x");
const os = require("os");
const pkg = require("../package.json");
const { Cli } = require("./cliCommands");
const { createInfra } = require("./infra");
const YAML = require("./json2yaml");

const { createProject } = require("./createProject");

const collect = (value, previous = []) => previous.concat([value]);

const optionFilteredByProvider = [
  "-p, --provider <value>",
  "Filter by provider, multiple values allowed",
  collect,
];

const optionFilteredByTypes = [
  "-t, --types <value>",
  "Include by type, multiple values allowed",
  collect,
];
const optionFilteredByGroups = [
  "--group <value>",
  "Include by group, multiple values allowed",
  collect,
];
const optionExcludesByTypes = [
  "-e, --types-exclude <value>",
  "Exclude by type, multiple values allowed",
  collect,
];

const optionFileResourceTree = [
  "--pumlFile <file>",
  "plantuml output file name",
  "artifacts/resources-mindmap.puml",
];

const optionDotFileTarget = [
  "--dot-file <dotFile>",
  "output 'dot' file name for the target diagam",
  "artifacts/diagram-target.dot",
];
const optionDotFileLive = [
  "--dot-file <dotFile>",
  "output 'dot' file name for the live diagram",
  "artifacts/diagram-live.dot",
];

const handleError = (error) => {
  if (!error.error?.displayed) {
    console.error(YAML.stringify(error));
  }
  throw error;
};

const defautTitle = last(process.cwd().split(path.sep));

exports.createProgram = () => {
  const program = new Command();
  program.storeOptionsAsProperties(false);
  program.allowUnknownOption(); // For testing
  program.version(pkg.version);
  program.option("-i, --infra <file>", "infrastructure default is iac.js");
  program.option("-c, --config <file>", "config file, default is config.js");
  program.option("-r, --resource <file>", "additional resource file");
  program.option("-j, --json <file>", "write result to a file in json format");
  program.option("-d, --workingDirectory <file>", "The working directory.");
  program.option("--noOpen", "Do not open diagram");

  const infraOptions = ({ infra, config, stage }) => ({
    infraFileName: infra,
    configFileName: config,
    stage: stage || process.env.STAGE || "dev",
  });

  const runCommand =
    ({ commandName, program }) =>
    (commandOptions) =>
      pipe([
        () => program.opts(),
        (programOptions) =>
          tryCatch(
            pipe([
              () => programOptions,
              infraOptions,
              createInfra({ commandOptions, programOptions }),
              tap((params) => {
                assert(true);
              }),
              ({ createStack, createResources, config, stage }) =>
                Cli({
                  createStack,
                  createResources,
                  config,
                  stage,
                  programOptions,
                }),
              tap((cli) => {
                assert(
                  cli[commandName],
                  `command '${commandName}' not implemented`
                );
              }),
              (cli) =>
                cli[commandName]({
                  commandOptions,
                  programOptions,
                }),
            ]),
            handleError
          )(),
      ])();

  program
    .command("info")
    .description("Get Information about the current project")
    .option(...optionFilteredByProvider)
    .action(runCommand({ commandName: "info", program }));

  program
    .command("new")
    .description("Create a new project")
    .action(createProject({ programOptions: program.opts() }));

  program
    .command("init")
    .description("Initialise the cloud providers")
    .alias("i")
    .action(runCommand({ commandName: "init", program }));

  program
    .command("uninit")
    .description("Un-initialise the cloud providers")
    .alias("u")
    .action(runCommand({ commandName: "unInit", program }));

  program
    .command("plan")
    .description("Find out which resources need to be deployed or destroyed")
    .alias("p")
    .option(...optionFilteredByProvider)
    .action(runCommand({ commandName: "planQuery", program }));

  program
    .command("run")
    .description("run onDeployed or onDestroy")
    .alias("r")
    .option("--onDeployed", "Run Post Deploy Hook")
    .option("--onDeployedGlobal", "Run Global Post Deploy Hook")
    .option("--onDestroyed", "Run Post Destroy Hook")
    .option("--onDestroyedGlobal", "Run Global Post Destroy Hook")

    .option(...optionFilteredByProvider)
    .action(runCommand({ commandName: "planRunScript", program }));

  program
    .command("apply")
    .description("Apply the plan, a.k.a deploy the resources")
    .alias("a")
    .option("-f, --force", "force deploy, will not prompt user")
    .option(...optionFilteredByProvider)
    .action(runCommand({ commandName: "planApply", program }));

  program
    .command("destroy")
    .description("Destroy the resources")
    .alias("d")
    .option("-f, --force", "force destroy, will not prompt user")
    .option(...optionFilteredByProvider)
    .option(...optionFilteredByTypes)
    .option(...optionFilteredByGroups)
    .option(...optionExcludesByTypes)
    .option(
      "-a, --all",
      "destroy all resources including those not managed by us"
    )
    .option("-n, --name <value>", "destroy by name")
    .option("--id <value>", "destroy by id")
    .action(runCommand({ commandName: "planDestroy", program }));

  program
    .command("list")
    .description("List the live resources")
    .alias("l")
    .option(
      "-j, --json <file>",
      "write inventory to a file in json format",
      "artifacts/inventory.json"
    )
    .option(
      "-g, --graph",
      "create an SVG representation of the live infrastructure"
    )
    .option("-a, --all", "List also read-only resources")
    .option("-n, --name <value>", "List by name")
    .option("--id <value>", "List by id")
    .option("-o, --our", "List only our managed resources")
    .option(
      "--default-exclude",
      "Exclude the default resources, i.e VPC and Subnet"
    )
    .option(...optionExcludesByTypes)
    .option(
      "-d, --canBeDeleted",
      "display resources which can be deleted, a.k.a non default resources"
    )
    .option(...optionFilteredByProvider)
    .option(...optionFilteredByTypes)
    .option(...optionFilteredByGroups)
    .option(...optionDotFileLive)
    .option("--title <value>", "diagram title", defautTitle)
    .action(runCommand({ commandName: "list", program }));

  program
    .command("output")
    .description("Output the value of a resource")
    .alias("o")
    .requiredOption("-n, --name <value>", "resource name")
    .requiredOption("-t, --type <value>", "resource type")
    .option("-g, --group <value>", "resource group")
    .requiredOption("-f, --field <value>", "the resource field to get")
    .option(...optionFilteredByProvider)
    .action(runCommand({ commandName: "output", program }));

  program
    .command("graph")
    .description(
      "Output the target resources in a dot file and a graphical format such as SVG"
    )
    .alias("gt")
    .alias("g")
    .option(...optionDotFileTarget)
    .option("--title <value>", "diagram title", defautTitle)
    .option("-t, --type <type>", "file type: png, svg", "svg")
    .option(...optionFilteredByProvider)
    .action(runCommand({ commandName: "graphTarget", program }));

  program
    .command("tree")
    .description("Output the target resources as a mind map tree")
    .alias("t")
    .option(...optionFileResourceTree)
    .option("--title <value>", "title", defautTitle)
    .option("-t, --type <type>", "file type: png, svg", "svg")
    .option("-f, --full", "display resources name")
    .option(
      "-j, --plantumlJar <type>",
      "plantuml.jar location",
      path.resolve(os.homedir(), "Downloads", "plantuml.jar")
    )
    .option(...optionFilteredByProvider)
    .action(runCommand({ commandName: "graphTree", program }));

  program
    .command("gencode")
    .description("Generate infrastruture code from deployed resources")
    .alias("c")
    .option(...optionFilteredByTypes)
    .option(...optionFilteredByGroups)
    .option(...optionExcludesByTypes)
    .option(
      "--inventory <file>",
      "resources inventory",
      "artifacts/inventory.json"
    )
    .option("--no-inventory-fetch", "do not fetch the inventory")
    .option("--no-download", "do not download assets")
    .option("-o, --outputCode <file>", "resources.js output", "resources.js")
    .option(
      "--outputEnv <file>",
      "default.env environment variables",
      "default.template.env"
    )
    .option("-m, --mapping <file>", "mapping file", "mapping.json")
    .option("--no-prompt", "no prompt for saving")
    .option(...optionFilteredByProvider)
    .action(runCommand({ commandName: "genCode", program }));

  return program;
};
