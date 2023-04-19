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
    --footer-bg-color: #f5f5f7;
    --footer-font-color: #6e6e73;
  }

  body[data-theme='dark'] {
    --font-color: #fff;
    --body-bg-color: #232323;
    --footer-bg-color: #232323;
    --footer-font-color: #909296;
  }

  ul,
  li {
    list-style-type: none;
    padding-left: 0;
  }
`;

export default GlobalStyle;
