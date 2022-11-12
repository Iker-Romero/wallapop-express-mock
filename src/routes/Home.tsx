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
      <Div
        display="flex"
        dir="column"
        width="100%"
        backgroundColor={theme.sectionBackground2}
        align="center"
        padding="3rem 0"
        gap="2rem"
      >
        <H1>La tecnología que necesitas</H1>
        <Div
          display="grid"
          templateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
          templateAreas={`
            "half1 half1 half1 half2 half2 half2"
            "third1 third1 third2 third2 third3 third3"
          `}
          maxWidth="60rem"
          gap="1rem"
        >
          <Div
            area="half1"
            objectFit="cover"
            justify="center"
            backgroundColor={theme.background}
            padding="0.5rem"
            borderRadius="0.5rem"
            display="flex"
            dir="column"
            gap="0.5rem"
          >
            <Div
              display="flex"
              justify="center"
              align="center"
              overflow="hidden"
              borderRadius="0.25rem"
            >
              <Image src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_392_section_418_14281881-6f8e-4f15-bfb8-910971aac70f.jpeg?cacheBuster=NWonDJQbZu8wdz2iJU3fmQ==" />
            </Div>
            <H2 color="primary" font="Gentleman-Bold">
              Ipad
            </H2>
            <P>29.961 anuncios</P>
          </Div>
          <Div
            area="half2"
            objectFit="cover"
            justify="center"
            backgroundColor={theme.background}
            padding="0.5rem"
            borderRadius="0.5rem"
            display="flex"
            dir="column"
            gap="0.5rem"
          >
            <Div
              display="flex"
              justify="center"
              align="center"
              overflow="hidden"
              borderRadius="0.25rem"
            >
              <Image src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_388_section_420_8b3a0612-5c3e-461a-8ad4-a5a5838f58cd.jpeg?cacheBuster=jN/YqX+s5M7xu8eR0ehyog==" />
            </Div>
            <H2 color="primary" font="Gentleman-Bold">
              Tablet
            </H2>
            <P>59.615 anuncios</P>
          </Div>
          <Div
            area="third1"
            objectFit="cover"
            justify="center"
            backgroundColor={theme.background}
            padding="0.5rem"
            borderRadius="0.5rem"
            display="flex"
            dir="column"
            gap="0.5rem"
          >
            <Div
              display="flex"
              justify="center"
              align="center"
              overflow="hidden"
              borderRadius="0.25rem"
            >
              <Image src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_390_section_421_3ed2ae78-1df8-4265-9b05-d08584e45c95.jpeg?cacheBuster=ZdLLlH4kQtYiZD+mWqYn9w==" />
            </Div>
            <H2 color="primary" font="Gentleman-Bold">
              Auriculares
            </H2>
            <P>93.326 anuncios</P>
          </Div>
          <Div
            area="third2"
            objectFit="cover"
            justify="center"
            backgroundColor={theme.background}
            padding="0.5rem"
            borderRadius="0.5rem"
            display="flex"
            dir="column"
            gap="0.5rem"
          >
            <Div
              display="flex"
              justify="center"
              align="center"
              overflow="hidden"
              borderRadius="0.25rem"
            >
              <Image src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_391_section_419_6445353d-efc3-4873-892f-9d96edcde810.jpeg?cacheBuster=V0MXVhv/1hV+LxQufR0biQ==" />
            </Div>
            <H2 color="primary" font="Gentleman-Bold">
              Portátil
            </H2>
            <P>97.556 anuncios</P>
          </Div>
          <Div
            area="third3"
            objectFit="cover"
            justify="center"
            backgroundColor={theme.background}
            padding="0.5rem"
            borderRadius="0.5rem"
            display="flex"
            dir="column"
            gap="0.5rem"
          >
            <Div
              display="flex"
              justify="center"
              align="center"
              overflow="hidden"
              borderRadius="0.25rem"
            >
              <Image src="https://cdn-web-home-images.wallapop.com/home-images-prod/image_389_section_422_b3395ff0-b3e8-4b1d-817d-9a6591b83587.jpeg?cacheBuster=e7dyUW2p4UHCIutp2JXfFQ==" />
            </Div>
            <H2 color="primary" font="Gentleman-Bold">
              Ordenador sobremesa
            </H2>
            <P>8.902 anuncios</P>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Home;
