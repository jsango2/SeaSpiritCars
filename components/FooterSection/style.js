import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  /* background: radial-gradient(
      79.54% 79.54% at 1.33% 0%,
      #374772 0%,
      #101628 100%
    ) */
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 430px) {
    height: auto;
    padding: 0px 0 60px 0;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 917px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 574px) {
  }
`;
