import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterSlice from 'handlers/filterSlice';
import vacanciesSlice from 'handlers/vacanciesSlice';

const rootReducer = combineReducers({
  filter: filterSlice,
  vacancies: vacanciesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
