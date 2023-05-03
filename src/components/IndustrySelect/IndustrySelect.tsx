import { ActionIcon, Select } from '@mantine/core';
import { BlueColors } from 'enum/Colors';
import { getFiltersAppSelector } from 'selectors/getFiltersAppSelector';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React, { useState } from 'react';
import { DownArrow, UpArrowSelect } from 'static';

const IndustrySelect = () => {
  const [isSelectFocused, setIsSelectFocus] = useState<boolean>(false);

  const { industries } = useAppSelector(getFiltersAppSelector);
  const dispatch = useAppDispatch();

  return (
    <Select
      placeholder="Выберите отрасль"
      onDropdownOpen={() => setIsSelectFocus(true)}
      onDropdownClose={() => setIsSelectFocus(false)}
      rightSection={<ActionIcon>{isSelectFocused ? <UpArrowSelect /> : <DownArrow />}</ActionIcon>}
      rightSectionWidth={50}
      data={industries}
      nothingFound="No options"
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
