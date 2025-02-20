"use client";

import { useThree } from "@react-three/fiber";
import HeroSection from "./HeroSection";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionOverlay() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);

  const isInView1 = useInView(sectionRef1, { margin: "-200px" });
  const isInView2 = useInView(sectionRef2, { margin: "-200px" });
  const isInView3 = useInView(sectionRef3, { margin: "-200px" });
  const isInView4 = useInView(sectionRef4, { margin: "-200px" });
  return (
    <div className="sections-container">
      <HeroSection />
      <section ref={sectionRef1} className="overlay-section">
        <motion.div
          className="w-full h-[40vh] ml-[40vw] mr-[5vw] p-5 rounded-md bg-red-400 backdrop-blur-xl bg-opacity-45 shadow-md overflow-hidden"
          initial={{ width: 0, minWidth: 0, opacity: 0 }} // Start collapsed
          animate={
            isInView1
              ? { width: "100%", minWidth: "200px", opacity: 1 }
              : { width: 0, minWidth: 0, opacity: 0 }
          } // Expand & Fade in
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
        >
          <motion.h1
            className="text-black"
            initial={{ opacity: 0 }}
            animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Section 1
          </motion.h1>

          <motion.p
            className="text-sm text-black"
            initial={{ opacity: 0 }}
            animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip."
          </motion.p>
        </motion.div>
      </section>
      <section ref={sectionRef2} className="overlay-section">
        <motion.div
          className="w-full h-[40vh] mr-[40vw] ml-[5vw] p-5 rounded-md bg-lime-400 backdrop-blur-xl bg-opacity-45 shadow-md overflow-hidden"
          initial={{ width: 0 }} // Start from width 0
          animate={isInView2 ? { width: "100%" } : { width: 0 }} // Expand when in view
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
        >
          <motion.h1
            className="text-black"
            initial={{ opacity: 0 }}
            animate={isInView2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Section 3
          </motion.h1>

          <motion.p
            className="text-sm text-black"
            initial={{ opacity: 0 }}
            animate={isInView2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip."
          </motion.p>
        </motion.div>
      </section>
      <section ref={sectionRef3} className="overlay-section">
        <motion.div
          className="w-full h-[40vh] ml-[40vw] mr-[5vw] p-5 rounded-md bg-red-400 backdrop-blur-xl bg-opacity-45 shadow-md overflow-hidden"
          initial={{ width: 0 }} // Start from width 0
          animate={isInView3 ? { width: "100%" } : { width: 0 }} // Expand when in view
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
        >
          <motion.h1
            className="text-black"
            initial={{ opacity: 0 }}
            animate={isInView3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Section 3
          </motion.h1>

          <motion.p
            className="text-sm text-black"
            initial={{ opacity: 0 }}
            animate={isInView3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip."
          </motion.p>
        </motion.div>
      </section>
      <section ref={sectionRef4} className="overlay-section">
        <motion.div
          className="w-full h-[40vh] mr-[40vw] ml-[5vw] p-5 rounded-md bg-lime-400 backdrop-blur-xl bg-opacity-45 shadow-md overflow-hidden"
          initial={{ width: 0 }} // Start from width 0
          animate={isInView4 ? { width: "100%" } : { width: 0 }} // Expand when in view
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
        >
          <motion.h1
            className="text-black"
            initial={{ opacity: 0 }}
            animate={isInView4 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Section 4
          </motion.h1>

          <motion.p
            className="text-sm text-black"
            initial={{ opacity: 0 }}
            animate={isInView4 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip."
          </motion.p>
        </motion.div>
      </section>
      <section className="flex justify-center items-end h-screen">
        <div className="w-full h-[50vh] p-5 rounded-md bg-red-400 backdrop-blur-xl bg-opacity-45 shadow-md overflow-hidden">Footer</div>
      </section>
    </div>
  );
}
