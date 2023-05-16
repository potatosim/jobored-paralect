import { Text, createStyles } from '@mantine/core';
import React from 'react';
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

  return (
    <div className={classes.logoWrapper}>
      <LogoIcon />
      <Text
        sx={(theme) => ({
          fontFamily: 'Poppins, sans-serif',
          fontSize: theme.fontSizes.large,
          [`@media (max-width: ${theme.breakpoints.md})`]: {
            fontSize: theme.fontSizes.medium,
          },
        })}
        fw={600}
      >
        Jobored
      </Text>
    </div>
  );
};

export default Logo;
