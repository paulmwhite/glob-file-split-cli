import { generateStringOutput } from '../src/output';

describe('Generating string output', () => {
  it('returns string output', () => {
    const output = generateStringOutput([['./tests/1.test.ts'], ['./tests/2.test.ts']], 1);
    expect(output).toEqual(expect.stringContaining('./tests/2.test.ts'));
  });

  it('returns string output for given index', () => {
    const output = generateStringOutput(
      [['./tests/1.test.ts', './tests/2.test.ts'], ['./tests/3.test.ts'], ['./tests/4.test.ts']],
      0,
    );
    expect(output).toEqual(expect.stringContaining('./tests/1.test.ts,./tests/2.test.ts'));
  });
});
