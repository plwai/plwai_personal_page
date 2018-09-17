import React from 'react'
import styled from 'react-emotion'
import { SocialIcon } from 'react-social-icons'

import SocialLinks from '../components/socialLinks'

import photo from '../../public/static/photo.jpg'
import { rhythm } from '../utils/typography'

const IndexContainer = styled.div`
  display: flex;
  padding-top: 20vh;
  flex-direction: column;
  align-items: center;
`

IndexContainer.myPhoto = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
`
IndexContainer.myName = styled.h1`
  margin: 0px;
  padding: ${rhythm(0.5)};
`
IndexContainer.description = styled.h4`
  margin: 0px;
  padding-top: ${rhythm(0.5)};
  padding-left: ${rhythm(1.75)};
`

const IndexPage = () => (
  <IndexContainer>
    <IndexContainer.myPhoto src={photo} />
    <IndexContainer.myName>Pai Lee Wai</IndexContainer.myName>
    <IndexContainer.description>
      Software developer interested in Rust, React, nodejs, C/C++, Opengl
    </IndexContainer.description>
    <SocialLinks />
  </IndexContainer>
)

export default IndexPage
