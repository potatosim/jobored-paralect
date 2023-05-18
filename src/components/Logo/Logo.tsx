import { Text, createStyles } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes/RouteNames';
import { LogoIcon } from 'static';

const useStyles = createStyles((theme) => {
  return {
    logoWrapper: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      columnGap: '12px',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',

      [`@media (max-width: ${theme.breakpoints.md})`]: {
        position: 'unset',
        transform: 'unset',
        top: 'unset',
      },
    },
  };
});

const Logo = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(RouteNames.Vacancies);
      }}
      className={classes.logoWrapper}
    >
      <LogoIcon />
      <Text
        sx={(theme) => ({
          fontFamily: 'Poppins, sans-serif',
          fontSize: theme.fontSizes.large,
          fontWeight: theme.other.fontWeights.bold,
          [`@media (max-width: ${theme.breakpoints.md})`]: {
            fontSize: theme.fontSizes.medium,
          },
        })}
      >
        Jobored
      </Text>
    </div>
  );
};

export default Logo;
