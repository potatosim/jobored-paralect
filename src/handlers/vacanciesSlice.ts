import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_PAGE, IVacancyItem, getIndexesForShow } from 'helpers/vacanciesHelpers';
import { getVacancies, getVacancy } from 'thunks';

interface VacanciesInitial {
  vacanciesList: IVacancyItem[];
  pickedVacancy: IVacancyItem | null;
  activePage: number;
  vacanciesToShow: IVacancyItem[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: VacanciesInitial = {
  vacanciesList: [],
  pickedVacancy: null,
  activePage: INITIAL_PAGE,
  vacanciesToShow: [],
  isLoading: false,
  isError: false,
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
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVacancies.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getVacancies.fulfilled, (state, { payload }) => {
        state.vacanciesList = payload;
        state.vacanciesToShow = payload.slice(...getIndexesForShow(INITIAL_PAGE));
        state.activePage = INITIAL_PAGE;
        state.isLoading = false;
      })
      .addCase(getVacancies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getVacancy.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getVacancy.fulfilled, (state, { payload }) => {
        state.pickedVacancy = payload;
        state.isLoading = false;
      })
      .addCase(getVacancy.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { setActivePage, resetVacancy } = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
