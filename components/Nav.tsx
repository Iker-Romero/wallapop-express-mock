import { NavLink } from 'react-router-dom';

import NavStyle from '../components-ui/StyledNav';
import Button from './Button';
import Input from './Input';

const Nav = () => {
  return (
    <NavStyle>
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
      />
      <Button text="Regístrate o inicia sesión" />
      <Button text="Subir producto" />
    </NavStyle>
  );
};

export default Nav;
