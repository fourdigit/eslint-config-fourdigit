/* eslint-disable no-magic-numbers */

module.exports = {
  extends: ['./base.js'],

  parser: 'babel-eslint',

  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  rules: {
    eqeqeq: 2,
    'no-var': 2,
    'prefer-const': 2
  }
};
