import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_PAGE, IVacancyItem, getIndexesForShow } from 'helpers/vacanciesHelpers';
import { getVacancies, getVacancy } from 'thunks';

interface VacanciesInitial {
  vacanciesList: IVacancyItem[];
  pickedVacancy: IVacancyItem | null;
  activePage: number;
  vacanciesToShow: IVacancyItem[];
  isLoading: boolean;
}

const initialState: VacanciesInitial = {
  vacanciesList: [],
  pickedVacancy: null,
  activePage: INITIAL_PAGE,
  vacanciesToShow: [],
  isLoading: false,
};

const vacanciesSlice = createSlice({
  name: 'vacanciesSlice',
  initialState,
  reducers: {
    setActivePage: (state, { payload }: PayloadAction<number>) => {
      state.activePage = payload;
      state.vacanciesToShow = state.vacanciesList.slice(...getIndexesForShow(payload));
    },
    resetVacancy: (state) => {
      state.pickedVacancy = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVacancies.fulfilled, (state, { payload }) => {
        state.vacanciesList = payload.slice(0, 17);
        state.vacanciesToShow = payload.slice(0, 4);
        state.isLoading = false;
      })
      .addCase(getVacancies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getVacancy.fulfilled, (state, { payload }) => {
        state.pickedVacancy = payload;
      })
      .addCase(getVacancies.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { setActivePage, resetVacancy } = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
