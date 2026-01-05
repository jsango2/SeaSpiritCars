import React, { forwardRef } from "react";

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

const Ponuda = forwardRef(function Ponuda(props, ref) {
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
});

export default Ponuda;
