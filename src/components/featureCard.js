import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Svg from './svg'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 0.5rem;

  ${breakpoint('tablet')`
    padding: 2rem 1rem;
  `};

  h2 {
    width: 100%;
    color: #e4e0d9 !important;
    text-align: center;
  }

  p {
    width: 100%;
    color: #e4e0d9 !important;
    margin-bottom: 0;
  }

  ${breakpoint('desktop')`
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
      transition-delay: 0.4s;
    }
  `};
`

const featureCard = ({ image, title, description }) => {
  return (
    <Card>
      <Svg icon={image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  )
}

featureCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default featureCard
