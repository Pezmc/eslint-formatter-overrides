# eslint-formatter-overrides

> [ESLint](https://eslint.org) formatter that outputs rule overrides to disable any file with an existing failure. 

## TL;DR

This formatter outputs a set of ESLint overrides that disable each rule for each file that it fails.

This is useful when increasing lint requirements for an existing code base, or when introducing eslint for the first time.

## Best Practices

- Add your new ESLint rules to, or set up ESLint in, an existing project
- Run this plugin to generate a set of overrides so all lint checks pass
- Add those overrides to your eslint config
- Over time, aim to remove all overrides from the eslint file

## How to use

### Install

If you're using `yarn` just run

```shell
yarn add -D eslint-formatter-overrides
```

otherwise with `npm` run

```shell
npm i eslint-formatter-overrides
```

### Run

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

The formatter will output an array of override rules, like the following:

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

Add this to your [eslint config file](https://eslint.org/docs/latest/use/configure/configuration-files).

Now, all rule failures in your eslint project are disabled on a per file basis.

### Remove

The formatters work is now done, so you can uninstall it:


If you're using `yarn` just run

```shell
yarn remove eslint-formatter-overrides
```

otherwise with `npm` run

```shell
npm remove eslint-formatter-overrides
```

