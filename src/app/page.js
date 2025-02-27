"use client";
import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import SectionOverlay from "@/components/sections/SectionOverlay";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
    <SectionOverlay />
      {/* <Scene /> */}
    </main>
  );
}
