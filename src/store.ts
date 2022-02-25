import {configureStore} from '@reduxjs/toolkit';
import signupReducer from './screens/SignUp/slice';

export const store = configureStore({
  reducer: {signup: signupReducer},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
