import React, { FC, useState } from 'react';
import { ActionIcon, Select, SelectProps } from '@mantine/core';
import { DownArrow, UpArrowSelect } from 'static';
import { BlueColors } from 'enum/Colors';

const CustomSelect: FC<SelectProps> = ({ ...props }) => {
  const [isSelectFocused, setIsSelectFocus] = useState<boolean>(false);

  return (
    <Select
      onDropdownOpen={() => setIsSelectFocus(true)}
      onDropdownClose={() => setIsSelectFocus(false)}
      rightSection={<ActionIcon>{isSelectFocused ? <UpArrowSelect /> : <DownArrow />}</ActionIcon>}
      rightSectionWidth={50}
      size="md"
      radius="md"
      styles={(theme) => ({
        item: {
          backgroundColor: theme.white,
          fontSize: theme.fontSizes.xsmall,
          borderRadius: '8px',
          ':hover': {
            backgroundColor: theme.colors.blue[BlueColors.Blue100],
          },
          ':active': {
            backgroundColor: theme.colors.blue[BlueColors.Blue500],
          },
        },
        rightSection: {
          pointerEvents: 'none',
        },
        input: {
          padding: '10px',
          fontSize: theme.fontSizes.xsmall,
          '&::placeholder': {
            fontSize: theme.fontSizes.xsmall,
            fontFamily: theme.fontFamily,
          },
        },
      })}
      {...props}
    />
  );
};

export default CustomSelect;
