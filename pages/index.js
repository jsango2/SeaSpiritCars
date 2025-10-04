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

      <HeaderComponent />
      <Hero />
      <PodrucjeRadaSection />
      <TimelineSection />
      <Proces />
      <FooterSection />
    </>
  );
}
