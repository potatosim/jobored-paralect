import { Text, createStyles } from '@mantine/core';
import React from 'react';
import { LogoIcon } from 'static';

const useStyles = createStyles({
  logoWrapper: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    columnGap: '12px',
    left: 162,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

const Logo = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.logoWrapper}>
      <LogoIcon />
      <Text sx={{ fontFamily: 'Poppins, sans-serif' }} fz="24px" fw={600}>
        Jobored
      </Text>
    </div>
  );
};

export default Logo;
