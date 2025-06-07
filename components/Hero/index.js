import React from "react";

import {
  Container,
  HeroWrap,
  BottomGradient,
  WrapMiljak,
  LogoWrap,
} from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import Miljak from "../../assets/images/miljakHero.webp";
import Form from "../Form/index.js";
function Hero() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();

  return (
    <HeroWrap>
      <Container>
        <LogoWrap>
          <Image src="/svg/logoMiljak.svg" layout="fill" objectFit="contain" />
        </LogoWrap>
        <WrapMiljak>
          <Image src={Miljak} layout="fill" objectFit="contain" />
        </WrapMiljak>
        <Form />
      </Container>
      <BottomGradient />
    </HeroWrap>
  );
}

export default Hero;
