import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

import { UpDown, UpDownWide } from '../styles/animations'
import { Divider } from '../styles/divider'
import Content from '../styles/content'

import Svg from '../components/svg'

const Wrapper = styled.div`
  h1 {
    width: 100%;
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
    width: 100%;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.secondaryDark};

    ${breakpoint('tablet')`
      font-size: 2.5rem;
    `};
  }
`

const hero = ({ children, offset }) => {
  return (
    <>
      <Divider offset={offset} speed={0.2}>
        <UpDown>
          <Svg icon={'bean'} left="91%" top="3%" />
          <Svg icon={'beanLine'} left="37%" top="3%" />
          <Svg icon={'beanLine'} left="93%" top="10%" hiddenMobile />
          <Svg icon={'bean'} left="2%" top="3%" />
          <Svg icon={'bean'} left="55%" top="12%" />
          <Svg icon={'bean'} left="10%" top="14%" hiddenMobile />
          <Svg icon={'bean'} left="79%" top="22%" hiddenMobile />
          <Svg icon={'bean'} left="42%" top="69%" />
          <Svg icon={'beanLine'} left="68%" top="72%" />
          <Svg icon={'beanLine'} left="6%" top="79%" />
        </UpDown>
        <UpDownWide>
          <Svg icon={'bean'} left="84%" top="70%" />
          <Svg icon={'bean'} left="4%" top="85%" />
        </UpDownWide>
        <UpDown>
          <Svg icon={'beanLine'} left="93%" top="90%" hiddenMobile />
          <Svg icon={'bean'} left="20%" top="92%" />
        </UpDown>
      </Divider>
      <Content offset={offset} speed={0.5}>
        <Wrapper>{children}</Wrapper>
      </Content>
    </>
  )
}

hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

export default hero
