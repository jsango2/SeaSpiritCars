import { WrapAll, Container, Title, Divider } from "./style.js";

import useWindowSize from "../helper/usewindowsize.js";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";
import Image from "next/image.js";
import { BottomGradient } from "./style.js";
import { TopGradient } from "./style.js";
import Timeline from "./timeline.js";
function TimelineSection() {
  const size = useWindowSize();
  // const { ref, inView, entry } = useInView({

  //   threshold: 0,
  //   triggerOnce: true,
  // });
  return (
    <WrapAll>
      <TopGradient />
      <Container>
        <Title>Edukacija i profesionalno iskustvo</Title>
        <Divider />
        <Timeline />
      </Container>
      <BottomGradient />
    </WrapAll>
  );
}

export default TimelineSection;
