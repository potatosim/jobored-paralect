import { Tabs, TabsProps, createStyles } from '@mantine/core';
import CenteredContainer from 'components/CenteredContainer';
import Logo from 'components/Logo';
import { BlueColors } from 'enum/Colors';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

const StyledTabs = ({ styles, ...props }: TabsProps) => {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          fontSize: theme.fontSizes.small,
          lineHeight: '20px',
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: theme.cursorType,
          color: '#232134',
          padding: 0,

          '&[data-active]': {
            color: theme.colors.blue[BlueColors.Blue500],
          },

          [`@media (max-width: ${theme.breakpoints.md})`]: {
            fontSize: theme.fontSizes.xsmall,
          },
        },
        tabsList: {
          display: 'flex',
          columnGap: '60px',

          [`@media (max-width: ${theme.breakpoints.md})`]: {
            columnGap: '16px',
          },
        },
      })}
      {...props}
    />
  );
};

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
        <StyledTabs value={currentTab} onTabChange={handleChangeTab}>
          <Tabs.List>
            <Tabs.Tab value={RouteNames.Vacancies}>Поиск Вакансий</Tabs.Tab>
            <Tabs.Tab value={RouteNames.Favorites}>Избранное</Tabs.Tab>
          </Tabs.List>
        </StyledTabs>
      </CenteredContainer>
    </header>
  );
};

export default Header;
