"use client";

import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <AnimatedSection className="px-[1.5rem] sm:relative overflow-hidden">
      <div className="pt-[4rem]" />
      <div className="sm:px-20 sm:grid sm:grid-cols-3 sm:gap-10 sm:items-start">
        <div className="sm:border-t-[1px] sm:border-gray-500 sm:pt-14">
          <h2 className="text-xs sm:text-sm text-headingColor font-semibold uppercase">
            WHO WE ARE
          </h2>
        </div>
        <div className="pt-[1.5rem] sm:hidden" />
        <div className="sm:border-t-[1px] sm:border-gray-500 sm:pt-14 sm:col-span-2">
          <div>
            <h3 className="text-3xl sm:text-5xl leading-10 font-semibold font-tinos tracking-wide">
              Welcome to Talitha Investment Holdings, where innovation shapes
              prosperity and drives progress across diverse industries.
            </h3>
          </div>
          <div className="h-[1.5rem]" />
          <div>
            <p className="text-md sm:text-lg text-paragraph leading-relaxed">
              Our values are the foundation of our culture. They guide how we
              think, act, and interact, shaping an environment where innovation
              thrives, excellence is pursued, relationships are respected,
              collaboration is celebrated, courage is embraced, and integrity is
              upheld. Together, these values define who we are and inspire
              everything we do:
            </p>
          </div>
        </div>
        <div className="h-[1rem]" />
       <div>
            <Link href={"about"} className="underline text-talithaRed">
              Learn more
            </Link>
       </div>
      </div>
      {/* <div className="h-[6rem]" /> */}
    </AnimatedSection>
  );
}
