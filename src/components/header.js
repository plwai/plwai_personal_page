import React, { useEffect, useRef } from 'react';

import Nav from './nav';
import {
  StyledHeaderContainer,
  Container,
  MenuIconButton,
} from './styles/header.style';

const Header = ({ siteTitle, to }) => {
  const nav = useRef(null);
  const menu = useRef(undefined);

  useScrollListenerEffect(nav);
  useResizeEffect(menu, nav);

  return (
    <StyledHeaderContainer ref={nav}>
      <Container>
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
        <MenuIconButton onClick={() => handleMenu(menu.current)}>
          <MenuIconButton.icon />
        </MenuIconButton>
      </Container>

      <Nav navRef={menu} menuHandler={() => handleMenu(menu.current)} />
    </StyledHeaderContainer>
  );
};

function handleMenu(menu) {
  if (menu === undefined || menu === null) {
    return;
  }

  if (menu.style.visibility === 'visible') {
    menu.removeAttribute('style');
  } else {
    menu.style.visibility = 'visible';
    menu.style.display = 'flex';
  }
}

function useScrollListenerEffect(nav) {
  const lastScrollY = useRef(0);

  useEffect(() => {
    function scrollListener() {
      const currentNav = nav.current;
      const currentScrollY = lastScrollY.current;

      if (
        currentNav === undefined ||
        currentNav === null ||
        window.innerWidth < 820
      ) {
        return;
      }

      if (
        window.scrollY > currentScrollY &&
        window.scrollY - currentScrollY < 500
      ) {
        currentNav.style.height = '0';
        currentNav.style.opacity = '0';
        currentNav.style.visibility = 'hidden';
      } else {
        currentNav.removeAttribute('style');
      }

      lastScrollY.current = window.scrollY;
    }

    window.addEventListener('scroll', scrollListener);

    return function cleanup() {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [nav]);
}

function useResizeEffect(menu, nav) {
  useEffect(() => {
    function resizeListener() {
      const currentMenu = menu.current;
      const currentNav = nav.current;

      if (currentMenu === undefined || currentMenu === null) {
        return;
      }

      if (currentNav === undefined || currentNav === null) {
        return;
      }

      if (window.innerWidth > 820) {
        currentMenu.removeAttribute('style');
      } else {
        currentNav.removeAttribute('style');
      }
    }

    window.addEventListener('resize', resizeListener);

    return function cleanup() {
      window.removeEventListener('resize', resizeListener);
    };
  }, [menu, nav]);
}

export default Header;
