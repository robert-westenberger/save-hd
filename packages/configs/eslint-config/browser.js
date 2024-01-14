const baseRules = require('./baseRules.json');
const reactRules = require('./reactRules.json');
const jsxA11yRules = require('./jsxA11yRules.json');
const disableConflictingTypescriptRules = require("./disableConflictingTypescriptESLintRules.json");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "google",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:import/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:jest/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "compat"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                project,
                "alwaysTryTypes": true
            },
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        ...baseRules,
        ...jsxA11yRules,
        ...reactRules,
        ...disableConflictingTypescriptRules,
        "import/no-extraneous-dependencies": [2, {"devDependencies": true, "optionalDependencies": false}],
        "@typescript-eslint/restrict-template-expressions": ["error", {
            allowBoolean: true,
            allowNumber: true
        }]
    },
    "overrides": [
        {
            "env": {
                "jest/globals": true
            },
            "files": [
                "**/test/**/*.ts",
                "**/*/test.ts",
                "**/*/test.tsx"
            ],
            "plugins": [
                "jest"
            ],
            "rules": {
                "import/no-extraneous-dependencies": 0
            }
        }
    ]
}
