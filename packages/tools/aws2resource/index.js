#!/usr/bin/env node
const { last } = require("rubico/x");
const path = require("path");
const { Command } = require("commander");
const { main } = require("./aws2resource");

const createProgram = ({ version }) => {
  const program = new Command();
  program.storeOptionsAsProperties(false);
  program.allowUnknownOption(); // For testing
  program.version(version);
  program.requiredOption("-i, --input <file>", "aws json spec");
  program.option(
    "-o, --output <file>",
    "javascript output file",
    "resources.js"
  );

  program.parse(process.argv);
  return program;
};

const program = createProgram({ version: "1.0" });
const options = program.opts();

main(options)
  .then(() => {
    console.log("done");
  })
  .catch((error) => {
    console.error("error");
    console.error(error);
    throw error;
  });
