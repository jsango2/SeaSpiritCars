import React from "react";

import { Container, HeroWrap } from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import Car from "../../assets/images/heroCar.webp";
import FooterContactInner from "./footerContact.js";

function Footer() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();

  return (
    <HeroWrap ref={ref}>
      <Container>
        <FooterContactInner />
      </Container>
    </HeroWrap>
  );
}

export default Footer;
