import Image from '../components/Image';
import Flex from '../components-ui/Flex';
import P from '../components-ui/P';

const Carousel = (props) => {
  const { cards } = props;
  return (
    <Flex maxWidth="70rem" position="relative">
      <Flex justify="center" align="center" zIndex="2" flex="1 0 4rem">
        <svg
          width="48"
          height="48"
          viewBox="12 12 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.2 23.4a.998.998 0 0 0 0 1.2l3 4a.999.999 0 1 0 1.6-1.199L23.25 24l2.55-3.402a.997.997 0 0 0-.2-1.399 1 1 0 0 0-1.4.2l-3 4z"></path>
        </svg>
      </Flex>
      <Flex gap="1rem">
        {cards.map((card) => {
          const { img, hover, title } = card;

          return (
            <Flex
              key={title}
              width="10rem"
              dir="column"
              flex="1 0 auto"
              justify="center"
              align="center"
              textAlign="center"
            >
              <Image src={img} width="5rem" />
              <P>{title}</P>
            </Flex>
          );
        })}
      </Flex>
      <Flex justify="center" align="center" zIndex="2" flex="1 0 4rem">
        <svg
          width="48"
          height="48"
          viewBox="12 12 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.8 24.6a.998.998 0 0 0 0-1.2l-3-4a.999.999 0 1 0-1.6 1.199l2.55 3.4-2.55 3.402a.997.997 0 0 0 .2 1.399 1 1 0 0 0 1.4-.2l3-4z"></path>
        </svg>
      </Flex>
    </Flex>
  );
};

export default Carousel;
