import { ActionIcon, Select } from '@mantine/core';
import { BlueColors } from 'enum/Colors';
import React, { useState } from 'react';
import { DownArrow, UpArrowSelect } from 'static';

const IndustrySelect = () => {
  const [isSelectFocused, setIsSelectFocus] = useState<boolean>(false);

  return (
    <Select
      placeholder="Выберите отрасль"
      onDropdownOpen={() => setIsSelectFocus(true)}
      onDropdownClose={() => setIsSelectFocus(false)}
      rightSection={<ActionIcon>{isSelectFocused ? <UpArrowSelect /> : <DownArrow />}</ActionIcon>}
      rightSectionWidth={50}
      data={['ed', 'grh', 'zerh', 'ed', 'reh', 'zery', 'ed', 'Ggg', 'erj', 'ed', 'iu;.', 'r5ij']}
      styles={(theme) => ({
        item: {
          backgroundColor: theme.white,
          ':hover': { backgroundColor: theme.colors.blue[BlueColors.Blue100] },
          ':active': { backgroundColor: theme.colors.blue[BlueColors.Blue500] },
        },
        rightSection: {
          pointerEvents: 'none',
        },
      })}
    />
  );
};

export default IndustrySelect;
