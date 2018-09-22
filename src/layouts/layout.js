import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`

const PageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Pai Lee Wai Personal Page' },
            {
              name: 'keywords',
              content: 'Pai Lee Wai, Personal Page, Software Developer',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} to="" />
        <StyledContentContainer>{children}</StyledContentContainer>
      </div>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.array,
  data: PropTypes.any,
}

export default PageLayout
