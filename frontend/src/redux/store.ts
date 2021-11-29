import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import eventsSlice from "./features/events/eventsSlice";
import eventTypesSlice from "./features/eventsTypes/eventTypesSlice";
import recipientsSlice from "./features/recipients/recipientSlice";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    events: eventsSlice,
    eventTypes: eventTypesSlice,
    recipients: recipientsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
