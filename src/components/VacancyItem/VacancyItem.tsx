import { Box, Paper, Text, createStyles } from '@mantine/core';
import LocationField from 'components/LocationField';
import PaymentField from 'components/PaymentField';
import SaveButton from 'components/SaveButton/SaveButton';
import { BlueColors, GrayColors } from 'enum/Colors';
import { changeFavorites } from 'handlers/favoritesSlice';
import { getVacancyPageUrl } from 'helpers/getVacancyPageUrl';
import { IVacancyItem } from 'helpers/vacanciesHelpers';
import { useAppDispatch } from 'hooks/reduxHooks';
import React, { FC } from 'react';
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
    >
      <Box className={classes.descriptionWrapper}>
        <Text className={classes.profession}>{profession}</Text>
        <Box className={classes.paymentScheduleWrapper}>
          <PaymentField
            fontSize="16px"
            mediaFS="14px"
            currency={currency}
            paymentFrom={paymentFrom}
            paymentTo={paymentTo}
          />
          <Box className={classes.circle}></Box>
          <Text
            sx={(theme) => ({
              fontSize: theme.fontSizes.small,
              [`@media (max-width: ${theme.breakpoints.md})`]: {
                fontSize: theme.fontSizes.xsmall,
              },
            })}
          >
            {workSchedule}
          </Text>
        </Box>
        <LocationField town={town} />
      </Box>
      <SaveButton
        onClick={() => dispatch(changeFavorites({ targetVacancy: vacancyItem }))}
        isChecked={isVacancyFavorite}
      />
    </Paper>
  );
};

export default VacancyItem;
