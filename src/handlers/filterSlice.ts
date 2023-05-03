import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getIndustries } from 'thunks';

interface SearchInitial {
  selectedOption: { value: string; label: string; key: number };
  salaryFromInput: number | '';
  salaryToInput: number | '';
  searchValue: string;
  industries: Array<{ value: string; label: string; key: number }>;
}

const initialState: SearchInitial = {
  selectedOption: {
    key: 0,
    label: '',
    value: '',
  },
  salaryFromInput: '',
  salaryToInput: '',
  searchValue: '',
  industries: [],
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    setFromValue: (state, { payload }: PayloadAction<number | ''>) => {
      state.salaryFromInput = payload;
    },
    setToValue: (state, { payload }: PayloadAction<number | ''>) => {
      state.salaryToInput = payload;
    },
    setIndustry: (state, { payload }: PayloadAction<string | null>) => {
      state.selectedOption = state.industries.filter((item) => item.value === payload)[0];
    },
    incrementFromValue: (state) => {
      state.salaryFromInput = +state.salaryFromInput + 1;
    },
    decrementFromValue: (state) => {
      state.salaryFromInput = +state.salaryFromInput - 1;
    },
    incrementToValue: (state) => {
      state.salaryToInput = +state.salaryToInput + 1;
    },
    decrementToValue: (state) => {
      state.salaryToInput = +state.salaryToInput - 1;
    },
    resetAllFilters: (state) => {
      return { ...initialState, industries: state.industries };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIndustries.fulfilled, (state, { payload }) => {
      if (payload?.length) {
        state.industries = payload;
      }
    });
  },
});

export const {
  setSearchValue,
  resetAllFilters,
  decrementFromValue,
  decrementToValue,
  incrementFromValue,
  incrementToValue,
  setFromValue,
  setToValue,
  setIndustry,
} = filterSlice.actions;

export default filterSlice.reducer;
