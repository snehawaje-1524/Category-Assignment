    module.exports = {
        preset: "jest-preset-angular",
        roots: ["./src"],
        testMatch: ["**/+(*.)+(spec).+(ts)"],
        setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
        transform: {
            "^.+\\.(ts|js|html)$": "ts-jest",
        },
        testPathIgnorePatterns: [
            "<rootDir>/node_modules/",
            "<rootDir>/dist/",
            "<rootDir>/cypress/",
            "<rootDir>/src/test.ts",
            "node_modules/(?!@ngrx|ngx-socket-io)",
        ],
        collectCoverage: true,
        coverageReporters: ["html"],
        clearMocks: true,
        coverageDirectory: "coverage",
    };