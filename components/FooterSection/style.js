import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 380px;
  height: auto;
  background-color: #1a2132;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 750px) {
    height: auto;
    padding: 80px 0;
  }
`;

export const WrapHeader = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 42px;
  border: 1px solid #4c608f;
  background: #151a28;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 430px) {
    /* height: auto;
    padding: 0px 0 60px 0; */
  }
`;
export const WrapData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 750px) {
    align-items: center;
    margin-top: 40px;
    /* height: auto;
    padding: 0px 0 60px 0; */
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 630px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
  @media only screen and (max-width: 574px) {
  }
`;

export const WrapSingleData = styled.div`
  position: relative;
  z-index: 10;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  flex-shrink: 0;
  margin: 10px 0;
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const LogoWrap = styled.div`
  position: relative;
  z-index: 11;
  width: 183px;
  height: 135px;

  transition: opacity 1s ease-out;
  opacity: ${(props) => (props.inView === true ? "1" : "1")};

  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const WrapKey = styled.div`
  position: relative;
  color: #fff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5px;
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
export const WrapValue = styled.div`
  position: relative;
  color: #fff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  a {
    color: white;
  }
  @media only screen and (max-width: 770px) {
  }
  @media only screen and (max-width: 574px) {
  }
`;
