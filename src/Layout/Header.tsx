import { Tabs, TabsProps, createStyles } from '@mantine/core';
import Logo from 'components/Logo';
import { BlueColors } from 'enum/Colors';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes/RouteNames';

const useStyles = createStyles({
  header: {
    display: 'flex',
    justifyContent: 'center',
    padding: '24px 0',

    '& > div': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '1440px',
      width: '100%',
    },
  },
});

const StyledTabs = ({ styles, ...props }: TabsProps) => {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          fontSize: '16px',
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

          '&[data-active]': {
            color: theme.colors.blue[BlueColors.Blue500],
          },
        },
        tabsList: {
          display: 'flex',
          columnGap: '60px',
        },
      })}
      {...props}
    />
  );
};

const Header = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<RouteNames>(RouteNames.Vacancies);

  const handleChangeTab = (value: RouteNames) => {
    setCurrentTab(value);
    navigate(value);
  };

  return (
    <header className={classes.header}>
      <div>
        <Logo />
        <StyledTabs value={currentTab} onTabChange={handleChangeTab}>
          <Tabs.List>
            <Tabs.Tab value={RouteNames.Vacancies}>Поиск Вакансий</Tabs.Tab>
            <Tabs.Tab value={RouteNames.Favorites}>Избранное</Tabs.Tab>
          </Tabs.List>
        </StyledTabs>
      </div>
    </header>
  );
};

export default Header;
