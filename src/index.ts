#!/usr/bin/env node

import { splitFilesIntoParts } from './fileSplitter';
import { getFilesFromPattern } from './getFiles';
import { validateFiles, validateSplits } from './validation';
import { generateStringOutput } from './output';
import { cli } from './cli';
import { deleteOtherFiles } from './deleteFiles';

validateSplits(cli.flags.splits, cli.flags.index);

const files = getFilesFromPattern(cli.flags.pattern);

validateFiles(files, cli.flags.splits);

const splitFiles: string[][] = splitFilesIntoParts(files, cli.flags.splits);

cli.flags.deleteOthers && deleteOtherFiles(Object.assign([], splitFiles), cli.flags.index);

console.log(generateStringOutput(splitFiles, cli.flags.index));
