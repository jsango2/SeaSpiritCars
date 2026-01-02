import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 1;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #141414;

  @media only screen and (max-width: 1050px) {
    height: auto;
    padding: 40px 0 0 0;
  }
`;
export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1442px;
  width: 100%;
  height: auto;
  padding: 0px 0 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;

    padding: 0 20px 40px 20px;
  }
`;
export const WrapText = styled.h1`
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
    transition: opacity 1s ease-out;
    transition-delay: 0.6s;
    opacity: ${(props) => (props.inView === true ? "1" : "0")};
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
export const TextBox = styled.div`
  position: relative;
  z-index: 20;

  width: 408px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Title = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Line = styled.div`
  width: 46px;
  height: 1px;
  background: #ffe4a3;
  margin: 18px 0 27px 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Text = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Button = styled.div`
  width: 194px;
  height: 45px;
  border: 0.5px solid #ffe4a3;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 40px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
