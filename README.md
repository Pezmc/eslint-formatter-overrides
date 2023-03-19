# eslint-formatter-overrides

> [ESLint](https://eslint.org) formatter that outputs rule overrides to disable any file with an existing failure. 

## TL;DR

This formatter outputs a set of ESLint overrides that disable each rule for each file that it fails.

This is useful when increasing lint requirements for an existing code base.

## How to install

If you're using `yarn` just run

```shell
yarn add -D eslint-formatter-overrides
```

otherwise with `npm` run

```shell
npm i --save-dev eslint-formatter-overrides
```

## How to use

When you run ESLint just specify `eslint-formatter-overrides` as the formatter:

```shell
eslint -f overrides [file|dir|glob]*
```

or if you use an older version of ESLint:

```shell
eslint -f node_modules/eslint-formatter-overrides [file|dir|glob]*
```

See http://eslint.org/docs/user-guide/command-line-interface#-f---format

### Overriding Rules

The formatter will output the following:

```json
{
    "overrides": [{
        "rules": {
            "comma-spacing": "off"
        },
        "files": [
            "failing-file.js"
        ]
    }]
}     
```
