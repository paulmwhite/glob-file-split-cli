import { deleteOtherFiles } from '../src/deleteFiles';
const fs = require('fs');

jest.mock('fs', () => {
  const mFs = { unlink: jest.fn() };
  return mFs;
});

describe('Delete other files', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Delete', () => {
    fs.unlink.mockImplementation((filename: any, callback: (arg0: any) => void) => {
      callback(null);
    });

    const files: string[][] = [
      ['1.ts', '2.ts'],
      ['3.ts', '4.ts', '5.ts'],
    ];
    deleteOtherFiles(files, 0);
    expect(fs.unlink).toBeCalledWith('3.ts', expect.any(Function));
    expect(fs.unlink).toBeCalledWith('4.ts', expect.any(Function));
    expect(fs.unlink).toBeCalledWith('5.ts', expect.any(Function));
  });

  it('should throw an error', () => {
    fs.unlink.mockImplementationOnce((filename: any, callback: (arg0: any) => void) => {
      callback;
    });

    expect(() => deleteOtherFiles([], 3)).toThrowError();
  });
});
