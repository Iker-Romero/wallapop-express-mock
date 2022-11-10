import styled, { css } from 'styled-components';

import theme from '../src/theme';

interface PType {
  color?: string;
  width?: string;
}

const P = styled.p`
  color: ${theme.primary};
  font-weight: 400;

  ${(props: PType) => {
    const { color, width } = props;

    css`
      color: ${color};
      width: ${width};
    `;
  }}
`;

export default P;
