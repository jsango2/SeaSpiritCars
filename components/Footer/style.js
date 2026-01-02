import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 1;
  height: auto;
  min-height: 450px;
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
  padding: 100px 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
