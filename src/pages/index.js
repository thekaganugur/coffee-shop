import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

//components
import Layout from '../components/layout'
import SEO from '../components/seo'
import FeatureCard from '../components/featureCard'
import Footer from '../components/footer'

//views
import Hero from '../views/hero'
import Features from '../views/features'

const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  ${breakpoint('tablet')`
    grid-gap: 2.5rem;
  `};

  ${breakpoint('desktop')`
    grid-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
  `};
`

const indexPage = () => {
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
    <Parallax pages={4}>
      <Layout>
        <SEO title="Home" />
        <Hero offset={0}>
          <h1>{title}</h1>
          <p className="description">{description}</p>
        </Hero>
        <Features offset={1}>
          <FeaturesWrapper>
            <FeatureCard
              image={'coffeeBreak'}
              title={'Drink best coffe at the hearth of city'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in scelerisque magna. Etiam interdum, erat. '
              }
            />
            <FeatureCard
              image={'workingRemotely'}
              title={'We have Wi-Fi'}
              description={
                'Lorem ipsum amet, consectetur adipiscing elit. Mauris in scelerisque magna. Etiam interdum. '
              }
            />
            <FeatureCard
              image={'hangOut'}
              title={'Hang Out'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            />
            <FeatureCard
              image={'petFriendly'}
              title={'We are pet friendly'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in magna.'
              }
            />
          </FeaturesWrapper>
        </Features>
        <Footer>
          &copy; 2019 by Kağan UĞUR.{' '}
          <a href="https://github.com/kgnugur/">GitHub</a>.
        </Footer>
      </Layout>
    </Parallax>
  )
}

export default indexPage
