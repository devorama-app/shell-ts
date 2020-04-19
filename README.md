# shell-ts

Library to execute command line tasks in nodejs and typescript

## Install

```shell
# with npm
npm install shell-ts

# with yarn
yarn add shell-ts
```

## Quick use and demo

[Read Typescript starter project](https://github.com/devorama-app/node-shell-ts-starter)

## Create Shell script

Minimal shell script

```ts
import { Shell, ShellInterface } from "shell-ts";

export default class YoloShell extends Shell implements ShellInterface {

  public execute(): void {
    console.log('I run my yolo script')
  }
}
```

## Shell class api

`Shell.ts` is the abstract class that you need to extend.

### Arguments

#### requiredOptions

List the options that are required. If an option is missing a `MissingOptionException` is thrown.

`protected  requiredOptions:  string[] = [];`

Usage :

```ts
protected requiredOptions: string[] = ["id"];

// mycommand --id 3
// --- OK

// mycommand
// --- Exception
```

### Methods

#### constructor

`constructor({ args, options, config }:  ParamsI)`

- `args` : list of arguments of your command (`string[]`) [see the starter](https://github.com/devorama-app/node-shell-ts-starter#run-shell-script)

- `options` : options of your command (`object`) [see the starter](https://github.com/devorama-app/node-shell-ts-starter#run-shell-script)

- `config` : config of your project (`object`) [see the starter](https://github.com/devorama-app/node-shell-ts-starter#run-shell-script)

#### execute

put your script code here

#### getArguments

List all arguments of your command

`public  getArguments():  string[]`

#### getOptions

List all options of your command

`public  getOptions():  OptionsI`

#### getOption

Get an option by key

`public  getOption(key:  string):  string  |  undefined`

#### getConfigs

Get all config object

`public  getConfigs():  ConfigI  |  undefined`

#### getConfig

Get a config by key

`public  getConfig(key:  string):  string  |  number  |  boolean  |  ConfigI  |  undefined`

Usages :

```ts
/* config = {
	db: {
		user: "root"
	},
	debug: true
} */

this.getConfig('debug'); // true
this.getConfig('db.user'); // "root"
```

#### isMissingOption

Check if an option is missing in your command

`public  isMissingOption(key:  string):  boolean`

Usages :

```ts
// mycommand --id 3

this.isMissingOption('id'); // false
this.isMissingOption('unknow'); // true
```

#### verbose

Log message only if verbose option passed in your command

`protected  verbose(message:  string):  void`

## Contributing

Clone repository and run `npm install`.

Run tests with command `npm run test`

Commit your modifications with commitizen : `npm run commit`
