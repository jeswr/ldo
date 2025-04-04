// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require("../../jest.config.js");
module.exports = {
  ...sharedConfig,
  rootDir: "./",
  setupFiles: ["<rootDir>/test/setup-tests.ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
