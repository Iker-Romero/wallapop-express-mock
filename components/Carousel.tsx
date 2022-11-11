import { useEffect, useState } from 'react';

import Image from '../components/Image';
import Div from '../components-ui/Div';
import P from '../components-ui/P';

const Carousel = (props) => {
  const { cards } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lenght, setLenght] = useState(cards.lenght);

  useEffect(() => {
    setLenght(cards.lenght);
  }, [cards.lenght]);

  const next = () => {
    if (currentIndex < lenght - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <Div display="flex" maxWidth="70rem" position="relative">
      {/* Previous Arrow */}
      <Div
        display="flex"
        onClick={prev}
        justify="center"
        align="center"
        zIndex="2"
        Div="1 0 4rem"
      >
        <svg
          width="48"
          height="48"
          viewBox="12 12 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.2 23.4a.998.998 0 0 0 0 1.2l3 4a.999.999 0 1 0 1.6-1.199L23.25 24l2.55-3.402a.997.997 0 0 0-.2-1.399 1 1 0 0 0-1.4.2l-3 4z"></path>
        </svg>
      </Div>
      {/* Carousel slides */}
      <Div
        display="flex"
        overflow="hidden"
        gap="1rem"
        transform={`translateX(-${currentIndex * 100}%)`}
      >
        {cards.map((card) => {
          const { img, hover, title } = card;

          return (
            <Div
              display="flex"
              key={title}
              width="10rem"
              dir="column"
              Div="1 0 auto"
              justify="center"
              align="center"
              textAlign="center"
            >
              <Image src={img} width="5rem" />
              <P>{title}</P>
            </Div>
          );
        })}
      </Div>
      {/* Next Arrow */}
      <Div
        display="flex"
        onClick={() => {
          console.log('next');
          next();
        }}
        justify="center"
        align="center"
        zIndex="2"
        Div="1 0 4rem"
      >
        <svg
          width="48"
          height="48"
          viewBox="12 12 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.8 24.6a.998.998 0 0 0 0-1.2l-3-4a.999.999 0 1 0-1.6 1.199l2.55 3.4-2.55 3.402a.997.997 0 0 0 .2 1.399 1 1 0 0 0 1.4-.2l3-4z"></path>
        </svg>
      </Div>
    </Div>
  );
};

export default Carousel;
