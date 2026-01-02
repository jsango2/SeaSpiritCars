import React from "react";

import {
  Button,
  Container,
  HeroWrap,
  Line,
  Text,
  TextBox,
  TextBoxMobile,
  Title,
} from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import Car from "../../assets/images/heroCar.webp";

function Hero() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();

  return (
    <HeroWrap ref={ref}>
      <TextBoxMobile>
        <Title>VAŠ PRISTUP VRHUNSKOJ PONUDI VOZILA</Title>
        <Line />
        <Text>
          Prodajemo samo provjerene automobile iz EU, s fokusom na kvalitetu i
          transparentnost.
        </Text>
        <Button>POGLEDAJ PONUDU</Button>
      </TextBoxMobile>
      <Container>
        <TextBox>
          <Title>VAŠ PRISTUP VRHUNSKOJ PONUDI VOZILA</Title>
          <Line />
          <Text>
            Prodajemo samo provjerene automobile iz EU, s fokusom na kvalitetu i
            transparentnost.
          </Text>
          <Button
            href="https://www.njuskalo.hr/trgovina/Seaspirit"
            target="_blank"
            rel="noopener noreferrer"
          >
            POGLEDAJ PONUDU
          </Button>
        </TextBox>
        <Image src={Car} layout="fill" objectFit="cover" />
      </Container>
    </HeroWrap>
  );
}

export default Hero;
