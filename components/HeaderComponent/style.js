import styled from "styled-components";

export const WrapHeader = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100px;
  background: #141414;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  @media only screen and (max-width: 1050px) {
  }
  @media only screen and (max-width: 385px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 1440px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;

  @media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    max-width: 380px;
    align-items: flex-start;
    min-width: 365px;
    padding: 5px 0;
  }
`;
export const WrapLogo = styled.div`
  position: relative;
  z-index: 10;
  width: 224.055px;
  height: 34.434px;
  /* margin-right: auto; */
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 1050px) {
    margin: 0 auto;
  }
`;

export const WrapLinks = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 550px;

  a {
    color: white;
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 14px;
  }
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;
export const WrapIcons = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  width: 130px;

  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;
export const LinkBtn = styled.div`
  position: relative;
  color: white;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 14px;
  cursor: pointer;
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;
export const Icon1 = styled.div`
  position: relative;
  z-index: 10;
  width: 35px;
  height: 24.78px;

  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 1050px) {
  }
`;
