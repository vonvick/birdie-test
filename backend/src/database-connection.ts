import { Connection, createConnection } from "typeorm";

export const createDatabaseConnection =
  async (): Promise<Connection | void> => {
    return await createConnection({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + "/entities/events.ts"],
      synchronize: false,
      logging: false,
    });
  };
