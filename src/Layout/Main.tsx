import { createStyles } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

const useStyles = createStyles({
  main: {
    width: '100%',
    flex: '1 1 auto',
    display: 'flex',
    padding: '40px 0 44px',

    backgroundColor: '#F5F5F5',
  },
});

const Main: FC<PropsWithChildren> = ({ children }) => {
  const { classes } = useStyles();
  return <main className={classes.main}>{children}</main>;
};

export default Main;
