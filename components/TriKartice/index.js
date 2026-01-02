import React from "react";

import {
  BottomCar,
  Button,
  Card,
  Container,
  HeroWrap,
  Icon,
  Line,
  Overlay,
  Text,
  TextBox,
  Title,
  Title2,
  WrapCards,
} from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import Car from "../../assets/images/heroCar.webp";

function TriKartice() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();
  const data = [
    {
      icon: "/svg/caricon.svg",
      title: "Temeljita kontrola vozila",
      text: "Svako vozilo prolazi detaljan pregled prije uvoza kako bismo osigurali realno stanje i potpunu transparentnost.",
    },
    {
      icon: "/svg/grb.svg",
      title: "Uređena dokumentacija",
      text: "Sva potrebna dokumentacija usklađena je s hrvatskim propisima, uključujući provjeru povijesti, homologacije i administracije.",
    },
    {
      icon: "/svg/iskustvo.svg",
      title: "30 godina iskustva",
      text: "Dugogodišnje iskustvo u automobilskom sektoru jamči sigurnu, profesionalnu i pouzdanu kupnju.",
    },
  ];

  return (
    <HeroWrap ref={ref}>
      <Container>
        <WrapCards>
          {data.map((p, i) => (
            <Card key={i}>
              <Icon>
                <Image src={p.icon} layout="fill" objectFit="contain" />
              </Icon>
              <Title>{p.title}</Title>
              <Text>{p.text}</Text>
            </Card>
          ))}
        </WrapCards>
        <BottomCar>
          <Title2>Istražite cjelokupnu ponudu vozila</Title2>
          <Button
            href="https://www.njuskalo.hr/trgovina/Seaspirit"
            target="_blank"
            rel="noopener noreferrer"
          >
            POGLEDAJ PONUDU
          </Button>
          <Image src="/bottomCar.webp" layout="fill" objectFit="contain" />
          <Overlay />
        </BottomCar>
      </Container>
    </HeroWrap>
  );
}

export default TriKartice;
