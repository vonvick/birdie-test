import * as express from "express";
import * as cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
const router = express.Router();

routes(router);

app.use(express.json());
app.use("/api", router);

export default app;
