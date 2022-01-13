import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import restaurantsReducer from './features/restaurantsSlice';
import { locationAPI } from './service/location';
import configReducer from './features/configSlice';
import cartReducer from './features/cartSlicer';
import favListReducer from './features/favouritesSlicer';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  favList: favListReducer,
  config: configReducer,
  locationAPI: locationAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([locationAPI.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;
