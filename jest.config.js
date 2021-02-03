module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['src/cli.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/index.ts'],
  coverageDirectory: 'coverage-reports',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  collectCoverage: true,
  testMatch: ['<rootDir>/**/*.test.js', '<rootDir>/**/*.test.ts'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/dist/'],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
