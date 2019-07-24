import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    /* background-color: ${props => props.theme.colors.primary}; */
    background-color: #E4E0D9;
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
