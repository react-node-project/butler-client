import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import restaurantsReducer from './features/restaurantsSlice';
import menuSelectionReducer from './features/menuSelectSlice';
import cartReducer from './features/cartSlicer';
import configReducer from './features/configSlice';

import { locationAPI } from './service/location.api';
import { restaurantsAPI } from './service/restaurants';
import { menuAPI } from './service/restaurantMenu';
import { authAPI } from '@store/service/auth.api';
import { userAPI } from '@store/service/user.api';
import paymentsReducer from './features/paymentsSlice';

const apiReducers = {
  [restaurantsAPI.reducerPath]: restaurantsAPI.reducer,
  [menuAPI.reducerPath]: menuAPI.reducer,
  [locationAPI.reducerPath]: locationAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
};

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  restaurants: restaurantsReducer,
  menuSelection: menuSelectionReducer,
  cart: cartReducer,
  config: configReducer,
  payments: paymentsReducer,
  ...apiReducers,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([locationAPI.middleware, restaurantsAPI.middleware, authAPI.middleware, menuAPI.middleware]),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
