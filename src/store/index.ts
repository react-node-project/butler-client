import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import restaurantsReducer from './features/restaurants';
import { locationAPI } from './service/location';
import { restaurantsAPI } from './service/restaurants';
import configReducer from './features/configSlice';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  restaurants: restaurantsReducer,
  [restaurantsAPI.reducerPath]: restaurantsAPI.reducer,
  config: configReducer,
  locationAPI: locationAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([locationAPI.middleware, restaurantsAPI.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;
