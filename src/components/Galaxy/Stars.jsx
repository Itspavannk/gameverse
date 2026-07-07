import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Stars() {
  const starsRef = useRef();

  const { positions, colors } = useMemo(() => {
    const count = 12000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color("#ffffff");
    const color2 = new THREE.Color("#8be9fd");
    const color3 = new THREE.Color("#c084fc");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 600;

      const random = Math.random();
      let color;

      if (random < 0.5) color = color1;
      else if (random < 0.8) color = color2;
      else color = color3;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame(({ clock }) => {
    if (!starsRef.current) return;

    starsRef.current.rotation.y = clock.elapsedTime * 0.004;
    starsRef.current.rotation.x =
      Math.sin(clock.elapsedTime * 0.15) * 0.02;

    starsRef.current.rotation.z = clock.elapsedTime * 0.002;
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />

        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        vertexColors
        size={0.7}
        transparent
        opacity={0.95}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}