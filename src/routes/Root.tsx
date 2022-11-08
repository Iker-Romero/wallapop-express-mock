import { Outlet } from 'react-router-dom';

import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import StyledHeader from '../../components-ui/StyledHeader';
import GlobalStyle from '../GlobalStyles';

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <Nav />
      </StyledHeader>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
