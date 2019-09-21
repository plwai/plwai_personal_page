import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/header';

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

const BodyDiv = styled.div`
  max-width: 100vw;
  height: 100%;
`;

type Props = {
  children: React.Node,
}

const PageLayout = ({ children }: Props) => (
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
              content: 'Wai Pai Lee, Personal Page, Software Developer',
            },
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
            },
            {
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} to="#" />
        <StyledContentContainer>{children}</StyledContentContainer>
      </BodyDiv>
    )}
  />
);

PageLayout.propTypes = {
  children: PropTypes.array,
  data: PropTypes.any,
};

export default PageLayout;
