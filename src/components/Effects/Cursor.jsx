import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="
        fixed
        top-0
        left-0
        w-5
        h-5
        rounded-full
        pointer-events-none
        -translate-x-1/2
        -translate-y-1/2
        border
        border-cyan-400/60
        shadow-[0_0_40px_rgba(0,229,255,.6)]
        backdrop-blur-xl
        z-[9999]
        mix-blend-screen
        "
      />

      {/* Inner Core */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="
        fixed
        top-0
        left-0
        w-1.5
        h-1.5
        rounded-full
        bg-cyan-400
        shadow-[0_0_20px_rgba(0,229,255,.9)]
        pointer-events-none
        -translate-x-1/2
        -translate-y-1/2
        z-[99999]
        "
      />
    </>
  );
}