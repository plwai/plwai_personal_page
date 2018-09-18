// @flow

import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

const StyledLink = selected =>
  css({
    color: 'white',
    padding: '0.4em',
    textDecoration: selected ? 'underline' : 'none',
  })

const HeaderLink = ({ children, to, selected = false }) => (
  <h4 style={{ margin: 0 }}>
    <Link to={to} className={StyledLink(selected)}>
      {children}
    </Link>
  </h4>
)

export default HeaderLink
