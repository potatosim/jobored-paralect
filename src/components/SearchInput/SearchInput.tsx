import { TextInput } from '@mantine/core';
import CustomButton from 'components/CustomButton/CustomButton';
import React, { ChangeEvent, useState } from 'react';
import { SearchIcon } from 'static';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <TextInput
      value={searchValue}
      placeholder="Введите название вакансии"
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
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
