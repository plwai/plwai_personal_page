import React from 'react'
import styled, { css } from 'react-emotion'
import { SocialIcon } from 'react-social-icons'

import { rhythm } from '../utils/typography'

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

SocialContainer.contact = styled.h2`
  margin: 0px;
  padding-top: ${rhythm(3)};
`
SocialContainer.socialContainer = styled.div`
  display: flex;
  padding-top: ${rhythm(0.5)};
`

const SocialIconCss = css`
  margin-left: ${rhythm(0.1)};
  margin-right: ${rhythm(0.1)};
`
const SocialLinks = () => (
  <SocialContainer>
    <SocialContainer.contact>Contact</SocialContainer.contact>
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
)

export default SocialLinks
