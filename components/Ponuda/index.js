import React from "react";

import {
  Button,
  Container,
  HeroWrap,
  Line,
  Text,
  TextBox,
  Title,
} from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import Car from "../../assets/images/heroCar.webp";

function Ponuda() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();

  return (
    <HeroWrap ref={ref}>
      <Container>
        <TextBox>
          <Title>Široka ponuda vozila</Title>
          <Line />
          <Text>
            Vizualni pregled vozila višeg segmenta koje imamo ili smo imali u
            ponudi.
          </Text>
        </TextBox>
      </Container>
    </HeroWrap>
  );
}

export default Ponuda;
