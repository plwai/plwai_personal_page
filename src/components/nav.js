// @flow

import React from 'react';

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
    title: 'Contacts',
    to: '#contacts',
  },
];

const Nav = ({ navRef, menuHandler }) => {
  return (
    <StyledNav ref={navRef}>
      {linkData.map(({ title, to }) => (
        <NavLink onClick={() => menuHandler()} key={title} to={to}>
          {title}
        </NavLink>
      ))}
    </StyledNav>
  );
};

export default Nav;
