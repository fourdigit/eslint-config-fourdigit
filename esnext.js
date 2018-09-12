/* eslint-disable no-magic-numbers */

module.exports = {
  extends: ['./base.js'],

  parser: 'babel-eslint',

  env: {
    // es6(es2015)以降で使用するバージョンを指定してください
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6
  },

  rules: {
    eqeqeq: 2,
    'no-var': 2,
    'prefer-const': 2
  }
};
