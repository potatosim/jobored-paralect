import { Box, Loader, Paper } from '@mantine/core';
import { resetVacancy } from 'handlers/vacanciesSlice';
import { isVacancyFavorite } from 'helpers/vacanciesHelpers';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFavoritesSliceSelector, getVacanciesSliceSelector } from 'selectors/selectors';
import { getVacancy } from 'thunks';
import VacancyTopItem from './VacancyTopItem';

const VacancyPage: FC = () => {
  const { vacancyId } = useParams();

  const { pickedVacancy } = useAppSelector(getVacanciesSliceSelector);
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

  if (!pickedVacancy) {
    return <Loader size="xl" pos="absolute" top="50%" left="50%" />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '773px',
        margin: '0 auto',
        rowGap: '20px',
      }}
    >
      {pickedVacancy && (
        <>
          <VacancyTopItem
            vacancyItem={pickedVacancy}
            isVacancyFavorite={isVacancyFavorite(pickedVacancy.id, favoritesList)}
          />
          <Paper radius="lg" sx={{ padding: '24px' }} dangerouslySetInnerHTML={createMarkup()} />
        </>
      )}
    </Box>
  );
};

export default VacancyPage;
