import JobsApi from 'api/JobsApi';
import { createGetVacancyThunk } from './createGetVacancyThunk';
import { createGetIndustriesThunk } from './createGetIndustriesThunk';
import { createGetVacanciesThunk } from './createGetVacanciesThunk';

const jobsApi = new JobsApi();

export const getIndustries = createGetIndustriesThunk(jobsApi);
export const getVacancies = createGetVacanciesThunk(jobsApi);
export const getVacancy = createGetVacancyThunk(jobsApi);
