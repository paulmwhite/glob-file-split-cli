var glob = require("glob");
var argv = require("minimist")(process.argv.slice(2), {
  number: ["splits"],
  alias: { s: "splits" },
  string: ["pattern"],
  alias: { p: "pattern" },
  number: ["index"],
  alias: { i: "index" },
});

console.log(argv);

if (!argv.s) {
  throw new Error("Argument '--splits or -s' is required");
}

if (argv.s <= 0) {
  throw new Error("Argument '--splits or -s' should be greater then 0");
}

if (!argv.p) {
  throw new Error("Argument '--pattern or -p' is required");
}

if (!argv.i && argv.i !== 0) {
  throw new Error("Argument '--index or -i' is required");
}

if (argv.s <= argv.i) {
  throw new Error(
    `There should be more splits ('--splits or -s') then ${argv.s}, for an index ('--index or -i') of ${argv.i}`
  );
}

const files = glob.sync(argv.p);

if (argv.s > files.length) {
  throw new Error(
    `There should not be more splits ('--splits or -s') then files`
  );
}

function splitFilesIntoParts(files, parts) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(files.splice(0, Math.ceil(files.length / i)));
  }
  return result;
}

const splitFiles = splitFilesIntoParts(files, argv.s);

const output = splitFiles[argv.i].join();

console.log(output);
