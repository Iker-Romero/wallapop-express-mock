import { memo, ReactNode } from 'react';

import NavStyle from '../components-ui/StyledNav';

type Props = {
  children: ReactNode;
};

const Nav = ({ children }: Props) => {
  return <NavStyle>{children}</NavStyle>;
};

export default memo(Nav);
