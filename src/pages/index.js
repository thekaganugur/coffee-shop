import React from 'react'
// import styled from 'styled-components'
// import breakpoint from 'styled-components-breakpoint'
import { Parallax } from 'react-spring/renderprops-addons'

//components
import Layout from '../components/layout'
import SEO from '../components/seo'

//views
import Hero from '../views/hero'

// import CoffeBreakSvg from '../images/undraw-coffee-break.svg'
// const CoffeBreak = styled(CoffeBreakSvg)`
//   width: 10rem;
//   ${breakpoint('tablet')`
//     width: 20rem;
//   `}
// `

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Parallax pages={1} ref={ref => (this.parallax = ref)}>
          <Hero offset={0} />
        </Parallax>
      </Layout>
    )
  }
}

export default IndexPage
