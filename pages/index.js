import HeaderComponent from "../components/HeaderComponent";
import Hero from "../components/Hero";
import Head from "next/head";
import PodrucjeRadaSection from "../components/PodrucjeRadaSection";
import TimelineSection from "../components/TimelineSection";
import Proces from "../components/Proces";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>MILAJK</title>
        <meta property="og:title" content="MILJAK" key="title" />
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
        {/* <meta
          property="og:image"
          content="http://marikomerc.sutra.hr/wp-content/uploads/2024/01/perlaOGimage.png"
        />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Otkrijte raznolike recepte na Perla web stranici, idealne za ljubitelje morskih plodova. Pronađite inspiraciju za vaš sljedeći obrok, od jednostavnih do gurmanskih jela."
              : "Discover a variety of recipes on Perla's website, perfect for seafood enthusiasts. From simple to gourmet, find inspiration for your next meal."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Otkrijte raznolike recepte na Perla web stranici, idealne za ljubitelje morskih plodova. Pronađite inspiraciju za vaš sljedeći obrok, od jednostavnih do gurmanskih jela."
              : "Discover a variety of recipes on Perla's website, perfect for seafood enthusiasts. From simple to gourmet, find inspiration for your next meal."
          }
        />
        <meta
          property="twitter:description"
          content={
            locale === "hr"
              ? "Otkrijte raznolike recepte na Perla web stranici, idealne za ljubitelje morskih plodova. Pronađite inspiraciju za vaš sljedeći obrok, od jednostavnih do gurmanskih jela."
              : "Discover a variety of recipes on Perla's website, perfect for seafood enthusiasts. From simple to gourmet, find inspiration for your next meal."
          }
        /> */}
      </Head>
      <HeaderComponent />
      <Hero />
      <PodrucjeRadaSection />
      <TimelineSection />
      <Proces />
    </>
  );
}
