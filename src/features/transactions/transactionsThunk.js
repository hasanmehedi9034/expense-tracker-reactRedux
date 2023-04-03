import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactions } from "./transactionAPI";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const transactions = getTransactions();
    return transactions;
  }
);
