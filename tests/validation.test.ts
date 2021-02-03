import { returnError, validateFiles, validateSplits } from '../src/validation';

const setProperty = (object, property, value) => {
  const originalProperty = Object.getOwnPropertyDescriptor(object, property);
  Object.defineProperty(object, property, { value });
  return originalProperty;
};
const mockExit = jest.fn();
setProperty(process, 'exit', mockExit);

describe('Splits validation', () => {
  it('splits less than 1 throw error', () => {
    validateSplits(0, 0);
    expect(mockExit).toHaveBeenCalled();
  });

  it('index greater than splits throw error', () => {
    validateSplits(5, 6);
    expect(mockExit).toHaveBeenCalled();
  });
});

describe('File validation', () => {
  it('splits greater than files throw error', () => {
    validateFiles(['1'], 2);
    expect(mockExit).toHaveBeenCalled();
  });
});

describe('Error generation', () => {
  it('generates error', () => {
    returnError('test');
    expect(mockExit).toHaveBeenCalled();
  });
});
