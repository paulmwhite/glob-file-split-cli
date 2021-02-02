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

## Installation

Install globally:

```bash
  yarn global add glob-file-split
```

or

```bash
  npm i -g glob-file-split
```
