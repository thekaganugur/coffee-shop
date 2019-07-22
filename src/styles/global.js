import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Source Code Pro', monospace;
    src: url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format('woff');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Source Code Pro', monospace;
  }

  html, body {
    height: 100%;
  }

  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  .width-wrap {
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem;
  }
`

export default GlobalStyle
