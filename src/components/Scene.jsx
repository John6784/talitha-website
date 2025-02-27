"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import SectionOverlay from "./sections/SectionOverlay";
import { Perf } from "r3f-perf";
import { BuildingModel } from "./BuildingModel";
import { ScrollControls } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        flat
        camera={{ fov: 40, near: 0.1, far: 200 }}
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        className=""
      >
        {/* <Perf position="bottom-right"/> */}
        <color />
        <ScrollControls pages={4}>
          <BuildingModel />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
