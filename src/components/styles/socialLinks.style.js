import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { rhythm } from '../../utils/typography';

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${rhythm(6)};
  padding-bottom: ${rhythm(10)};
  background: #77afa01a;
  width: 100%;
  height: 100vh;
`;

SocialContainer.contact = styled.h2`
  margin: 0px;
  font-weight: 900;
  padding-top: ${rhythm(3)};
`;
SocialContainer.socialContainer = styled.div`
  display: flex;
  padding-top: ${rhythm(0.5)};
`;

export const SocialIconCss = css`
  margin-left: ${rhythm(0.1)};
  margin-right: ${rhythm(0.1)};
`;
