import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import lightTheme from '../styles/themes/light'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
