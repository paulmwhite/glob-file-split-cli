#!/usr/bin/env node

import { splitFilesIntoParts } from './fileSplitter';
import { getFilesFromPattern } from './getFiles';
import { validateFiles, validateSplits } from './validation';
import { generateStringOutput } from './output';
import { cli } from './cli';

validateSplits(cli.flags.splits, cli.flags.index);

const files = getFilesFromPattern(cli.flags.pattern);

validateFiles(files, cli.flags.splits);

const splitFiles: string[][] = splitFilesIntoParts(files, cli.flags.splits);

console.log(generateStringOutput(splitFiles, cli.flags.index));
