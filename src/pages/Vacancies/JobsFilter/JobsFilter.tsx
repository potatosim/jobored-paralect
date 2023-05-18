import React from 'react';
import { Box, Paper, Text, createStyles } from '@mantine/core';
import { ResetButton } from 'static';
import TextButton from 'components/TextButton';
import CustomButton from 'components/CustomButton';
import IndustrySelect from 'components/IndustrySelect';
import SalaryInput from 'components/SalaryInput';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import {
  decrementFromValue,
  decrementToValue,
  incrementFromValue,
  incrementToValue,
  resetAllFilters,
  setFromValue,
  setToValue,
} from 'handlers/filterSlice';
import { getVacancies } from 'thunks';
import { getFiltersSliceSelector } from 'selectors/selectors';

const useStyles = createStyles((theme) => {
  return {
    filtersWrapper: {
      height: '360px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '32px',
    },
    filtersHeaderWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    filtersBodyWrapper: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '20px',
    },
    inputWrapper: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '10px',
    },
    labels: {
      fontSize: theme.fontSizes.small,
      fontWeight: theme.other.fontWeights.bolder,
      lineHeight: '16px',
    },
    filtersHeader: {
      fontSize: theme.fontSizes.medium,
      fontWeight: theme.other.fontWeights.bolder,
      lineHeight: theme.lineHeight,
    },
  };
});

const JobsFilter = () => {
  const { salaryFromInput, salaryToInput, searchValue, selectedOption } =
    useAppSelector(getFiltersSliceSelector);
  const dispatch = useAppDispatch();
  const { classes } = useStyles();

  const handleResetFilters = () => {
    dispatch(resetAllFilters());
    dispatch(getVacancies({}));
  };

  return (
    <Paper className={classes.filtersWrapper} radius="lg">
      <Box className={classes.filtersHeaderWrapper}>
        <Text className={classes.filtersHeader}>Фильтры</Text>
        <TextButton onClick={handleResetFilters} rightIcon={<ResetButton />}>
          Сбросить все
        </TextButton>
      </Box>
      <Box className={classes.filtersBodyWrapper}>
        <Box className={classes.inputWrapper}>
          <Text className={classes.labels}>Отрасль</Text>
          <IndustrySelect />
        </Box>
        <Box className={classes.inputWrapper}>
          <Text className={classes.labels}>Оклад</Text>
          <SalaryInput
            incrementValue={() => {
              dispatch(incrementFromValue());
            }}
            decrementValue={() => {
              dispatch(decrementFromValue());
            }}
            inputValue={salaryFromInput}
            setInputValue={(value) => {
              dispatch(setFromValue(value));
            }}
            placeholder="От"
          />
          <SalaryInput
            incrementValue={() => {
              dispatch(incrementToValue());
            }}
            decrementValue={() => {
              dispatch(decrementToValue());
            }}
            inputValue={salaryToInput}
            setInputValue={(toValue) => {
              dispatch(setToValue(toValue));
            }}
            placeholder="До"
          />
        </Box>
        <CustomButton
          onClick={() => {
            dispatch(
              getVacancies({
                keyword: searchValue,
                payment_from: salaryFromInput,
                payment_to: salaryToInput,
                catalogues: selectedOption.key,
              }),
            );
          }}
          size="regular"
        >
          Применить
        </CustomButton>
      </Box>
    </Paper>
  );
};

export default JobsFilter;
