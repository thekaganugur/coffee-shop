import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  text-align: center;
`

const footer = ({ children }) => <Footer>{children}</Footer>

export default footer
