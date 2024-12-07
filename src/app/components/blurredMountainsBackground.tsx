"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

const Mountains: React.FC = () => {
  const noise2D = createNoise2D();

  // Precompute geometry and noise only once
  const geometry = useMemo(() => {
    const mountainsGeometry = new THREE.PlaneGeometry(30, 30, 32, 32);
    const positionAttribute = mountainsGeometry.attributes.position;

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);

      // Generate noise for height displacement
      const z = noise2D(x * 0.2, y * 0.2) * 1.5;
      positionAttribute.setZ(i, z);
    }

    positionAttribute.needsUpdate = true; // Mark the geometry as updated
    mountainsGeometry.computeVertexNormals(); // Recompute normals for lighting

    return mountainsGeometry;
  }, [noise2D]);

  // Precompute wireframe geometry only once
  const wireframeGeometry = useMemo(() => {
    return new THREE.WireframeGeometry(geometry);
  }, [geometry]);

  return (
    <>
      {/* Base plane with solid purple color */}
      <mesh
        geometry={geometry}
        rotation-x={-Math.PI / 2}
        position={[0, -2, 0]}
        frustumCulled={true}
      >
        <meshToonMaterial
          color="#800080"
          polygonOffset={true} // Enable polygon offset
          polygonOffsetFactor={0} // Adjust how much to push the wireframe
          polygonOffsetUnits={1} // Controls how much the offset is applied
        />
      </mesh>

      {/* Wireframe with polygonOffset to avoid z-fighting */}
      <lineSegments
        geometry={wireframeGeometry}
        rotation-x={-Math.PI / 2}
        position={[0, -2, 0]}
        frustumCulled={true}
      >
        <lineBasicMaterial
          color="#00ffcc"
          polygonOffset={true} // Enable polygon offset
          polygonOffsetFactor={10} // Adjust how much to push the wireframe
          polygonOffsetUnits={10} // Controls how much the offset is applied
        />
      </lineSegments>
    </>
  );
};

const Stars: React.FC = () => {
  // Generate stars (random points in the sky)
  const starCount = 1000;
  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < starCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 100, // Random X position
        (Math.random() - 0.5) * 100, // Random Y position
        (Math.random() - 0.5) * 100 // Random Z position
      );
    }
    return new Float32Array(positions);
  }, []);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starPositions, 3)
  );

  const starMinSize = 0.02;
  const starMaxSize = 0.2;
  const starMinOpacity = 0.7;
  const starMaxOpacity = 0.9;

  return (
    <points>
      <primitive object={geometry} />
      <pointsMaterial
        size={Math.random() * (starMaxSize - starMinSize) + starMinSize}
        color="#ffffff"
        transparent
        opacity={
          Math.random() * (starMaxOpacity - starMinOpacity) + starMinOpacity
        }
      />
    </points>
  );
};

const Atmosphere: React.FC = () => {
  // Create a sphere with a gradient texture for the atmosphere
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    if (ctx == null) {
      return;
    }

    // Create a radial gradient for the atmosphere (from dark to light)
    const gradient = ctx.createRadialGradient(0.5, 0.5, 0.3, 0.5, 0.5, 1);
    gradient.addColorStop(0, "#000000"); // Dark color at the bottom (ground)
    gradient.addColorStop(0.6, "#050505"); // Darker towards the horizon
    gradient.addColorStop(1, "#202020"); // Lighter at the top, still dark

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <mesh>
      <sphereGeometry args={[100, 32, 32]} />
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide} // Make the sphere "inside out" to show the atmosphere
        transparent={true}
        opacity={0.6} // Slightly more opaque to see the gradient better
      />
    </mesh>
  );
};

const Lighting: React.FC = () => {
  return (
    <>
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.2} color="#ffffff" />

      {/* Directional light for depth and highlights */}
      <directionalLight
        position={[120, 100, 0]}
        intensity={0.8}
        color="#ffffff"
      />
    </>
  );
};

// Rotating Camera Component
const RotatingCamera: React.FC = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ camera, clock }) => {
    if (cameraRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const radius = 5; // Distance of the camera from the center
      camera.position.x = Math.cos(elapsedTime * 0.02) * radius; // Slow rotation
      camera.position.y = -0.5;
      camera.position.z = Math.sin(elapsedTime * 0.02) * radius;
      camera.lookAt(0, 0, 0); // Always look at the center of the plane
    }
  });

  return <perspectiveCamera ref={cameraRef} />;
};

const Scene: React.FC = () => {
  return (
    <Canvas gl={{ antialias: true, powerPreference: "high-performance" }}>
      <Lighting />
      <Mountains />
      <Stars />
      <Atmosphere />
      <RotatingCamera />
    </Canvas>
  );
};

const BlurredMountainsBackground: React.FC = () => {
  return (
    <div className="absolute w-screen h-screen bg-black">
      {/* Background Component */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-sm z-10" />
    </div>
  );
};

export default BlurredMountainsBackground;
