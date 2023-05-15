import { Box, Image, Text, createStyles } from '@mantine/core';
import CustomButton from 'components/CustomButton';
import { BlueColors } from 'enum/Colors';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes/RouteNames';
import nothingToFind from 'static/images/nothingToFind.png';

const useStyles = createStyles({
  notFoundWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '2rem',
    padding: '10px',
    textAlign: 'center',
    alignSelf: 'center',
    margin: '0 auto',
  },
});

const NoFavorites = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <Box className={classes.notFoundWrapper}>
      <Image alt="nothing to find" src={nothingToFind} maw={240} mah={230} />
      <Text fw={700} fz="24px">
        Упс, здесь еще ничего нет!
      </Text>
      <CustomButton
        size="regular"
        variant="light"
        onClick={() => navigate(RouteNames.Vacancies)}
        sx={(theme) => ({
          padding: '10px 24px',
          color: theme.colors.blue[BlueColors.Blue600],
          fontWeight: 600,
        })}
      >
        Поиск Вакансий
      </CustomButton>
    </Box>
  );
};

export default NoFavorites;
