import {
  WrapHeader,
  Container,
  WrapLogo,
  WrapLinks,
  WrapIcons,
  Icon1,
  LinkBtn,
} from "./style.js";

import useWindowSize from "../helper/usewindowsize.js";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";
import Image from "next/image.js";
import { HiEnvelope } from "react-icons/hi2";

function HeaderComponent({ onContactClick, onPonudaClick }) {
  const size = useWindowSize();
  // const { ref, inView, entry } = useInView({

  //   threshold: 0,
  //   triggerOnce: true,
  // });
  return (
    <WrapHeader>
      <Container data-nosnippet>
        <WrapLogo>
          <Image
            src="/svg/seaspiritlogo.svg"
            layout="fill"
            objectFit="contain"
          />
        </WrapLogo>
        <WrapLinks>
          <LinkBtn onClick={onPonudaClick}>Ponuda vozila</LinkBtn>
          <LinkBtn onClick={onContactClick}>O nama</LinkBtn>
          {/* <Link href="#section">Kontakt</Link> */}
        </WrapLinks>
        <WrapIcons>
          <Icon1 href="#section">
            <Image src="/svg/caricon.svg" layout="fill" objectFit="contain" />
          </Icon1>
          <Icon1 href="#section">
            <Image src="/svg/grb.svg" layout="fill" objectFit="contain" />
          </Icon1>{" "}
          <Icon1 href="#section">
            <Image src="/svg/iskustvo.svg" layout="fill" objectFit="contain" />
          </Icon1>
        </WrapIcons>
      </Container>
    </WrapHeader>
  );
}

export default HeaderComponent;
