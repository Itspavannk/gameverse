import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export const controllerRef = { current: null };

const BASE = import.meta.env.BASE_URL;

export default function Controller() {
  const moveGroup = useRef();
  const rotateGroup = useRef();

  const { scene } = useGLTF(`${BASE}models/controller.glb`);

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    controllerRef.current = moveGroup.current;

    const handleMouse = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(() => {
    if (!rotateGroup.current) return;

    rotateGroup.current.rotation.y +=
      (mouse.current.x * 0.6 - rotateGroup.current.rotation.y) * 0.08;

    rotateGroup.current.rotation.x +=
      (mouse.current.y * 0.3 - rotateGroup.current.rotation.x) * 0.08;
  });

  return (
    <group
      ref={moveGroup}
      position={[1.2, 0, 1]}
      scale={[1.5, 1.5, 1.5]}
    >
      <group ref={rotateGroup} rotation={[-0.3, Math.PI, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload(`${BASE}models/controller.glb`);