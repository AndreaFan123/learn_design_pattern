# Learn Design Pattern

## Content

- [Creational Design Pattern](#creational-design-pattern)
  - [Singleton](#singleton)
    - [Example](#singleton-example)

## Reference

[Refactoring Guru](https://refactoring.guru/design-patterns)

## Creational Design Pattern

<a id="creational-design-pattern"></a>

### What is Creational Design Pattern?

Creational design patterns use object creations mechanisms, this pattern increases the flexibility and reusability, there are five types of creational design patterns:

1. Singleton
2. Factory Method
3. Abstract Factory
4. Builder
5. Prototype

<a id="singleton"></a>

### Singleton

#### Why Singleton?

Singleton ensures that a class has **only one instance** and can access globally. It is useful when you need to :

- Control the number of instances that can be created.
- Create a single point of access to a particular object.

It is great for managing **global state** in an application.

<a id="singleton-example"></a>

#### Example

```typescript
// Please refer to logger.ts

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
```

- `private static instance: Logger;`: This is a static property of the class that will hold the single instance of the class, it's private, so it can only be accessed within the class.

- `private logMessage: string[];`: This is a private property that will hold an array of log messages, it can only be accessed within the class.

- `private constructor() {this.logMessage = [];}`: This is the constructor of the class, it's private to prevent creating new instance of the class from outside. It initializes the `logMessage` array.

- This is a public method that returns the single instance of the `Logger` class. This ensures that only one instance of the class is created and returned.

```typescript
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
```

#### Pros and Cons

**Pros**:

- **Controlled access**: Singleton pattern ensures that only one instance of the class is created and provides a global point of access to it.
- **Memory efficient**: Singleton pattern is memory efficient as it creates only one instance of the class and reuses it whenever required.
- **Lazy initialization**: Singleton pattern initializes the instance only when it is requested for the first time.

**Cons**:

- **Global state**: Singleton pattern introduces a global state in the application which can be accessed from anywhere in the code.
- **Difficult to test**: Singleton pattern can be difficult to test as it introduces a global state in the application.
