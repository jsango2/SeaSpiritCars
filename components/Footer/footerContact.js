// FooterContactInner.jsx (only the inside content; put this inside your existing <Container>)
// Next.js 12.4 + styled-components

import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function FooterContactInner({
  mapsHref = "https://maps.app.goo.gl/Rz48EVmSa528Ljc59",
  mail = "ante.orlovic@sea-spirit.hr",
  phones = [{ label: "Tel:", value: "+385 95 504 4115" }],
}) {
  return (
    <Inner>
      <Col>
        <Title>Radno vrijeme</Title>
        <Text>Pon-pet: 10:00 - 18:00</Text>
        <Text>Subota: 10:00 - 15:00</Text>

        <Spacer />

        <Text muted>Nedjeljom i blagdanima ne radimo.</Text>

        <LogoRow aria-label="Sea Spirit Cars logo">
          {" "}
          <Image
            src="/svg/seaspiritlogo.svg"
            layout="fill"
            objectFit="contain"
          />
        </LogoRow>
      </Col>

      <Col>
        <Title>Kontakt</Title>

        <Row>
          <Label>Mail:</Label>
          <Link href={`mailto:${mail}`}>{mail}</Link>
        </Row>

        <SpacerSmall />

        {phones.map((p, i) => (
          <Row key={`${p.value}-${i}`}>
            <Label>{p.label}</Label>
            <Link href={`tel:${p.value.replace(/\s/g, "")}`}>{p.value}</Link>
            {p.note ? <Note>&nbsp;{p.note}</Note> : null}
          </Row>
        ))}

        <Company>
          <CompanyName>SeaSpiritCars d.o.o.</CompanyName>
          <CompanyAddress>Obala kneza trpimira 2, 23000, Zadar</CompanyAddress>
        </Company>
      </Col>

      <ColRight>
        <BigTitle>
          <strong>Posjetite</strong> nas
        </BigTitle>
        <MapLink href={mapsHref} target="_blank" rel="noopener noreferrer">
          Obala kneza trpimira 2, 23000, Zadar
        </MapLink>
      </ColRight>
    </Inner>
  );
}

/* ---------------- styles ---------------- */

const Inner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 1.2fr 1fr;
  gap: 48px;
  align-items: start;
  @media (max-width: 1050px) {
    justify-items: center;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const Col = styled.div`
  min-width: 0;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ColRight = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h4`
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: #fff;
`;

const BigTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 56px;
  line-height: 1.02;
  font-weight: 300;
  letter-spacing: -0.5px;
  color: #fff;

  strong {
    font-weight: 800;
  }

  @media (max-width: 1100px) {
    font-size: 48px;
  }
  @media (max-width: 900px) {
    font-size: 44px;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.55;
  opacity: ${(p) => (p.muted ? 0.75 : 0.9)};
  color: #fff;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: baseline;
  margin: 6px 0;
  @media (max-width: 1050px) {
    text-align: center;
  }
`;

const Label = styled.span`
  font-size: 18px;
  opacity: 0.9;
  color: #fff;
`;

const Note = styled.span`
  font-size: 18px;
  opacity: 0.75;
  color: #fff;
`;

const Link = styled.a`
  font-size: 18px;
  color: #fff;
  opacity: 0.92;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MapLink = styled.a`
  font-size: 20px;
  color: #fff;
  opacity: 0.9;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Spacer = styled.div`
  height: 22px;
`;

const SpacerSmall = styled.div`
  height: 10px;
`;

const Company = styled.div`
  margin-top: 34px;
`;

const CompanyName = styled.div`
  font-size: 22px;
  font-weight: 700;
  opacity: 0.95;
  color: #fff;
`;

const CompanyAddress = styled.div`
  margin-top: 6px;
  font-size: 18px;
  opacity: 0.8;
  color: #fff;
`;

const LogoRow = styled.div`
  position: relative;
  margin-top: 28px;
  width: 224.055px;
  height: 34.434px;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  opacity: 0.95;
`;

const LogoText = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 16px;
  line-height: 1.05;
  color: #fff;
`;

const LogoMark = styled.span`
  width: 40px;
  height: 40px;
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 9px 11px;
    border: 2px solid rgba(255, 255, 255, 0.92);
    border-left: none;
    border-bottom: none;
    transform: rotate(45deg);
  }
`;
