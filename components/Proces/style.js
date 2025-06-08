import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const ProcesWrap = styled.div`
  position: relative;
  z-index: 1;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 120px 0;
  background: #1f273b;
  @media only screen and (max-width: 750px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 450px) {
    padding: 60px 0 0 0;
  }
`;
export const WrapSlide = styled.div`
  position: relative;
  width: 100%;
  height: 346px;
  min-height: 230px;
  background: #232c43;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 16px;
  @media only screen and (max-width: 750px) {
  }
`;

export const CaruselCard = styled.div`
  position: relative;

  width: 100%;
  height: 250px;
  flex-shrink: 0;
  user-select: none;
  border-radius: 10px;
  overflow: hidden;

  background: #27304a;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  @media only screen and (max-width: 650px) {
    max-width: 400px;
    height: 390px;

    /* width: 60%; */
    margin: 0 auto;
    /* height: 110vh; */
  }
  @media only screen and (max-width: 430px) {
    /* display: none; */
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 800px;
  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.inView ? "1" : "0")};
  margin: 100px 0;

  .slick-dots {
    bottom: -40px;
  }

  .slick-dots li button:before {
    /* To set color, you need to use the 'color' property */
    color: #ffffff; /* This was just '#ffffff' which is not a CSS property */
    font-size: 12px !important; /* '!important' is generally discouraged but kept if specifically needed for overriding */
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
  }

  @media only screen and (max-width: 800px) {
    width: 95%;
  }

  @media only screen and (max-width: 430px) {
    height: auto;
    /* Add specific styles for screens less than 430px wide here if needed */
  }
`;
export const ArrowRight = styled.div`
  position: absolute;
  z-index: 20;
  width: 50px;
  height: 50px;
  right: -40px;
  top: 50%;
  transform: translate(50%, -50%);
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    /* height: 110vh; */
  }
  @media only screen and (max-width: 430px) {
    /* display: none; */
  }
`;
export const ArrowLeft = styled.div`
  position: absolute;
  z-index: 20;
  width: 50px;
  height: 50px;
  left: -40px;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    /* height: 110vh; */
  }
  @media only screen and (max-width: 430px) {
    /* display: none; */
  }
`;
export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 1100px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 550px) {
    padding: 0 20px;
  }
`;
export const Title = styled.div`
  position: relative;
  color: #fff;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (max-width: 770px) {
    font-size: 26px;
    text-align: center;
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const CardTitle = styled.div`
  position: relative;
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin: 15px 0;
  line-height: 150%; /* 27px */
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Text = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */

  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const CardText = styled.div`
  position: relative;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const CardNumber = styled.div`
  position: relative;
  border: 2px solid white;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
