import { RouteNames } from 'routes/RouteNames';

export const getVacancyPageUrl = (vacancyId: string) =>
  RouteNames.Vacancy.replace(':vacancyId', vacancyId || '');
