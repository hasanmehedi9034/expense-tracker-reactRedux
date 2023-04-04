import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  type: "",
  amount: "",
};

const transactionsSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.name = action.payload.name;
      state.type = action.payload.type;
      state.amount = action.payload.amount;
      state.id = action.payload.id;
    },
    editDeactive: (state) => {
      state.name = "";
      state.type = "";
      state.amount = "";
      state.id = "";
    },
  },
});

export default transactionsSlice.reducer;
export const { editActive, editDeactive } = transactionsSlice.actions;
