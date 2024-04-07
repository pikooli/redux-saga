import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { incrementAsyncRequest } from "@/lib/redux/features/counter/saga";

const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    initializeCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const incrementAsync = () => ({
  type: incrementAsyncRequest,
});

export const { initializeCount, decrement, increment } = slice.actions;
export default slice.reducer;
