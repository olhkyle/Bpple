import { css } from '@emotion/react';

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #f5f5f7;
  }

  body[data-theme='light'] {
    --font-color: #000;
    --body-bg-color: #fff;
  }

  body[data-theme='dark'] {
    --font-color: #fff;
    --body-bg-color: #232323;
  }

  a {
    text-decoration: none;
    color: #0070c9;
  }
`;

export default GlobalStyle;
