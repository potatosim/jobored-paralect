import { Box, createStyles } from '@mantine/core';
import VacancyItem from 'components/VacancyItem/VacancyItem';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React, { useEffect } from 'react';
import { getFiltersAppSelector, getVacanciesAppSelector } from 'selectors/selectors';
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

  const { vacanciesToShow } = useAppSelector(getVacanciesAppSelector);
  const { salaryFromInput, salaryToInput, searchValue, selectedOption } =
    useAppSelector(getFiltersAppSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getVacancies({
        keyword: searchValue,
        payment_from: salaryFromInput,
        payment_to: salaryToInput,
        catalogues: selectedOption.key,
      }),
    );
  }, []);

  if (!vacanciesToShow.length) {
    return null;
  }

  return (
    <Box className={classes.vacanciesWrapper}>
      {vacanciesToShow.map(
        ({ currency, profession, town, paymentFrom, paymentTo, workSchedule, id }) => (
          <VacancyItem
            paymentTo={paymentTo}
            profession={profession}
            town={town}
            workSchedule={workSchedule}
            currency={currency}
            paymentFrom={paymentFrom}
            id={id}
            key={id}
          />
        ),
      )}
    </Box>
  );
};

export default VacanciesList;
