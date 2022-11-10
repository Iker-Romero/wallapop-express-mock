import styled, { css } from 'styled-components';

import theme from '../src/theme';

interface AType {
  color?: string;
  hoverColor?: string;
}

const A = styled.a`
  ${({ color }: AType) =>
    css`
      color: ${color};
    `}};

  &:hover {
    cursor: pointer;
    color: ${({ hoverColor }: AType) => hoverColor || theme.highlight}};
  }
`;

export default A;
