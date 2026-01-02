import Head from "next/head";
// import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  // pages/index.jsx

  return (
    <Head>
      {/* Basics (order matters) */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sea Spirit Cars</title>
      <meta name="description" content="Sea Spirit Cars, prodaja vozila" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.sea-spirit.hr" />

      {/* Icons */}
      <link rel="icon" href="/iconSea.svg" type="image/png" />
      <link rel="icon" href="/iconSea.svg" sizes="any" />
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
      <meta name="author" content="Sea Spirit Cars" />
      <meta name="keywords" content="Sea Spirit Cars, prodaja vozila" />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="hr_HR" />
      <meta property="og:site_name" content="Sea Spirit Cars" />
      <meta property="og:title" content="Sea Spirit Cars" />
      <meta
        property="og:description"
        content="Sea Spirit Cars, prodaja vozila"
      />
      <meta property="og:url" content="https://www.sea-spirit.hr" />
      <meta
        property="og:image"
        content="https://www.sea-spirit.hr/ogImage.webp"
      />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content="Sea Spirit Cars" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sea Spirit Cars" />
      <meta
        name="twitter:description"
        content="Sea Spirit Cars, prodaja vozila"
      />
      <meta
        name="twitter:image"
        content="https://www.sea-spirit.hr/ogImage.webp"
      />

      {/* Verification & feeds */}
      {/* <meta
        name="google-site-verification"
        content="dG2Ops7etE_w7uTnTCV_DHMA_aGieL1yacHfJksXD_Y"
      /> */}

      {/* <script
        type="application/ld+json"
        // IMPORTANT: it must be a string
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </Head>
  );
}
