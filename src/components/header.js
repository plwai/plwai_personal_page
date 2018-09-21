import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import Nav from './nav'

const StyledHeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #272c35;
  marginbottom: '1.45rem';
  padding-left: 4em;
  padding-right: 4em;
  transition: height 1s, width 1s, padding 1s, visibility 1s, opacity 0.5s;
  z-index: 999;
`

class Header extends Component {
  constructor(props) {
    super(props)

    this.lastScrollY = 0
    this.nav = null
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll())
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll())
  }

  handleScroll() {
    if (this.nav === undefined) {
      return
    }

    if (window.scrollY > this.lastScrollY) {
      this.nav.style.height = '0'
      this.nav.style.padding = '0'
      this.nav.style.opacity = '0'
      this.nav.style.visibility = 'hidden'
    } else {
      this.nav.style.height = '100px'
      this.nav.style.paddingLeft = '4em'
      this.nav.style.paddingRight = '4em'
      this.nav.style.opacity = '100'
      this.nav.style.visibility = 'visible'
    }

    this.lastScrollY = window.scrollY
  }

  render() {
    const { siteTitle } = this.props

    return (
      <StyledHeaderContainer innerRef={nav => (this.nav = nav)}>
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
        <Nav />
      </StyledHeaderContainer>
    )
  }
}

export default Header
