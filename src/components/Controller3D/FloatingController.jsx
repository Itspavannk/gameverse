import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Controller from "./Controller";

export const containerRef = { current: null };

export default function FloatingController() {
  const divRef = useRef(null);

  useEffect(() => {
    containerRef.current = divRef.current;
  }, []);

  return (
    <div
      ref={divRef}
      id="controller-container"
      style={{
        position: "fixed",
        right: "1%",
        top: "15%",
        width: "750px",
        height: "550px",
        pointerEvents: "none",
        zIndex: 30,
        visibility: "hidden", // hidden until Home.jsx positions it correctly on mount
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <pointLight position={[5, 2, 5]} intensity={25} color="#00E5FF" />
        <pointLight position={[-5, -2, 5]} intensity={20} color="#A855F7" />
        <Controller />
      </Canvas>
    </div>
  );
}