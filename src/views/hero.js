// import PropTypes from 'prop-types'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
// import Image from '../components/image'
import { UpDown, UpDownWide } from '../styles/animations'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

import Svg from '../components/svg'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${breakpoint('tablet')`
    padding: 0 5rem;
  `};

  ${breakpoint('desktop')`
    padding: 0 25rem;
  `};

  .content-wrapper {
    position: relative;
    z-index: 9;
    h1 {
      font-weight: 200;
      font-size: 3rem;
      color: ${props => props.theme.colors.secondaryDark};

      ${breakpoint('tablet')`
      font-size: 5rem;
    `};

      ${breakpoint('desktop')`
      font-size: 5rem;
    `};
    }

    .description {
      font-size: 1.5rem;
      color: ${props => props.theme.colors.secondaryDark};

      ${breakpoint('tablet')`
      font-size: 2.5rem;
    `};

      ${breakpoint('desktop')`
    `};
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <Wrapper>
      <UpDown>
        <Svg icon={'bean'} left="91%" top="6%" />
        <Svg icon={'bean'} left="55%" top="12%" />
        <Svg icon={'bean'} left="10%" top="20%" />
        <Svg icon={'bean'} left="79%" top="31%" />
        <Svg icon={'bean'} left="42%" top="67%" />
        <Svg icon={'bean'} left="6%" top="79%" />
      </UpDown>
      <UpDownWide>
        <Svg icon={'bean'} left="84%" top="70%" />
        <Svg icon={'bean'} left="4%" top="85%" />
      </UpDownWide>
      <UpDown>
        <Svg icon={'bean'} left="93%" top="90%" />
        <Svg icon={'bean'} left="20%" top="92%" />
      </UpDown>
      {/* <ParallaxLayer speed={0.4} offset={0}> */}
      <div className="content-wrapper">
        <h1>{title}</h1>
        <p className="description">{description}</p>
      </div>
      {/* </ParallaxLayer> */}
    </Wrapper>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Hero
