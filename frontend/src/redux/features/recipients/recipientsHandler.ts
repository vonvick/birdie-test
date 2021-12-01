import { call, put } from "redux-saga/effects";
import {setRecipients, setPagination, setRecipientsStatus} from "./recipientSlice";
import { requestCareRecipients } from "../../../services/usersService";
import { PayloadAction } from "@reduxjs/toolkit";
import { PaginationRequestInterface } from "../../../typings";

export function* handleRecipients(action: PayloadAction<PaginationRequestInterface>): any {
  try {
    const { perPage, page } = action.payload
    // @ts-ignore
    const response = yield call(requestCareRecipients, { perPage, page });
    const { data: { data, pagination } } = response;
    yield put(setRecipients(data));

    if (pagination.currentPage < pagination.pageCount) {
      yield put(setRecipientsStatus("loaded"));
    } else {
      yield put(setRecipientsStatus("completed"));
    }

    yield put(setPagination({ ...data.pagination }));
  } catch (error) {
    yield put(setRecipientsStatus("error"))
  }
}
