import { TextInput } from '@mantine/core';
import CustomButton from 'components/CustomButton/CustomButton';
import { setSearchValue } from 'handlers/filterSlice';
import { getFiltersAppSelector } from 'selectors/getFiltersAppSelector';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import React, { ChangeEvent } from 'react';
import { SearchIcon } from 'static';

const SearchInput = () => {
  const { searchValue } = useAppSelector(getFiltersAppSelector);
  const dispatch = useAppDispatch();

  return (
    <TextInput
      value={searchValue}
      placeholder="Введите название вакансии"
      onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value))}
      icon={<SearchIcon />}
      size="lg"
      radius="md"
      rightSection={<CustomButton size="small">Поиск</CustomButton>}
      rightSectionWidth={120}
      styles={(theme) => ({
        input: {
          fontSize: theme.fontSizes.xsmall,
        },
      })}
    />
  );
};

export default SearchInput;
