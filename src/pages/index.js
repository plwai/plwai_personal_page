import React from 'react';
import styled from '@emotion/styled';

import PageLayout from '../layouts/layout';
import ProfilePage from '../components/sections/profile';
import ProjectPage from '../components/sections/project';
import PublicationPage from '../components/sections/publication';
import MyBelief from '../components/sections/belief';
import BlogPage from '../components/sections/blog';
import SocialLinks from '../components/socialLinks';

const PublicationBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -999;

  @media (min-width: 820px) and (min-height: 601px) {
    background-color: #cae0fe;
    -webkit-clip-path: polygon(0 30%, 0 80%, 100% 100vh, 100% 0);
    clip-path: polygon(0 30%, 0 80%, 100% 100vh, 100% 0);
  }
`;

const MaxWidthDiv = styled.div`
  width: 100%;
`;

const IndexPage = () => (
  <PageLayout>
    <ProfilePage />
    <ProjectPage />
    <MaxWidthDiv>
      <PublicationBackground />
    </MaxWidthDiv>
    <PublicationPage />
    <MyBelief />
    <BlogPage />
    <SocialLinks />
  </PageLayout>
);

export default IndexPage;
