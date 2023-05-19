import { ChangeEvent, useState } from 'react';
import JobsFilter from './JobsFilter';
import { ActionIcon, Box, Collapse, Tooltip, createStyles } from '@mantine/core';
import SearchInput from 'components/SearchInput';
import VacanciesList from './VacanciesList';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { getFiltersSliceSelector, getVacanciesSliceSelector } from 'handlers/selectors';
import { setActivePage } from 'handlers/vacanciesSlice';
import CustomPagination from 'components/CustomPagination/CustomPagination';
import { getTotalPages, isPaginationShown } from 'helpers/vacanciesHelpers';
import { useMediaQuery } from '@mantine/hooks';
import { getVacancies } from 'thunks';
import { setSearchValue } from 'handlers/filterSlice';
import { FilterIcon } from 'static';

const useStyles = createStyles((theme) => {
  return {
    pageWrapper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '28px',

      [`@media (max-width: ${theme.breakpoints.md})`]: {
        flexWrap: 'wrap',
      },
    },

    wrapper: {
      width: 'min(773px, 70%)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',

      [`@media (max-width: ${theme.breakpoints.md})`]: {
        width: '100%',
      },
    },

    vacanciesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px',
    },

    filtersWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },

    collapse: {
      width: 'min(315px, 30%)',
      minWidth: '270px',
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        width: '100%',
      },
    },
  };
});

const Vacancies = () => {
  const { classes, theme } = useStyles();
  const { vacanciesList, activePage } = useAppSelector(getVacanciesSliceSelector);
  const { searchValue, salaryFromInput, salaryToInput, selectedOption } =
    useAppSelector(getFiltersSliceSelector);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const handlePageChange = (value: number) => {
    dispatch(setActivePage(value));
  };

  const handleSubmit = () => {
    dispatch(
      getVacancies({
        keyword: searchValue,
        payment_from: salaryFromInput,
        payment_to: salaryToInput,
        catalogues: selectedOption.key,
      }),
    );
  };

  return (
    <Box className={classes.pageWrapper}>
      <Collapse className={classes.collapse} in={!matches || isOpen}>
        <JobsFilter />
      </Collapse>
      <Box className={classes.wrapper}>
        <Box className={classes.vacanciesWrapper}>
          <Box className={classes.filtersWrapper}>
            <SearchInput
              onSubmit={handleSubmit}
              value={searchValue}
              data-elem="search-input"
              placeholder={matches ? 'Поиск вакансии' : 'Введите название вакансии'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch(setSearchValue(e.target.value))
              }
            />
            {matches && (
              <Tooltip label="Фильтры">
                <ActionIcon onClick={() => setIsOpen(!isOpen)}>
                  <FilterIcon />
                </ActionIcon>
              </Tooltip>
            )}
          </Box>
          <VacanciesList />
        </Box>
        <CustomPagination
          value={activePage}
          isShown={isPaginationShown(vacanciesList.length)}
          onChange={handlePageChange}
          total={getTotalPages(vacanciesList.length)}
          mt={40}
        />
      </Box>
    </Box>
  );
};

export default Vacancies;
