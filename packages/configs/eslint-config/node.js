const { resolve } = require("node:path");
const baseRules = require("./baseRules.json");
const disableConflictingTypescriptRules = require("./disableConflictingTypescriptESLintRules.json");
const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        "browser": false,
        "node": true,
        "es2021": true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:import/recommended",
        "plugin:jest/recommended",
        "eslint:recommended",
        "prettier"
    ],
    plugins: [
        "@typescript-eslint",
        "compat"
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
                alwaysTryTypes: true
            },
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        }
    },
    ignorePatterns: [
        // Ignore dotfiles
        ".*.js",
        "node_modules/",
        "dist/",
    ],
    overrides: [
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
    ],
    "rules": {
        ...baseRules,
        ...disableConflictingTypescriptRules,
        "import/no-extraneous-dependencies": [2, {"devDependencies": true, "optionalDependencies": false}],
        "@typescript-eslint/restrict-template-expressions": ["error", {
            allowBoolean: true,
            allowNumber: true
        }]
    },
};
