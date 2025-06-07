import { WrapAll, Container } from "./style.js";
// import MarikomercLogo from "../../assets/svg/marikomerc_logo_footer.svg";

import useWindowSize from "../helper/usewindowsize";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";
import Image from "next/image.js";
function FooterSection() {
  const size = useWindowSize();
  // const { ref, inView, entry } = useInView({

  //   threshold: 0,
  //   triggerOnce: true,
  // });
  return (
    <WrapAll>
      <Container></Container>
    </WrapAll>
  );
}

export default FooterSection;
