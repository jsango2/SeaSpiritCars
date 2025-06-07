import styled from "styled-components";

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
  padding-top: 140px;
  padding-bottom: 100px;
  @media only screen and (max-width: 1050px) {
    height: auto;
    padding-bottom: 40px;
    padding-top: 60px;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 954px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (max-width: 1050px) {
    padding: 0 20px;
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
  @media only screen and (max-width: 770px) {
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
export const Text = styled.div`
  position: relative;
  color: #fff;
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
export const WrapDropDowns = styled.div`
  position: relative;
  display: flex;
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
