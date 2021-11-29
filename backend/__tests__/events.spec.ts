import app from '../src/application'
import * as request from 'supertest';
import { Events } from '../src/entities/events';
import { createDatabaseConnection } from "../src/database-connection";
import { getConnection } from "typeorm";
import * as Faker from "faker";
import { EventTypesInterface } from "../src/typings";

describe("Events Controller", () => {
  beforeAll(async (done) => {
    await createDatabaseConnection();
    done();
  });

  afterAll(async (done) => {
    await getConnection().close()
    done();
  });

  describe("/api/events/recipient/:recipientId", () => {
    let recipientIds: Events[];
    beforeAll(async (done) => {
      const connection = await getConnection();
      const eventsRepository = await connection.getRepository(Events);
      recipientIds = await eventsRepository
        .createQueryBuilder("event")
        .select("care_recipient_id")
        .distinct(true)
        .orderBy("care_recipient_id")
        .getRawMany();
      done();
    });

    it('should return only events for recipient ', async () => {
      const recipientId = recipientIds[0].care_recipient_id
      await request(app)
        .get(`/api/events/recipient/${recipientId}`)
        .expect(200)
        .expect(function(res) {
          expect(res.body.data[0].care_recipient_id).toEqual(recipientId);
        });
    });

    it('should return paginated result for the recipients if available', async () => {
      const recipientId = recipientIds[0].care_recipient_id
      await request(app)
        .get(`/api/events/recipient/${recipientId}`)
        .expect(200)
        .expect(function(res) {
          expect(res.body.pagination.currentPage).toEqual(1);
        });
    });

    it('should return an empty data if the care recipient does not exist', async () => {
      const nonExistentId = Faker.datatype.uuid();
      await request(app)
        .get(`/api/events/recipient/${nonExistentId}`)
        .expect(200)
        .expect(function(res) {
          expect(res.body.data.length).toEqual(0);
        });
    });
  });

  describe("/api/events/types", () => {
    it("should return all event types available in the system", async () => {
      await request(app)
        .get(`/api/events/types`)
        .expect(200)
        .expect(function(res) {
          expect(res.body.data.length).toEqual(26);
        });
    });

    it("should not return excluded field", async () => {
      await request(app)
      .get(`/api/events/types`)
      .expect(200)
      .expect(function(res) {
        const responses = res.body.data as Array<EventTypesInterface>
        const excludedField = responses.every((response): boolean  => {
          return response.fields.every(field => !field.toLowerCase().includes("_id"));
        });

        expect(excludedField).toBe(true);
      });
    });
  });
});
