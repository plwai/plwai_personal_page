import React from 'react';
import { SocialIcon } from 'react-social-icons';

import Anchor from './anchor';
import { SocialContainer, SocialIconCss } from './styles/socialLinks.style';

const SocialLinks = () => (
  <SocialContainer>
    <Anchor id="contacts" />
    <SocialContainer.contact>Contact Me</SocialContainer.contact>
    <SocialContainer.socialContainer>
      <SocialIcon
        className={SocialIconCss}
        url="https://github.com/plwai"
        color="#24292e"
      />
      <SocialIcon
        className={SocialIconCss}
        url="https://www.linkedin.com/in/pai-lee-wai-021170a3/"
      />
      <SocialIcon className={SocialIconCss} url="mailto:pailee.wai@gmail.com" />
    </SocialContainer.socialContainer>
  </SocialContainer>
);

export default SocialLinks;
