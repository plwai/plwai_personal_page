import React from 'react';

import Anchor from '../anchor';
import { Container, TitleBox, DescriptionBox } from './styles/belief.style';

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
);

export default MyBelief;
