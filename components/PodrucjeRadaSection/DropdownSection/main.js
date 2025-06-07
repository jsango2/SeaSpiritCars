// pages/index.js (or any other page/component file)
import { useInView } from "react-intersection-observer";
import { Accordion, AccordionItem } from "./accordion"; // Adjust the path as needed

import styled, { createGlobalStyle } from "styled-components"; // Import createGlobalStyle

// Global styles for the body and a main wrapper
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #1a202c; /* This sets the overall dark background */
    color: #e2e8f0; /* Default text color for the page */
  }
`;

// A wrapper div to contain the header and accordion
const MainWrapper = styled.div`
  height: auto; /* Ensure it covers the full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  padding-bottom: 40px; /* Add some padding at the bottom */
  padding-top: 100px;
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
  }
`;

export default function HomePage() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <MainWrapper ref={ref}>
        <Accordion>
          <AccordionItem
            inView={inView}
            header="Nekretnine, građenje i razvoj projekata"
            itemKey="nekretnine"
          >
            Izrada i revizija ugovora o kupoprodaji, zakupu, najmu, građenju,
            diobi, teretima i služnostima. Pravni due diligence, podrška u svim
            fazama investicijskih projekata, etažiranje, zemljišnoknjižni upisi,
            rješavanje zemljišnoknjižnog stanja i zastupanje u sporovima.
          </AccordionItem>
          <AccordionItem
            inView={inView}
            header="Trgovačko pravo i pravo društava"
            itemKey="trgovacko"
          >
            Osnivanje društava, strukturiranje i pravno uređenje međuvlasničkih
            odnosa i korporativnog upravljanja. Izrada društvenih ugovora,
            statuta i internih akata. Zastupanje u sporovima između članova
            društava.
          </AccordionItem>
          <AccordionItem
            inView={inView}
            header="Spajanja i preuzimanja (M&A)"
            itemKey="spajanja"
          >
            Pravni due diligence, izrada i revizija transakcijske dokumentacije,
            strukturiranje transakcija i vođenje pregovora. Pravna podrška
            tijekom cijelog procesa spajanja, preuzimanja i drugih akvizicija.
          </AccordionItem>

          <AccordionItem
            inView={inView}
            header="Ugovorno pravo"
            itemKey="ugovorno"
          >
            Izrada i revizija ugovora (kupoprodaja, najam, zakup, građenje,
            zajam, raspodjela imovine, poslovna suradnja, distribucija, autorska
            prava, uzdržavanje).
          </AccordionItem>
          <AccordionItem
            header="Sudski postupci i rješavanje sporova"
            itemKey="sudski"
            inView={inView}
          >
            Zastupanje u parničnim, upravnim, izvanparničnim, ovršnim i
            arbitražnim postupcima. Vođenje pregovora i strategija za postizanje
            nagodbi i efikasno rješavanje sporova.
          </AccordionItem>

          <AccordionItem header="Radno pravo" itemKey="radno" inView={inView}>
            Izrada ugovora o radu, pravilnika, odluka i internih akata.
            Zastupanje poslodavaca i radnika u radnim sporovima. Savjetovanje u
            vezi prava i obveza iz radnog odnosa.
          </AccordionItem>
          <AccordionItem
            inView={inView}
            header="Nasljedno i obiteljsko pravo"
            itemKey="nasljedno"
          >
            Zastupanje u ostavinskim postupcima, sporovima oko nasljeđivanja,
            diobi bračne stečevine, postupcima razvoda i roditeljske skrbi.
            Izrada oporuka, bračnih ugovora i sporazuma između nasljednika.
          </AccordionItem>

          <AccordionItem
            header="Porezno pravo"
            itemKey="porezno"
            inView={inView}
          >
            Strukturiranje transakcija s porezno-pravnog aspekta. Zastupanje u
            poreznim postupcima i sporovima s poreznim tijelima.
          </AccordionItem>

          <AccordionItem
            header="Zaštita podataka (GDPR)"
            itemKey="gdpr"
            inView={inView}
          >
            Usklađivanje poslovanja s Općom uredbom o zaštiti podataka
            (GDPR-om), izrada internih akata i ugovora. Pravna podrška u obradi
            osobnih podataka, zastupanje pred nadzornim tijelima i procjena
            usklađenosti.
          </AccordionItem>

          <AccordionItem
            header="Pravo osiguranja"
            itemKey="osiguranja"
            inView={inView}
          >
            Savjetovanje i podrška pri sklapanju ugovora o osiguranju.
            Zastupanje u sporovima i reguliranje prava i obveza iz
            osigurateljnih odnosa.
          </AccordionItem>
          <AccordionItem
            header="Insolventnost, stečaj i restrukturiranje"
            itemKey="insolventnost"
            inView={inView}
          >
            Naplata potraživanja, zastupanje vjerovnika i dužnika u
            predstečajnim, stečajnim i likvidacijskim postupcima. Savjetovanje u
            procesima restrukturiranja i sanacije poslovanja.
          </AccordionItem>
        </Accordion>
      </MainWrapper>
    </>
  );
}
