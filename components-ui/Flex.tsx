import styled, { css } from 'styled-components';

interface FlexType {
  dir?: string;
  gap?: string;
  wrap?: string;
  justify?: string;
  align?: string;
  backgroundColor?: string;
  height?: string;
  padding?: string;
  flex?: string;
}

const Flex = styled.div`
  display: flex;

  ${(props: FlexType) => {
    const { dir, gap, wrap, justify, align, backgroundColor, height, padding, flex } =
      props;

    return css`
      flex-direction: ${dir};
      gap: ${gap};
      flex-wrap: ${wrap};
      justify-content: ${justify};
      align-items: ${align};
      background-color: ${backgroundColor};
      height: ${height};
      padding: ${padding};
      flex: ${flex};
    `;
  }}
`;

export default Flex;
