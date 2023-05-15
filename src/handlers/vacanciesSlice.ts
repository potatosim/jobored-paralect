import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getVacancies, getVacancy } from 'thunks';

export interface IVacancyItem {
  profession: string;
  town: string;
  workSchedule: string;
  paymentFrom: number | '';
  paymentTo: number | '';
  currency: string;
  id: number;
  description?: string;
}

interface VacanciesInitial {
  vacanciesList: IVacancyItem[];
  pickedVacancy: IVacancyItem | null;
  activePage: number;
  vacanciesToShow: IVacancyItem[];
}

const initialState: VacanciesInitial = {
  vacanciesList: [],
  pickedVacancy: null,
  activePage: 1,
  vacanciesToShow: [],
};

const vacanciesSlice = createSlice({
  name: 'vacanciesSlice',
  initialState,
  reducers: {
    setActivePage: (state, { payload }: PayloadAction<number>) => {
      state.activePage = payload;
      state.vacanciesToShow = state.vacanciesList.slice(
        (state.activePage - 1) * 4,
        state.activePage * 4,
      );
    },
    resetVacancy: (state) => {
      state.pickedVacancy = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVacancies.fulfilled, (state, { payload }) => {
        state.vacanciesList = payload;
        state.vacanciesToShow = payload.slice(0, 4);
      })
      .addCase(getVacancy.fulfilled, (state, { payload }) => {
        state.pickedVacancy = payload;
      });
  },
});

export const { setActivePage, resetVacancy } = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
