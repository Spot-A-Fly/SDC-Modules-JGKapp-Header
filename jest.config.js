/* eslint-disable */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/client/index.jsx**",
    "!**/server/**",
    "!**/vendor/**",
    "!**/public/**",
    "!**/*.config.js",
    "!**/coverage/**"
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost:3001',

  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // React Testing Library setup
  setupFilesAfterEnv: ['./rtl.setup.js'],
};
