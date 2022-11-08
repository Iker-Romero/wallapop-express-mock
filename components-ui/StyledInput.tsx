import styled, { css } from 'styled-components';

import { InputType } from '../components/Input';

const StyledInput = styled.input.attrs((props: InputType) => `type: ${props.type}`)`
  width: fit-content;
  ${(props: InputType) => {
    console.log(props);
    const { color, backgroundColor } = props;
    return css`
      color: ${color};
      background-color: ${backgroundColor};
    `;
  }}
`;

export default StyledInput;
