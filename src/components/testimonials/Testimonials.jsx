import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Testimonial.module.css";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    image: "/division1.jpg",
    text: "They service me best at the moment.",
    author: "Retailer",
  },
  {
    image: "/division2.jpg",
    text: "Their explanations to the farmers are brilliant.",
    author: "Retailer Training Manager",
  },
  {
    image: "/division3.jpg",
    text: "It meets the needs of a modern farmer in an innovative way. The company is very fond of black excellence.",
    author: "Farmer",
  },
  {
    image: "/division4.jpg",
    text: "They know what they’re doing and know what to do, more vigilant, more forceful, apply more pressure.",
    author: "Retailer",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scroll = useCallback((direction) => {
    if (emblaApi) direction === "prev" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="w-full">
    <div className="sm:pt-[3rem]"/>
      <div className="grid grid-flow-col justify-between items-center gap-2 px-6 sm:px-36">
        <div className="uppercase font-semibold text-xs text-headingColor sm:text-sm">
          <h2 className="m-auto">Testimonials</h2>
        </div>
        <div className="text-sm flex gap-2">
          <button className={`${styles.embla__prev} h-10 w-10 flex items-center justify-center`} onClick={() => scroll("prev")}>
            <ChevronLeft size={20} />
          </button>
          <button className={`${styles.embla__next} h-10 w-10 flex items-center justify-center`} onClick={() => scroll("next")}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className={`${styles.embla} mx-auto max-w-lg h-96`} ref={emblaRef}>
        <div className={`${styles.embla__container} h-full`}>
          {testimonials.map(({ image, text, author }, index) => (
            <div key={index} className={`${styles.embla__slide} min-h-[100px] flex flex-col items-center justify-center`}>
              <div className="flex items-center justify-center relative w-full rounded-xl overflow-hidden">
                <Image src={image} width={50} height={50} alt={`carousel_image${index + 1}`} className="h-auto w-auto rounded-full" />
              </div>
              <div className="h-[2rem]" />
              <div className="text-paragraph text-sm sm:text-xl max-w-80 text-center leading-relaxed">
                <p>
                  <em>{`“${text}”`}</em>
                  <span className="block text-headingColor pt-2">– {author}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:pt-20"/>
    </div>
  );
}
