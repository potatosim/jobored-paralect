import { TextInput, rem } from '@mantine/core';
import CustomButton from 'components/CustomButton';
import { setSearchValue } from 'handlers/filterSlice';
import { getFiltersSliceSelector } from 'selectors/selectors';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import React, { ChangeEvent } from 'react';
import { SearchIcon } from 'static';
import { getVacancies } from 'thunks';
import { useMediaQuery } from '@mantine/hooks';

const SearchInput = () => {
  const { searchValue, salaryFromInput, salaryToInput, selectedOption } =
    useAppSelector(getFiltersSliceSelector);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery(`(max-width: ${rem('425px')}`);

  return (
    <TextInput
      data-elem="search-input"
      value={searchValue}
      placeholder={matches ? 'Поиск вакансии' : 'Введите название вакансии'}
      onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value))}
      icon={<SearchIcon />}
      size="lg"
      radius="md"
      rightSection={
        <CustomButton
          onClick={() => {
            dispatch(
              getVacancies({
                keyword: searchValue,
                payment_from: salaryFromInput,
                payment_to: salaryToInput,
                catalogues: selectedOption.key,
              }),
            );
          }}
          size="small"
          data-elem="search-button"
        >
          Поиск
        </CustomButton>
      }
      styles={(theme) => ({
        icon: {
          width: 40,
        },
        input: {
          fontSize: theme.fontSizes.xsmall,
          '&[data-with-icon]': {
            padding: '0 36px',
          },
        },
        rightSection: {
          width: 'max-content',
          marginRight: 12,
        },
        root: {
          width: '100%',
        },
      })}
    />
  );
};

export default SearchInput;
