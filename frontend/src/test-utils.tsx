import React, {PropsWithChildren, ReactNode} from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import eventsReducer from "./redux/features/events/eventsSlice"
import eventTypesReducer from "./redux/features/eventsTypes/eventTypesSlice"
import recipientReducer from "./redux/features/recipients/recipientSlice"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/saga/rootSaga"
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();
function customRender(
  ui: any,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    preloadedState,
    store = configureStore({
      reducer: {
        recipients: recipientReducer,
        events: eventsReducer,
        eventTypes: eventTypesReducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
    }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: PropsWithChildren<ReactNode>) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }

  sagaMiddleware.run(rootSaga);

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react'
export { customRender as render }
