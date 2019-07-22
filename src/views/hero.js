import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Image from '../components/image'

const HeroHeader = styled.header`
  h1 {
    font-size: 2.8rem;
    font-weight: 200;
    color: #e4d5c9;
    z-index: 99;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    cursor: default;
    text-align: center;
    width: 90%;

    ${breakpoint('tablet')`
    font-size: 4rem;
    `}
  }

  img {
    position: relative;
  }

  .overlay {
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    background: rgb(2, 0, 36);
    background: radial-gradient(
      circle,
      rgba(2, 0, 36, 1) 0%,
      rgba(50, 73, 88, 1) 50%,
      rgba(87, 127, 153, 1) 100%
    );
  }
`

const Header = ({ siteTitle }) => (
  <HeroHeader>
    <div className="overlay">
      <h1>{siteTitle}</h1>
      <Image />
    </div>
  </HeroHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
