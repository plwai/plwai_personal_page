import React, { Component } from 'react';

import Nav from './nav';
import {
  StyledHeaderContainer,
  Container,
  MenuIconButton,
} from './styles/header.style';

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
      this.menu.style.display = 'flex';
    }
  }

  render() {
    const { siteTitle, to } = this.props;

    return (
      <StyledHeaderContainer ref={nav => (this.nav = nav)}>
        <Container ref={el => (this.container = el)}>
          <h1 style={{ margin: 0 }}>
            <a
              href={to}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </a>
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
