import React from 'react';
import { ActionIcon, ActionIconProps } from '@mantine/core';
import { BlueColors, GrayColors } from 'enum/Colors';
import { StarIcon } from 'static';

interface SaveButtonProps extends ActionIconProps {
  isChecked: boolean;
  onClick: () => void;
}

const SaveButton = ({ isChecked, onClick, ...props }: SaveButtonProps) => {
  return (
    <ActionIcon
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      variant="transparent"
      sx={(theme) => ({
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
      })}
      {...props}
    >
      <StarIcon />
    </ActionIcon>
  );
};

export default SaveButton;
