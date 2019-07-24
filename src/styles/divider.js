import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import breakpoint from 'styled-components-breakpoint'

export const Divider = styled(ParallaxLayer)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.background};
  color: ${props => props.color};

  clip-path: ${props => props.clipPath};
`

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);

  ${breakpoint('desktop')`
    clip-path: polygon(0 5%, 100% 15%, 100% 95%, 0 85%);
  `};
`
