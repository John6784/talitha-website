"use client";

import { motion } from "framer-motion";
import Scene from "../Scene";
import Carousel from "./Carousel/Carousel";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative max-w-full mx-auto block px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* <Scene /> */}
      <div className="w-full pl-[1.5rem] pr-[1.5rem] mr-auto ml-auto block dark:bg-background dark:text-foreground bg-opacity-40">
        <div className="w-full pt-[3rem]" />
        <div className="w-full pt-[6rem] sm:pt-[8rem]" />

        <motion.div
          className="grid gap-x-4 gap-y-0 grid-cols-3 grid-rows-1 auto-cols-fr"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, delayChildren: 0.2 },
            },
          }}
        >
          {/* Heading */}
          <motion.h1
            className="text-headingColor relative flex flex-wrap text-[50px] sm:text-[80px] tracking-wider font-bold font-tinos col-span-2 pr-0 gap-x-[0.6rem] sm:pl-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            Welcome to Talitha Investment Holdings
          </motion.h1>

          <div className="w-full pt-[2rem] col-span-2" />

          {/* Paragraph */}
          <motion.p
            className="text-[17px] sm:text-[20px] text-paragraph max-w-xl border-l-2 border-talithaRed leading-relaxed relative block col-span-2 pl-[1rem]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
            }}
          >
            Innovating for prosperity in pharmaceuticals
            <span className=""> and livestock value chains, </span>
            driving sustainable growth
            <span className="sm:hidden">.</span>
            <span className="hidden sm:inline">
              and empowering rural communities.
            </span>
          </motion.p>
        </motion.div>

        <div className="w-full pt-[3.5rem]" />
      </div>
    </motion.section>
  );
}
