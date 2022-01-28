// @flow

import * as React from 'react';

import { NavLinkText, StyledLink } from './styles/navLink.style';

const NavLink = ({ children, onClick, to, selected = false }) => (
  <NavLinkText>
    <a onClick={() => onClick()} href={to} css={StyledLink(selected)}>
      {children}
    </a>
  </NavLinkText>
);

export default NavLink;
