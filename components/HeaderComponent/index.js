import {
  WrapHeader,
  Container,
  WrapKey,
  WrapSingleData,
  WrapValue,
} from "./style.js";

import useWindowSize from "../helper/usewindowsize.js";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";
import Image from "next/image.js";
import { HiEnvelope } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

function HeaderComponent() {
  const size = useWindowSize();
  // const { ref, inView, entry } = useInView({

  //   threshold: 0,
  //   triggerOnce: true,
  // });
  return (
    <WrapHeader>
      <Container data-nosnippet>
        <WrapSingleData>
          <FaWhatsapp color="white" />

          <WrapKey>Kontakt broj: &nbsp;</WrapKey>
          <WrapValue>
            <a
              href="tel:+385 99 592 9393"
              target="_blank"
              rel="noopener noreferrer"
            >
              +385 99 592 9393
            </a>
          </WrapValue>
        </WrapSingleData>{" "}
        <WrapSingleData>
          <HiEnvelope color="white" />
          <WrapKey>Email: &nbsp;</WrapKey>
          <WrapValue>
            {/* <a
              href="mailto:dino@odvjetnik-miljak.hr"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            dino@odvjetnik-miljak.hr
            {/* </a> */}
          </WrapValue>
        </WrapSingleData>
        <WrapSingleData>
          <PiMapPinFill color="white" />

          <WrapKey>Adresa ureda: &nbsp;</WrapKey>
          <WrapValue>
            {/* <a
              href="https://maps.app.goo.gl/5y9ThcJbyHULYiW37"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            Supilova ulica 7, 10000 Zagreb
            {/* </a> */}
          </WrapValue>
        </WrapSingleData>{" "}
        <WrapSingleData>
          <PiMapPinFill color="white" />

          <WrapKey>Pisarnica Zadar:&nbsp;</WrapKey>
          <WrapValue>
            {/* <a
              href="https://maps.app.goo.gl/PwaxLPDtYWrwnLYz5"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            Ivana Meštrovića 77, 23000 Zadar
            {/* </a> */}
          </WrapValue>
        </WrapSingleData>
      </Container>
    </WrapHeader>
  );
}

export default HeaderComponent;
