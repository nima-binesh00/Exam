import { configureStore } from "@reduxjs/toolkit";
import state from "./state";
const store = configureStore({
  reducer: {
    Store: state,
  },
});

export default store;
