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

### Base + ES2018 + React

ES2018 + Reactのコードベース用設定ファイルです。
プロジェクトの`.eslintrc`に以下のように記述してください。

```
{
  "root": true,
  "extends": ["fourdigit"]
}
```

### Base + ES2018

ES2018のコードベース用設定ファイルです。
プロジェクトの`.eslintrc`に以下のように記述してください。

```
{
  "root": true,
  "extends": ["fourdigit/esnext"]
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
  "extends": ["fourdigit/base"]
}
```
