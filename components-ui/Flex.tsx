import styled, { css } from 'styled-components';

interface FlexType {
  dir?: string;
  gap?: string;
  wrap?: string;
  justify?: string;
  align?: string;
}

const Flex = styled.div`
  display: flex;

  ${(props: FlexType) => {
    const { dir, gap, wrap, justify, align } = props;

    return css`
      flex-direction: ${dir};
      gap: ${gap};
      ${wrap &&
      css`
        flex-wrap: wrap;
      `};
      justify-content: ${justify};
      align-items: ${align};
    `;
  }}
`;

export default Flex;
