import { createAsyncThunk } from '@reduxjs/toolkit';
import JobsApi from 'api/JobsApi';
import { FilterSliceActionTypes } from 'enum/FilterSliceActionTypes';

export function createGetIndustriesThunk(api: JobsApi) {
  return createAsyncThunk(
    FilterSliceActionTypes.GetIndustries,
    async function (_, { rejectWithValue }) {
      try {
        const response = await api.getIndustries();
        return response;
      } catch {
        rejectWithValue({});
      }
    },
  );
}
