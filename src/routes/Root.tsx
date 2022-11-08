import { Outlet } from 'react-router-dom';

import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import StyledHeader from '../../components-ui/StyledHeader';

const Root = () => {
  return (
    <>
      <StyledHeader>
        <Nav />
      </StyledHeader>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
