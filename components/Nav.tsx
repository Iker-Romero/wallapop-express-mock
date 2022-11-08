import { NavLink } from 'react-router-dom';

import NavStyle from '../components-ui/StyledNav';
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
      <Input type="text" color="#0b796c" />
    </NavStyle>
  );
};

export default Nav;
