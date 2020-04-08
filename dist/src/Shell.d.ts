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
export declare class Shell {
    protected requiredOptions: string[];
    private arguments;
    private options;
    private config?;
    constructor({ args, options, config }: ParamsI);
    getArguments(): string[];
    getOptions(): OptionsI;
    getOption(key: string): string | undefined;
    getConfigs(): ConfigI | undefined;
    getConfig(key: string): string | number | boolean | ConfigI | undefined;
    isMissingOption(key: string): boolean;
    run(): void;
    execute(): void;
    protected isVerbose(): boolean;
    protected verbose(message: string): void;
    private validateRequirements;
}
