import Head from "next/head";
// import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      {/* Basics (order matters) */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Odvjetnik Dino Miljak</title>
      <meta
        name="description"
        content="Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga. Individualan pristup i sveobuhvatna pravna podrška s ciljem učinkovitih i pravno održivih rješenja."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://odvjetnik-miljak.hr" />

      {/* Icons */}
      <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      <link rel="icon" href="/favicon/favicon.png" sizes="any" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

      {/* SEO extras */}
      <meta name="author" content="Odvjetnik Dino Miljak" />
      <meta
        name="keywords"
        content="odvjetnik, pravne usluge, Zadar, odvjetnik Dino Miljak, pravo, odvjetnički ured"
      />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="hr_HR" />
      <meta property="og:site_name" content="Odvjetnik Dino Miljak" />
      <meta property="og:title" content="Odvjetnik Dino Miljak" />
      <meta
        property="og:description"
        content="Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga. Individualan pristup i sveobuhvatna pravna podrška s ciljem učinkovitih i pravno održivih rješenja."
      />
      <meta property="og:url" content="https://odvjetnik-miljak.hr" />
      <meta
        property="og:image"
        content="https://odvjetnik-miljak.hr/ogImage.webp"
      />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content="Odvjetnik Dino Miljak" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Odvjetnik Dino Miljak" />
      <meta
        name="twitter:description"
        content="Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga. Individualan pristup i sveobuhvatna pravna podrška s ciljem učinkovitih i pravno održivih rješenja."
      />
      <meta
        name="twitter:image"
        content="https://odvjetnik-miljak.hr/ogImage.webp"
      />

      {/* Verification & feeds */}
      <meta
        name="google-site-verification"
        content="dG2Ops7etE_w7uTnTCV_DHMA_aGieL1yacHfJksXD_Y"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  );
}
