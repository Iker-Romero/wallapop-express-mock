import { NavLink } from 'react-router-dom';

import NavStyle from '../components-ui/StyledNav';
import GlobalStyle from '../src/GlobalStyles';
import Button from './Button';
import Input from './Input';

const Nav = () => {
  return (
    <NavStyle>
      <GlobalStyle />
      <NavLink to="">
        <img
          src="https://es.wallapop.com/images/logos/logo-wallapop-home-v2.svg"
          alt="Wallapop navigation bar logo"
        />
      </NavLink>
      <Input
        type="text"
        color="var(--primary)"
        backgroundColor="var(--background)"
        placeholder="Buscar en Todas las categorías"
        height="3rem"
        border="1px solid"
        borderColor="var(--primary)"
        borderRadius="1.5rem"
        padding="0 1.5rem"
      />
      <Button
        text="Regístrate o inicia sesión"
        color="var(--primary)"
        backgroundColor="var(--background)"
        height="3rem"
        border="1px solid"
        borderColor="var(--primary)"
        borderRadius="1.5rem"
        padding="0 1.5rem"
      />
      <Button
        text="Subir producto"
        color="var(--primary)"
        backgroundColor="var(--background)"
        height="3rem"
        border="1px solid"
        borderColor="var(--primary)"
        borderRadius="1.5rem"
        padding="0 1.5rem"
      />
    </NavStyle>
  );
};

export default Nav;
