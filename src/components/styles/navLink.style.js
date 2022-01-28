import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const NavLinkText = styled.h4`
  margin: 0;

  @media (max-width: 820px) {
    background-color: #454545;
    width: 100%;
    border: 1px solid #9e9ea0;
    cursor: pointer;

    height: 50px;

    &:hover {
      background-color: #1b69b7;
    }
  }
`;

export const StyledLink = (_n_selected) =>
  css`
    color: white;
    padding: 0.4em;
    text-decoration: none;

    @media (max-width: 820px) {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;

      &:hover {
        color: white;
      }
    }
  `;
