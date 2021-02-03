import { splitFilesIntoParts } from '../src/fileSplitter';

describe('File splitting tests', () => {
  it('returns split files', () => {
    const splits = splitFilesIntoParts(['1.ts', '2.ts', '3.ts', '4.ts', '5.ts'], 5);
    expect(splits).toHaveLength(5);
  });

  it('returns split files', () => {
    const splits = splitFilesIntoParts(['1.ts', '2.ts', '3.ts', '4.ts', '5.ts'], 2);
    expect(splits).toHaveLength(2);
  });
});
