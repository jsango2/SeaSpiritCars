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
        <meta property="og:title" content="Odvjetnik Dino Miljak" key="title" />
        <meta name="twitter:title" content="Odvjetnik Dino Miljak" />
        {/* <link
          rel="alternate"
          hreflang={locale === "hr" ? "hr" : "en"}
          href={locale === "hr" ? "https://www.perla.hr":"https://www.perla.hr/en"}
          data-react-helmet="true"
        ></link> */}
        {/* <link
          rel="canonical"
          href={locale === "hr" ? "https://www.perla.hr":"https://www.perla.hr/en"}
          data-react-helmet="true"
        ></link> */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta property="og:url" content="https://www.runzadar.com" /> */}
        {/* <meta
          name="google-site-verification"
          content="KSOsBchhDMtcxBavoVnUbAVI8Jxcipv9J5ceC1K4Rag"
        /> */}
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
