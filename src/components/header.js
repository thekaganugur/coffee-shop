import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Image from '../components/image'

const HeroHeader = styled.header`
  h1 {
    color: white;
    z-index: 99;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    position: relative;
  }
`

const Header = ({ siteTitle }) => (
  <HeroHeader>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Image />
  </HeroHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
