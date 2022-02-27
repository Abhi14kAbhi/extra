import {createSlice} from '@reduxjs/toolkit';

export interface EmailInfo {
  email: string;
  isRequesting: boolean;
  error: object;
}
const initialState: EmailInfo = {
  isRequesting: false,
  email: '',
  error: {},
};

export const nameInfoSlice = createSlice({
  name: 'NAME_INFO',
  initialState,
  reducers: {
    REQUEST: (state: EmailInfo, {payload}) => {
      return {...state, ...payload, isRequesting: true};
    },
    SUCCESS: (state: EmailInfo) => {
      return {...state, isRequesting: false};
    },
    FAILURE: (state: EmailInfo, {payload}) => {
      return {...state, ...payload, isRequesting: false};
    },
  },
});

export const {REQUEST, SUCCCESS, FAILURE} = nameInfoSlice.actions;
export default nameInfoSlice.reducer;
