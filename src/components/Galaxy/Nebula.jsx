import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Nebula() {
  const nebula = useRef();

  useFrame(({ clock }) => {
    if (!nebula.current) return;

    nebula.current.rotation.z = clock.elapsedTime * 0.02;
    nebula.current.rotation.y = clock.elapsedTime * 0.03;

    const scale = 1 + Math.sin(clock.elapsedTime * 0.5) * 0.03;
    nebula.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={nebula}>
      {/* Purple Nebula */}
      <mesh position={[-18, 10, -45]}>
        <sphereGeometry args={[14, 64, 64]} />
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Cyan Nebula */}
      <mesh position={[20, -8, -35]}>
        <sphereGeometry args={[10, 64, 64]} />
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Pink Nebula */}
      <mesh position={[0, 18, -55]}>
        <sphereGeometry args={[18, 64, 64]} />
        <meshBasicMaterial
          color="#FF3CAC"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Blue Glow */}
      <pointLight
        position={[15, 8, -20]}
        intensity={18}
        color="#00E5FF"
      />

      {/* Purple Glow */}
      <pointLight
        position={[-15, 12, -30]}
        intensity={20}
        color="#7C3AED"
      />

      {/* Pink Glow */}
      <pointLight
        position={[0, 20, -40]}
        intensity={15}
        color="#FF3CAC"
      />
    </group>
  );
}