import React from 'react';

import StyledButton from '../components-ui/StyledButton';

interface ButtonType {
  text: string;
}

const Button = (props: ButtonType) => {
  const { text } = props;
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
