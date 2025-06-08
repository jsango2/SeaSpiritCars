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

  @media only screen and (max-width: 1050px) {
    height: auto;
    padding: 40px 0 0 0;
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
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;

    padding: 0 20px 40px 20px;
  }
`;
export const WrapText = styled.div`
  display: none;
  @media only screen and (max-width: 1050px) {
    display: block;
    position: relative;
    z-index: 1;
    width: 97%;
    max-width: 340px;
    text-align: center;
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    margin: 40px 0;
    transition-delay: 0.6s;
    transition: opacity 1s ease-out;
    opacity: ${(props) => (props.inView === true ? "1" : "0")};
  }
`;
export const WrapMiljak = styled.div`
  position: relative;
  z-index: 10;
  width: 377px;
  height: 576px;
  transition-delay: 0.9s;
  transition: opacity 1s ease-out;
  opacity: ${(props) => (props.inView === true ? "1" : "0")};
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 400px) {
    display: flex;
    width: 100%;
    height: 140vw;
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
export const Gradient = styled.div`
  display: none;
  @media only screen and (max-width: 1050px) {
    display: block;
    position: absolute;
    z-index: 11;
    width: 100%;
    height: 61px;
    background: linear-gradient(180deg, rgba(31, 39, 59, 0) 0%, #1d2537 100%);
    bottom: 0;
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
  transition-delay: 0.3s;
  transition: opacity 1s ease-out;
  opacity: ${(props) => (props.inView === true ? "1" : "1")};

  @media only screen and (max-width: 1150px) {
    left: -30px;
  }
  @media only screen and (max-width: 1050px) {
    top: 0;
    left: -0;

    position: relative;
  }
`;
