class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor(connectionString: string) {
    console.log(`Connect to database: ${connectionString}`);
  }

  public static getInstance(connectionString: string): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection(connectionString);
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}

const dbConnection1 = DatabaseConnection.getInstance(
  "Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword"
);

dbConnection1.query("SELECT * FROM Users");

const dbConnection2 = DatabaseConnection.getInstance(
  "Server=myServerAddress;Database=myDataBase;User Id=myUsername;Password=myPassword;"
);

dbConnection2.query("INSERT INTO Users (name) VALUES ('Harry Potter')");
