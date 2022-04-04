/* eslint-disable no-magic-numbers */

module.exports = {
  extends: ['plugin:react/recommended', './esnext.js'],

  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    // 必要なものをoverrideしてください
  },
};
