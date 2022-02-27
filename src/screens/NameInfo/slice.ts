import {createSlice} from '@reduxjs/toolkit';

export interface NameInfoState {
  firstName: string;
  lastName: string;
  isRequesting: boolean;
  error: object;
}
const initialState: NameInfoState = {
  isRequesting: false,
  firstName: '',
  lastName: '',
  error: {},
};

export const nameInfoSlice = createSlice({
  name: 'NAME_INFO',
  initialState,
  reducers: {
    REQUEST: (state: NameInfoState, {payload}) => {
      return {...state, ...payload, isRequesting: true};
    },
    SUCCESS: (state: NameInfoState) => {
      return {...state, isRequesting: false};
    },
    FAILURE: (state: NameInfoState, {payload}) => {
      return {...state, ...payload, isRequesting: false};
    },
  },
});

export const {REQUEST, SUCCCESS, FAILURE} = nameInfoSlice.actions;
export default nameInfoSlice.reducer;
