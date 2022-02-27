import {createSlice} from '@reduxjs/toolkit';

export interface VerifyOtpState {
  otp: object;
  isRequesting: boolean;
  error: object;
}

const initialState: VerifyOtpState = {
  otp: [],
  isRequesting: false,
  error: {},
};

export const verifyOtpSlice = createSlice({
  name: 'VERIFY_OTP',
  initialState,
  reducers: {
    REQUEST: (state: VerifyOtpState, {payload}) => {
      return {...state, ...payload, isRequesting: true};
    },
    SUCCESS: (state: VerifyOtpState) => {
      return {...state, isRequesting: false};
    },
    FAILURE: (state: VerifyOtpState, {payload}) => {
      return {...state, isRequesting: false, error: payload.error};
    },
  },
});

export const {REQUEST, SUCCESS, FAILURE} = verifyOtpSlice.actions;
export default verifyOtpSlice.reducer;
