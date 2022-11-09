import Button from '../../components/Button';
import Flex from '../../components-ui/Flex';
import H1 from '../../components-ui/H1';
import H2 from '../../components-ui/H2';
import IMG from '../../components-ui/IMG';
import theme from '../theme';

const Home = () => {
  return (
    <>
      <Flex
        backgroundColor={theme.sectionBackground}
        justify="center"
        gap="1rem"
        padding="1rem"
      >
        <Flex dir="column" justify="center" gap="2rem">
          <H1 color="white">A quien madruga Wallapop PRO le ayuda</H1>
          <H2 color="white">
            ¿Tienes un negocio y quieres empezar a vender online? Descubre nuestras
            soluciones para impulsar tus ventas. ¡Al lío!
          </H2>
          <Button
            color={theme.background}
            backgroundColor={theme.highlight}
            height="3rem"
            border={`1px solid ${theme.highlight}`}
            borderRadius="1.5rem"
            padding="0 1.5rem"
            alignSelf="center"
          >
            Más información
          </Button>
        </Flex>
        <IMG
          width="max-content"
          src="https://es.wallapop.com/images/home/pro/pro-banner.svg"
          alt=""
        />
      </Flex>
    </>
  );
};

export default Home;
