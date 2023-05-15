import { createAsyncThunk } from '@reduxjs/toolkit';
import JobsApi from 'api/JobsApi';
import { SlicesActionTypes } from 'enum/SlicesActionTypes';

export function createGetVacancyThunk(api: JobsApi) {
  return createAsyncThunk(
    SlicesActionTypes.GetVacancy,
    async function (payload: number, { rejectWithValue }) {
      try {
        const response = await api.getVacancy(payload);
        return response;
      } catch {
        return rejectWithValue({});
      }
    },
  );
}
