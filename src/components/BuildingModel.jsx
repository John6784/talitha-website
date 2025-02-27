"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTexture, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BuildingModel(props) {
  const groupRef = useRef();
  const { nodes } = useGLTF("/building2.glb");
  const bakedBuildingTexture = useTexture("/buiding_bake.jpg");
  const logoTexture2 = useTexture("/logo.png");

  bakedBuildingTexture.flipY = false;
  logoTexture2.flipY = false;

  const [scrollY, setScrollY] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // Track window scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({
        x: (event.clientX / window.innerWidth - 0.5) * 2, // Normalize -1 to 1
        y: -(event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate model based on scroll and cursor
  // useFrame(() => {
  //   if (groupRef.current) {
  //     // Apply scroll-based rotation
  //     groupRef.current.rotation.y = (scrollY / window.innerHeight) * 2;

  //     // Apply slight parallax effect from cursor movement
  //     groupRef.current.rotation.x = cursor.y * 0.1;
  //     groupRef.current.rotation.z = cursor.x * 0.1;
  //     groupRef.current.position.z = cursor.x * 0.5
  //   }
  // });

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Apply scroll-based rotation
      groupRef.current.rotation.y = (1 - scrollY / window.innerHeight) * 2;

      // Apply slight parallax effect from cursor movement
      // state.camera.position.set(Math.sin(cursor.x) * -10, Math.atan(cursor.y * Math.PI * 2) * 5, Math.cos((cursor.x * Math.PI) / 3) * -10)
      state.camera.rotation.y = cursor.x * 0.1
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null} position={[-0.8, -2.7, -2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tahitha_logo.geometry}
        position={[3.416, 3.593, 0.912]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.688}
      >
        <meshBasicMaterial map={logoTexture2} transparent />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.build.geometry}
        material={nodes.build.material}
        position={[3.412, 1.754, 0.811]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.189, 0.189, 0.159]}
      >
        <meshBasicMaterial map={bakedBuildingTexture} transparent />
      </mesh>
    </group>
  );
}

useGLTF.preload("/building2.glb");
