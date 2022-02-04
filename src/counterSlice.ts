import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementWithPayload: (state, payload) => {
      state.value += payload.payload;
    },
  },
});

export const {increment, decrement, incrementWithPayload} =
  counterSlice.actions;
export default counterSlice.reducer;
