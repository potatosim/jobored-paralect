import { Box, Paper } from '@mantine/core';
import VacancyItem from 'components/VacancyItem/VacancyItem';
import { resetVacancy } from 'handlers/vacanciesSlice';
import { isVacancyFavorite } from 'helpers/vacanciesHelpers';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFavoritesSliceSelector, getVacanciesSliceSelector } from 'selectors/selectors';
import { getVacancy } from 'thunks';

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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: '0 auto',
        rowGap: '20px',
      }}
    >
      {pickedVacancy && (
        <VacancyItem
          vacancyItem={pickedVacancy}
          isVacancyFavorite={isVacancyFavorite(pickedVacancy.id, favoritesList)}
        />
      )}
      {pickedVacancy && <Paper sx={{ padding: '24px' }} dangerouslySetInnerHTML={createMarkup()} />}
    </Box>
  );
};

export default VacancyPage;
