function splitFilesIntoParts(files: string[], parts: number): Array<Array<string>> {
  let result: Array<Array<string>> = [];
  for (let i = parts; i > 0; i--) {
    result.push(files.splice(0, Math.ceil(files.length / i)));
  }
  return result;
}

export { splitFilesIntoParts };
