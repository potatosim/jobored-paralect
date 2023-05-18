import { Box, Paper, Text, createStyles } from '@mantine/core';
import LocationField from 'components/LocationField';
import PaymentField from 'components/PaymentField';
import SaveButton from 'components/SaveButton';
import { VacancyItemProps } from 'components/VacancyItem';
import { GrayColors } from 'enum/Colors';
import { changeFavorites } from 'handlers/favoritesSlice';
import { useAppDispatch } from 'hooks/reduxHooks';
import React, { FC } from 'react';

const useStyles = createStyles((theme) => {
  return {
    vacancyWrapper: {
      padding: '24px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      rowGap: '16px',
    },
    titleWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    circle: {
      borderRadius: '50%',
      backgroundColor: theme.colors.grey[GrayColors.Gray600],
      width: '6px',
      height: '6px',
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        display: 'none',
      },
    },
    profession: {
      color: theme.colors.black,
      fontSize: theme.fontSizes.xlarge,
      fontWeight: theme.other.fontWeights.bolder,
      lineHeight: '35px',
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        fontSize: theme.fontSizes.medium,
      },
    },
    paymentScheduleWrapper: {
      width: '100%',
      display: 'flex',
      columnGap: '16px',
      alignItems: 'center',
      flexWrap: 'wrap',
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        rowGap: '16px',
      },
    },
    scheduleText: {
      fontSize: theme.fontSizes.medium,
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        fontSize: theme.fontSizes.small,
      },
    },
  };
});

const VacancyTopItem: FC<VacancyItemProps> = ({ isVacancyFavorite, vacancyItem }) => {
  const { paymentFrom, paymentTo, workSchedule, currency, profession, town } = vacancyItem;
  const dispatch = useAppDispatch();
  const { classes } = useStyles();
  return (
    <Paper radius="md" className={classes.vacancyWrapper}>
      <Box className={classes.titleWrapper}>
        <Text className={classes.profession}>{profession}</Text>
        <SaveButton
          onClick={() => dispatch(changeFavorites({ targetVacancy: vacancyItem }))}
          isChecked={isVacancyFavorite}
        />
      </Box>
      <Box className={classes.paymentScheduleWrapper}>
        <PaymentField
          fontSize="20px"
          mediaFS="16px"
          currency={currency}
          paymentFrom={paymentFrom}
          paymentTo={paymentTo}
        />
        <Box className={classes.circle}></Box>
        <Text className={classes.scheduleText}>{workSchedule}</Text>
      </Box>
      <LocationField town={town} />
    </Paper>
  );
};

export default VacancyTopItem;
