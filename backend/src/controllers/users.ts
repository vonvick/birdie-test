import { Request, Response } from "express";
import { Events } from "../entities/events";
import { getConnection } from "typeorm";
import { paginateResult } from "../helper/pagination.helper";

export const UsersController = {
  async fetchAllCareRecipientUsers(req: Request, res: Response): Promise<void> {
    try {
      const { per_page = 10, page = 1 } = req.query;
      const limit = Number(per_page);
      const offset = (Number(page) - 1) * limit;

      const connection = await getConnection();
      const eventsRepository = await connection.getRepository(Events);

      const data = await eventsRepository
        .createQueryBuilder()
        .select("care_recipient_id")
        .distinct(true)
        .orderBy("care_recipient_id")
        .skip(offset)
        .take(limit)
        .getRawMany();

      const [{ count }] = await eventsRepository
        .createQueryBuilder()
        .select("COUNT(DISTINCT(care_recipient_id))", "count")
        .getRawMany();

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
};
