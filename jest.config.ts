import type { Config } from "jest"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest")

const createJestConfig = nextJest({
    dir: "./"
})

const customJestConfig: Config = {
    testEnvironment: "<rootDir>/.jest/jsdom-extended.ts",
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    testEnvironmentOptions: {
        customExportConditions: [""]
    },
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.ts(x)"],
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
}

module.exports = createJestConfig(customJestConfig)
