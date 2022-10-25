import { css, Global } from '@emotion/react';

const style = css`
  @font-face {
    font-family: 'Poppins';
    font-weight: 600;
    src: url('/assets/fonts/Poppins-SemiBold.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 500;
    src: url('/assets/fonts/Poppins-Medium.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src: url('/assets/fonts/Poppins-Regular.ttf') format('truetype');
    font-display: fallback;
  }

  /* reset.css */
  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  html,
  body {
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button,
  hr {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;

    --mainGreen: #00d764;
    --greenGradient: linear-gradient(134.33deg, #00d764 0%, #00be64 90.62%);
    --subGreen: #00be64;
    --subPink: #ff5064;
    --subBlue: #558cff;

    --white: #ffffff;

    --mono1: #f3f3f3;
    --mono2: #d2d2d2;
    --mono3: #999999;
    --mono4: #585858;

    --black: #000000;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  /* reset.css end */

  /* 전역 스크롤 custom style */
  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  /* *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #bec1c7;
    border-radius: 4px;
  } */
  /* 전역 스크롤 custom style end */
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
