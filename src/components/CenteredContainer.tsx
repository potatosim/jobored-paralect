import { createStyles } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      maxWidth: '1116px',
      width: '100%',
      height: '100%',
      margin: '0 20px',

      [`@media (max-width: ${theme.breakpoints.md})`]: {
        margin: '0 10px',
      },
    },
  };
});

const CenteredContainer: FC<PropsWithChildren> = ({ children }) => {
  const { classes } = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default CenteredContainer;
