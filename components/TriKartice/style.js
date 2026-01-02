import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 1;
  height: auto;
  min-height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  padding: 100px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;

    padding: 0 0px 40px 0px;
  }
`;
export const WrapCards = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1442px;
  width: 100%;
  height: auto;
  padding: 0px 0 0px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 500px) {
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

export const Card = styled.div`
  position: relative;
  width: 308px;
  height: 200px;
  border-radius: 15px;
  border: 0.5px solid #323232;
  background: #141414;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 1050px) {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Icon = styled.div`
  position: relative;
  width: 33px;
  height: 23px;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const BottomCar = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 630px;
  aspect-ratio: 16/7;
  margin-top: 200px;
  @media only screen and (max-width: 1050px) {
    height: auto;
  }
  @media only screen and (max-width: 574px) {
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 12;
  width: 100%;

  height: 100%;
  bottom: 0;
  background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.5) 100%);
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Title = styled.div`
  position: relative;
  z-index: 20;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 12px 0;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Title2 = styled(Title)`
  position: relative;
  z-index: 20;

  font-size: 60px;
  font-weight: 300;
  top: -50px;

  @media only screen and (max-width: 1050px) {
    font-size: 24px;
    top: -100px;
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
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Button = styled.a`
  position: relative;
  z-index: 20;
  width: 358px;
  height: 83px;
  border: 0.5px solid #ffe4a3;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 40px auto 0 auto;
  top: -50px;
  @media only screen and (max-width: 1050px) {
    width: 194px;
    height: 45px;
    font-size: 16px;
    top: -100px;
  }
  @media only screen and (max-width: 574px) {
  }
`;
