"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll, Html } from "@react-three/drei";
import { useRouter } from "next/router";
import SectionOverlay from "./sections/SectionOverlay";

function Card({ url, link, scale, ...props }) {
  const visible = useRef(false);
  const [hovered, setHovered] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 2.5,
      4,
      delta
    );
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      hovered ? 1 : 0,
      4,
      delta
    );
  });

  return (
    <group {...props} onClick={() => router.push(link)}>
      <Image
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={scale}
        url={url}
      />
    </group>
  );
}

export default function Cards() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <>
      <Scroll>
        <Card
          url="/division1.jpg"
          link="/division1"
          scale={[w / 3, w / 3, 1]}
          position={[-w / 4, -h * 1, 0]}
        />
        <Card
          url="/division2.jpg"
          link="/division2"
          scale={[w / 3, w / 3, 1]}
          position={[w / 4, -h * 2, 0]}
        />
        <Card
          url="/division3.jpg"
          link="/division3"
          scale={[w / 3, w / 3, 1]}
          position={[-w / 4, -h * 2.5, 0]}
        />
        <Card
          url="/division4.jpg"
          link="/division4"
          scale={[w / 3, w / 3, 1]}
          position={[w / 4, -h * 3.3, 0]}
        />
      </Scroll>
    </>
  );
}
