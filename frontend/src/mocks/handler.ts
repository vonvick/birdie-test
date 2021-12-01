import { rest, setupWorker } from "msw";
import eventTypes from "../test-helpers/eventTypes.json";
import events from "../test-helpers/events.json";
import recipients from "../test-helpers/recipients.json";
import {paginateResult} from "../helpers/pagination.helper";

const apiUrl = process.env.REACT_APP_APIURL;

export const handlers = [
  rest.get(`${apiUrl}/events/types`, (req, res, ctx) => {
    return res(ctx.json(eventTypes));
  }),
  rest.get(`${apiUrl}/users/care-recipients`, (req, res, ctx) => {
    return res(ctx.json(recipients));
  }),
  rest.get(`${apiUrl}/events/recipient/:recipientId`, (req, res, ctx) => {
    const { recipientId } = req.params;

    const { data } = events

    const result  = data.filter(item => item.care_recipient_id === recipientId)
    const pagination = paginateResult(result.length, 0, 1)

    return res(ctx.json({ data: result, pagination }), ctx.delay(50));
  }),
];
