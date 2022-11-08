import NavStyle from '../components-ui/StyledNav';

const Nav = (props: { children: JSX.Element }) => {
  const { children } = props;

  return <NavStyle>{children}</NavStyle>;
};

export default Nav;
