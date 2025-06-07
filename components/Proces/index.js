import React from "react";

import { Container, ProcesWrap, Title, Text } from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";

import { Divider } from "../TimelineSection/style.js";
import ResponsiveCarousel from "./carusel.js";
function Proces() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();

  return (
    <ProcesWrap>
      <Container>
        <Title>Proces suradnje s klijentom</Title>
        <Divider />
        <Text>
          U našem odvjetničkom uredu njegujemo individualan pristup i punu
          transparentnost u svakom koraku suradnje. Svakom predmetu pristupamo
          sustavno i odgovorno, uz prethodna pojašnjenja Vama kao klijentu o
          tome što i kada poduzimamo, kako biste tijekom cijelog procesa bili
          pravovremeno informirani.
        </Text>
        <ResponsiveCarousel />
      </Container>
    </ProcesWrap>
  );
}

export default Proces;
