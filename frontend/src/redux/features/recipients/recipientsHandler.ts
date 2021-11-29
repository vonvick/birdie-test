import { call, put } from "redux-saga/effects";
import { setRecipients, setPagination } from "./recipientSlice";
import { requestCareRecipients } from "../../../services/usersService";
import { PayloadAction } from "@reduxjs/toolkit";
import { PaginationRequestInterface } from "../../../typings";

export function* handleRecipients(action: PayloadAction<PaginationRequestInterface>): any {
  try {
    const { perPage, page } = action.payload
    // @ts-ignore
    const response = yield call(requestCareRecipients, { perPage, page });
    const { data } = response;
    yield put(setRecipients(data.data));
    yield put(setPagination({ ...data.pagination }));
  } catch (error) {
    console.log(error);
  }
}
