import { NavLink } from 'react-router-dom';

import NavStyle from '../components-ui/StyledNav';
import GlobalStyle from '../src/GlobalStyles';
import theme from '../src/theme';
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
        color={theme.primary}
        backgroundColor={theme.background}
        placeholder="Buscar en Todas las categorías"
        height="3rem"
        border={`1px solid ${theme.primary}`}
        borderRadius="1.5rem"
        padding="0 1.5rem"
      />
      <div>
        <Button
          text="Regístrate o inicia sesión"
          color={theme.highlight}
          backgroundColor={theme.background}
          height="3rem"
          border={`1px solid ${theme.highlight}`}
          borderRadius="1.5rem"
          padding="0 1.5rem"
        />
        <Button
          text="Subir producto"
          color={theme.background}
          backgroundColor={theme.highlight}
          height="3rem"
          border={`1px solid ${theme.highlight}`}
          borderRadius="1.5rem"
          padding="0 1.5rem"
        />
      </div>
    </NavStyle>
  );
};

export default Nav;
