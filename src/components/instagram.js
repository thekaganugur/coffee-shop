import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Content from '../styles/content'

const ContentWrapper = styled(Content)`
  display: flex;
  flex-direction: column;
`

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 0.6rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  padding: 0.5rem 0.9rem;
  width: 100%;
  border-radius: 20px;
  background: #7398b0;

  div {
    border-radius: 5000px;
  }

  a:nth-of-type(n + 5) {
    display: none !important;
  }

  img {
    margin: 0;
  }

  a {
    height: 135px;
  }

  ${breakpoint('tablet')`
    grid-gap: 0.8rem;
    grid-template-columns: repeat(5, 1fr);
  width: initial;

    a:nth-of-type(n + 5) {
      display: inline-block !important;
    }
  `};

  ${breakpoint('desktop')`
    padding: 1rem 2rem;

  `};
`

const Instagram = ({ offset, imageEdges }) => {
  const images = imageEdges.map(edge => (
    <a href="https://www.instagram.com/starbucks/" target="_blank">
      <Img
        style={{
          height: '135px',
          width: '135px',
        }}
        fixed={edge.node.localFile.childImageSharp.fixed}
      />
    </a>
  ))

  return (
    <ContentWrapper offset={offset} speed={0.3}>
      <h3>Follow us on instagram</h3>
      <GridWrapper offset={offset} speed={0.3}>
        {images}
      </GridWrapper>
    </ContentWrapper>
  )
}

export default Instagram
