import * as express from "express";
import * as cors from "cors";
import routes from "./routes";
import * as path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../frontend/build")));

const router = express.Router();
routes(router);

app.use("/api", router);

export default app;
