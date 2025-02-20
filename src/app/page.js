"use client";
import React from "react";
import Navbar from "@/components/NavBar";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false
});

export default function Home() {
  return (
    <main className="h-screen relative bg-amber-50">
      <Scene />
      <Navbar />
    </main>
  );
}
