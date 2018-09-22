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

const BodyDiv = styled.div`
  max-width: 100vw;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
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
      <BodyDiv>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Pai Lee Wai Personal Page' },
            {
              name: 'keywords',
              content: 'Pai Lee Wai, Personal Page, Software Developer',
            },
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} to="" />
        <StyledContentContainer>{children}</StyledContentContainer>
      </BodyDiv>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.array,
  data: PropTypes.any,
}

export default PageLayout
