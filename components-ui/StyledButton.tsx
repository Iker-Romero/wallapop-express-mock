import styled from 'styled-components';
import { css } from 'styled-components';

import { ButtonType } from '../src/SharedTypes';

const StyledButton = styled.button`
  height: 3rem;
  background-color: var(--highlight);
  ${(props: ButtonType) => {
    const { color, backgroundColor, height, border, borderRadius, padding } = props;
    return css`
      color: ${color};
      background-color: ${backgroundColor};
      height: ${height};
      border: ${border};
      border-radius: ${borderRadius};
      padding: ${padding};
    `;
  }}
`;

export default StyledButton;
