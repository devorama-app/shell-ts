export default class MissingOptionException extends Error {
  constructor(option: string) {
    const finalMessage = `A required option is missing : ${option}`;
    super(finalMessage);
    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(finalMessage).stack;
    }
  }
}
