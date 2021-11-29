import { Router } from "express";
import { PingController } from "../controllers";

export const pingRoutes = (router: Router): void => {
  router.get("/hello", PingController.hello);
};
