import { Box, Paper, Text } from '@mantine/core';
import PaymentField from 'components/PaymentField';
import SaveButton from 'components/SaveButton/SaveButton';
import { BlueColors, GrayColors } from 'enum/Colors';
import { changeFavorites } from 'handlers/favoritesSlice';
import { getVacancyPageUrl } from 'helpers/getVacancyPageUrl';
import { IVacancyItem } from 'helpers/vacanciesHelpers';
import { useAppDispatch } from 'hooks/reduxHooks';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocationIcon } from 'static';

interface VacancyItemProps {
  vacancyItem: IVacancyItem;
  isVacancyFavorite: boolean;
}

const VacancyItem: FC<VacancyItemProps> = ({ isVacancyFavorite, vacancyItem }) => {
  const { paymentFrom, paymentTo, workSchedule, currency, profession, town, id } = vacancyItem;
  const dispatch = useAppDispatch();
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
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
        <Text
          sx={(theme) => ({
            color: theme.colors.blue[BlueColors.Blue500],
            fontSize: theme.fontSizes.medium,
            fontWeight: 600,
          })}
        >
          {profession}
        </Text>
        <Box sx={{ display: 'flex', columnGap: '12px', alignItems: 'center' }}>
          <PaymentField currency={currency} paymentFrom={paymentFrom} paymentTo={paymentTo} />
          <Box
            sx={(theme) => ({
              borderRadius: '50%',
              backgroundColor: theme.colors.grey[GrayColors.Gray600],
              width: '6px',
              height: '6px',
            })}
          ></Box>
          <Text>{workSchedule}</Text>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '11px' }}>
          <LocationIcon />
          <Text>{town}</Text>
        </Box>
      </Box>
      <SaveButton
        onClick={() => dispatch(changeFavorites({ targetVacancy: vacancyItem }))}
        isChecked={isVacancyFavorite}
      />
    </Paper>
  );
};

export default VacancyItem;
