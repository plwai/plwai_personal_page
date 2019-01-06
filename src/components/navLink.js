// @flow

import * as React from 'react';
import Link from 'gatsby-link';

import { NavLinkText, StyledLink } from './styles/navLink.style';

type Props = {
  children: React.Node,
  onClick: Function,
  to: string,
  selected: boolean,
}

const NavLink = ({ children, onClick, to, selected = false }: Props) => (
  <NavLinkText>
    <Link onClick={() => onClick()} to={to} css={StyledLink(selected)}>
      {children}
    </Link>
  </NavLinkText>
);

export default NavLink;
