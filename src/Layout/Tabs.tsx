import { TabsProps, Tabs } from '@mantine/core';
import { BlueColors } from 'enum/Colors';

const CustomTabs = ({ styles, ...props }: TabsProps) => (
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

export default CustomTabs;
