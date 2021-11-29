import { takeLatest } from "redux-saga/effects";
import { handleRecipientEvents } from "../features/events/eventsHandler";
import { fetchEvents } from "../features/events/eventsSlice";
import { fetchRecipients } from "../features/recipients/recipientSlice";
import { handleRecipients } from "../features/recipients/recipientsHandler";
import { fetchEventTypes} from "../features/eventsTypes/eventTypesSlice";
import {handleEventTypes} from "../features/eventsTypes/eventTypesHandler";


export default function* rootSaga() {
  yield takeLatest(fetchEventTypes.type, handleEventTypes);
  yield takeLatest(fetchEvents.type, handleRecipientEvents);
  yield takeLatest(fetchRecipients.type, handleRecipients);
}
