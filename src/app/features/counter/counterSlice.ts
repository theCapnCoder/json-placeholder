import { createSlice } from "@reduxjs/toolkit";

const initState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    reset: (state) => {
      state.counter = 0;
    }
  }
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;