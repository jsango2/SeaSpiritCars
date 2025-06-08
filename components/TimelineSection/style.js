import styled, { keyframes } from "styled-components";
import css from "styled-jsx/css";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2); /* Slightly larger */
    opacity: 0.7; /* Slightly faded */
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
export const WrapAll = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1f273b;
  padding-top: 120px;
  padding-bottom: 120px;
  @media only screen and (max-width: 430px) {
    height: auto;
    padding: 0px 0 60px 0;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 954px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
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
export const TopGradient = styled.div`
  position: absolute;
  z-index: 11;
  width: 100%;
  height: 61px;
  background: linear-gradient(0deg, rgba(23, 29, 43, 0) 0%, #171d2b 100%);
  top: 0;
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
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
  @media only screen and (max-width: 1050px) {
    font-size: 26px;
    text-align: center;
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Divider = styled.div`
  position: relative;
  width: 43px;
  height: 1px;
  background: #d4cc6c;
  margin: 30px 0;
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const WrapTimeline = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const SingleBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 132px;
  height: auto;
  justify-content: space-between;
  align-items: center;
  transition: all 0.7s ease-out;
  opacity: ${(props) => (props.inView ? "1" : "0")};
  transition-delay: ${(props) => props.animationDelay};
  @media only screen and (max-width: 1050px) {
    flex-direction: row-reverse;
    width: 360px;
  }
  @media only screen and (max-width: 390px) {
    width: 333px;
  }
`;
export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 867px;
  opacity: 0.38;
  background: #000;
  filter: blur(31.873483657836914px);
  top: 100px;
  @media only screen and (max-width: 1050px) {
    width: 50px;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translate(-53px);
  }
  @media only screen and (max-width: 550px) {
    transition: all 0.7s ease-out;
    opacity: ${(props) => (props.inView ? "0.38" : "0")};
  }
`;
export const Line = styled.div`
  position: absolute;

  height: 0.5px;
  background-color: #d4cc6c;
  top: 87px;
  transition: all 2.7s ease-out;

  width: ${(props) => (props.inView ? "100%" : "0%")};
  @media only screen and (max-width: 1050px) {
    width: 0.5px;
    top: 10px;
    left: 50%;
    transform: translate(-53px);
    height: ${(props) => (props.inView ? "365px" : "0")};
  }
  @media only screen and (max-width: 390px) {
    transform: translate(-49px);
  }
`;
export const Text = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  height: 65px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
  @media only screen and (max-width: 1050px) {
    margin-bottom: 0px;
    align-items: center;
    width: 208px;
    text-align: left;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 390px) {
    width: 200px;
  }
`;
export const Dot = styled.div`
  position: relative;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #d4cc6c;

  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const Year = styled.div`
  margin-top: 17px;
  position: relative;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (max-width: 1050px) {
    margin-top: 0px;
    display: flex;
    width: 102px;
    font-size: 16px;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 390px) {
    font-size: 15px;
  }
`;
