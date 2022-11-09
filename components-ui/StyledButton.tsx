import styled from 'styled-components';
import { css } from 'styled-components';

import { ButtonType } from '../src/SharedTypes';

const StyledButton = styled.button`
  width: fit-content;

  ${(props: ButtonType) => {
    const {
      color,
      backgroundColor,
      height,
      border,
      borderRadius,
      padding,
      justifySelf,
      alignSelf,
    } = props;

    return css`
      color: ${color};
      background-color: ${backgroundColor};
      height: ${height};
      border: ${border};
      border-radius: ${borderRadius};
      padding: ${padding};
      justify-self: ${justifySelf};
      align-self: ${alignSelf};
    `;
  }}
`;

export default StyledButton;
