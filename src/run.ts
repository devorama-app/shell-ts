import * as process from "process";
import minimist from "minimist";

import { ConfigI } from "./";

export default (shellDirectory: string, config?: ConfigI): void => {
  const argv = minimist(process.argv.slice(2));
  const { _: shellArgs, ...options } = argv;
  const [dirName, ...args] = shellArgs;
  const className = dirName + "Shell";

  const {
    default: ShellClass,
    // eslint-disable-next-line security/detect-non-literal-require, @typescript-eslint/no-var-requires
  } = require(`${shellDirectory}/${dirName}/${className}`);
  const shellClass = new ShellClass({ args, options, config });
  shellClass.run();
};
