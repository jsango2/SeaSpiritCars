import React, { forwardRef } from "react";

import { Container, HeroWrap } from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import Car from "../../assets/images/heroCar.webp";
import FooterContactInner from "./footerContact.js";

const Footer = forwardRef(function Footer(props, ref) {
  const size = useWindowSize();

  return (
    <HeroWrap ref={ref} id="footer">
      <Container>
        <FooterContactInner />
      </Container>
    </HeroWrap>
  );
});

export default Footer;
