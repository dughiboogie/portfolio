"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

const TriangleMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const material = new THREE.MeshToonMaterial({
    vertexColors: true,
    depthTest: true,
    depthWrite: true,
    gradientMap: THREE.NearestFilter,
  });
  const noise2D = createNoise2D(); // Create the noise function

  const colorOptions = [0xc9f2c7, 0x3b335c, 0xbcabae, 0x323235]; // Four color choices
  const colorOptionsCount = colorOptions.length;

  useEffect(() => {
    const createMesh = () => {
      const width = window.innerWidth; // Full screen width
      const height = window.innerHeight; // Full screen height

      const subdivisions = 15; // Number of triangles (higher = finer mesh)
      const scale = 30; // Adjust bump scale for the terrain effect

      const geometry = new THREE.PlaneGeometry(
        width,
        height,
        subdivisions,
        subdivisions
      ).toNonIndexed();

      const positionAttribute = geometry.getAttribute("position");

      // Apply Simplex noise to vertices to generate bumps
      const vertices = geometry.attributes.position.array;
      const frequency = 0.05; // Frequency of noise (controls bump size)

      // Place vertices
      for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const y = vertices[i + 1];

        // Use noise to generate bumps along the Z axis
        const z = noise2D(x * frequency, y * frequency) * scale;
        vertices[i + 2] += z; // Apply noise-based bump
      }

      const colors = [];
      const color = new THREE.Color();
      let colorIndex;

      // Assign colors to faces
      for (let i = 0; i < positionAttribute.count; i += 3) {
        // Create random color for each triangle face
        colorIndex =
          Math.floor(Math.random() * (colorOptionsCount - 0 + 1)) + 0;

        color.setHex(colorOptions[colorIndex]);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      // Set the geometry and create a Mesh with ToonMaterial
      geometry.computeVertexNormals(); // Recalculate normals for proper lighting
      setGeometry(geometry);
    };

    createMesh();

    // Resize event to ensure the mesh scales with the screen size
    const handleResize = () => {
      createMesh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return geometry ? (
    <mesh ref={meshRef} geometry={geometry} material={material}></mesh>
  ) : null;
};

const App = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 500], fov: 75 }} // Perspective for depth
    >
      <ambientLight color={0x000000} intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <TriangleMesh />
    </Canvas>
  );
};

export default App;
