import styled, { css } from 'styled-components';

import { DivType } from '../src/SharedTypes';

const Div = styled.div`
  ${(props: DivType) => {
    const {
      display,
      dir,
      gap,
      wrap,
      justify,
      align,
      backgroundColor,
      height,
      width,
      maxWidth,
      padding,
      flex,
      margin,
      textAlign,
      position,
      top,
      left,
      right,
      zIndex,
      transform,
      overflow,
    } = props;

    return css`
      display: ${display};
      flex-direction: ${dir};
      gap: ${gap};
      flex-wrap: ${wrap};
      justify-content: ${justify};
      align-items: ${align};
      background-color: ${backgroundColor};
      height: ${height};
      width: ${width};
      max-width: ${maxWidth};
      padding: ${padding};
      flex: ${flex};
      margin: ${margin};
      text-align: ${textAlign};
      position: ${position};
      top: ${top};
      left: ${left};
      right: ${right};
      z-index: ${zIndex};
      transform: ${transform};
      overflow: ${overflow};
    `;
  }}
`;

export default Div;
