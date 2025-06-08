import React from "react";

import {
  Container,
  HeroWrap,
  BottomGradient,
  WrapMiljak,
  LogoWrap,
  WrapText,
  Gradient,
} from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import Miljak from "../../assets/images/miljakHero.webp";
import LogoMiljak from "../../assets/images/logoMiljak.webp";
import Form from "../Form/index.js";
function Hero() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();

  return (
    <HeroWrap ref={ref}>
      <Container>
        <LogoWrap inView={inView}>
          <Image
            src={LogoMiljak}
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </LogoWrap>
        <WrapText inView={inView}>
          Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga.
          Individualan pristup i sveobuhvatna pravna podrška s ciljem
          učinkovitih i pravno održivih rješenja.
        </WrapText>
        <WrapMiljak inView={inView}>
          <Image src={Miljak} layout="fill" objectFit="contain" />
          <Gradient />
        </WrapMiljak>
        <Form inView={inView} />
      </Container>
      <BottomGradient />
    </HeroWrap>
  );
}

export default Hero;
