import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Image from '../components/Image';
import Login from '../components/Login';
import PopUp from '../components/PopUp';
import Div from '../components-ui/Div';
import theme from '../src/theme';
import Button from './Button';
import Input from './Input';

const NavBar = ({ show }) => {
  return (
    <>
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
      <Div display="flex" gap="0.5rem">
        <Button onClick={() => show(true)} variant="regular">
          Regístrate o inicia sesión
        </Button>
        <Button variant="highlight">Subir producto</Button>
      </Div>
    </>
  );
};

export default memo(NavBar);
