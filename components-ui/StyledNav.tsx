import styled from 'styled-components';

const NavStyle = styled.nav`
  display: flex;
  flex: 0 1 4rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;

  @media (min-width: 1000px) {
    font-size: 0.66rem;
    height: 4rem;
  }
`;

export default NavStyle;
