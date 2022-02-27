import {createSlice} from '@reduxjs/toolkit';

export interface LoginState {
  number: string;
  isRequesting: boolean;
  error: object;
}

const initialState: LoginState = {
  isRequesting: false,
  number: '',
  error: {},
};

export const loginSlice = createSlice({
  name: 'LOGIN',
  initialState,
  reducers: {
    REQUEST: (state: LoginState, {payload}) => {
      return {...state, isRequesting: true};
    },
    SUCCESS: (state: LoginState) => {
      return {...state, isRequesting: false};
    },
    FAILURE: (state: LoginState, {payload}) => {
      return {...state, isRequesting: false, error: payload.error};
    },
  },
});

export const {REQUEST, SUCCESS, FAILURE} = loginSlice.actions;
export default loginSlice.reducer;
