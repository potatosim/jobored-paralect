import React, { FC } from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { BlueColors, GrayColors } from 'enum/Colors';

interface TextButtonProps extends ButtonProps {
  onClick: () => void;
}

const TextButton: FC<TextButtonProps> = ({ onClick, ...props }) => (
  <Button
    onClick={onClick}
    styles={(theme) => ({
      root: {
        padding: 0,
        border: 'none',
        outline: 'none',
        height: '20px',

        backgroundColor: 'transparent',
        color: theme.colors.gray[GrayColors.Gray500],

        '&:hover': {
          color: theme.colors.blue[BlueColors.Blue400],
          backgroundColor: 'transparent',
        },

        svg: {
          stroke: theme.colors.gray[GrayColors.Gray500],
        },

        '&:hover svg': {
          stroke: theme.colors.blue[BlueColors.Blue400],
        },

        '&:active': {
          backgroundColor: 'transparent',

          color: theme.colors.blue[BlueColors.Blue500],
        },

        '&:active svg': {
          backgroundColor: 'transparent',

          stroke: theme.colors.blue[BlueColors.Blue500],
        },
      },
      inner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '4px',
        fontSize: '14px',
        lineHeight: '20px',
        maxHeight: 'max-content',
      },
      rightIcon: {
        margin: 0,
      },
    })}
    {...props}
  />
);

export default TextButton;
