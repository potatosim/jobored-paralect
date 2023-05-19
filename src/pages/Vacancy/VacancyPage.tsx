import React, { FC, useEffect } from 'react';
import { Box, Loader, Paper, createStyles } from '@mantine/core';
import { resetVacancy } from 'handlers/vacanciesSlice';
import { isVacancyFavorite } from 'helpers/vacanciesHelpers';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import { getFavoritesSliceSelector, getVacanciesSliceSelector } from 'handlers/selectors';
import { getVacancy } from 'thunks';
import VacancyTopItem from './VacancyTopItem';
import NotFound from 'components/NotFound';

const useStyles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '773px',
    margin: '0 auto',
    rowGap: '20px',
  },
});

const VacancyPage: FC = () => {
  const { vacancyId } = useParams();
  const { classes } = useStyles();

  const { pickedVacancy, isError, isLoading } = useAppSelector(getVacanciesSliceSelector);
  const { favoritesList } = useAppSelector(getFavoritesSliceSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVacancy(+vacancyId!));

    return () => {
      dispatch(resetVacancy());
    };
  }, []);

  const createMarkup = () => {
    return { __html: `${pickedVacancy?.description}` };
  };

  if (isLoading) {
    return (
      <Box className={classes.wrapper}>
        <Loader size="xl" />
      </Box>
    );
  }

  if (isError) {
    return <NotFound description="Такой вакансии не существует :(" isButton />;
  }

  return (
    <Box className={classes.wrapper}>
      {pickedVacancy && (
        <>
          <VacancyTopItem
            vacancyItem={pickedVacancy}
            isVacancyFavorite={isVacancyFavorite(pickedVacancy.id, favoritesList)}
          />
          <Paper radius="lg" p={24} dangerouslySetInnerHTML={createMarkup()} />
        </>
      )}
    </Box>
  );
};

export default VacancyPage;
