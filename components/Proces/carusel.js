import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { WrapSlide } from "./style.js";

import useWindowSize from "../helper/usewindowsize.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,

  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  cssEase: "linear",
  className: "testimonialSlider",
  speed: 200,

  responsive: [
    {
      breakpoint: 800,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,

        autoplaySpeed: 0,
        cssEase: "linear",
        className: "testimonialSlider",
        speed: 200,
      },
    },
    {
      breakpoint: 450,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        className: "testimonialSlider",
        speed: 200,
      },
    },
  ],
};

import {
  CaruselCard,
  Wrapper,
  ArrowLeft,
  ArrowRight,
  CardTitle,
  CardText,
  CardNumber,
} from "./style.js";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
export const data = [
  {
    number: 1,
    title: "Inicijalni kontakt",
    text: "Putem telefona, e-maila ili obrasca na web stranici dogovaramo inicijalni razgovor. Prikupljamo osnovne informacije i upoznajemo se s Vašim predmetom.",
  },
  {
    number: 2,
    title: "Ponuda za pružanje pravnih usluga",
    text: "Na temelju dostavljene dokumentacije i podataka dajemo Vam okvirni hodogram postupanja i radnji koje bi bilo potrebno poduzeti u Vašem predmetu. Potom dostavljamo ponudu za pružanje pravnih usluga, s jasno definiranim pravnim radnjama, predviđenim rokovima i očekivanim troškovima.",
  },
  {
    number: 3,
    title: "Prihvat ponude i angažman",
    text: "Po prihvatu ponude odnosno potpisu punomoći započinjemo s pripremnom fazom pravnog angažmana koja uključuje temeljitu analizu dokumentacije, definiranje pravnog problema i izradu strategije postupanja u Vašem predmetu.",
  },
  {
    number: 4,
    title: "Provedba pravnih radnji",
    text: "Prema prethodno utvrđenom planu postupanja prelazimo na operativnu provedbu pravnih radnji. Između ostalog pružamo pravno savjetovanje, izrađujemo i revidiramo dokumentaciju, pregovaramo u Vaše ime te zastupamo Vas kao klijenta pred sudovima i drugim nadležnim tijelima.",
  },
  {
    number: 5,
    title: "Transparentna komunikacija",
    text: "Redovito Vas informiramo o tijeku postupka, o mogućim rizicima i novim okolnostima u predmetu. Transparentna i pravovremena komunikacija s klijentom temelj je našeg pristupa.",
  },
  {
    number: 6,
    title: "Realizacija i daljnja podrška",
    text: "Cilj nam je postići učinkovito i pravno održivo rješenje u interesu Vas kao klijenta. Po završetku pojedinog predmeta i prema potrebi stojimo Vam na raspolaganju za dodatna pojašnjenja ili nastavak suradnje.",
  },
];

export default function ResponsiveCarousel(props) {
  const size = useWindowSize();

  const [startCarusel, setStartCarusel] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  const reff = useRef();
  const [isHovering, setIsHovering] = useState(false);

  const elementRef = useRef(null);

  // useEffect(() => {
  //   if (!isHovering && isVideoOpen === false && startCarusel === true) {
  //     const interval = setInterval(() => {
  //       if (reff.current) {
  //         reff.current.goNext();
  //       }
  //     }, 4000);
  //     return () => clearInterval(interval);
  //   }
  // }, [isHovering, isVideoOpen, startCarusel]);

  return (
    <Wrapper
      // // style={{ width: "100%", position: "relative" }}
      // onMouseEnter={() => setIsHovering(true)} // Start hover
      // onMouseLeave={() => setIsHovering(false)} // Stop hover
      ref={ref}
      inView={inView}
    >
      {size.width < 1050 && (
        <Slider {...settings}>
          {data.map((slide) => (
            <WrapSlide key={slide.number}>
              <CardNumber>{slide.number}</CardNumber>
              <CardTitle>{slide.title}</CardTitle>
              <CardText>{slide.text}</CardText>
            </WrapSlide>
          ))}
        </Slider>
      )}
      {size.width > 1050 && (
        <>
          <ArrowLeft onClick={() => reff.current.goBack()}>
            <Image src="/svg/prev.svg" layout="fill" objectFit="contain" />
          </ArrowLeft>
          <ArrowRight onClick={() => reff.current.goNext()}>
            <Image src="/svg/next.svg" layout="fill" objectFit="contain" />
          </ArrowRight>
        </>
      )}
      {size.width > 1050 && (
        <ResponsiveContainer
          carouselRef={reff}
          render={(parentWidth, carouselRef) => {
            // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
            // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
            // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
            // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
            let currentVisibleSlide = 5;
            if (parentWidth <= 1200) currentVisibleSlide = 5;
            // if (parentWidth <= 1080) currentVisibleSlide = 3;

            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 800 ? parentWidth - 90 : 650}
                carouselWidth={parentWidth}
                data={data}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                useGrabCursor={true}
                swipeSpeed={0.3}
                transitionTime={700}

                //   disableSwipe={true}
              />
            );
          }}
        />
      )}
      {/* <>
          <Fab
            style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
            size="small"
            color="primary"
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            <ArrowBackIcon />
          </Fab>
          <Fab
            style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
            size="small"
            color="primary"
            onClick={() => {
              ref.current?.goNext(6);
            }}
          >
            <ArrowForwardIcon />
          </Fab>
        </> */}
    </Wrapper>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  //   console.log({ props });
  const { number, title, text } = data[dataIndex];

  return (
    <CaruselCard>
      <CardNumber>{number}</CardNumber>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      {/* <img
          // style={{
          //   height: "100%",
          //   width: "100%",
          //   objectFit: "contain",
          //   borderRadius: "10px",
          //   overflow: "hidden",
          // }}
          draggable={false}
          src={cover}
          alt="image"
        /> */}
    </CaruselCard>
  );
});
