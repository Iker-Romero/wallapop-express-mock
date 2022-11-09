import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gentleman-Bold";
    src: url(/fonts/Gentleman-Bold.woff);
  }

  :root {
    --primary: "#00292b";
    --secondary: "#0b796c";
    --highlight: "#13c1ac";
    --background: "#ffffff";
    --section-background: "#385ef9";

    font-family: "Gentleman-Bold";
  }

  * {
    font-family: "Gentleman-Bold";
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
