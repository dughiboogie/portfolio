/*
"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

function createGradientTexture() {
  // Only run on the client
  if (typeof window !== "undefined") {
    // Create gradient texture dynamically
    const size = 256; // Gradient resolution
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = 1;

    const ctx = canvas.getContext("2d");

    if (ctx == null) {
      return;
    }

    // Create a gradient
    const gradient = ctx.createLinearGradient(0, 0, size, 0);
    gradient.addColorStop(0.3, "black");
    gradient.addColorStop(0.6, "gray");
    gradient.addColorStop(1, "white");

    // Fill canvas with gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, 1);

    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;

    return texture;
  }
}

const gradientTexture = createGradientTexture();

const TriangleMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const material = new THREE.MeshToonMaterial({
    vertexColors: true,
    depthTest: true,
    depthWrite: true,
    gradientMap: gradientTexture,
  });
  const noise2D = createNoise2D(); // Create the noise function

  const colorOptions = [0xffc9b5, 0xf7b1ab, 0x17bebb]; // Three color choices
  const colorOptionsCount = colorOptions.length;

  useEffect(() => {
    const createMesh = () => {
      const width = window.innerWidth / 2; // Full screen width
      const height = window.innerHeight; // Full screen height

      const subdivisions = 50; // Number of triangles (higher = finer mesh)
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

      geometry.rotateX(-Math.PI / 2);

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
      camera={{ position: [0, 0, 0], fov: 75 }}
    >
      <ambientLight color={0x000000} intensity={0.3} />
      <directionalLight position={[20, 20, 10]} intensity={1.2} />
      <TriangleMesh />
    </Canvas>
  );
};

export default App;

*/

"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

// Types for the Plane component
interface PlaneProps {
  size?: [number, number];
  segments?: [number, number];
  noiseScale?: number; // Controls the scale of the noise
  heightScale?: number; // Controls the height of the terrain
}

// Plane component
const Plane: React.FC<PlaneProps> = ({
  size = [50, 50],
  segments = [64, 64],
  noiseScale = 0.2, // Smaller value means smoother noise
  heightScale = 1.5, // Controls the max height of the terrain
}) => {
  const planeRef = useRef<THREE.Mesh>(null);
  const noise2D = createNoise2D();

  const toonMaterial = new THREE.MeshToonMaterial({
    vertexColors: true,
    depthTest: true,
    depthWrite: true,
    // gradientMap: gradientTexture,
  });
  // const colorOptions = [0xffc9b5, 0xf7b1ab, 0x17bebb]; // Three color choices
  // const colorOptionsCount = colorOptions.length;

  // Add random vertex displacement to simulate mountains
  useEffect(() => {
    if (planeRef.current) {
      const planeGeometry = planeRef.current.geometry as THREE.PlaneGeometry;
      const positionAttribute = planeGeometry.attributes.position;

      const colors = [];
      const color = new THREE.Color(32, 19, 53);

      for (let i = 0; i < positionAttribute.count; i++) {
        // Extract x and y positions
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);

        // Generate coherent noise based on x and y
        const z = noise2D(x * noiseScale, y * noiseScale) * heightScale;

        // Set the z position (height) for the vertex
        positionAttribute.setZ(i, z);

        // Assign random color for each triangle face
        // colorIndex = Math.floor(Math.random() * (colorOptionsCount - 0 + 1)) + 0;

        // color.setHex(colorOptions[colorIndex]);
        colors.push(color.r, color.g, color.b);
      }

      positionAttribute.needsUpdate = true; // Update the geometry

      planeGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );
    }
  }, []);

  return (
    <mesh ref={planeRef} rotation-x={-Math.PI / 2} position={[0, -2, 0]}>
      <planeGeometry args={[...size, ...segments]} />
      <primitive attach="material" object={toonMaterial} />
    </mesh>
  );
};

// Lighting component
const Lighting: React.FC = () => {
  return <directionalLight position={[0, 10, 10]} intensity={1} />;
};

// Rotating Camera Component
const RotatingCamera: React.FC = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ camera, clock }) => {
    if (cameraRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const radius = 5; // Distance of the camera from the center
      camera.position.x = Math.cos(elapsedTime * 0.4) * radius; // Slow rotation
      camera.position.y = -0.5;
      camera.position.z = Math.sin(elapsedTime * 0.4) * radius;
      camera.lookAt(0, 0, 0); // Always look at the center of the plane
    }
  });

  return <perspectiveCamera ref={cameraRef} />;
};

// Main Scene component
const Scene: React.FC = () => {
  return (
    <Canvas>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <Lighting />

      {/* Plane Geometry */}
      <Plane />

      {/* Rotating Camera */}
      <RotatingCamera />
    </Canvas>
  );
};

// Page component
const ThreeJSPage: React.FC = () => {
  return (
    <div className="h-screen">
      <Scene />
    </div>
  );
};

export default ThreeJSPage;
