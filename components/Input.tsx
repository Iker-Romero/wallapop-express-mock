import React from 'react';

import StyledInput from '../components-ui/StyledInput';

export interface InputType {
  type: string;
  color?: string;
  backgroundColor?: string;
  placeholder?: string;
}

const Input = (props: InputType) => {
  return <StyledInput {...props}></StyledInput>;
};

export default Input;
