import React, { FC } from 'react';
import { createStyles, ActionIcon, Box } from '@mantine/core';
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

interface InputControlsProps {
  onUpClick: () => void;
  onDownClick: () => void;
}

const InputControls: FC<InputControlsProps> = ({ onDownClick, onUpClick }) => {
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

export default InputControls;
