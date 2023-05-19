import React, { useEffect } from 'react';
import { Box, Loader, createStyles } from '@mantine/core';
import VacancyItem from 'components/VacancyItem';
import { isVacancyFavorite } from 'helpers/vacanciesHelpers';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import NotFound from 'components/NotFound';
import {
  getFavoritesSliceSelector,
  getFiltersSliceSelector,
  getVacanciesSliceSelector,
} from 'handlers/selectors';
import { getVacancies } from 'thunks';

const useStyles = createStyles({
  vacanciesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '1rem',
  },
});

const VacanciesList = () => {
  const { classes } = useStyles();

  const { vacanciesToShow, vacanciesList, isLoading } = useAppSelector(getVacanciesSliceSelector);
  const { salaryFromInput, salaryToInput, searchValue, selectedOption } =
    useAppSelector(getFiltersSliceSelector);
  const { favoritesList } = useAppSelector(getFavoritesSliceSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!vacanciesList.length) {
      dispatch(
        getVacancies({
          keyword: searchValue,
          payment_from: salaryFromInput,
          payment_to: salaryToInput,
          catalogues: selectedOption.key,
        }),
      );
    }
  }, []);

  if (isLoading) {
    return (
      <Box className={classes.vacanciesWrapper}>
        <Loader size="xl" />
      </Box>
    );
  }

  if (!vacanciesList.length) {
    return <NotFound description="Вакансии не найдены!" />;
  }

  return (
    <Box className={classes.vacanciesWrapper}>
      {vacanciesToShow.map((item) => (
        <VacancyItem
          vacancyItem={item}
          key={item.id}
          isVacancyFavorite={isVacancyFavorite(item.id, favoritesList)}
        />
      ))}
    </Box>
  );
};

export default VacanciesList;
