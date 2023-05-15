import { Box, createStyles } from '@mantine/core';
import CustomPagination from 'components/CustomPagination/CustomPagination';
import VacancyItem from 'components/VacancyItem/VacancyItem';
import { setActiveFavoritesPage } from 'handlers/favoritesSlice';
import { getTotalPages, isPaginationShown, isVacancyFavorite } from 'helpers/vacanciesHelpers';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { getFavoritesSliceSelector } from 'selectors/selectors';
import NoFavorites from './NoFavorites';

const useStyles = createStyles({
  favoritesWrapper: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: '16px',
  },

  vacanciesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
    maxWidth: '713px',
    width: '100%',
  },
});

const Favorites = () => {
  const { favoritesList, activePage, favoritesToShow } = useAppSelector(getFavoritesSliceSelector);
  const { classes } = useStyles();

  const dispatch = useAppDispatch();

  const handlePageChange = (value: number) => {
    dispatch(setActiveFavoritesPage(value));
  };

  if (!favoritesList.length) {
    return <NoFavorites />;
  }
  return (
    <Box className={classes.favoritesWrapper}>
      <Box className={classes.vacanciesWrapper}>
        {favoritesToShow.map((item) => (
          <VacancyItem
            vacancyItem={item}
            isVacancyFavorite={isVacancyFavorite(item.id, favoritesList)}
            key={item.id}
          />
        ))}
      </Box>
      <CustomPagination
        currentPage={activePage}
        isShown={isPaginationShown(favoritesList.length)}
        onPageChange={handlePageChange}
        totalPages={getTotalPages(favoritesList.length)}
      />
    </Box>
  );
};

export default Favorites;
