import React, { useEffect, useState } from 'react';
import { Tabs, createStyles } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import CenteredContainer from 'components/CenteredContainer';
import CustomTabs from './Tabs';
import Logo from 'components/Logo';
import { RouteNames } from 'routes/RouteNames';

const useStyles = createStyles((theme) => {
  return {
    header: {
      display: 'flex',
      justifyContent: 'center',
      padding: '32px 0',

      '& > div': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      [`@media (max-width: ${theme.breakpoints.md})`]: {
        padding: '16px 0',

        '& > div': {
          justifyContent: 'space-between',
        },
      },
    },
  };
});

const Header = () => {
  const { pathname } = useLocation();
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<RouteNames>(RouteNames.Vacancies);

  const handleChangeTab = (value: RouteNames) => {
    navigate(value);
  };

  useEffect(() => {
    setCurrentTab(pathname as RouteNames);
  }, [pathname]);

  return (
    <header className={classes.header}>
      <CenteredContainer>
        <Logo />
        <CustomTabs value={currentTab} onTabChange={handleChangeTab}>
          <Tabs.List>
            <Tabs.Tab value={RouteNames.Vacancies}>Поиск Вакансий</Tabs.Tab>
            <Tabs.Tab value={RouteNames.Favorites}>Избранное</Tabs.Tab>
          </Tabs.List>
        </CustomTabs>
      </CenteredContainer>
    </header>
  );
};

export default Header;
