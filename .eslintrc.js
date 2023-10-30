module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            2,
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],

        "react/react-in-jsx-scope": "off",
    }
}
