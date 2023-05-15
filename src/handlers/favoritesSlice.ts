import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  INITIAL_PAGE,
  IVacancyItem,
  addVacancyToFavorites,
  getFavoritesFromStorage,
  getIndexesForShow,
  getUpdatedCurrentPage,
  removeVacancyFromFavorites,
  setFavoritesToStorage,
} from 'helpers/vacanciesHelpers';

interface FavoritesState {
  favoritesList: IVacancyItem[];
  favoritesToShow: IVacancyItem[];
  activePage: number;
}

const initialState: FavoritesState = {
  activePage: INITIAL_PAGE,
  favoritesList: getFavoritesFromStorage(),
  favoritesToShow: getFavoritesFromStorage().slice(...getIndexesForShow(INITIAL_PAGE)),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites(state, { payload }: PayloadAction<{ targetVacancy: IVacancyItem }>) {
      const isTargetVacancyExist = state.favoritesList.some(
        (vacancy) => vacancy.id === payload.targetVacancy.id,
      );

      const result = isTargetVacancyExist
        ? removeVacancyFromFavorites(state.favoritesList, payload.targetVacancy)
        : addVacancyToFavorites(state.favoritesList, payload.targetVacancy);

      setFavoritesToStorage(result);
      state.favoritesList = result;

      const resultToShow = result.slice(...getIndexesForShow(state.activePage));

      if (!resultToShow.length) {
        const updatedPage = getUpdatedCurrentPage(state.activePage);
        state.activePage = updatedPage;
        state.favoritesToShow = result.slice(...getIndexesForShow(updatedPage));
      } else {
        state.favoritesToShow = resultToShow;
      }
    },
    setActiveFavoritesPage: (state, { payload }: PayloadAction<number>) => {
      state.activePage = payload;
      state.favoritesToShow = state.favoritesList.slice(...getIndexesForShow(payload));
    },
  },
});

export const { changeFavorites, setActiveFavoritesPage } = favoritesSlice.actions;

export default favoritesSlice.reducer;
