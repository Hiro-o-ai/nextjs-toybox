const { FlatCompat } = require("@eslint/eslintrc")
const  prettier = require("eslint-config-prettier");

module.exports = [
    {
        files: ["src/**/*.ts", "src/**/*.tsx"],
        rules: {
            ...prettier.rules,
          },
    }
]