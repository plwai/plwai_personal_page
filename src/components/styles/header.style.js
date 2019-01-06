import styled from '@emotion/styled';

export const StyledHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #272c35;
  padding-left: 4em;
  padding-right: 4em;
  transition: height 1s, width 1s, padding 1s, visibility 1s, opacity 0.5s;
  z-index: 999;

  @media (max-width: 820px) {
    padding-left: 0;
    padding-right: 0;

    flex-direction: column;
    align-items: flex-start;
    height: auto;
    background: inherit;
  }
`;

export const Container = styled.div`
  @media (max-width: 820px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 100px;
    align-items: center;
    background: #272c35;

    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const MenuIconButton = styled.div`
  cursor: pointer;
`;

MenuIconButton.icon = styled.i`
  display: none;
  width: 36px;
  height: 30px;
  background-image: url('./img/baseline_menu_white_36dp.png');
  background-repeat: no-repeat;

  @media (max-width: 820px) {
    display: block;
  }
`;
