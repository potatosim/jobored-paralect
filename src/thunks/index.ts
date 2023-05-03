import JobsApi from 'api/JobsApi';
import { createGetIndustriesThunk } from './CreateGetIndustriesThunk';

const jobsApi = new JobsApi();

export const getIndustries = createGetIndustriesThunk(jobsApi);
