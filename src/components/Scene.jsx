"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import SectionOverlay from "./sections/SectionOverlay";
import { Perf } from "r3f-perf";

export default function Scene() {
  return (
    <>
      <Canvas flat camera={{ fov: 25, near: 0.1, far: 200 }}>
      <Perf />
        <color attach="background" args={["#F3EDDB"]} />
        <Experience />
      </Canvas>
    </>
  );
}
