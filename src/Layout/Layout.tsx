import React from 'react';
import { Outlet } from 'react-router-dom';
import { createStyles } from '@mantine/core';
import Header from './Header';
import Main from './Main';

const useStyles = createStyles(() => ({
  layoutWrapper: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    overflow: 'hidden',
  },
}));

const Layout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.layoutWrapper}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
