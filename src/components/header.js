import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import Nav from './nav';

const StyledHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #272c35;
  padding-left: 4em;
  padding-right: 4em;
  transition: height 1s, width 1s, padding 1s, visibility 1s, opacity 0.5s;
  z-index: 999;

  @media (max-width: 820px) {
    padding-left: 0;
    padding-right: 0;

    flex-direction: column;
    align-items: flex-start;
    height: auto;
    background: inherit;
  }
`;

const Container = styled.div`
  @media (max-width: 820px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 100px;
    align-items: center;
    background: #272c35;

    padding-left: 1em;
    padding-right: 1em;
  }
`;

const MenuIconButton = styled.div`
  cursor: pointer;
`;

MenuIconButton.icon = styled.i`
  display: none;
  width: 36px;
  height: 30px;
  background-image: url('./img/baseline_menu_white_36dp.png');
  background-repeat: no-repeat;

  @media (max-width: 820px) {
    display: block;
  }
`;

type Props = {
  siteTitle: string,
  to: string,
}

class Header extends Component<Props> {
  constructor(props) {
    super(props);

    this.lastScrollY = 0;
    this.nav = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleResize());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.addEventListener('resize', () => this.handleResize());
  }

  handleScroll() {
    if (
      this.nav === undefined ||
      this.nav === null ||
      window.innerWidth < 820
    ) {
      return;
    }

    if (
      window.scrollY > this.lastScrollY &&
      window.scrollY - this.lastScrollY < 500
    ) {
      this.nav.style.height = '0';
      this.nav.style.opacity = '0';
      this.nav.style.visibility = 'hidden';
    } else {
      this.nav.removeAttribute('style');
    }

    this.lastScrollY = window.scrollY;
  }

  handleResize() {
    if (this.menu === undefined || this.menu === null) {
      return;
    }

    if (this.nav === undefined || this.nav === null) {
      return;
    }

    if (window.innerWidth > 820) {
      this.menu.removeAttribute('style');
    } else {
      this.nav.removeAttribute('style');
    }
  }

  handleMenu() {
    if (this.menu === undefined || this.menu === null) {
      return;
    }

    if (this.menu.style.visibility === 'visible') {
      this.menu.removeAttribute('style');
    } else {
      this.menu.style.visibility = 'visible';
    }
  }

  render() {
    const { siteTitle, to } = this.props;

    return (
      <StyledHeaderContainer innerRef={nav => (this.nav = nav)}>
        <Container innerRef={el => (this.container = el)}>
          <h1 style={{ margin: 0 }}>
            <Link
              to={to}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <MenuIconButton onClick={() => this.handleMenu()}>
            <MenuIconButton.icon />
          </MenuIconButton>
        </Container>

        <Nav
          navRef={menu => (this.menu = menu)}
          menuHandler={() => this.handleMenu()}
        />
      </StyledHeaderContainer>
    );
  }
}

export default Header;
