import JobsFilter from './JobsFilter';
import { Box, Pagination, createStyles } from '@mantine/core';
import SearchInput from 'components/SearchInput';
import VacanciesList from './VacanciesList';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { getVacanciesAppSelector } from 'selectors/selectors';
import { setActivePage } from 'handlers/vacanciesSlice';

const useStyles = createStyles({
  pageWrapper: {
    maxWidth: '1440px',
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    columnGap: '80px',
  },

  wrapper: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
  },
  pagination: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '24px',
  },
});

const Vacancies = () => {
  const { classes } = useStyles();
  const { vacanciesList, activePage } = useAppSelector(getVacanciesAppSelector);
  const dispatch = useAppDispatch();

  return (
    <Box className={classes.pageWrapper}>
      <JobsFilter />
      <Box className={classes.wrapper}>
        <SearchInput />
        <VacanciesList />
        <Pagination
          className={classes.pagination}
          total={Math.ceil(vacanciesList.length / 4)}
          value={activePage}
          onChange={(newPage) => dispatch(setActivePage(newPage))}
        />
      </Box>
    </Box>
  );
};

export default Vacancies;
