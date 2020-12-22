module.exports = {
    env: {
        browser: true
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: "module"
    },
    extends: 'eslint:recommended',
    rules: {
        quotes: ['error', 'single']
    }
}