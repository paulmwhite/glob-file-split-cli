import { getFilesFromPattern } from '../src/getFiles';

describe('Getting files using pattern', () => {
  it('returns files', () => {
    const files = getFilesFromPattern('./**/getFiles.test.ts');
    expect(files).toEqual(['./tests/getFiles.test.ts']);
  });
});
