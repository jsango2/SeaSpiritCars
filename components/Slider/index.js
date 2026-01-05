import React, { forwardRef } from "react";
import { Container, HeroWrap } from "./style.js";
import useWindowSize from "../helper/usewindowsize.js";
import PhotoScrollGallery from "./PhotoScrollGallery.js";

const Slider = forwardRef(function Slider(props, ref) {
  const size = useWindowSize(); // (you can remove if unused)

  return (
    <HeroWrap ref={ref}>
      <Container>
        <PhotoScrollGallery
          photos={[
            { src: "/cars/img1.png", alt: "BMW 1" },
            { src: "/cars/img2.png", alt: "BMW 2" },
            { src: "/cars/img3.png", alt: "BMW 3" },
            { src: "/cars/img4.png", alt: "BMW 4" },
            { src: "/cars/img5.png", alt: "BMW 5" },
            { src: "/cars/img6.png", alt: "BMW 6" },
            { src: "/cars/img7.png", alt: "BMW 7" },
            { src: "/cars/img8.png", alt: "BMW 8" },
            { src: "/cars/img9.png", alt: "BMW 9" },
            { src: "/cars/img10.png", alt: "BMW 10" },
            { src: "/cars/img11.png", alt: "BMW 11" },
            { src: "/cars/img12.png", alt: "BMW 12" },
            { src: "/cars/img13.png", alt: "BMW 13" },
          ]}
        />
      </Container>
    </HeroWrap>
  );
});

export default Slider;
