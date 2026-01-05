import HeaderComponent from "../components/HeaderComponent";
import Hero from "../components/Hero";
import Head from "next/head";

import Meta from "../components/meta";
import Ponuda from "../components/Ponuda";
import Slider from "../components/Slider";
import TriKartice from "../components/TriKartice";
import Footer from "../components/Footer";
import { useRef } from "react";

export default function IndexPage() {
  const footerRef = useRef(null);
  const ponudaRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToPonuda = () => {
    ponudaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <Meta />

      <HeaderComponent
        onContactClick={scrollToFooter}
        onPonudaClick={scrollToPonuda}
      />
      <Hero />
      <Ponuda ref={ponudaRef} />
      <Slider />
      <TriKartice />
      <Footer ref={footerRef} />
    </>
  );
}
