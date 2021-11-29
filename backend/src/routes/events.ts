import { Router } from "express";
import { EventsController } from "../controllers";

export const eventsRoutes = (router: Router): void => {
  router.get(
    "/events/recipient/:recipient_id",
    EventsController.fetchAllEventsByRecipientId
  );
  router.get("/events/types", EventsController.fetchEventsDetailsByType);
};
