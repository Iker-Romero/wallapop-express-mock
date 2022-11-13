import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Image from '../../components/Image';
import Input from '../../components/Input';
import Login from '../../components/Login';
import Main from '../../components/Main';
import Nav from '../../components/Nav';
import NavBar from '../../components/NavBar';
import PopUp from '../../components/PopUp';
import TabBar from '../../components/TabBar';
import Div from '../../components-ui/Div';
import StyledHeader from '../../components-ui/StyledHeader';
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';

const Root = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledHeader>
        <Nav>
          <NavBar show={setShowPopUp} />
        </Nav>
      </StyledHeader>
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <Div
        display="none"
        media="@media (max-width: 1000px) {
          display: block;
        }"
      >
        <TabBar show={setShowPopUp} />
      </Div>
      {showPopUp && (
        <PopUp show={setShowPopUp}>
          <Login />
        </PopUp>
      )}
    </ThemeProvider>
  );
};

export default Root;
