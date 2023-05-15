import { createAsyncThunk } from '@reduxjs/toolkit';
import JobsApi, { VacanciesSearchRequest } from 'api/JobsApi';
import { SlicesActionTypes } from 'enum/SlicesActionTypes';

export function createGetVacanciesThunk(api: JobsApi) {
  return createAsyncThunk(
    SlicesActionTypes.GetVacancies,
    async function (payload: VacanciesSearchRequest, { rejectWithValue }) {
      try {
        const response = await api.getVacancies(payload);
        return response;
      } catch {
        return rejectWithValue({});
      }
    },
  );
}
