import HeaderComponent from "../components/HeaderComponent";
import Hero from "../components/Hero";
import Head from "next/head";

import Meta from "../components/meta";
import Ponuda from "../components/Ponuda";
import Slider from "../components/Slider";
import TriKartice from "../components/TriKartice";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <Meta />

      <HeaderComponent />
      <Hero />
      <Ponuda />
      <Slider />
      <TriKartice />
      <Footer />
    </>
  );
}
