// @flow

import React, { Component } from 'react'
import styled from 'react-emotion'

import HeaderLink from './headerLink'

// temporary. will be replaced by graphql
const linkData = [
  {
    title: 'About',
    to: '',
  },
  {
    title: 'Projects',
    to: '',
  },
  {
    title: 'Publication',
    to: '',
  },
  {
    title: 'My Thoughts',
    to: '',
  },
  {
    title: 'Contacts',
    to: '',
  },
]

const StyledNav = styled.nav`
  display: flex;
  padding-top: 0.6em;
  white-space: nowrap;
`

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      currentPage: 'About',
    }
  }

  render() {
    const { currentPage } = this.state

    return (
      <StyledNav>
        {linkData.map(({ title, to }) => (
          <HeaderLink
            key={title}
            to={to}
            selected={currentPage === title ? true : false}
          >
            {title}
          </HeaderLink>
        ))}
      </StyledNav>
    )
  }
}

export default Nav
