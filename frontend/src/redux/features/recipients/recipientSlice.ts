import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {PaginationInterface, PaginationRequestInterface, RecipientInterface} from "../../../typings";
import {RootState} from "../../store";

const usersAdapter = createEntityAdapter({
  selectId: (recipient: RecipientInterface ) => recipient.care_recipient_id
});

const initialState = usersAdapter.getInitialState({
  pagination: {
    currentPage: 1,
    pageSize: 10
  },
  currentRecipientId: "",
});

export const recipientsSlice = createSlice({
  name: 'recipients',
  initialState,
  reducers: {
    setRecipients: (state, action: PayloadAction<RecipientInterface[]>) => {
      usersAdapter.addMany(state, action.payload)
    },
    setPagination: (state, action: PayloadAction<PaginationInterface>) => {
      return { ...state, pagination: action.payload }
    },
    setCurrentRecipientId: (state, action: PayloadAction<string>) => {
      return { ...state, currentRecipientId: action.payload }
    },
    fetchRecipients: (state, action: PayloadAction<PaginationRequestInterface>) => {}
  }
});

export const { setRecipients, setPagination, fetchRecipients, setCurrentRecipientId } = recipientsSlice.actions;
export default recipientsSlice.reducer;

export const {
  selectAll: getRecipients
} = usersAdapter.getSelectors((state: RootState) => state.recipients);

export const getRecipientId = (state: RootState) => state.recipients.currentRecipientId;
export const getRecipientsPagination = (state: RootState) => state.recipients.pagination;
