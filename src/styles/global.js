import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    font-weight: normal;
    flex: 1;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  html {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  html, body, #root {
    min-height: 100%;
    flex: 1;
  }
`;

export default Global;
