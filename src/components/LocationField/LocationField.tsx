import { Box, Text, createStyles } from '@mantine/core';
import { LocationIcon } from 'static';

import React, { FC } from 'react';

interface LocationFieldProps {
  town: string;
}

const useStyles = createStyles((theme) => {
  return {
    locationField: { display: 'flex', alignItems: 'center', columnGap: '11px' },
    town: {
      fontSize: theme.fontSizes.small,
      [`@media (max-width: ${theme.breakpoints.md})`]: {
        fontSize: theme.fontSizes.xsmall,
      },
    },
  };
});

const LocationField: FC<LocationFieldProps> = ({ town }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.locationField}>
      <LocationIcon />
      <Text className={classes.town}>{town}</Text>
    </Box>
  );
};

export default LocationField;
