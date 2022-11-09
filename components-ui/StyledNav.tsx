import styled from 'styled-components';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.5rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.66rem;
    height: 4rem;
  }
`;

export default NavStyle;
