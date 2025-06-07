import {
  WrapTimeline,
  SingleBlock,
  Text,
  Year,
  Gradient,
  Line,
  Dot,
} from "./style.js";

import useWindowSize from "../helper/usewindowsize.js";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";
import Image from "next/image.js";

function Timeline() {
  const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <WrapTimeline ref={ref}>
      <Gradient />
      <Line inView={inView} />
      <SingleBlock inView={inView} animationDelay="0.2s">
        <Text>Sveučilište u Zagrebu, Pravni fakultet</Text>
        <Dot inView={inView} animationDelay="0.2s" />
        <Year>2004 - 2008</Year>
      </SingleBlock>
      <SingleBlock inView={inView} animationDelay="0.6s">
        <Text>Pravosudni ispit</Text>
        <Dot inView={inView} animationDelay="0.6s" />

        <Year>2011</Year>
      </SingleBlock>{" "}
      <SingleBlock inView={inView} animationDelay="1s">
        <Text>
          Vježbenik u odvjetničkom društvu Hanžeković & Partneri d.o.o.
        </Text>
        <Dot inView={inView} animationDelay="1s" />

        <Year>2009 - 2012</Year>
      </SingleBlock>{" "}
      <SingleBlock inView={inView} animationDelay="1.4s">
        <Text>
          Odvjetnik u odvjetničkom društvu Hanžeković & Partneri d.o.o.
        </Text>
        <Dot inView={inView} animationDelay="1.4s" />

        <Year>2012 - 2020</Year>
      </SingleBlock>{" "}
      <SingleBlock inView={inView} animationDelay="1.8s">
        <Text>
          Partner u odvjetničkom društvu Metelko, Knežević & Partneri d.o.o.
        </Text>
        <Dot inView={inView} animationDelay="1.8s" />

        <Year>2020 - 2025 </Year>
      </SingleBlock>{" "}
      <SingleBlock inView={inView} animationDelay="2.2s">
        <Text>Samostalni odvjetnički ured</Text>
        <Dot inView={inView} animationDelay="2.2s" />

        <Year>2025 - danas</Year>
      </SingleBlock>
    </WrapTimeline>
  );
}

export default Timeline;
