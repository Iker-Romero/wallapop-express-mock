import StyledButton from '../components-ui/StyledButton';
import { ButtonType } from '../src/SharedTypes';

const Button = (props: ButtonType) => {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
