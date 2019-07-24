import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import breakpoint from 'styled-components-breakpoint'

const content = styled(ParallaxLayer)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  position: relative;
  z-index: 9;

  ${breakpoint('tablet')`
    padding: 0 3rem;
  `};

  ${breakpoint('desktop')`
    padding: 0 6rem;
  `};
`

export default content
