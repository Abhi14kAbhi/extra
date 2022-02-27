import {createSlice} from '@reduxjs/toolkit';

export interface SignupState {
  number: string;
  country: string;
  countryCode: string;
  isRequesting: boolean;
  error: object;
}

const initialState: SignupState = {
  isRequesting: false,
  number: '',
  country: '',
  countryCode: '',
  error: {},
};

export const signupSlice = createSlice({
  name: 'SIGNUP',
  initialState,
  reducers: {
    REQUEST: (state: SignupState, {payload}) => {
      return {...state, isRequesting: true};
    },
    SUCCESS: (state: SignupState) => {
      return {...state, isRequesting: false};
    },
    FAILURE: (state: SignupState, {payload}) => {
      return {...state, isRequesting: false, error: payload.error};
    },
  },
});

export const {REQUEST, SUCCESS, FAILURE} = signupSlice.actions;
export default signupSlice.reducer;
