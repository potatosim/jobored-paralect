import React, { FC } from 'react';
import { NumberInput, NumberInputProps } from '@mantine/core';
import InputControls from './InputControls';

interface SalaryInputProps extends NumberInputProps {
  incrementValue: () => void;
  decrementValue: () => void;
}

const SalaryInput: FC<SalaryInputProps> = ({ decrementValue, incrementValue, ...props }) => {
  return (
    <NumberInput
      radius="md"
      size="md"
      min={0}
      hideControls
      rightSection={
        <InputControls
          onDownClick={() => {
            decrementValue();
          }}
          onUpClick={() => {
            incrementValue();
          }}
        />
      }
      styles={(theme) => ({
        input: {
          padding: '10px',
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

export default SalaryInput;
