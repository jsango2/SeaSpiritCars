import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 1;
  height: 760px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(180deg, #151b28 0%, #212a40 100%);

  @media only screen and (max-width: 630px) {
  }
`;
export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 960px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const WrapMiljak = styled.div`
  position: relative;
  z-index: 10;
  width: 377px;
  height: 576px;

  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const BottomGradient = styled.div`
  position: absolute;
  z-index: 11;
  width: 100%;
  height: 61px;
  background: linear-gradient(180deg, rgba(23, 29, 43, 0) 0%, #171d2b 100%);
  bottom: 0;
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const LogoWrap = styled.div`
  position: absolute;
  z-index: 11;
  width: 183px;
  height: 135px;
  top: -138px;
  left: -77px;
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
