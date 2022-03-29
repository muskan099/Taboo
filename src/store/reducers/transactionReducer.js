import { createSlice } from "@reduxjs/toolkit";

const transactionsReducer = createSlice({
  name: "transactions",
  initialState: {
    isLoading: false,
    transactions: [],
    errorMsg: "",
  },

  reducers: {
    getTransactionsSaga: (state, action) => {
      return { ...state };
    },

    getTransactionsStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    getTransactionsSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        transactions: action.payload,
      };
    },
    getTransactionsFail: (state, action) => {
      return {
        ...state,
        transactions: [],
        isLoading: false,
        errorMsg: action.payload,
      };
    },
  },
});

export const {
  getTransactionsSaga,
  getTransactionsStart,
  getTransactionsSuccess,
  getTransactionsFail,
} = transactionsReducer.actions;
export default transactionsReducer.reducer;
