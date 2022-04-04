/* eslint-disable no-magic-numbers */

module.exports = {
  extends: ['./base.js'],

  parser: '@babel/eslint-parser',

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  rules: {
    eqeqeq: 2,
    'no-var': 2,
    'prefer-const': 2,
  },
};
