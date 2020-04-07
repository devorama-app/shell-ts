import { Shell, ShellInterface } from "../src";
import MissingOptionException from "../src/exception/MissingOptionException";

describe("Test Shell.ts", () => {
  let shell: Shell;
  const params = {
    args: ["arg1", "arg2"],
    options: { id: "3" },
    config: {
      db: {
        user: "root",
        password: "very secure",
      },
    },
  };

  beforeEach(() => (shell = new Shell(params)));

  test("getArguments() return arguments", () => {
    expect(shell.getArguments()).toBe(params.args);
  });

  test("getOptions() return objet of options", () => {
    expect(shell.getOptions()).toBe(params.options);
  });

  test("getOption() with key return value", () => {
    expect(shell.getOption("id")).toBe(params.options.id);
  });

  test("getOption() with unknow key return undefined", () => {
    expect(shell.getOption("unknow")).toBe(undefined);
  });

  test("getConfigs() return objet of configs", () => {
    expect(shell.getConfigs()).toBe(params.config);
  });

  test("getConfig() with key return value", () => {
    expect(shell.getConfig("db")).toBe(params.config.db);
  });

  test("getConfig() accept deep key", () => {
    expect(shell.getConfig("db.user")).toBe(params.config.db.user);
  });

  test("getConfig() with unknow key return undefined", () => {
    expect(shell.getConfig("db.unknow")).toBe(undefined);
  });

  test("isMissingOption() return true if option not exist", () => {
    expect(shell.isMissingOption("unknow")).toBe(true);
  });

  test("isMissingOption() return false if option exist", () => {
    expect(shell.isMissingOption("id")).toBe(false);
  });

  test("run() with missing required option throw error", () => {
    class MyShell extends Shell implements ShellInterface {
      protected requiredOptions: string[] = ["id"];

      public execute(): void {
        // do something
      }
    }

    const myShell = new MyShell({ args: [], options: {} });

    expect(() => {
      myShell.run();
    }).toThrow(MissingOptionException);
  });

  test("run() without missing required option no throw errors", () => {
    class MyShell extends Shell implements ShellInterface {
      protected requiredOptions: string[] = ["id"];

      public execute(): void {
        // do something
      }
    }

    const myShell = new MyShell({ args: [], options: { id: "3" } });

    expect(() => {
      myShell.run();
    }).not.toThrow(MissingOptionException);
  });

  test("run() without requiredFields no throw errors", () => {
    expect(() => {
      shell.run();
    }).not.toThrow();
  });
});
