import { Pagination, createStyles } from '@mantine/core';
import React, { FC } from 'react';

const useStyles = createStyles({
  pagination: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface CustomPaginationProps {
  totalPages: number;
  isShown: boolean;
  currentPage: number;
  onPageChange: (value: number) => void;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  currentPage,
  isShown,
  onPageChange,
  totalPages,
}) => {
  const { classes } = useStyles();

  if (!isShown) {
    return null;
  }

  return (
    <Pagination
      className={classes.pagination}
      total={totalPages}
      value={currentPage}
      onChange={onPageChange}
    />
  );
};

export default CustomPagination;
