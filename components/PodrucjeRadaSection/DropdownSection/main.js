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
  padding-top: 0px;
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
      <MainWrapper>
        <Accordion>
          <AccordionItem header="Pravo nekretnina" itemKey="nekretnine">
            Pružam pravnu podršku u svim fazama nekretninskih transakcija i
            projekata – od pravnog praćenja investicija i strukturiranja
            imovinskopravnih odnosa do kupoprodaje i rješavanja
            zemljišnoknjižnih pitanja.
          </AccordionItem>
          <AccordionItem header="Trgovačko pravo" itemKey="trgovacko">
            Savjetujem klijente u vezi s uređenjem unutarnjih odnosa u
            trgovačkim društvima, bavim se statusnim promjenama te postupcima
            spajanja i preuzimanja trgovačkih društava (M&A transakcije).
          </AccordionItem>
          <AccordionItem header="Ugovorno pravo" itemKey="spajanja">
            Bavim se izradom, analizom i revizijom širokog spektra ugovora –
            kupoprodaja, najam, zakup, građenje, poslovna suradnja, raspodjela
            imovine, uzdržavanje i dr.
          </AccordionItem>

          <AccordionItem
            header="Nasljedno i obiteljsko pravo"
            itemKey="ugovorno"
          >
            Pružam pravnu podršku u uređenju imovinskopravnih odnosa između
            bračnih drugova te pitanjima nasljeđivanja, uključujući zastupanje u
            ostavinskim postupcima.
          </AccordionItem>
          <AccordionItem header="Radno pravo" itemKey="sudski">
            Savjetujem poslodavce i radnike o pravima i obvezama iz radnog
            odnosa, izrađujem internu radno-pravnu dokumentaciju te zastupam u
            radnim sporovima.
          </AccordionItem>

          <AccordionItem header="Radno pravo" itemKey="radno">
            Izrada ugovora o radu, pravilnika, odluka i internih akata.
            Zastupanje poslodavaca i radnika u radnim sporovima. Savjetovanje u
            vezi prava i obveza iz radnog odnosa.
          </AccordionItem>
          <AccordionItem header="Rješavanje sporova" itemKey="nasljedno">
            Zastupam klijente u postupcima pred sudovima i upravnim tijelima, s
            naglaskom na trgovačke, imovinske i radne sporove te postupke
            stečaja i restrukturiranja.
          </AccordionItem>

          <AccordionItem
            header="IT sektor, maloprodaja i GDPR"
            itemKey="porezno"
          >
            Savjetujem klijente u vezi s usklađenošću poslovanja s GDPR-om,
            pravnim aspektima digitalnih usluga i e-trgovine.
          </AccordionItem>

          <AccordionItem header="Porezno pravo" itemKey="gdpr">
            Pružam pravne savjete o poreznim aspektima poslovanja, imovine i
            transakcija, te zastupam klijente pred poreznim tijelima.
          </AccordionItem>
        </Accordion>
      </MainWrapper>
    </>
  );
}
