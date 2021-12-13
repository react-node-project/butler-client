import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import { addressApi } from './service/address';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([addressApi.middleware]),
});
