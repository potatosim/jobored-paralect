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

const FAVORITES_KEY = 'favoritesList';
const ITEMS_PER_PAGE = 4;
export const INITIAL_PAGE = 1;

export const getIndexesForShow = (currentPage: number) => [
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE,
];

export const getFavoritesFromStorage = () => {
  const items = localStorage.getItem(FAVORITES_KEY);

  if (!items) {
    return [];
  }

  return JSON.parse(items) as IVacancyItem[];
};

export const setFavoritesToStorage = (vacancies: IVacancyItem[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(vacancies));
};

export const isVacancyFavorite = (targetId: number, favorites: IVacancyItem[]) =>
  favorites.some((vacancy) => vacancy.id === targetId);

export const addVacancyToFavorites = (
  previousFavorites: IVacancyItem[],
  targetVacancy: IVacancyItem,
) => [...previousFavorites, targetVacancy];

export const removeVacancyFromFavorites = (
  previousFavorites: IVacancyItem[],
  targetVacancy: IVacancyItem,
) => previousFavorites.filter((vacancy) => vacancy.id !== targetVacancy.id);

export const getTotalPages = (totalVacancies: number) => Math.ceil(totalVacancies / ITEMS_PER_PAGE);

export const isPaginationShown = (totalVacancies: number) => totalVacancies > ITEMS_PER_PAGE;

export const getUpdatedCurrentPage = (currentPage: number) =>
  currentPage - 1 < INITIAL_PAGE ? INITIAL_PAGE : currentPage - 1;
