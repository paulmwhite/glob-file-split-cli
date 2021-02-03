import emoji from 'node-emoji';

function validateSplits(splits: number, index: number) {
  if (splits <= 0) {
    returnError('Splits should be greater then 0');
  }
  if (splits <= index) {
    returnError(`There should be more splits then ${splits}, for an index of ${index}.`);
  }
}

function validateFiles(files: string[], splits: number) {
  if (splits > files.length) {
    returnError(`There should be more files (${files.length}) then splits (${splits}).`);
  }
}

function returnError(message: string): void {
  console.error(emoji.get('warning'), '', message, emoji.get('warning'));
  process.exit(1);
}

export { validateSplits, validateFiles };
