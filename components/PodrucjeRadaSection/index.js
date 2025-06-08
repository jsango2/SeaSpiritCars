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
  return (
    <WrapAll ref={ref}>
      <Container>
        <Title
          className={`contentFade ${
            inView ? "contentFadeIn" : "contentFadeOut"
          }`}
        >
          Područja rada
        </Title>
        <Divider />
        <Text>
          Odvjetnik Miljak ima široko iskustvo u pružanju pravnih usluga
          klijentima u području prava u svezi s nekretninama, građenjem i
          razvojem projekata, uključujući pravno praćenje investicija,
          strukturiranje imovinskopravnih odnosa u svezi nekretnina, vođenje
          postupaka kupoprodaje nekretnina te rješavanje zemljišnoknjižnih
          pitanja.
          <br />
          <br /> Ima značajno iskustvo u trgovačkom i ugovornom pravu, naročito
          u pitanjima uređenja međuvlasničkih odnosa u trgovačkim društvima, kao
          i u postupcima spajanja i preuzimanja trgovačkih društava (M&amp;A
          transakcije) gdje savjetuje domaće i strane klijente kroz sve faze
          pojedine transakcije. <br />
          <br />
          Posebnu pravnu podršku pruža i klijentima iz IT sektora i maloprodaje,
          s fokusom na zaštitu osobnih podataka (GDPR), regulatornu usklađenost
          i digitalno poslovanje. U području radnog prava savjetuje poslodavce i
          radnike u različitim aspektima radnog prava, uključujući pravno
          savjetovanje u vezi s pravima i obvezama iz radnog odnosa, izradu
          interne radno-pravne dokumentacije, kao i zastupanje u radnim
          sporovima. <br />
          <br />
          Odvjetnik Miljak također savjetuje klijente u poreznim pitanjima
          osobito u kontekstu poslovanja, imovine i transakcija te zastupa
          stranke u poreznim postupcima pred nadležnim tijelima. Ima široko
          iskustvo u nasljednom i obiteljskom pravu, s naglaskom na uređenje
          imovinskopravnih odnosa, te aktivno zastupa klijente pred sudovima i
          upravnim tijelima, osobito u trgovačkim, radnim i imovinskim
          sporovima, kao i u postupcima vezanim za stečaj i restrukturiranje.
        </Text>
        <HomePage />
      </Container>
    </WrapAll>
  );
}

export default PodrucjeRadaSection;
