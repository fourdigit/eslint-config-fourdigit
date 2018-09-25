/* eslint-disable no-magic-numbers */

module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  env: {
    browser: true,
    node: true
  },

  globals: {
    document: true,
    $: true,
    window: true
  },

  plugins: ['dollar-sign'],

  rules: {
    'no-unused-vars': 0,

    'no-use-before-define': 2,
    'no-eq-null': 2,
    'consistent-return': 2,
    'default-case': 2,
    'no-alert': 2,
    'no-caller': 2,
    complexity: [0, 5],
    'no-dupe-class-members': 2,
    'no-magic-numbers': [2, { ignoreArrayIndexes: false, detectObjects: false, ignore: [0, 1] }],
    'no-irregular-whitespace': 0,
    'no-console': 2,
    'no-debugger': 0,
    'no-eval': 2,
    'dollar-sign/dollar-sign': [2, 'ignoreProperties'],

    // styling
    'no-trailing-spaces': 2,
    camelcase: 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'new-parens': 2,
    'no-floating-decimal': 2,
    'no-array-constructor': 2,
    'object-curly-spacing': [2, 'always'],
    'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'minimum' }],
    'no-multi-spaces': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'no-spaced-func': 2,
    'space-infix-ops': [2, { int32Hint: false }],
    'space-in-parens': [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }],
    semi: [2, 'always'],
    'linebreak-style': [2, 'unix'],
    'eol-last': 2,
    yoda: 2,
    quotes: [2, 'single', { allowTemplateLiterals: true }]
  }
};
