import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import restaurantsReducer from './features/restaurantsSlice';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  restaurants: restaurantsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;