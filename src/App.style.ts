import styled, { createGlobalStyle, css } from 'styled-components';
const resetCSS = css`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  html,
  body {
    line-height: 1;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
  .App {
    /* position: fixed; */
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${resetCSS};
  body {
    font-family: 'Noto Sans KR', sans-serif;
    
  }
  input, button {
    font-family: inherit;
    color: inherit;
  }
  a:visited {
    color: black;
  }
  a:link {
      color: black;
  }
  * {
    box-sizing: border-box;
  }
`;

export const BaseLayout = styled.main`
  padding: 0px 50px 200px 50px;
  margin: 0 auto;
  margin-bottom: 100px;
  @media screen and (max-width: 479px) {
    padding: 0px 10px 100px 10px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    padding: 0px 10px 150px 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0px 20px 200px 20px;
  }
`;
