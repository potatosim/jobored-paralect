import React from 'react';
import { Box, Paper, Text } from '@mantine/core';
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
  setFromValue,
  setToValue,
} from 'handlers/filterSlice';
import { getFiltersAppSelector } from 'selectors/getFiltersAppSelector';

const JobsFilter = () => {
  const { salaryFromInput, salaryToInput } = useAppSelector(getFiltersAppSelector);
  const dispatch = useAppDispatch();

  return (
    <Paper
      sx={{
        width: '315px',
        height: '360px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '2rem',
      }}
      radius="lg"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text fz="20px" fw={700}>
          Фильтры
        </Text>
        <TextButton rightIcon={<ResetButton />}>Сбросить все</TextButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
          <Text fw={700} fz="1rem">
            Отрасль
          </Text>
          <IndustrySelect />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
          <Text fw={700} fz="1rem">
            Оклад
          </Text>
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
            setInputValue={(tovalue) => {
              dispatch(setToValue(tovalue));
            }}
            placeholder="До"
          />
        </Box>
        <CustomButton size="regular">Применить</CustomButton>
      </Box>
    </Paper>
  );
};

export default JobsFilter;
