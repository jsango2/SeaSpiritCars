import {
  WrapAll,
  Container,
  Title,
  Divider,
  Text,
  WrapDropDowns,
} from "./style.js";

import useWindowSize from "../helper/usewindowsize.js";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";
import Image from "next/image.js";

import HomePage from "./DropdownSection/main.js";
function PodrucjeRadaSection() {
  const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const { ref: refDivider, inView: inViewDivider } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  return (
    <WrapAll ref={ref}>
      <Container>
        <Title
          className={`contentFade ${
            inView ? "contentFadeIn" : "contentFadeOut"
          }`}
        >
          Profesionalna biografija
        </Title>
        <Divider />
        <Text
          ref={refDivider}
          className={`contentFade ${
            inViewDivider ? "contentFadeIn" : "contentFadeOut"
          }`}
        >
          Pravni put započeo sam 2004. godine, nakon završetka Gimnazije Jurja
          Barakovića u Zadru, upisom na Pravni fakultet Sveučilišta u Zagrebu.
          Diplomirao sam 2008., a sljedeće godine započeo karijeru kao
          odvjetnički vježbenik u odvjetničkom društvu Hanžeković & Partneri
          d.o.o. <br />
          <br />
          Nakon položenog pravosudnog ispita 2011., nastavio sam rad u istom
          društvu kao odvjetnik do 2020. godine. Tijekom tog razdoblja stekao
          sam bogato iskustvo, osobito u trgovačkom pravu, spajanjima i
          preuzimanjima trgovačkih društava (M&A), dubinskim analizama (due
          diligence postupci), nekretninskim transakcijama, kao i u zastupanju
          stranaka u sudskim i upravnim postupcima, radeći na složenim
          predmetima za domaće i inozemne klijente. <br />
          <br />U razdoblju od 2020. do 2025. godine bio sam jedan od suosnivača
          i partnera u odvjetničkom društvu Metelko, Knežević & Partneri d.o.o.,
          gdje sam dodatno razvio svoju praksu u području trgovačkog,
          nekretninskog, radnog, nasljednog i obiteljskog prava, kao i u
          zastupanju klijenata u sudskim postupcima. <br />
          <br />
          Od 2025. godine odvjetničku djelatnost nastavljam kroz vlastiti
          odvjetnički ured, s ciljem pružanja sveobuhvatne i specijalizirane
          pravne podrške, uz individualiziran pristup i punu posvećenost svakom
          klijentu.
        </Text>
        <Title
          className={`contentFade ${
            inView ? "contentFadeIn" : "contentFadeOut"
          }`}
        >
          Područja rada
        </Title>
        <Divider />
        <HomePage />
      </Container>
    </WrapAll>
  );
}

export default PodrucjeRadaSection;
