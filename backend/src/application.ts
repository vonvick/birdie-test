import * as express from "express";
import * as cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();
routes(router);

app.use("/api", router);

export default app;
