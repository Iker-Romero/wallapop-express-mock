import Button from '../../components/Button';
import Image from '../../components/Image';
import Flex from '../../components-ui/Flex';
import H1 from '../../components-ui/H1';
import H2 from '../../components-ui/H2';
import theme from '../theme';

const Home = () => {
  return (
    <>
      <Flex
        backgroundColor={theme.sectionBackground}
        justify="center"
        gap="1rem"
        padding="2rem 1rem"
      >
        <Flex dir="column" justify="center" gap="2rem">
          <H1 color="white">A quien madruga Wallapop PRO le ayuda</H1>
          <H2 color="white">
            ¿Tienes un negocio y quieres empezar a vender online? Descubre nuestras
            soluciones para impulsar tus ventas. ¡Al lío!
          </H2>
          <Button variant="highlight">Más información</Button>
        </Flex>
        <Image
          width="max-content"
          src="https://es.wallapop.com/images/home/pro/pro-banner.svg"
          alt=""
        />
      </Flex>
    </>
  );
};

export default Home;
