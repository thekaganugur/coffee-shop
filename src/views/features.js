import React from 'react'
import PropTypes from 'prop-types'

import { DividerMiddle } from '../styles/divider'
import Content from '../styles/content'

const features = ({ children, offset }) => {
  return (
    <>
      <DividerMiddle
        background={'#877DA3'}
        offset={offset + 0.2}
        speed={-0.2}
        factor={1.8}
      />
      <Content offset={offset + 0.6} speed={0.3} factor={1.8}>
        {children}
      </Content>
    </>
  )
}

features.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

export default features
