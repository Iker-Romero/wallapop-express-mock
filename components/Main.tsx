import { memo, ReactNode } from 'react';

import StyledMain from '../components-ui/StyledMain';

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};

export default memo(Main);
