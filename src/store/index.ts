import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import { locationAPI } from './service/location';
import { restaurantsAPI } from './service/restaurants';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  [locationAPI.reducerPath]: locationAPI.reducer,
  [restaurantsAPI.reducerPath]: restaurantsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([locationAPI.middleware, restaurantsAPI.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;
