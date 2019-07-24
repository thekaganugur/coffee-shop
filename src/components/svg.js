import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import breakpoint from 'styled-components-breakpoint'

import BeanLight from '../images/bean-secondary.svg'
import BeanLightLine from '../images/bean-secondary-line.svg'
import WorkingRemotely from '../images/feature-working-remotely.svg'
import GoodDog from '../images/feature_good_doggy.svg'
import HangOut from '../images/feature_hang_out.svg'
import CoffeBreak from '../images/feature-coffee-break.svg'

const Wrapper = styled.div`
  display: ${props => props.hiddenMobile && 'none'};

  ${breakpoint('tablet')`
      display: block;
 `};

  .bean {
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    width: 3.5rem !important;
    height: auto !important;

    ${breakpoint('tablet')`
      width: 4rem !important;
      height: auto !important;
    `};
  }

  .feature {
    width: 9rem !important;
    height: auto !important;

    ${breakpoint('tablet')`
      width: 11rem !important;
      height: auto !important;
    `};
  }
`

const icons = {
  //Beans
  bean: <BeanLight className="bean" />,
  beanLine: <BeanLightLine className="bean" />,

  //Features
  workingRemotely: <WorkingRemotely className="feature" />,
  petFriendly: <GoodDog className="feature" />,
  hangOut: <HangOut className="feature" />,
  coffeeBreak: <CoffeBreak className="feature" />,
}

const svg = ({ icon, left, top, width, hiddenMobile }) => (
  <Wrapper left={left} top={top} width={width} hiddenMobile={hiddenMobile}>
    {icons[icon]}
  </Wrapper>
)

export default svg

svg.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  width: PropTypes.number,
  hiddenMobile: PropTypes.bool,
}

// svg.defaultProps = {
//   stroke: 'transparent',
//   width: 8,
//   fill: 'none',
//   left: '0%',
//   top: '0%',
//   hiddenMobile: false,
// }
