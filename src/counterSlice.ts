import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'COUNTER',
  initialState,
  reducers: {
    INCREMENT: state => {
      state.value += 1;
    },
    DECREMENT: state => {
      state.value -= 1;
    },
    INCREMENT_WITH_PAYLOAD: (state, payload) => {
      state.value += payload.payload;
    },
  },
});

export const {INCREMENT, DECREMENT, INCREMENT_WITH_PAYLOAD} =
  counterSlice.actions;
export default counterSlice.reducer;
