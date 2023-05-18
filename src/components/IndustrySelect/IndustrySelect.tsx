import { ActionIcon, Select } from '@mantine/core';
import { BlueColors } from 'enum/Colors';
import { getFiltersSliceSelector } from 'selectors/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React, { useEffect, useState } from 'react';
import { DownArrow, UpArrowSelect } from 'static';
import { getIndustries } from 'thunks';
import { setIndustry } from 'handlers/filterSlice';

const IndustrySelect = () => {
  const [isSelectFocused, setIsSelectFocus] = useState<boolean>(false);

  const { industries, selectedOption } = useAppSelector(getFiltersSliceSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!industries.length) {
      dispatch(getIndustries());
    }
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
      size="md"
      radius="md"
      styles={(theme) => ({
        item: {
          backgroundColor: theme.white,
          fontSize: theme.fontSizes.xsmall,
          ':hover': { backgroundColor: theme.colors.blue[BlueColors.Blue100] },
          ':active': { backgroundColor: theme.colors.blue[BlueColors.Blue500] },
        },
        rightSection: {
          pointerEvents: 'none',
        },
        input: {
          padding: '10px',
          fontSize: theme.fontSizes.xsmall,
          textOverflow: 'ellipsis',
          '&::placeholder': {
            fontSize: theme.fontSizes.xsmall,
            fontFamily: theme.fontFamily,
          },
        },
        dropdown: {
          borderRadius: '8px',
        },
      })}
      onChange={(value) => dispatch(setIndustry(value))}
    />
  );
};

export default IndustrySelect;
