import React from 'react'
import styled from 'react-emotion'

const Anchor = styled.div`
  visibility: hidden;
  position: relative;
  top: ${props => (props.top === undefined ? '-100px' : props.top)};
`

export default Anchor
