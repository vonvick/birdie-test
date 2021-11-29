import {call, put } from "redux-saga/effects";
import {requestEventDetailsByType } from "../../../services/eventsService";
import {setEventsType, setEventTypesStatus} from "./eventTypesSlice";

export function* handleEventTypes(): any {
  try {
    const response = yield call(requestEventDetailsByType);
    const { data } = response;
    yield put(setEventsType(data.data));
    yield put(setEventTypesStatus("completed"));
  } catch (error) {
    console.log(error);
  }
}
