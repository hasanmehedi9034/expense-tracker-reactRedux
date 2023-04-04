import { createSlice } from "@reduxjs/toolkit";
import {
  changeTransaction,
  createTransaction,
  fetchTransactions,
  removeTransaction,
} from "./transactionsThunk";

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

    builder
      .addCase(removeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        if (action.payload) {
          const deletedIndex = state.transactions.indexOf(action.payload);
          state.transactions.splice(deletedIndex, 1);
        }
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      });

    builder
      .addCase(changeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        if (action.payload) {
          state.transactions = state.transactions.map((t) => {
            if (action.payload.id === t.id) {
              return {
                id: action.payload.id,
                name: action.payload.name,
                type: action.payload.type,
                amount: action.payload.amount,
              };
            } else return t;
          });
        }
      })
      .addCase(changeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      });
  },
});

export default transactionsSlice.reducer;
