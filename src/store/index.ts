import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import { pokemonApi } from './restaurants/restaurantsSliceRtk';
import restaurantsReducer from './restaurants/restaurantsSlice';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  restaurants: restaurantsReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
