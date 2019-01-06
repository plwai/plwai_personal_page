import styled from '@emotion/styled';

export const StyledNav = styled.nav`
  display: flex;
  padding-top: 0.6em;
  white-space: nowrap;

  @media (max-width: 820px) {
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
    padding-top: 0;
    visibility: hidden;
    display: none;
  }
`;
