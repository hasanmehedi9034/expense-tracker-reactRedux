import { configureStore } from "@reduxjs/toolkit";
import editSlice from "../features/edit/editSlice";
import transactionsSlice from "../features/transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
    edit: editSlice,
  },
});
