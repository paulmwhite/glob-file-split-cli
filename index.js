#!/usr/bin/env node
var glob = require("glob");
const meow = require("meow");
const chalk = require("chalk");
var emoji = require("node-emoji");
const cli = meow(
  `
	Usage
	  $ glob-file-split <input>

	Options
  --splits,   -s  Number of splits/chunks
  --pattern,  -p  Glob pattern
  --index,    -i  Index for output

  Other options:
  -h, --help         show usage information
  -v, --version      print version info and exit

	Examples
	  $ glob-file-split --splits 2 --index 0 --pattern './tests/*.js' 
    ./tests/1.js,./tests/2.js,./tests/3.js
    
    $ glob-file-split --splits 2 --index 1 --pattern './tests/*.js' 
	  ./tests/4.js,./tests/5.js
`,
  {
    flags: {
      splits: {
        type: "number",
        alias: "s",
        isRequired: true,
      },
      pattern: {
        type: "string",
        alias: "p",
        isRequired: true,
      },
      index: {
        type: "number",
        alias: "i",
        isRequired: true,
      },
    },
  }
);

if (cli.flags.splits <= 0) {
  console.error(
    emoji.get("warning"),
    " Splits should be greater then 0",
    emoji.get("warning")
  );
  process.exit(1);
}

if (cli.flags.splits <= cli.flags.index) {
  console.error(
    emoji.get("warning"),
    ` There should be more splits then ${cli.flags.splits}, for an index of ${cli.flags.index}.`,
    emoji.get("warning"),
    `\r\n Example --splits 10 --index 5`
  );
  process.exit(1);
}

const files = glob.sync(cli.flags.pattern);

if (cli.flags.splits > files.length) {
  console.error(
    emoji.get("warning"),
    ` There should not be more splits (${cli.flags.splits}) then files (${files.length}).`,
    emoji.get("warning")
  );
  process.exit(1);
}

function splitFilesIntoParts(files, parts) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(files.splice(0, Math.ceil(files.length / i)));
  }
  return result;
}

const splitFiles = splitFilesIntoParts(files, cli.flags.splits);

const output = splitFiles[cli.flags.index].join();

console.log(chalk.green(output));
