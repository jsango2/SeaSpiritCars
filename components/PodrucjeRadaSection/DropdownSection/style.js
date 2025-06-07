import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  height: auto;
  /* margin-bottom: 300px; */
  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */

  @media only screen and (max-width: 850px) {
    height: auto;
    padding-top: 40px;
    margin-bottom: 0px;
  }
`;
export const HorecaContent = styled.div`
  position: relative;
  z-index: 11;
  max-width: 1440px;
  height: auto;
  /* height: auto; */
  margin: 0 auto;
  display: flex;
  .szh-accordion {
    width: 90%;

    padding: 20px;
    justify-content: center; /* Center the grid if it doesn't take full width */
  }
  @media only screen and (max-width: 1300px) {
    padding: 70px 100px;
  }
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    padding: 70px 0px 0 0;
  }
`;
export const HorecaAccordion = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  padding-top: 110px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1300px) {
    width: 400px;
  }
  @media only screen and (max-width: 850px) {
    padding: 0px 0 60px 0;
    margin: 0 auto;
  }
  @media only screen and (max-width: 430px) {
    width: 95vw;
    padding: 0px 0 160px 0;
  }
`;
