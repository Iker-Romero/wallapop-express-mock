import styled, { css } from 'styled-components';

import { ImageType } from '../components/Image';

const StyledImage = styled.img`
  object-fit: contain;

  ${(props: ImageType) => {
    const { height, width, flex } = props;

    return css`
      height: ${height};
      width: ${width};
      flex: ${flex};
    `;
  }}
`;

export default StyledImage;
