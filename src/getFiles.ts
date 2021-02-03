import glob from 'glob';

function getFilesFromPattern(pattern: string): string[] {
  return glob.sync(pattern);
}

export { getFilesFromPattern };
