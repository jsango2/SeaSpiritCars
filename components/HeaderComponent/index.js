import {
  WrapHeader,
  Container,
  WrapKey,
  WrapSingleData,
  WrapValue,
} from "./style.js";
// import MarikomercLogo from "../../assets/svg/marikomerc_logo_footer.svg";

import useWindowSize from "../helper/usewindowsize.js";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";
import Image from "next/image.js";
import { HiEnvelope } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";

function HeaderComponent() {
  const size = useWindowSize();
  // const { ref, inView, entry } = useInView({

  //   threshold: 0,
  //   triggerOnce: true,
  // });
  return (
    <WrapHeader>
      <Container>
        <WrapSingleData>
          <HiEnvelope color="white" />
          <WrapKey>Email: &nbsp;</WrapKey>
          <WrapValue> odvjetnik.miljak@gmail.com</WrapValue>
        </WrapSingleData>
        <WrapSingleData>
          <BsFillTelephoneFill color="white" />

          <WrapKey>Kontakt broj: &nbsp;</WrapKey>
          <WrapValue> +385 99 592 9393</WrapValue>
        </WrapSingleData>{" "}
        <WrapSingleData>
          <PiMapPinFill color="white" />

          <WrapKey>Adresa ureda: &nbsp;</WrapKey>
          <WrapValue> Supilova ulica 7, 10000 Zagreb</WrapValue>
        </WrapSingleData>{" "}
        <WrapSingleData>
          <PiMapPinFill color="white" />

          <WrapKey>Pisarnica Zadar:&nbsp;</WrapKey>
          <WrapValue> Ivana Meštrovića 77, 23000 Zadar</WrapValue>
        </WrapSingleData>
      </Container>
    </WrapHeader>
  );
}

export default HeaderComponent;
