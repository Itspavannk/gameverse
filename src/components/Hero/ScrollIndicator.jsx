import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.4, 1, 0.4],
        y: [0, 12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center cursor-pointer"
      onClick={scrollToNext}
    >
      {/* Mouse */}
      <div className="relative flex items-start justify-center w-8 h-14 rounded-full border-2 border-cyan-400/80 backdrop-blur-xl bg-white/5 shadow-[0_0_25px_rgba(0,229,255,.25)]">

        {/* Scroll Dot */}
        <motion.div
          animate={{
            y: [4, 20, 4],
            opacity: [1, 0.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="w-2 h-2 mt-2 rounded-full bg-cyan-400"
        />
      </div>

      {/* Text */}
      <motion.span
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mt-4 text-xs tracking-[0.35em] text-cyan-300 uppercase"
      >
        Scroll
      </motion.span>

      {/* Arrow */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
        }}
        className="mt-2 text-cyan-400 text-lg"
      >
        <FaChevronDown />
      </motion.div>
    </motion.div>
  );
}