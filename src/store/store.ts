import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from 'handlers/filterSlice';
import vacanciesReducer from 'handlers/vacanciesSlice';
import favoritesReducer from 'handlers/favoritesSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  vacancies: vacanciesReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
