import { TextInput } from '@mantine/core';
import CustomButton from 'components/CustomButton/CustomButton';
import { setSearchValue } from 'handlers/filterSlice';
import { getFiltersSliceSelector } from 'selectors/selectors';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import React, { ChangeEvent } from 'react';
import { SearchIcon } from 'static';
import { getVacancies } from 'thunks';

const SearchInput = () => {
  const { searchValue, salaryFromInput, salaryToInput, selectedOption } =
    useAppSelector(getFiltersSliceSelector);
  const dispatch = useAppDispatch();

  return (
    <TextInput
      value={searchValue}
      placeholder="Введите название вакансии"
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
        >
          Поиск
        </CustomButton>
      }
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
