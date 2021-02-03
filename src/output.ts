import chalk from 'chalk';

function generateStringOutput(files: string[][], index: number): string {
  return chalk.green(files[index].join());
}

export { generateStringOutput };
