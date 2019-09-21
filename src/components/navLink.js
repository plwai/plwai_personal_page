// @flow

import * as React from 'react';

import { NavLinkText, StyledLink } from './styles/navLink.style';

type Props = {
  children: React.Node,
  onClick: Function,
  to: string,
  selected: boolean,
}

const NavLink = ({ children, onClick, to, selected = false }: Props) => (
  <NavLinkText>
    <a onClick={() => onClick()} href={to} css={StyledLink(selected)}>
      {children}
    </a>
  </NavLinkText>
);

export default NavLink;
