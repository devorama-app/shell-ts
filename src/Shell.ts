import _get from "lodash.get";
import MissingOptionException from "./exception/MissingOptionException";

export interface OptionsI {
  [key: string]: string | undefined;
}

export interface ConfigI {
  [key: string]: string | number | boolean | ConfigI | undefined;
}

export interface ParamsI {
  args: string[];
  options: OptionsI;
  config?: ConfigI;
}

export class Shell {
  protected requiredOptions: string[] = [];

  private arguments: string[];
  private options: OptionsI;
  private config?: ConfigI;

  constructor({ args, options, config }: ParamsI) {
    this.arguments = args;
    this.options = options;
    this.config = config;
  }

  public getArguments(): string[] {
    return this.arguments;
  }

  public getOptions(): OptionsI {
    return this.options;
  }

  public getOption(key: string): string | undefined {
    return _get(this.options, key);
  }

  public getConfigs(): ConfigI | undefined {
    return this.config;
  }

  public getConfig(
    key: string
  ): string | number | boolean | ConfigI | undefined {
    return _get(this.config, key);
  }

  public isMissingOption(key: string): boolean {
    return this.getOption(key) === undefined;
  }

  public run(): void {
    this.validateRequirements();
  }

  protected isVerbose(): boolean {
    return !!this.getOption("verbose");
  }

  protected verbose(message: string): void {
    if (this.isVerbose()) {
      console.log(message);
    }
  }

  private validateRequirements(): boolean {
    for (const key of this.requiredOptions) {
      if (this.isMissingOption(key)) {
        throw new MissingOptionException("yolo");
      }
    }
    return true;
  }
}
