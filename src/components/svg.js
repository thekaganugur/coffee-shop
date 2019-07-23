import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import BeanLight from '../images/bean-primary-light.svg'

const Wrapper = styled.svg`
  position: absolute;
  stroke: currentColor;
  ${props => props.hiddenMobile && 'display: none;'};
  color: ${props => props.stroke};
  width: ${props => props.width};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  bean: <BeanLight />,
}

const svg = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    stroke={stroke}
    fill={fill}
    width={width}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon.toLowerCase()]}
  </Wrapper>
)

export default svg

svg.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
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
