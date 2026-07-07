import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import SpaceDust from "./SpaceDust";
import Stars from "./Stars";
import Nebula from "./Nebula";

function GalaxyScene() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.02;
      group.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Stars
        radius={300}
        depth={80}
        count={15000}
        factor={8}
        saturation={0}
        fade
        speed={0.5}
      />

      <mesh position={[0, 0, -40]}>
        <sphereGeometry args={[80, 64, 64]} />
        <meshBasicMaterial
          color="#18002f"
          transparent
          opacity={0.15}
        />
      </mesh>

      <pointLight
        position={[20, 30, 20]}
        intensity={20}
        color="#6d28d9"
      />

      <pointLight
        position={[-20, -20, 20]}
        intensity={15}
        color="#00e5ff"
      />
    </group>
  );
}

export default function Galaxy() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["#030014"]} />
                <GalaxyScene />
                <Nebula />
                <Stars />
                <SpaceDust />
      </Canvas>
    </div>
  );
}