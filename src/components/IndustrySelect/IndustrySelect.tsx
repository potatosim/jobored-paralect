import { ActionIcon, Select } from '@mantine/core';
import { BlueColors } from 'enum/Colors';
import { getFiltersAppSelector } from 'selectors/getFiltersAppSelector';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React, { useEffect, useState } from 'react';
import { DownArrow, UpArrowSelect } from 'static';
import { getIndustries } from 'thunks';
import { setIndustry } from 'handlers/filterSlice';

const IndustrySelect = () => {
  const [isSelectFocused, setIsSelectFocus] = useState<boolean>(false);

  const { industries, selectedOption } = useAppSelector(getFiltersAppSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIndustries());
  }, []);

  return (
    <Select
      placeholder="Выберите отрасль"
      onDropdownOpen={() => setIsSelectFocus(true)}
      onDropdownClose={() => setIsSelectFocus(false)}
      rightSection={<ActionIcon>{isSelectFocused ? <UpArrowSelect /> : <DownArrow />}</ActionIcon>}
      rightSectionWidth={50}
      value={selectedOption.value}
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
      onChange={(value) => dispatch(setIndustry(value))}
    />
  );
};

export default IndustrySelect;
