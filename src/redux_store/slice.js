import { createSlice } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer";
import { globalState } from "./state";

export const counterSlice = createSlice({
  name: "Counter",
  initialState: globalState,
  reducers: counterReducer,
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
