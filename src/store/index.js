import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import { locationAPI } from './service/location';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    [locationAPI.reducerPath]: locationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([locationAPI.middleware]),
});
