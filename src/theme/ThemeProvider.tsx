import { MantineProvider } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: () => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
        }),
        breakpoints: {
          md: '768px',
          sm: '425px',
        },
        lineHeight: '20px',
        white: '#ffffff',
        black: '#232134',
        colors: {
          blue: ['#3b7cd3', '#5e96fc', '#92c1ff', '#b7d6ff', '#c9e0ff', '#deecff'],
          grey: ['#f5f5f6', '#eaebed', '#d5d6dc', '#acadb9', '#7b7c88'],
        },
        primaryColor: 'blue',
        primaryShade: 1,
        fontFamily: 'Inter, sans-serif',
        fontSizes: {
          xsmall: '14px',
          small: '16px',
          medium: '20px',
          large: '24px',
          xlarge: '28px',
        },

        cursorType: 'pointer',
        radius: {
          md: '8px',
          lg: '12px',
        },

        headings: {
          sizes: {
            h1: { fontSize: '24px', fontWeight: '600' },
            h2: { fontSize: '28px', fontWeight: '700' },
            h3: { fontSize: '20px', fontWeight: '700' },
          },
        },
        loader: 'oval',
        other: {
          fontWeights: {
            normal: 400,
            medium: 500,
            bold: 600,
            bolder: 700,
          },
        },
        transitionTimingFunction: '.25s all ease-in-out',
      }}
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
