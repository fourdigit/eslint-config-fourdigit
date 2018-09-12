# ESLint Sharable Config for FOURDIGIT

This package is sharable config of ESLint used in the FOURDIGIT project.

## Installation

```
// npm
$ npm install --save-dev @fourdigit/eslint-config-fourdigit

// yarn
$ yarn add --dev @fourdigit/eslint-config-fourdigit
```

## Usage

### Base + ES6 + React

ES6 + Reactのコードベース用設定ファイルです。
プロジェクトの`.eslintrc`に以下のように記述してください。

```
{
  "root": true,
  "extends": ["fourdigit"]
}
```

### Base + ES6

ES6のコードベース用設定ファイルです。
プロジェクトの`.eslintrc`に以下のように記述してください。

```
{
  "root": true,
  "extends": ["fourdigit/esnext"]
}
```

ECMAScriptのバージョンをES7以降にする場合は、以下のような記述もしてください。

```
{
  env: {
    es7: true
  },
  parserOptions: {
    ecmaVersion: 7
  }
}
```

### Base

ES5のコードベース用設定ファイルです。
プロジェクトの`.eslintrc`に以下のように記述してください。

```
{
  "root": true,
  "extends": ["fourdigit/base"]
}
```
