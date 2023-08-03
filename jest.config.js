/** @type {import('jest').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest")

const createJestConfig = nextJest({
    dir: "./"
})

const customJestConfig = {
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.ts(x)"],
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
}

module.exports = createJestConfig(customJestConfig)
