// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import "reflect-metadata";
import app from "./application";
import { createDatabaseConnection } from "./database-connection";

const port = process.env.PORT || 8000;

createDatabaseConnection()
  .then(() => {
    app.listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log({ error });
  });
