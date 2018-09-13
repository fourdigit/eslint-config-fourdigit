/* eslint-disable no-magic-numbers */

module.exports = {
  extends: ['plugin:react/recommended'],

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'jsx-quotes': [2, 'prefer-double']
  }
};
