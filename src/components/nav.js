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
};

const Nav = ({ navRef, menuHandler }: Props) => {
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
