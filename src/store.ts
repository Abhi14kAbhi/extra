import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './screens/Login/slice';
import signupReducer from './screens/SignUp/slice';
import appReducer from './appSlice';
import verifyOtpSlice from './screens/VerifyOtp/slice';
import nameInfoSlice from './screens/NameInfo/slice';
import emailInfo from './screens/EmailInfo/slice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    app: appReducer,
    verifyOtp: verifyOtpSlice,
    nameInfo: nameInfoSlice,
    emailInfo: emailInfo,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
