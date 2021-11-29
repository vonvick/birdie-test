import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Events } from "../entities/events";
import { paginateResult } from "../helper/pagination.helper";
import { difference } from "lodash";

export const EventsController = {
  async fetchAllEventsByRecipientId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { per_page = 10, page = 1 } = req.query;
      const limit = Number(per_page);
      const offset = (Number(page) - 1) * limit;

      const connection = await getConnection();
      const eventsRepository = await connection.getRepository(Events);
      const [data, count] = await eventsRepository
        .createQueryBuilder("event")
        .where("care_recipient_id = :id", { id: req.params.recipient_id })
        .skip(offset)
        .take(limit)
        .getManyAndCount();

      const pagination = paginateResult(count, offset, limit);

      res.status(200).json({
        data,
        pagination,
      });
    } catch (error: any) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  async fetchEventsDetailsByType(_: Request, res: Response): Promise<void> {
    try {
      const connection = await getConnection();
      const eventsRepository = await connection.getRepository(Events);
      const events = await eventsRepository
        .createQueryBuilder()
        .select(["event_type", "payload"])
        .groupBy("event_type")
        .getRawMany();

      const data = events.map((event: any) => {
        const fieldKeys = Object.keys(event.payload);
        const excludedFields = [];

        for (let i = 0; i < fieldKeys.length; i++) {
          if (
            fieldKeys[i].toLowerCase().includes("_id") ||
            Array.isArray(event[fieldKeys[i]]) ||
            typeof event[fieldKeys[i]] === "object"
          ) {
            excludedFields.push(fieldKeys[i]);
          }
        }

        const relevantFields = difference(fieldKeys, excludedFields);

        return {
          id: event.event_type,
          fields: relevantFields,
        };
      });

      res.status(200).json({
        data,
      });
    } catch (error: any) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};
