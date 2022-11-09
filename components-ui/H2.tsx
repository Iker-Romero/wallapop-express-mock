import styled from 'styled-components';
import { css } from 'styled-components';

import { HeadingType } from '../src/SharedTypes';

const H2 = styled.h2`
  font-size: 1.5rem;

  ${(props: HeadingType) => {
    const { color } = props;

    return css`
      color: ${color};
    `;
  }}
`;

export default H2;
