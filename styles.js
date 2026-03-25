import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-primary: #2f00ff;
    --color-secondary: #8c8c8c;
    --color-white: #ffffff;
    --color-black: #000000;
  }

  body {
    margin: 0 0 15rem;
    font-family: system-ui;
  }
`;
