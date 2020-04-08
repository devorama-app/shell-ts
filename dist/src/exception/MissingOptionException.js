"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MissingOptionException extends Error {
    constructor(option) {
        const finalMessage = `A required option is missing : ${option}`;
        super(finalMessage);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = new Error(finalMessage).stack;
        }
    }
}
exports.default = MissingOptionException;
//# sourceMappingURL=MissingOptionException.js.map