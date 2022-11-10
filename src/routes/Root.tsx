import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Nav from '../../components/Nav';
import StyledHeader from '../../components-ui/StyledHeader';
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledHeader>
        <Nav />
      </StyledHeader>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Root;
