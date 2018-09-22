// @flow

import React, { Component } from 'react'
import styled from 'react-emotion'

import NavLink from './navLink'

// temporary. will be replaced by graphql
const linkData = [
  {
    title: 'Top',
    to: '#profile',
  },
  {
    title: 'Projects',
    to: '#project',
  },
  {
    title: 'Publication',
    to: '#publication',
  },
  {
    title: 'My Belief',
    to: '#belief',
  },
  {
    title: 'Contacts',
    to: '#contacts',
  },
]

const StyledNav = styled.nav`
  display: flex;
  padding-top: 0.6em;
  white-space: nowrap;

  @media (max-width: 820px) {
    flex-direction: column;
    width: 100%;
    padding-top: 0;
    visibility: hidden;
  }
`

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: 'About',
    }
  }

  render() {
    const { currentPage } = this.state
    const { navRef, menuHandler } = this.props

    return (
      <StyledNav innerRef={menu => navRef(menu)}>
        {linkData.map(({ title, to }) => (
          <NavLink
            onClick={() => menuHandler()}
            key={title}
            to={to}
            selected={currentPage === title ? true : false}
          >
            {title}
          </NavLink>
        ))}
      </StyledNav>
    )
  }
}

export default Nav
