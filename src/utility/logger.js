const isDevelopment = process.env.NODE_ENV === "development";

export default class Logger {
  static info(...args) {
    if (isDevelopment) console.log(...args);
  }
  static error(...args) {
    if (isDevelopment) console.error(...args);
  }
  static warn(...args) {
    if (isDevelopment) console.warn(...args);
  }
}
