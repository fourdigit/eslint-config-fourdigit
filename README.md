# ESLint Sharable Config for FOURDIGIT

[![Build Status](https://travis-ci.org/fourdigit/eslint-config-fourdigit.svg?branch=master)](https://travis-ci.org/fourdigit/eslint-config-fourdigit) [![Greenkeeper badge](https://badges.greenkeeper.io/fourdigit/eslint-config-fourdigit.svg)](https://greenkeeper.io/)

This package is sharable config of ESLint used in the FOURDIGIT project.

## Installation

```
// npm
$ npm install --save-dev @fourdigit/eslint-config-fourdigit

// yarn
$ yarn add --dev @fourdigit/eslint-config-fourdigit
```

## Usage

### Base + ES2018 + React

ES2018 + Reactのコードベース用設定ファイルです。
プロジェクトの`.eslintrc`に以下のように記述してください。

```
{
  "root": true,
  "extends": ["@fourdigit/eslint-config-fourdigit"]
}
```

### Base + ES2018

ES2018のコードベース用設定ファイルです。
プロジェクトの`.eslintrc`に以下のように記述してください。

```
{
  "root": true,
  "extends": ["@fourdigit/eslint-config-fourdigit/esnext"]
}
```

ES2018以前のECMAScriptのバージョンを使用する場合は、以下のような記述もしてください。

```
{
  parserOptions: {
    ecmaVersion: 2015
  }
}
```

### Base

ES5のコードベース用設定ファイルです。
プロジェクトの`.eslintrc`に以下のように記述してください。

```
{
  "root": true,
  "extends": ["@fourdigit/eslint-config-fourdigit/base"]
}
```

## Prettier

プロジェクト内で`.prettierrc.js`を用意して、以下のように記述をしてください。

```
module.exports = require('@fourdigit/eslint-config-fourdigit/.prettierrc.js')
```
