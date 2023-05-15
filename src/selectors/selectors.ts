import { RootState } from 'store/store';

export function getFiltersAppSelector(state: RootState) {
  return state.filter;
}

export function getVacanciesAppSelector(state: RootState) {
  return state.vacancies;
}
