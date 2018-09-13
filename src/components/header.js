import React from 'react'
import Link from 'gatsby-link'
import styled from "react-emotion"

import Nav from "./nav"

const StyledHeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #272c35;
  marginBottom: '1.45rem';
  padding-left: 4em;
  padding-right: 4em;
`;

const Header = ({ siteTitle }) => (
  <StyledHeaderContainer>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Nav>
    </Nav>
  </StyledHeaderContainer>
)

export default Header
