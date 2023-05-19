import React, { FC } from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import CustomButton from 'components/CustomButton';
import { SearchIcon } from 'static';

interface SearchInputProps extends TextInputProps {
  onSubmit: () => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSubmit, ...props }) => (
  <TextInput
    icon={<SearchIcon />}
    size="lg"
    radius="md"
    rightSection={
      <CustomButton onClick={onSubmit} size="small" data-elem="search-button">
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
    {...props}
  />
);

export default SearchInput;
