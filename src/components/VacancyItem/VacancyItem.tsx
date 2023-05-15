import { Box, Paper, Text } from '@mantine/core';
import SaveButton from 'components/SaveButton/SaveButton';
import { IVacancyItem } from 'handlers/vacanciesSlice';
import { getVacancyPageUrl } from 'helpers/getVacancyPageUrl';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const VacancyItem: FC<IVacancyItem> = ({
  paymentFrom,
  paymentTo,
  workSchedule,
  currency,
  profession,
  town,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => {
        navigate(getVacancyPageUrl(id.toString()));
      }}
      radius="md"
      sx={{
        padding: '24px',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
    >
      <Box>
        <Text>{profession}</Text>
        <Text>
          {paymentFrom} - {paymentTo} {currency}
        </Text>
        <Text>{workSchedule}</Text>
        <Text>{town}</Text>
      </Box>
      <SaveButton isChecked={false} />
    </Paper>
  );
};

export default VacancyItem;
