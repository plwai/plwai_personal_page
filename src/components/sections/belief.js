import React from 'react'
import styled from 'react-emotion'

import Anchor from '../anchor'
import { rhythm } from '../../utils/typography'

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: ${rhythm(1)};
  padding-bottom: ${rhythm(7)};
  margin-top: 300px;

  @media (max-width: 820px), (max-height: 670px) {
    margin-top: 0;
  }
`

const TitleBox = styled.div``

TitleBox.title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

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
    -moz-border-image: -moz-linear-gradient(right, #e0e3e6, rgba(0, 0, 0, 0)) 1
      10%;
    -o-border-image: -o-linear-gradient(right, #e0e3e6, rgba(0, 0, 0, 0)) 1 10%;
    width: ${rhythm(20)};
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
    width: ${rhythm(20)};
    margin: 0 1rem;
  }
`

const DescriptionBox = styled.blockquote`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 400px;

  color: #555555;
  font-size: 1.4em;
  font-family: Open Sans;
  font-style: italic;
  line-height: 1.6;

  position: relative;
  margin: 50px auto;
  padding: 0 30px 0 30px;
  padding-top: 50px;
  padding-bottom: 50px;

  border-left: 0;
  border-radius: 20px;

  background: #e2e2e2;

  @media (max-width: 500px) {
    min-height: 0;
  }
`

DescriptionBox.smallBox = styled.div``

DescriptionBox.textBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  &:before {
    align-self: flex-start;
    font-family: Arial;
    content: '\\201C';
    color: #373d4aab;
    font-size: 4em;
    height: 80px;
    margin-left: 5%;
    margin-right: 30px;
    position: relative;
    top: -40px;

    @media (max-width: 500px) {
      display: none;
    }
  }

  &:after {
    align-self: flex-end;
    content: '\\201D';
    color: #373d4aab;
    font-size: 4em;
    margin-right: 5%;
    position: relative;
    top: 100px;

    @media (max-width: 500px) {
      display: none;
    }
  }
`

DescriptionBox.texts = styled.p`
  position: relative;
  max-width: 100%;
`

const MyBelief = () => (
  <Container>
    <Anchor id="belief" />
    <TitleBox>
      <TitleBox.title>My Belief</TitleBox.title>
    </TitleBox>
    <DescriptionBox>
      <DescriptionBox.textBox>
        <DescriptionBox.texts>
          Follow your passion, instead of money. Passion provides you more
          motivation and energy to achieve something big and let you move
          further than what you expected.
        </DescriptionBox.texts>
      </DescriptionBox.textBox>
    </DescriptionBox>
  </Container>
)

export default MyBelief
