import React from 'react';
import styled from 'react-emotion';

import photo from '../../../static/img/photo.jpg';
import { rhythm } from '../../utils/typography';

const ProfileContainer = styled.div`
  display: flex;
  padding-top: 25vh;
  padding-bottom: 20vh;
  flex-direction: column;
  align-items: center;
  background: #72b4dc24;
  width: 100%;
`;

ProfileContainer.myPhoto = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
`;
ProfileContainer.myName = styled.h1`
  margin: 0px;
  padding: ${rhythm(0.5)};
`;
ProfileContainer.description = styled.h4`
  margin: 0px;
  padding-top: ${rhythm(0.5)};
  padding-left: ${rhythm(1.75)};
  padding-right: ${rhythm(1.75)};
`;

const ProfilePage = () => (
  <ProfileContainer>
    <ProfileContainer.myPhoto src={photo} />
    <ProfileContainer.myName>
      <u>Wai</u> Pai Lee
    </ProfileContainer.myName>
    <ProfileContainer.description>
      Software developer interested in Rust, React, Nodejs, C/C++, OpenGL
    </ProfileContainer.description>
  </ProfileContainer>
);

export default ProfilePage;
