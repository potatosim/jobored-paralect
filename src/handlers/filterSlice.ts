import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Industries } from 'types/Industries';

interface SearchInitial {
  selectedOption: number | null;
  salaryFromInput: number | '';
  salaryToInput: number | '';
  searchValue: string;
  industries: Industries[];
}

const initialState: SearchInitial = {
  selectedOption: null,
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
    setIndustry: (state, { payload }: PayloadAction<number>) => {
      if (state.industries.length) {
        state.industries.find((industry) => industry.key === payload);
      }
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
    resetAllFilters: () => {
      return initialState;
    },
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
