import {call, put, select } from "redux-saga/effects";
import {getEventsPagination, setEvents, setEventStatus, setPagination} from "./eventsSlice";
import { requestRecipientEvents } from "../../../services/eventsService";
import { PayloadAction } from "@reduxjs/toolkit";
import {PaginationRequestInterface} from "../../../typings";
import {getRecipientId} from "../recipients/recipientSlice";

export function* handleRecipientEvents(action: PayloadAction<PaginationRequestInterface>): any {
  try {
    const { perPage, page } = action.payload
    const recipientId = yield select(getRecipientId);
    const { currentPage, pageCount, } = yield select(getEventsPagination);

    if (currentPage < pageCount || typeof pageCount === 'undefined') {
      const response = yield call(requestRecipientEvents, { recipientId, perPage, page });
      const { data: { data, pagination } } = response;
      yield put(setEvents(data));

      if (pagination.currentPage < pagination.pageCount) {
        yield put(setEventStatus("loaded"));
      } else {
        yield put(setEventStatus("completed"));
      }
      yield put(setPagination({ ...pagination }));
    } else {
      yield put(setEventStatus("completed"));
    }
  } catch (error) {
    yield put(setEventStatus("error"))
  }
}
