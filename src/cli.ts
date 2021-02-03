import meow from 'meow';

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
        type: 'number',
        alias: 's',
        isRequired: true,
      },
      pattern: {
        type: 'string',
        alias: 'p',
        isRequired: true,
      },
      index: {
        type: 'number',
        alias: 'i',
        isRequired: true,
      },
    },
  },
);

export { cli };
