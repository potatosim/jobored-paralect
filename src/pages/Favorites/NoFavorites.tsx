import { Box, Image, Text, createStyles } from '@mantine/core';
import CustomButton from 'components/CustomButton';
import { BlueColors } from 'enum/Colors';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes/RouteNames';
import nothingToFind from 'static/images/nothingToFind.png';

const useStyles = createStyles((theme) => {
  return {
    notFoundWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '38px',
      padding: '80px',
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    button: {
      padding: '10px 24px',
      color: theme.colors.blue[BlueColors.Blue600],
      fontWeight: theme.other.fontWeights.bold,
    },
    text: {
      fontSize: theme.fontSizes.large,
      fontWeight: theme.other.fontWeights.bolder,
    },
  };
});

interface NoFavoritesProps {
  description: string;
  isButton: boolean;
}

const NoFavorites: FC<NoFavoritesProps> = ({ description, isButton }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <Box className={classes.notFoundWrapper}>
      <Image alt="nothing to find" src={nothingToFind} maw={240} mah={230} />
      <Text className={classes.text}>{description}</Text>
      {isButton && (
        <CustomButton
          size="regular"
          variant="light"
          onClick={() => navigate(RouteNames.Vacancies)}
          className={classes.button}
        >
          Поиск Вакансий
        </CustomButton>
      )}
    </Box>
  );
};

export default NoFavorites;
