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
        css={SocialIconCss}
        url="https://github.com/plwai"
        bgColor="#24292e"
      />
      <SocialIcon
        css={SocialIconCss}
        url="https://www.linkedin.com/in/pai-lee-wai-021170a3/"
      />
      <SocialIcon css={SocialIconCss} url="mailto:pailee.wai@gmail.com" />
    </SocialContainer.socialContainer>
  </SocialContainer>
);

export default SocialLinks;
