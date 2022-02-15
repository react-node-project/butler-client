import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import restaurantsReducer from './features/restaurantsSlice';
import configReducer from './features/configSlice';
import cartReducer from './features/cartSlice';
import paymentsReducer from './features/paymentsSlice';

import { locationAPI } from './service/location.api';
import { restaurantsAPI } from './service/restaurants';
import { menuAPI } from './service/restaurantMenu';
import { authAPI } from '@store/service/auth.api';
import { userAPI } from '@store/service/user.api';
import { addressAPI } from '@store/service/addess.api';

const apiReducers = {
  [restaurantsAPI.reducerPath]: restaurantsAPI.reducer,
  [menuAPI.reducerPath]: menuAPI.reducer,
  [locationAPI.reducerPath]: locationAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [addressAPI.reducerPath]: addressAPI.reducer,
};

const apiMiddleware = [
  restaurantsAPI.middleware,
  menuAPI.middleware,
  locationAPI.middleware,
  authAPI.middleware,
  userAPI.middleware,
  addressAPI.middleware,
];

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  config: configReducer,
  payments: paymentsReducer,
  ...apiReducers,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: Object.keys(apiReducers),
};
const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiMiddleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
