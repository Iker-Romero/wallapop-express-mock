import { useState } from 'react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import Image from '../components/Image';
import Login from '../components/Login';
import PopUp from '../components/PopUp';
import Div from '../components-ui/Div';
import NavStyle from '../components-ui/StyledNav';
import theme from '../src/theme';
import Button from './Button';
import Input from './Input';

const Nav = ({ children }) => {
  return <NavStyle>{children}</NavStyle>;
};

export default memo(Nav);
