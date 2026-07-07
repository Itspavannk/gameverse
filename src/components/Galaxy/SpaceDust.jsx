import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SpaceDust() {
  const points = useRef();

  const particles = useMemo(() => {
    const count = 6000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 300;
    }

    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;

    points.current.rotation.y = clock.elapsedTime * 0.01;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.15) * 0.02;
    points.current.rotation.z = clock.elapsedTime * 0.005;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.25}
        color="#ffffff"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}