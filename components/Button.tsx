import StyledButton from '../components-ui/StyledButton';
import { ButtonType } from '../src/SharedTypes';

const Button = (props: ButtonType) => {
  const { text } = props;
  return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;
