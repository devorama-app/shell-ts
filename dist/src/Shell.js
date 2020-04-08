"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_get_1 = __importDefault(require("lodash.get"));
const MissingOptionException_1 = __importDefault(require("./exception/MissingOptionException"));
class Shell {
    constructor({ args, options, config }) {
        this.requiredOptions = [];
        this.arguments = args;
        this.options = options;
        this.config = config;
    }
    getArguments() {
        return this.arguments;
    }
    getOptions() {
        return this.options;
    }
    getOption(key) {
        return lodash_get_1.default(this.options, key);
    }
    getConfigs() {
        return this.config;
    }
    getConfig(key) {
        return lodash_get_1.default(this.config, key);
    }
    isMissingOption(key) {
        return this.getOption(key) === undefined;
    }
    run() {
        this.validateRequirements();
        this.execute();
    }
    execute() {
    }
    isVerbose() {
        return !!this.getOption("verbose");
    }
    verbose(message) {
        if (this.isVerbose()) {
            console.log(message);
        }
    }
    validateRequirements() {
        for (const key of this.requiredOptions) {
            if (this.isMissingOption(key)) {
                throw new MissingOptionException_1.default("yolo");
            }
        }
        return true;
    }
}
exports.Shell = Shell;
//# sourceMappingURL=Shell.js.map