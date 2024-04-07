class Logger {
  private static instance: Logger;
  private logMessage: string[];

  private constructor() {
    this.logMessage = [];
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    this.logMessage.push(message);
    console.log(`[Log]:${message}`);
  }
}

const logger1 = Logger.getInstance();
logger1.log("User logger in");

const logger2 = Logger.getInstance();
logger2.log("User logged out");

console.log(logger1 === logger2);
