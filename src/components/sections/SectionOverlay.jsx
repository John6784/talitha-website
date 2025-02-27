"use client";

import { useThree } from "@react-three/fiber";
import HeroSection from "./HeroSection";
import { useRef } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { Carousel } from "./Carousel/Carousel";
import Link from "next/link";
import { Footer } from "../footer/Footer";
import { Testimonials } from "../testimonials/Testimonials";
import { ContactForm } from "../contactUs/ContactForm";
import StatsSection from "./statSection/StatsSection";
import WhoWeAre from "./whoWeAre/WhoWeAre";
import FeaturedNews from "./FeatureNews/FeaturedNews";

export default function SectionOverlay() {
  return (
    <div className="">
      <HeroSection />
      <section className="pl-[1.5rem] pr-[1.5rem] relative overflow-hidden h-[70dvh]">
        <Carousel />
      </section>
      <WhoWeAre />
      <StatsSection />
      <FeaturedNews />
      <section className="overlay-section relative overflow-hidden">
        <Testimonials />
      </section>

      <section className="">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
