module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Set the test environment to jsdom
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)",
    "!**/__tests__/ContactPage.test.[jt]s?(x)",
  ],
};
