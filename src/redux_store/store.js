import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./slice";

export const store = configureStore({
  reducer: {
    counter: Reducer,
  },
});
