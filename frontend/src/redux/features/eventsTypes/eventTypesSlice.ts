import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { EventTypesInterface, Status } from "../../../typings";
import {RootState} from "../../store";

const eventTypesAdapter = createEntityAdapter();

const initialState = eventTypesAdapter.getInitialState({
  eventTypesStatus: "empty"
});

export const eventTypesSlice = createSlice({
  name: 'eventTypes',
  initialState,
  reducers: {
    setEventsType: (state, action: PayloadAction<EventTypesInterface[]>) => {
      eventTypesAdapter.addMany(state, action.payload)
    },
    setEventTypesStatus: (state, action: PayloadAction<Status>) => {
      return { ...state, eventTypesStatus: action.payload }
    },
    fetchEventTypes: () => {},
    clearEventTypesStore: (state) => {
      eventTypesAdapter.removeAll(state)
    }
  }
});

export const { setEventsType, setEventTypesStatus, fetchEventTypes, clearEventTypesStore } = eventTypesSlice.actions;
export const {
  selectAll: selectAllEventTypes,
  selectById: selectEventTypeById
} = eventTypesAdapter.getSelectors((state: RootState) => state.eventTypes);

export default eventTypesSlice.reducer;
