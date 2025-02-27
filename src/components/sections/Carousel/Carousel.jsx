import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const carouselItems = [
  {
    image: "/division1.jpg",
    company: "Talitha Investment Holdings",
    details:
      "Welcome to Talitha Investment Holdings, where innovation shapes prosperity and drives progress across diverse industries.",
  },
  {
    image: "/division2.jpg",
    company: "Talitha Pharma",
    details:
      "Talitha Pharma® is a 100% black-owned family business. We are dedicated to empowering farmers with innovative solutions tailored to both traditional and modern farming practices.",
  },
  {
    image: "/division3.jpg",
    company: "Talitha RED Academy",
    details:
      "At Talitha RED Academy, we are dedicated to professionalising farming and fostering Rural Enterprise Development.",
  },
  {
    image: "/division4.jpg",
    company: "Talitha Pharma Online",
    details:
      "Welcome to Talitha Pharma Online, where we go below, above and beyond to make our products accessible to you, wherever you are in the country.",
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const scroll = useCallback(
    (direction) => {
      if (emblaApi)
        direction === "prev" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
    },
    [emblaApi]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div>
      <div className="grid grid-flow-col justify-between items-center gap-2 sm:px-36">
        <div className="uppercase font-semibold text-xs sm:text-sm text-headingColor">
          <p className="m-auto">Our Companies</p>
        </div>
        <div className="text-sm flex gap-2">
          {["prev", "next"].map((dir) => (
            <button
              key={dir}
              className={`${styles[`embla__${dir}`]} h-10 w-10 flex items-center justify-center`}
              onClick={() => scroll(dir)}
            >
              {dir === "prev" ? (
                <ChevronLeft size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[1.5rem]" />
      <div className={`${styles.embla} mx-auto max-w-lg h-96`} ref={emblaRef}>
        <div className={`${styles.embla__container} h-full gap-2`}>
          {carouselItems.map(({ image, company, details }, index) => (
            <div
              key={index}
              className={`${styles.embla__slide}`}
              onClick={() =>
                setExpandedIndex(index === expandedIndex ? null : index)
              }
            >
              <div className="relative h-full rounded-xl overflow-hidden">
                {/* Animated Overlay Section */}
                <motion.div
                  initial={{ height: "7rem" }}
                  animate={{
                    height: expandedIndex === index ? "100%" : "7rem",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-full z-50 bg-white backdrop-blur-2xl bg-opacity-80 flex flex-col items-center p-4"
                >
                  <div className="pt-[2rem]" />
                  <div className="text-talithaRed font-bold uppercase text-sm sm:text-md">
                    <h1>{company}</h1>
                  </div>
                  <div className="h-[1.5rem]" />
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-10"
                    >
                      <div className="text-left px-[2rem]">
                        <div className="h-2" />
                        <p className="text-sm sm:text-lg text-gray-900 tracking-wide leading-relaxed">
                          {details}
                        </p>
                        <div>
                          <Link href={""} className="text-talithaRed underline">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Zoom-in Image Effect */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt={`carousel_image${index + 1}`}
                    className="h-auto w-auto"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
