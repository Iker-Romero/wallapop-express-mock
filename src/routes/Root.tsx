import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import StyledHeader from '../../components-ui/StyledHeader';
import GlobalStyle from '../GlobalStyles';
import theme from '../theme';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledHeader>
        <Nav />
      </StyledHeader>
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default Root;
