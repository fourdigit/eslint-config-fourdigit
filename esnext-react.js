/* eslint-disable no-magic-numbers */

module.exports = {
  extends: [
    'plugin:react/recommended',
    './esnext.js'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    // 必要なものをoverrideしてください
  }
};
