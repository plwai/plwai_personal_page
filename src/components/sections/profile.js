import React from 'react';

import photo from '../../../static/img/photo.jpg';
import { ProfileContainer } from './styles/profile.style';

const ProfilePage = () => (
  <ProfileContainer>
    <ProfileContainer.myPhoto src={photo} />
    <ProfileContainer.myName>
      <u>Wai</u> Pai Lee
    </ProfileContainer.myName>
    <ProfileContainer.description>
      Software developer interested in Rust, React, Nodejs, C/C++, Vulkan, XR
    </ProfileContainer.description>
  </ProfileContainer>
);

export default ProfilePage;
