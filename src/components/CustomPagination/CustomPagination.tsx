import { Pagination, PaginationProps, createStyles } from '@mantine/core';
import React, { FC } from 'react';

const useStyles = createStyles({
  pagination: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface CustomPaginationProps extends PaginationProps {
  isShown: boolean;
}

const CustomPagination: FC<CustomPaginationProps> = ({ isShown, ...props }) => {
  const { classes } = useStyles();

  if (!isShown) {
    return null;
  }

  return <Pagination className={classes.pagination} {...props} />;
};

export default CustomPagination;
