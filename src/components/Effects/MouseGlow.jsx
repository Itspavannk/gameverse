import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Cyan Glow */}
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        className="
        fixed
        pointer-events-none
        w-[450px]
        h-[450px]
        rounded-full
        -translate-x-1/2
        -translate-y-1/2
        blur-[140px]
        opacity-40
        z-0
        "
      >
        <div
          className="
          w-full
          h-full
          rounded-full
          bg-cyan-400/30
          "
        />
      </motion.div>

      {/* Purple Glow */}
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        className="
        fixed
        pointer-events-none
        w-[700px]
        h-[700px]
        rounded-full
        -translate-x-1/2
        -translate-y-1/2
        blur-[220px]
        opacity-20
        z-0
        "
      >
        <div
          className="
          w-full
          h-full
          rounded-full
          bg-purple-500/30
          "
        />
      </motion.div>
    </>
  );
}