import React from 'react';
import { ActionIcon, ActionIconProps, createStyles } from '@mantine/core';
import { BlueColors, GrayColors } from 'enum/Colors';
import { StarIcon } from 'static';

const useStyles = createStyles((theme, { isChecked }: Pick<SaveButtonProps, 'isChecked'>) => ({
  button: {
    minWidth: 'unset',
    minHeight: 'unset',
    width: 'max-content',
    height: 'max-content',
    border: 'none',
    svg: {
      stroke: isChecked
        ? theme.colors.blue[BlueColors.Blue500]
        : theme.colors.gray[GrayColors.Gray500],
      fill: isChecked ? theme.colors.blue[BlueColors.Blue500] : 'none',
    },

    '&:hover svg': {
      stroke: theme.colors.blue[BlueColors.Blue500],
    },

    '&:active svg': {
      stroke: theme.colors.blue[BlueColors.Blue500],
      fill: theme.colors.blue[BlueColors.Blue500],
    },
  },
}));

interface SaveButtonProps extends ActionIconProps {
  isChecked: boolean;
  onClick: () => void;
}

const SaveButton = ({ isChecked, onClick, ...props }: SaveButtonProps) => {
  const { classes } = useStyles({ isChecked });
  return (
    <ActionIcon
      className={classes.button}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      variant="transparent"
      {...props}
    >
      <StarIcon />
    </ActionIcon>
  );
};

export default SaveButton;
