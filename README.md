# glob-file-split

This `glob-file-split` will split a glob pattern of files into a given number of chunks (splits) and return the files as a comma separated string for a given index.

This is ideal for splitting test files across multiple workers for parallel execution.

Examples:

```bash
    $ glob-file-split --splits 2 --index 0 --pattern './tests/*.js'
    ./tests/1.js,./tests/2.js,./tests/3.js

    $ glob-file-split -s 2 -i 1 -p './tests/*.js'
    ./tests/4.js,./tests/5.js
```

Example using to split test execution:

Worker 1:

```bash
    $ yarn test --spec $(glob-file-split -s 2 -i 0 -p './**/*.feature')
    cypress run --spec ./cypress/integration/1.feature,./cypress/integration/2.feature,./cypress/integration/3.feature
```

Worker 2:

```bash
    $ yarn test --spec $(glob-file-split -s 2 -i 1 -p './**/*.feature')
    cypress run --spec ./cypress/integration/4.feature,./cypress/integration/5.feature
```

## Parameters

| flag           | shorthand | accepts | example              |
| -------------- | --------- | ------- | -------------------- |
| --pattern      | -p        | string  | './tests/\*.feature' |
| --index        | -i        | number  | 0                    |
| --splits       | -s        | string  | 5                    |
| --deleteOthers | -d        | boolean | -d                   |

## Installation

Install globally:

```bash
  yarn global add glob-file-split
```

or

```bash
  npm i -g glob-file-split
```
