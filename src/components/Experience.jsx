"use client";
import { Scroll, ScrollControls } from "@react-three/drei";
import { BuildingModel } from "./BuildingModel";
import { Suspense, useState } from "react";
import Cards from "./Card";
import HeroSection from "./sections/HeroSection";
import SectionOverlay from "./sections/SectionOverlay";

export default function Experience() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollControls damping={1} pages={6}>
          <Cards />
          <Scroll html>
            <SectionOverlay />
          </Scroll>{" "}
          <BuildingModel scale={2} position={[-4, -6, -7]} />
        </ScrollControls>
      </Suspense>
    </>
  );
}
