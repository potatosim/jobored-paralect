import React, { FC } from 'react';
import { BlueColors, GrayColors } from 'enum/Colors';
import { Box, Paper, Text, createStyles } from '@mantine/core';
import { IVacancyItem } from 'helpers/vacanciesHelpers';
import LocationField from 'components/LocationField';
import SaveButton from 'components/SaveButton/SaveButton';
import { changeFavorites } from 'handlers/favoritesSlice';
import { getPaymentField } from 'helpers/getPaymentField';
import { getVacancyPageUrl } from 'helpers/getVacancyPageUrl';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';

export interface VacancyItemProps {
  vacancyItem: IVacancyItem;
  isVacancyFavorite: boolean;
}

const useStyles = createStyles((theme) => {
  return {
    vacancyWrapper: {
      padding: '24px',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      cursor: 'pointer',
    },
    descriptionWrapper: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '12px',
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
      color: theme.colors.blue[BlueColors.Blue500],
      fontSize: theme.fontSizes.medium,
      fontWeight: theme.other.fontWeights.bold,
      lineHeight: '24px',
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        fontSize: theme.fontSizes.small,
      },
    },
    paymentScheduleWrapper: {
      display: 'flex',
      columnGap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap',
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        rowGap: '12px',
      },
    },
    paymentField: {
      fontSize: theme.fontSizes.small,
      fontWeight: theme.other.fontWeights.bold,
      lineHeight: theme.lineHeight,
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        fontSize: theme.fontSizes.xsmall,
      },
    },
    workSchedule: {
      fontSize: theme.fontSizes.small,
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        fontSize: theme.fontSizes.xsmall,
      },
    },
  };
});

const VacancyItem: FC<VacancyItemProps> = ({ isVacancyFavorite, vacancyItem }) => {
  const { paymentFrom, paymentTo, workSchedule, currency, profession, town, id } = vacancyItem;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <Paper
      onClick={() => {
        navigate(getVacancyPageUrl(id.toString()));
      }}
      radius="lg"
      className={classes.vacancyWrapper}
      data-elem={`vacancy-${id}`}
    >
      <Box className={classes.descriptionWrapper}>
        <Text className={classes.profession}>{profession}</Text>
        <Box className={classes.paymentScheduleWrapper}>
          <Text className={classes.paymentField}>
            з/п {getPaymentField(paymentFrom, paymentTo, currency)}
          </Text>
          <Box className={classes.circle}></Box>
          <Text className={classes.workSchedule}>{workSchedule}</Text>
        </Box>
        <LocationField town={town} />
      </Box>
      <SaveButton
        onClick={() => dispatch(changeFavorites({ targetVacancy: vacancyItem }))}
        isChecked={isVacancyFavorite}
        data-elem={`vacancy-${id}-shortlist-button`}
      />
    </Paper>
  );
};

export default VacancyItem;
