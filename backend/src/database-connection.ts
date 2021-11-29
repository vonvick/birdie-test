import { Connection, createConnection } from "typeorm";
import { Events } from './entities/events'

export const createDatabaseConnection =
  async (): Promise<Connection | void> => {
    return await createConnection({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        Events
      ],
      synchronize: false,
      logging: false,
    });
  };
