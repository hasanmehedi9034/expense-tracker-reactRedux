import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTransaction, getTransactions } from "./transactionAPI";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const transactions = getTransactions();
    return transactions;
  }
);

export const createTransaction = createAsyncThunk(
  "transactions/createTransaction",
  async (data) => {
    const transactions = addTransaction(data);
    return transactions;
  }
);
