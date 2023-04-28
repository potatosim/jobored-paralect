import { Paper } from '@mantine/core';
import React from 'react';

interface VacancyItemProps {
  name: string;
  id: number;
  payment_from: number;
  payment_to: number;
  currency: string;
  town: string | number;
  typeOfWork: { title: string };
}

const VacancyItem = () => {
  return (
    <Paper radius="md" sx={{ padding: '24px', width: '773px' }}>
      VacancyItem
    </Paper>
  );
};

export default VacancyItem;
