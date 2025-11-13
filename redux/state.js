import { createSlice } from "@reduxjs/toolkit";
import e from "cors";

// 1. ساخت یک slice ساده
const state = createSlice({
  name: "Card",
  initialState: [],
  reducers: {
    increment: (state, action) => {
      const newItem = action.payload;
      if (!state.some((item) => item.id === newItem.id)) {
        state.push(newItem);
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

// 2. اکسپورت اکشن‌ها
export const { increment, deleteItem } = state.actions;
export default state.reducer;
