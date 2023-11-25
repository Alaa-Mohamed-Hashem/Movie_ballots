import { configureStore } from "@reduxjs/toolkit";
import ballotSlice from "../slices/ballotSlice";

const store = configureStore({
  reducer: { ballot: ballotSlice },
});

export default store;
