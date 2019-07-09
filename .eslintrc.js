module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        }
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "warn",
            { "allow": ["warn", "error"] }
        ],
        "no-extra-parens": [
            "error"
        ],
        "default-case": [
            "error"
        ],
        "max-classes-per-file": [
            "error",
            1
        ],
        "no-alert": [
            "warn"
        ],
        "no-else-return": [
            "error",
            { "allowElseIf": false }
        ],
        "no-empty-function": [
            "error"
        ],
        "no-eq-null": [
            "error"
        ],
        "no-eval": [
            "warn"
        ],
        "no-floating-decimal": [
            "error"
        ],
        "no-implicit-coercion": [
            "warn",
        ],
        "no-implied-eval": [
            "error"
        ],
        "no-magic-numbers": [
            "error",
            { "ignoreArrayIndexes": true }
        ],
        "no-multi-spaces": [
            "error"
        ],
        "no-new-function": [
            "error"
        ],
        "no-new-wrappers": [
            "error"
        ],
        "no-param-reassign": [
            "error"
        ],
        "no-proto": [
            "warn"
        ],
        "no-return-assign": [
            "error",
            "always"
        ],
        "no-return-await": [
            "error"
        ],
        "no-script-url": [
            "error"
        ],
        "no-self-compare": [
            "error"
        ],
        "no-sequences": [
            "error"
        ],
        "no-throw-literal": [
            "error"
        ],
        "no-useless-concat": [
            "warn"
        ],
        "no-useless-return": [
            "error"
        ],
        "no-void": [
            "error"
        ],
        "require-await": [
            "error"
        ],
        "init-declarations": [
            "error",
            "always"
        ],
        "no-shadow": [
            "error"
        ],
        "no-undefined": [
            "error"
        ],
        "no-use-before-define": [
            "error"
        ],
        "global-require": [
            "error"
        ],
        "handle-callback-err": [
            "warn"
        ],
        "no-mixed-required": [
            "error"
        ],
        "no-new-require": [
            "error"
        ],
        "no-sync": [
            "warn"
        ],
        "array-bracket-newline": [
            "warn",
            { "multililne": true }
        ],
        "array-bracket-spacing": [
            "warn",
            "always",
            {
                "singleValue": false,
                "objectsInArray": false,
                "arraysInArrays": false
            }
        ],
        "array-element-newline": [
            "warn",
            "always",
            {
                "multiline": false
            }
        ],
        "block-spacing": [
            "warn",
            "always"
        ],
        "brace-style": [
            "warn",
            "1tbs",
            { "allowSingleLine": true }
        ],
        "camelcase": [
            "warn",
            { "properties": "always" }
        ],
        "capitalized-commnets": [
            "warn",
            "never"
        ],
        "comman-dangle": [
            "warn",
            "never"
        ],
        "comma-spacing": [
            "warn"
        ],
        "comma-style": [
            "warn"
        ],
        "computed-property-spacing": [
            "warn"
        ],
        "func-call-spacing": [
            "warn"
        ],
        "func-style": [
            "warn"
        ],
        "function-paren-newline": [
            "warn",
            { "minItems": 4 }
        ],
        "implicit-arrow-linebreak": [
            "warn"
        ],
        "key-spacing": [
            "warn"
        ],
        "keyworld-spacing": [
            "warn",
            {
                "after": false
            }
        ],
        "line-comment-position": [
            "warn"
        ],
        "lines-around-comment": [
            "warn",
            {
                "beforeBlockComment": true,
                "afterBlockComment": false,
                "beforeLineComment": true,
                "afterLineComment": false,
                "allowBlockStart": false,
                "allowBlockEnd": false,
                "allowObjectStart": false,
                "allowObjectEnd": false,
                "AllowArrayStart": true,
                "AllowArrayEnd": false,
                "AllowClassStart": false,
                "AllowClassEnd": false
            }
        ],
        "lines-between-class-members": [
            "warn"
        ],
        "max-dpeth": [
            "warn"
        ],
        "max-len": [
            "warn",
            { "code": 40 }
        ],
        "max-lines-per-function": [
            "warn",
            { "max": 30 }
        ],
        "max-params": [
            "warn",
            { "max": 4 }
        ],
        "new-cap": [
            "warn"
        ],
        "new-parens": [
            "warn"
        ],
        "newline-per-chained-call": [
            "warn"
        ],
        "no-array-constructor": [
            "error"
        ],
        "no-bitwise": [
            "error"
        ],
        "no-continue": [
            "error"
        ],
        "no-line-comments": [
            "warn"
        ],
        "no-lonely-if": [
            "warn"
        ],
        "no-mixed-operators": [
            "warn"
        ],
        "no-multi-assign": [
            "warn"
        ],
        "no-multiple-empty-lines": [
            "warn",
            {
                "maxEOF": 1,
                "maxBOF": 0
            }
        ],
        "no-negated-condition": [
            "warn"
        ],
        "no-nested-ternary": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-plusplus": [
            "warn",
            { "allowForLoopAfterthoughts": true }
        ],
        "no-tabs": [
            "warn"
        ],
        "no-trailing-spaces": [
            "warn"
        ],
        "no-unneeded-ternary": [
            "error"
        ],
        "no-whitespace-before-property": [
            "warn"
        ],
        "object-curly-newline": [
            "warn",
            { "multiline": true }
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "operator-assignment": [
            "warn"
        ],
        "operator-linebreak": [
            "warn",
            "before"
        ],
        "quote-props": [
            "warn",
            "always"
        ],
        "semi-spacing": [
            "warn",
            {
                "before": false,
                "after": true
            }
        ],
        "semi-style": [
            "warn"
        ],
        "sort-keys": [
            "warn"
        ],
        "space-before-blocks": [
            "warn"
        ],
        "space-before-function-paren": [
            "warn",
            "never"
        ],
        "space-in-parens": [
            "warn",
            "never"
        ],
        "space-unary-ops": [
            "warn"
        ],
        "spaced-comment": [
            "warn",
            "always"
        ],
        "switch-colon-spacing": [
            "warn"
        ],
        "arrow-body-style": [
            "error",
            "always"
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "warn"
        ],
        "constructor-super": "off",
        "no-confusing-arrow": [
            "error"
        ],
        "no-var": [
            "error"
        ],
        "prefer-arrow-callback": [
            "error"
        ],
        "prefer-const": [
            "warn"
        ]
    }
};
