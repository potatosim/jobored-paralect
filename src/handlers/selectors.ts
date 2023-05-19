import { RootState } from 'store/store';

export const getFiltersSliceSelector = (state: RootState) => state.filter;

export const getVacanciesSliceSelector = (state: RootState) => state.vacancies;

export const getFavoritesSliceSelector = (state: RootState) => state.favorites;
