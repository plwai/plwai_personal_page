import React from 'react'
import styled from 'react-emotion'
import { withPrefix } from 'gatsby'

import Anchor from '../anchor'
import { rhythm } from '../../utils/typography'

const PublicationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25vh 1fr;
  grid-template-areas:
    'title title'
    'gif   text';
  grid-gap: ${rhythm(1)};
  max-width: 1000px;
  margin: auto;
  width: 100%;

  @media (max-width: 700px), (max-height: 600px) {
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

PublicationContainer.title = styled.h2`
  grid-area: title;
  margin-left: ${rhythm(1)};
  font-weight: 900;
  font-size: ${rhythm(2)};
  width: 100%;

  @media (max-width: 1000px) {
    margin-top: ${rhythm(1)};
  }

  @media (max-width: 700px), (max-height: 600px) {
    display: flex;
    margin: 0px;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-top: ${rhythm(1)};
    font-size: 1.51572rem;
    font-weight: inherit;
    max-width: 100%;

    &:before {
      content: '';
      box-shadow: 0 0 0.5px #e0e3e6;
      border-top: 2px solid #e0e3e6;
      border-radius: 50%;
      border-image: linear-gradient(to left, #e0e3e6, rgba(0, 0, 0, 0)) 1 10%;
      -webkit-border-image: -webkit-gradient(
          linear,
          0 0,
          100% 0,
          from(rgba(0, 0, 0, 0)),
          to(#e0e3e6)
        )
        1 10%;
      -webkit-border-image: -webkit-linear-gradient(
          right,
          #e0e3e6,
          rgba(0, 0, 0, 0)
        )
        1 10%;
      -moz-border-image: -moz-linear-gradient(right, #e0e3e6, rgba(0, 0, 0, 0))
        1 10%;
      -o-border-image: -o-linear-gradient(right, #e0e3e6, rgba(0, 0, 0, 0)) 1
        10%;
      width: 100%;
      margin: 0 1rem;
    }

    &:after {
      content: '';
      box-shadow: 0 0 0.5px #e0e3e6;
      border-top: 2px solid #e0e3e6;
      border-radius: 50%;
      border-image: linear-gradient(to right, #e0e3e6, rgba(0, 0, 0, 0)) 1 10%;
      -webkit-border-image: -webkit-gradient(
          linear,
          0 0,
          100% 0,
          from(#e0e3e6),
          to(rgba(0, 0, 0, 0))
        )
        1 10%;
      -webkit-border-image: -webkit-linear-gradient(
          left,
          #e0e3e6,
          rgba(0, 0, 0, 0)
        )
        1 10%;
      -moz-border-image: -moz-linear-gradient(left, #e0e3e6, rgba(0, 0, 0, 0)) 1
        10%;
      -o-border-image: -o-linear-gradient(left, #e0e3e6, rgba(0, 0, 0, 0)) 1 10%;
      width: 100%;
      margin: 0 1rem;
    }
  }
`

PublicationContainer.gif = styled.img`
  grid-area: gif;
  margin-top: 10vh;
  margin-left: 0;
  width: 400px;
  height: 250px;
  max-width: 100%;

  @media (max-width: 1020px) {
    margin-top: 5vh;
    margin-left: 5vw;
  }

  @media (max-height: 600px) {
    margin-left: 0;
    margin-bottom: ${rhythm(1)};
  }

  @media (max-width: 900px) {
    margin-left: 10px;
    margin-bottom: ${rhythm(1)};
  }

  @media (max-width: 700px) {
    margin-left: 0;
    margin-bottom: ${rhythm(1)};
  }
`
PublicationContainer.textDiv = styled.div`
  grid-area: text;
  max-width: 500px;
  margin-top: ${rhythm(-1)};

  font-family: 'Montserrat', sans-serif;
  font-variant: common-ligatures;

  @media (max-height: 800px) {
    margin-top: ${rhythm(-4)};
  }

  @media (max-width: 700px), (max-height: 600px) {
    margin-top: ${rhythm(-1)};
    padding-left: ${rhythm(1.5)};
    padding-right: ${rhythm(1.5)};
  }
`

PublicationContainer.publishName = styled.h3`
  font-weight: 700;
  color: #454545;

  @media (max-height: 800px) {
    margin-top: ${rhythm(1)};
  }

  @media (max-height: 600px) {
    margin-top: ${rhythm(1)};
  }
`

PublicationContainer.description = styled.p``

PublicationContainer.linksDiv = styled.div``
PublicationContainer.linksDiv.text = styled.p`
  margin: 0;
  font-weight: 600;
  width: 85px;

  &:after {
    content: ':';
    margin-right: ${rhythm(0.2)};
  }
`
PublicationContainer.linksDiv.link = styled.a`
  display: flex;
  text-decoration: none;
  color: inherit;
  max-width: 120px;

  &:hover {
    color: inherit;
  }
`

const LinkSVG = styled.img`
  margin: 0;
  margin-top: ${rhythm(0.1)};
`

const PublicationPage = () => (
  <div>
    <Anchor id="publication" top="-200px" />
    <PublicationContainer>
      <PublicationContainer.title>Publication</PublicationContainer.title>
      <PublicationContainer.gif
        src={withPrefix(`/img/SOM_Reconstruction.gif`)}
      />
      <PublicationContainer.textDiv>
        <PublicationContainer.publishName>
          GPUMLib SOM Reconstruction
        </PublicationContainer.publishName>
        <PublicationContainer.description>
          This article tackling the performance problem of large scale 3D point
          cloud data. There are many different kinds of algorithms have been
          proposed to solve this problem and Deep Learning is one of them. In
          this article, a combination solution of Deep Learning concepts, Self
          Organizing Map(SOM) and GPU parallel programming are proposed to solve
          the performance problem of large scale 3D point cloud data.
        </PublicationContainer.description>
        <PublicationContainer.linksDiv>
          <PublicationContainer.linksDiv.link
            target="_blank"
            href="http://home.ijasca.com/data/documents/ID-4_Pg-1-16_GPUMLib-Deep-Learning-SOM-Library.pdf"
          >
            <PublicationContainer.linksDiv.text>
              Article
            </PublicationContainer.linksDiv.text>

            <LinkSVG src={withPrefix(`/img/baseline-open_in_new-24px.svg`)} />
          </PublicationContainer.linksDiv.link>
        </PublicationContainer.linksDiv>
        <PublicationContainer.linksDiv>
          <PublicationContainer.linksDiv.link
            target="_blank"
            href="http://gpumlib.sourceforge.net/"
          >
            <PublicationContainer.linksDiv.text>
              Website
            </PublicationContainer.linksDiv.text>

            <LinkSVG src={withPrefix(`/img/baseline-open_in_new-24px.svg`)} />
          </PublicationContainer.linksDiv.link>
        </PublicationContainer.linksDiv>
        <PublicationContainer.linksDiv>
          <PublicationContainer.linksDiv.link
            target="_blank"
            href="https://github.com/plwai/SOM_Surface_Reconstruction"
          >
            <PublicationContainer.linksDiv.text>
              Github
            </PublicationContainer.linksDiv.text>

            <LinkSVG src={withPrefix(`/img/baseline-open_in_new-24px.svg`)} />
          </PublicationContainer.linksDiv.link>
        </PublicationContainer.linksDiv>
      </PublicationContainer.textDiv>
    </PublicationContainer>
  </div>
)

export default PublicationPage
