import { Router } from "express";
import { UsersController } from "../controllers";

export const usersRoutes = (router: Router): void => {
  router.get(
    "/users/care-recipients",
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    UsersController.fetchAllCareRecipientUsers
  );
};
