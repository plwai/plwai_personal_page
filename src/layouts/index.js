import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "react-emotion"

import Header from '../components/header'
import { rhythm } from "../utils/typography"

const StyledContentContainer = styled('div')`
  margin: 0 auto;
  max-width: 1000px;
  padding: ${rhythm(1)};
  padding-top: ${rhythm(1)};
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Pai Lee Wai Personal Page' },
        { name: 'keywords', content: 'Pai Lee Wai, Personal Page, Software Developer' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <StyledContentContainer>
      {children()}
    </StyledContentContainer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.any
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
