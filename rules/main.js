module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/recommended",
        "plugin:unicorn/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/unicorn"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            },
            "typescript": {
                "moduleDirectory": ["node_modules", "src/"],
                "extensions": [".js", ".jsx", ".ts", ".tsx"],
                "alwaysTryTypes": true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
                "directory": "./tsconfig.json"
            }
        }
    },
    "parserOptions": {
        "ecmaVersion": 10,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": ["@typescript-eslint", "unicorn", "prettier", "rxjs", "import"],
    "env": {
        "browser": true
    },
    "rules": {
        "no-cond-assign": "warn",
        "no-console": ["warn", {
            "allow": ["error", "warn"]
        }],
        "no-constant-condition": "warn",
        "no-control-regex": "warn",
        "no-debugger": "warn",
        "no-dupe-args": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty-character-class": "warn",
        "no-empty": "warn",
        "no-ex-assign": "warn",
        "no-extra-boolean-cast": "warn",
        "no-extra-semi": "warn",
        "no-func-assign": "warn",
        "no-inner-declarations": "warn",
        "no-invalid-regexp": "warn",
        "no-irregular-whitespace": "warn",
        "no-negated-in-lhs": "warn",
        "no-obj-calls": "warn",
        "no-regex-spaces": "warn",
        "no-sparse-arrays": "off",
        "no-unreachable": "warn",
        "use-isnan": "warn",
        "valid-typeof": "warn",
        "no-fallthrough": "warn",
        "no-octal": "warn",
        "no-redeclare": "warn",
        "no-delete-var": "warn",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-mixed-spaces-and-tabs": "warn",
        "prettier/prettier": "warn",
        "rxjs/no-async-subscribe": "error",
        "rxjs/no-ignored-observable": "error",
        "rxjs/no-ignored-subscription": "off",
        "rxjs/no-nested-subscribe": "off",
        "rxjs/no-unbound-methods": "error",
        "import/prefer-default-export": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/unbound-method": "off",
        "lines-between-class-members": "off",
        "no-useless-constructor": "off",
        "no-empty-function": "off",
        "class-methods-use-this": "off",
        "eqeqeq": ["warn", "smart"],
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "rxjs/throw-error": "off",
        "prefer-const": "warn",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@angular-eslint/directive-selector": ["error", {
            "type": "attribute",
            "prefix": "dgk",
            "style": "camelCase"
        }],
        "@angular-eslint/component-selector": ["error", {
            "type": "element",
            "prefix": "dgk",
            "style": "kebab-case"
        }],
        "no-restricted-imports": ["error", {
            "patterns": ["../*"]
        }],
        "unicorn/prevent-abbreviations": "off",
        "no-underscore-dangle": ["warn", {
            "allowAfterThis": true,
            "allowAfterSuper": true
        }]
    }
}