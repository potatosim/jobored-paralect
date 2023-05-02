import React, { useState } from 'react';
import { Box, Paper, Text } from '@mantine/core';
import { ResetButton } from 'static';
import TextButton from 'components/TextButton';
import CustomButton from 'components/CustomButton';
import IndustrySelect from 'components/IndustrySelect';
import SalaryInput from 'components/SalaryInput';

const JobsFilter = () => {
  const [fromValue, setFromValue] = useState<number | ''>('');
  const [toValue, setToValue] = useState<number | ''>('');
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
            incrementValue={() => {}}
            decrementValue={() => {}}
            inputValue={fromValue}
            setInputValue={setFromValue}
            placeholder="От"
          />
          <SalaryInput
            incrementValue={() => {}}
            decrementValue={() => {}}
            inputValue={toValue}
            setInputValue={setToValue}
            placeholder="До"
          />
        </Box>
        <CustomButton size="regular">Применить</CustomButton>
      </Box>
    </Paper>
  );
};

export default JobsFilter;
