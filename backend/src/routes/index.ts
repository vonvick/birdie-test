import { Router } from "express";
import { eventsRoutes } from "./events";
import { pingRoutes } from "./ping";
import { usersRoutes } from "./users";

const rootRouter = (router: Router) => {
  eventsRoutes(router);
  pingRoutes(router);
  usersRoutes(router);
};

export default rootRouter;
