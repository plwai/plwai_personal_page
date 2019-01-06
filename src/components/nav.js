// @flow

import React, { Component } from 'react';

import NavLink from './navLink';
import { StyledNav } from './styles/nav.style';

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
    title: 'Blog',
    to: '#blog',
  },
  {
    title: 'Contacts',
    to: '#contacts',
  },
];

type Props = {
  navRef: Function,
  menuHandler: Function,
}

type State = {
  currentPage: string,
}

class Nav extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentPage: 'About',
    };
  }

  render() {
    const { currentPage } = this.state;
    const { navRef, menuHandler } = this.props;

    return (
      <StyledNav ref={menu => navRef(menu)}>
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
    );
  }
}

export default Nav;
