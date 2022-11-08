import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gentleman";
    src: url(/fonts/Gentleman-PersonalUse.ttf);
  }

  :root {
    --primary: "#00292b";
    --secondary: "#0b796c";
    --highlight: "#13c1ac";
    --background: "#ffffff";
    --section-background: "#385ef9";

    font-family: "Gentleman";
  }
`;

export default GlobalStyle;
