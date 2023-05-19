import React, { FC } from 'react';
import { Box, Paper, Text, createStyles } from '@mantine/core';
import LocationField from 'components/LocationField';
import SaveButton from 'components/SaveButton';
import { VacancyItemProps } from 'components/VacancyItem';
import { GrayColors } from 'enum/Colors';
import { changeFavorites } from 'handlers/favoritesSlice';
import { getPaymentField } from 'helpers/getPaymentField';
import { useAppDispatch } from 'hooks/reduxHooks';

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
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        rowGap: 8,
      },
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
        fontSize: theme.fontSizes.small,
        lineHeight: theme.lineHeight,
      },
    },
    paymentScheduleWrapper: {
      width: '100%',
      display: 'flex',
      columnGap: '16px',
      alignItems: 'center',
      flexWrap: 'wrap',
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        rowGap: '0',
      },
    },
    scheduleText: {
      fontSize: theme.fontSizes.medium,
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        fontSize: theme.fontSizes.small,
      },
    },
    paymentField: {
      fontSize: theme.fontSizes.medium,
      fontWeight: theme.other.fontWeights.bold,
      lineHeight: theme.lineHeight,
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        fontSize: theme.fontSizes.small,
      },
    },
  };
});

const VacancyTopItem: FC<VacancyItemProps> = ({ isVacancyFavorite, vacancyItem }) => {
  const { paymentFrom, paymentTo, workSchedule, currency, profession, town, id } = vacancyItem;
  const dispatch = useAppDispatch();
  const { classes } = useStyles();
  return (
    <Paper radius="md" className={classes.vacancyWrapper}>
      <Box className={classes.titleWrapper}>
        <Text className={classes.profession}>{profession}</Text>
        <SaveButton
          onClick={() => dispatch(changeFavorites({ targetVacancy: vacancyItem }))}
          isChecked={isVacancyFavorite}
          data-elem={`vacancy-${id}-shortlist-button`}
        />
      </Box>
      <Box className={classes.paymentScheduleWrapper}>
        <Text className={classes.paymentField}>
          з/п {getPaymentField(paymentFrom, paymentTo, currency)}
        </Text>
        <Box className={classes.circle}></Box>
        <Text className={classes.scheduleText}>{workSchedule}</Text>
      </Box>
      <LocationField town={town} />
    </Paper>
  );
};

export default VacancyTopItem;
