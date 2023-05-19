import { ReactNode } from 'react';

import ButtonUI from '../components-ui/ButtonUI';

type Props = {
  children: ReactNode;
  variant?: 'regular' | 'highlight' | 'login' | 'loginHighlight';
  onClick?: () => void;
};

const Button = ({ children, ...rest }: Props) => {
  return <ButtonUI {...rest}>{children}</ButtonUI>;
};

export default Button;
