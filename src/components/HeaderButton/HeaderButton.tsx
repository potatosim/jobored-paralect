import React, { FC } from 'react';
import { Button } from '@mantine/core';

interface HeaderButtonProps {
  onClick: () => void;
  text: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      sx={{
        fontFamily: 'Inter, sans-serif',
        border: '0',
        padding: '0',
      }}
      lh="20px"
      fz="1rem"
      color="dark"
      variant="subtle"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default HeaderButton;
