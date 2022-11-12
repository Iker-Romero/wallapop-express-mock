import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import Image from '../../components/Image';
import Div from '../../components-ui/Div';
import H1 from '../../components-ui/H1';
import H2 from '../../components-ui/H2';
import P from '../../components-ui/P';
import theme from '../theme';

const Home = () => {
  const categories = [
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_All.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_MotorAccessories.svg',
      title: 'Todas las categorías',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_Cars.svg',
      hover: 'https://es.wallapop.com/images/icons/categories/category_Cars_hover.svg',
      title: 'Coches',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_Motorbike.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_Motorbike_hover.svg',
      title: 'Motos',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_MotorAccessories.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_MotorAccessories_hover.svg',
      title: 'Motos y Accesorios',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_All.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_FashionAccessories_hover.svg',
      title: 'Moda y Accesorios',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_RealEstate.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_RealEstate_hover.svg',
      title: 'Inmobiliaria',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_TVAudioCameras.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_TVAudioCameras_hover.svg',
      title: 'TV, Audio y Foto',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_CellPhonesAccessories.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_CellPhonesAccessories_hover.svg',
      title: 'Móviles y Telefonía',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_ComputersElectronic.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_ComputersElectronic_hover.svg',
      title: 'Informática y Electrónica',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_SportsLeisure.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_SportsLeisure_hover.svg',
      title: 'Deporte y Ocio',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_Bikes.svg',
      hover: 'https://es.wallapop.com/images/icons/categories/category_Bikes_hover.svg',
      title: 'Bicicletas',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_GamesConsoles.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_GamesConsoles_hover.svg',
      title: 'Hogar y Jardín',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_Appliances.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_Appliances_hover.svg',
      title: 'Electrodomésticos',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_GamesBooks.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_GamesBooks_hover.svg',
      title: 'Cine, Libros y Música',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_BabiesChild.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_BabiesChild_hover.svg',
      title: 'Niños y Bebés',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_CollectiblesArt.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_CollectiblesArt_hover.svg',
      title: 'Coleccionismo',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_Construction.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_Construction_hover.svg',
      title: 'Construcción y Reformas',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_AgricultureIndustrial.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_AgricultureIndustrial_hover.svg',
      title: 'Industria y Agricultura',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_Jobs.svg',
      hover: 'https://es.wallapop.com/images/icons/categories/category_Jobs_hover.svg',
      title: 'Empleo',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_Services.svg',
      hover:
        'https://es.wallapop.com/images/icons/categories/category_Services_hover.svg',
      title: 'Servicios',
    },
    {
      img: 'https://es.wallapop.com/images/icons/categories/category_Others.svg',
      hover: 'https://es.wallapop.com/images/icons/categories/category_Others_hover.svg',
      title: 'Otros',
    },
  ];

  return (
    <>
      <P>Wallapop, la plataforma líder de compraventa de productos de segunda mano</P>
      <Div
        display="flex"
        dir="column"
        maxWidth="100%"
        padding="2rem 0"
        gap="1rem"
        textAlign="center"
      >
        <H1>¿Qué estás buscando hoy?</H1>
        <Carousel cards={categories} cardWidth="5rem" />
      </Div>
      <Div
        display="flex"
        backgroundColor={theme.sectionBackground}
        justify="center"
        gap="1rem"
        padding="2rem 1rem"
        width="100%"
      >
        <Div display="flex" dir="column" justify="center" gap="2rem">
          <H1 color="white">A quien madruga Wallapop PRO le ayuda</H1>
          <H2 color="white">
            ¿Tienes un negocio y quieres empezar a vender online? Descubre nuestras
            soluciones para impulsar tus ventas. ¡Al lío!
          </H2>
          <Button variant="highlight">Más información</Button>
        </Div>
        <Image
          width="max-content"
          src="https://es.wallapop.com/images/home/pro/pro-banner.svg"
          alt=""
        />
      </Div>
    </>
  );
};

export default Home;
