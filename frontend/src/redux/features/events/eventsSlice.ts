import {createSlice, PayloadAction, createEntityAdapter, EntityId, Dictionary } from "@reduxjs/toolkit";
import {
  PaginationInterface,
  PaginationRequestInterface,
  PayloadAttributesInterface,
  Status
} from "../../../typings";
import {RootState} from "../../store";

interface EventsStateInterface {
  ids: EntityId[]
  entities: Dictionary<PayloadAttributesInterface>,
  pagination: PaginationInterface,
  eventStatus: Status
}

const eventsAdapter = createEntityAdapter({
  sortComparer: (a:PayloadAttributesInterface, b: PayloadAttributesInterface) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
})

const initialState: EventsStateInterface = eventsAdapter.getInitialState({
  pagination: {
    currentPage: 1,
    pageSize: 10,
  },
  eventStatus: "empty",
});

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<PayloadAttributesInterface[]>) => {
      eventsAdapter.addMany(state, action.payload)
    },
    setPagination: (state, action: PayloadAction<PaginationInterface>) => {
      return { ...state, pagination: action.payload }
    },
    setEventStatus: (state, action: PayloadAction<Status>) => {
      return { ...state, eventStatus: action.payload }
    },
    clearRecipientEvents: (state) => {
      eventsAdapter.removeAll(state);
    },
    fetchEvents: (state, action: PayloadAction<PaginationRequestInterface>) => {},
  },
});

export const { setEvents, fetchEvents, setPagination, setEventStatus, clearRecipientEvents } = eventsSlice.actions;
export default eventsSlice.reducer;

export const {
  selectAll: selectAllRecipientEvents,
  selectIds: selectAllRecipientEventIds,
  selectById: selectEventsById
} = eventsAdapter.getSelectors((state: RootState) => state.events);
export const getEventsPagination = (state: RootState) => state.events.pagination;
export const getEventsStatus = (state: RootState) => state.events.eventStatus;
