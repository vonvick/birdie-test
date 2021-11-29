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
    fetchEventTypes: () => {}
  }
});

export const { setEventsType, setEventTypesStatus, fetchEventTypes } = eventTypesSlice.actions;
export const {
  selectAll: selectAllEventTypes
} = eventTypesAdapter.getSelectors((state: RootState) => state.eventTypes);

export default eventTypesSlice.reducer;
