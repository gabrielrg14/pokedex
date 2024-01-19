import type { Config } from "jest"
import nextJest from "next/jest"

const createJestConfig = nextJest({
    dir: "./"
})

const customJestConfig: Config = {
    testEnvironment: "<rootDir>/.jest/jsdom-extended.ts",
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    testEnvironmentOptions: {
        customExportConditions: [""]
    },
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
}

export default createJestConfig(customJestConfig)
