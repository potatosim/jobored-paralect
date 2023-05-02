import React from 'react';
import JobsFilter from './JobsFilter';
import { Box, createStyles } from '@mantine/core';
import SearchInput from 'components/SearchInput';

const useStyles = createStyles({
  pageWrapper: {
    maxWidth: '1440px',
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    columnGap: '80px',
  },

  vacanciesWrapper: {
    width: '70%',
  },
});

const Vacancies = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.pageWrapper}>
      <JobsFilter />
      <Box className={classes.vacanciesWrapper}>
        <SearchInput />
      </Box>
    </Box>
  );
};

export default Vacancies;
