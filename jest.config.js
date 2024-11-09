
module.exports = {
    testEnvironment: 'jsdom',
    roots: [
        '<rootDir>/src'
    ],
    verbose: true,
    transform: {
        '^.+\\.js$': ['babel-jest', { configFile: "./babel.jest.config.json" }],
    },
}
