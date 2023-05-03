import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterSlice from 'handlers/filterSlice';

const rootReducer = combineReducers({
  filter: filterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
