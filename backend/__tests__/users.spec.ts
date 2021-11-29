import app from '../src/application'
import * as request from 'supertest';
import { Events } from '../src/entities/events';
import { createDatabaseConnection } from "../src/database-connection";
import { getConnection } from "typeorm";

describe("Users Controller", () => {
  beforeAll(async (done) => {
    await createDatabaseConnection();
    done();
  });

  afterAll(async (done) => {
    await getConnection().close()
    done();
  });

  describe("/api/recipients/care-recipients", () => {
    let careRecipients: Events[];

    beforeAll(async (done) => {
      const connection = await getConnection();
      const eventsRepository = await connection.getRepository(Events);
      careRecipients = await eventsRepository
        .createQueryBuilder()
        .select("care_recipient_id")
        .distinct(true)
        .orderBy("care_recipient_id")
        .getRawMany();
      done();
    });

    it('should return all care recipients', async () => {
      await request(app)
      .get(`/api/users/care-recipients`)
      .expect(200)
      .expect(function(res) {
        expect(res.body.data.length).toEqual(careRecipients.length);
      });
    });
  });
});
