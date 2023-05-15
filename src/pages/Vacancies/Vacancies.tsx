import JobsFilter from './JobsFilter';
import { Box, createStyles } from '@mantine/core';
import SearchInput from 'components/SearchInput';
import VacanciesList from './VacanciesList';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { getVacanciesSliceSelector } from 'selectors/selectors';
import { setActivePage } from 'handlers/vacanciesSlice';
import CustomPagination from 'components/CustomPagination/CustomPagination';
import { getTotalPages, isPaginationShown } from 'helpers/vacanciesHelpers';

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
    justifyContent: 'space-between',
  },

  vacanciesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
  },
});

const Vacancies = () => {
  const { classes } = useStyles();
  const { vacanciesList, activePage } = useAppSelector(getVacanciesSliceSelector);
  const dispatch = useAppDispatch();

  const handlePageChange = (value: number) => {
    dispatch(setActivePage(value));
  };
  return (
    <Box className={classes.pageWrapper}>
      <JobsFilter />
      <Box className={classes.wrapper}>
        <Box className={classes.vacanciesWrapper}>
          <SearchInput />
          <VacanciesList />
        </Box>
        <CustomPagination
          currentPage={activePage}
          isShown={isPaginationShown(vacanciesList.length)}
          onPageChange={handlePageChange}
          totalPages={getTotalPages(vacanciesList.length)}
        />
      </Box>
    </Box>
  );
};

export default Vacancies;
