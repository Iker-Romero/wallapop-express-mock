import { NavLink } from 'react-router-dom';

import Image from '../components/Image';
import Flex from '../components-ui/Flex';
import NavStyle from '../components-ui/StyledNav';
import GlobalStyle from '../src/GlobalStyle';
import theme from '../src/theme';
import Button from './Button';
import Input from './Input';

const Nav = () => {
  return (
    <NavStyle>
      <GlobalStyle />
      <NavLink to="">
        <Image
          src="https://es.wallapop.com/images/logos/logo-wallapop-home-v2.svg"
          alt="Wallapop navigation bar logo"
        />
      </NavLink>
      <Input
        type="text"
        color={theme.primary}
        backgroundColor={theme.background}
        placeholder="Buscar en Todas las categorías"
        height="3rem"
        border={`1px solid ${theme.primary}`}
        borderRadius="1.5rem"
        padding="0 1.5rem"
      />
      <Flex gap="0.5rem">
        <Button variant="regular">Regístrate o inicia sesión</Button>
        <Button variant="highlight">Subir producto</Button>
      </Flex>
    </NavStyle>
  );
};

export default Nav;
