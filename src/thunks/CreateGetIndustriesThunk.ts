import { createAsyncThunk } from '@reduxjs/toolkit';
import JobsApi from 'api/JobsApi';
import { SlicesActionTypes } from 'enum/SlicesActionTypes';

export function createGetIndustriesThunk(api: JobsApi) {
  return createAsyncThunk(SlicesActionTypes.GetIndustries, async function (_, { rejectWithValue }) {
    try {
      const response = await api.getIndustries();
      return response;
    } catch {
      return rejectWithValue({});
    }
  });
}
