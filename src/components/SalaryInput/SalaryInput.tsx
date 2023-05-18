import { ActionIcon, Box, NumberInput, createStyles } from '@mantine/core';
import React, { FC } from 'react';
import { InputArrowUp, InputDownArrow } from 'static';

const useStyles = createStyles({
  controlsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 2,
    marginRight: 5,
  },

  iconWrapper: {
    padding: 0,
  },
});

const InputControls = ({
  onDownClick,
  onUpClick,
}: {
  onUpClick: () => void;
  onDownClick: () => void;
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.controlsWrapper}>
      <ActionIcon
        onClick={onUpClick}
        size={12}
        variant="transparent"
        className={classes.iconWrapper}
      >
        <InputArrowUp />
      </ActionIcon>
      <ActionIcon
        onClick={onDownClick}
        size={12}
        variant="transparent"
        className={classes.iconWrapper}
      >
        <InputDownArrow />
      </ActionIcon>
    </Box>
  );
};

interface SalaryInputProps {
  placeholder: string;
  inputValue: number | '';
  setInputValue: (inputValue: number | '') => void;
  incrementValue: () => void;
  decrementValue: () => void;
}

const SalaryInput: FC<SalaryInputProps> = ({
  placeholder,
  inputValue,
  setInputValue,
  decrementValue,
  incrementValue,
}) => {
  return (
    <NumberInput
      radius="md"
      size="md"
      min={0}
      value={inputValue}
      placeholder={placeholder}
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
      onChange={(value) => {
        setInputValue(value);
      }}
      styles={(theme) => ({
        input: {
          padding: '10px',
          '&::placeholder': {
            fontSize: theme.fontSizes.xsmall,
            fontFamily: theme.fontFamily,
          },
        },
      })}
    />
  );
};

export default SalaryInput;
