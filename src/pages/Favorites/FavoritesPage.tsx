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
    return <NoFavorites description="Упс, здесь еще ничего нет!" isButton={true} />;
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
        sx={{ marginTop: '105px' }}
      />
    </Box>
  );
};

export default Favorites;
