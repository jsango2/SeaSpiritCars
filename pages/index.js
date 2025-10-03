import HeaderComponent from "../components/HeaderComponent";
import Hero from "../components/Hero";
import Head from "next/head";
import PodrucjeRadaSection from "../components/PodrucjeRadaSection";
import TimelineSection from "../components/TimelineSection";
import Proces from "../components/Proces";
import Meta from "../components/meta";
import FooterSection from "../components/FooterSection";

export default function IndexPage() {
  return (
    <>
      <Meta />
      <Head>
        <title>Odvjetnik Dino Miljak</title>
        <meta
          name="google-site-verification"
          content="dG2Ops7etE_w7uTnTCV_DHMA_aGieL1yacHfJksXD_Y"
        />
        <meta property="og:title" content="Odvjetnik Dino Miljak" key="title" />
        <meta name="twitter:title" content="Odvjetnik Dino Miljak" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://odvjetnik-miljak.hr" />
        <link
          rel="canonical"
          href="https://odvjetnik-miljak.hr"
          data-react-helmet="true"
        ></link>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Odvjetnik Dino Miljak" />
        <meta
          name="keywords"
          content="odvjetnik, pravne usluge, Zadar, odvjetnik Dino Miljak, pravo, odvjetnički ured"
        />

        <meta property="og:image" content="/ogImage.webp" />
        <meta
          name="description"
          content="Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga. Individualan pristup i sveobuhvatna pravna podrška s ciljem učinkovitih i pravno održivih rješenja."
          key="desc"
        />
        <meta
          property="og:description"
          content="Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga. Individualan pristup i sveobuhvatna pravna podrška s ciljem učinkovitih i pravno održivih rješenja."
        />
        <meta
          property="twitter:description"
          content="Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga. Individualan pristup i sveobuhvatna pravna podrška s ciljem učinkovitih i pravno održivih rješenja."
        />
      </Head>
      <HeaderComponent />
      <Hero />
      <PodrucjeRadaSection />
      <TimelineSection />
      <Proces />
      <FooterSection />
    </>
  );
}
