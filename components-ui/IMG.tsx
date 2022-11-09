import styled, { css } from 'styled-components';

interface IMGType {
  height?: string;
  width?: string;
  flex?: string;
}

const IMG = styled.img`
  ${(props: IMGType) => {
    const { height, width, flex } = props;

    return css`
      height: ${height};
      width: ${width};
      flex: ${flex};
    `;
  }}
`;

export default IMG;
