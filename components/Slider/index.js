import React from "react";

import {
  Button,
  Container,
  HeroWrap,
  Line,
  Text,
  TextBox,
  Title,
} from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import PhotoScrollGallery from "./photoScrollGallery.js";

function Slider() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();

  return (
    <HeroWrap ref={ref}>
      <Container>
        <PhotoScrollGallery
          photos={[
            { src: "/cars/img1.png", alt: "BMW 1" },
            { src: "/cars/img2.png", alt: "BMW 2" },
            { src: "/cars/img3.png", alt: "BMW 2" },
            { src: "/cars/img4.png", alt: "BMW 2" },
            { src: "/cars/img5.png", alt: "BMW 2" },
            { src: "/cars/img6.png", alt: "BMW 2" },
            { src: "/cars/img7.png", alt: "BMW 2" },
            { src: "/cars/img8.png", alt: "BMW 2" },
            { src: "/cars/img9.png", alt: "BMW 2" },
            { src: "/cars/img10.png", alt: "BMW 2" },
            { src: "/cars/img11.png", alt: "BMW 2" },
            { src: "/cars/img12.png", alt: "BMW 2" },
            { src: "/cars/img13.png", alt: "BMW 2" },
          ]}
        />
      </Container>
    </HeroWrap>
  );
}

export default Slider;
