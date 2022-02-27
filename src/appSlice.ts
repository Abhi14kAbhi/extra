import {createSlice} from '@reduxjs/toolkit';

export interface App {
  country: string;
  countryCode: string;
  number: string;
}

const initialState: App = {
  number: '',
  country: '',
  countryCode: '',
};

export const appSlice = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    SET_USER_DETAILS: (state, {payload}) => {
      console.log(payload);
      return {...state, ...payload};
    },
  },
});

export const {SET_USER_DETAILS} = appSlice.actions;
export default appSlice.reducer;
