import { Box, createStyles } from '@mantine/core';
import CustomPagination from 'components/CustomPagination';
import VacancyItem from 'components/VacancyItem';
import { setActiveFavoritesPage } from 'handlers/favoritesSlice';
import { getTotalPages, isPaginationShown, isVacancyFavorite } from 'helpers/vacanciesHelpers';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { getFavoritesSliceSelector } from 'handlers/selectors';
import NotFound from 'components/NotFound';

const useStyles = createStyles({
  favoritesWrapper: {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  vacanciesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
    maxWidth: '773px',
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
    return <NotFound description="Упс, здесь еще ничего нет!" isButton />;
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
        value={activePage}
        isShown={isPaginationShown(favoritesList.length)}
        onChange={handlePageChange}
        total={getTotalPages(favoritesList.length)}
        mt={105}
      />
    </Box>
  );
};

export default Favorites;
