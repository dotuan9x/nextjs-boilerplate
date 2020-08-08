module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": 0,
        "react/display-name": 0,
        "no-mixed-spaces-and-tabs": 0,
        indent: ["error", 4, {SwitchCase: 1}],
        quotes: ["error", "single"],
        "max-len": [
            0,
            {
                code: 120,
                tabWidth: 4,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true
            }
        ],
        semi: ["error", "always", {omitLastInOneLineBlock: true}],
        "semi-spacing": ["error", {before: false, after: true}],
        "object-curly-spacing": ["error", "never"],
        "lines-between-class-members": ["error", "always"],
        "default-case": 0,
        "space-infix-ops": ["error", {int32Hint: false}],
        "comma-dangle": ["error", "never"],
        "no-prototype-builtins": 0,
        "guard-for-in": 0,
        "no-console": ["error", {allow: ["warn", "error"]}],
        "no-unused-vars": ["warn"],
        curly: ["error"],
        "padding-line-between-statements": [
            "error",
            {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"]
            },
            {blankLine: "always", prev: ["import"], next: "*"},
            {
                blankLine: "any",
                prev: ["import"],
                next: ["import"]
            },
            {blankLine: "always", prev: "*", next: ["export"]},
            {
                blankLine: "any",
                prev: ["export"],
                next: ["export"]
            }
        ],
        "no-multiple-empty-lines": ["error", {max: 1, maxEOF: 1}],
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true
            }
        ],
        "react/jsx-space-before-closing": ["error"],
        "no-class-assign": 0,
        "no-undef": 0,
        "react/no-string-refs": 0,
        "keyword-spacing": "error",
        "space-before-blocks": "error",
        "no-case-declarations": 0
    }
};
