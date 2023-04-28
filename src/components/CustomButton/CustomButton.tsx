import { Button, ButtonProps } from '@mantine/core';
import { BlueColors } from 'enum/Colors';
import React, { FC } from 'react';

interface CustomButtonProps extends ButtonProps {
  size: 'small' | 'regular';
}

const CustomButton: FC<CustomButtonProps> = ({ size = 'regular', ...props }) => {
  return (
    <Button
      size={size}
      styles={(theme) => ({
        root: {
          padding: size === 'regular' ? '9.5px 20px' : '5.5px 20px',
          backgroundColor: theme.colors.blue[BlueColors.Blue500],
          transition: theme.transitionTimingFunction,
          fontFamily: theme.fontFamily,
          fontWeight: 500,
          fontSize: theme.fontSizes.xsmall,

          '&:hover': {
            backgroundColor: theme.colors.blue[BlueColors.Blue400],
          },
          '&:active': {
            backgroundColor: theme.colors.blue[BlueColors.Blue600],
          },
        },
      })}
      {...props}
    />
  );
};

export default CustomButton;
