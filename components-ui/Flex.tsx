import styled, { css } from 'styled-components';

interface FlexType {
  dir?: string;
  gap?: string;
  wrap?: string;
  justify?: string;
  align?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  maxWidth?: string;
  padding?: string;
  flex?: string;
  margin?: string;
  overflow?: string;
  textAlign?: string;
  position?: string;
  top?: string;
  left?: string;
  rigth?: string;
  zIndex?: string;
}

const Flex = styled.div`
  display: flex;
  overflow: hidden;

  ${(props: FlexType) => {
    const {
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
    } = props;

    return css`
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
    `;
  }}
`;

export default Flex;
