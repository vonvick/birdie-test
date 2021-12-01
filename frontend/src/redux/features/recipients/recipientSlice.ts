import {createEntityAdapter, createSlice, Dictionary, EntityId, PayloadAction} from "@reduxjs/toolkit";
import {
  PaginationInterface,
  PaginationRequestInterface,
  RecipientInterface, Status
} from "../../../typings";
import {RootState} from "../../store";

interface RecipientsStateInterface {
  ids: EntityId[]
  entities: Dictionary<RecipientInterface>
  pagination: PaginationInterface
  recipientStatus: Status
  currentRecipientId: string
}

const usersAdapter = createEntityAdapter({
  selectId: (recipient: RecipientInterface ) => recipient.care_recipient_id,
  sortComparer: false
});

const initialState: RecipientsStateInterface = usersAdapter.getInitialState({
  pagination: {
    currentPage: 1,
    pageSize: 10
  },
  currentRecipientId: "",
  recipientStatus: "empty"
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
    setRecipientsStatus: (state, action: PayloadAction<Status>) => {
      return { ...state, recipientStatus: action.payload }
    },
    setCurrentRecipientId: (state, action: PayloadAction<string>) => {
      return { ...state, currentRecipientId: action.payload }
    },
    fetchRecipients: (state, action: PayloadAction<PaginationRequestInterface>) => {}
  }
});

export const { setRecipients, setPagination, fetchRecipients, setCurrentRecipientId, setRecipientsStatus } = recipientsSlice.actions;
export default recipientsSlice.reducer;

export const {
  selectAll: getRecipients
} = usersAdapter.getSelectors((state: RootState) => state.recipients);

export const getRecipientId = (state: RootState) => state.recipients.currentRecipientId;
export const getRecipientsPagination = (state: RootState) => state.recipients.pagination;
export const getRecipientsStatus = (state: RootState) => state.recipients.recipientStatus;
