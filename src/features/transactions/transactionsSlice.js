import { createSlice } from "@reduxjs/toolkit";
import { createTransaction, fetchTransactions } from "./transactionsThunk";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.transactions = [];
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
        state.transactions = [];
      });

    builder
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions.push(action.payload);
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      });
  },
});

export default transactionsSlice.reducer;
