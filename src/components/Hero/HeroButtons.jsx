import { motion } from "framer-motion";
import { FaPlay, FaRocket } from "react-icons/fa";

export default function HeroButtons() {
  return (
   <div
  className="
  flex
  flex-col
  sm:flex-row
  items-center
  lg:items-start
  gap-4
  sm:gap-6
  w-full
  "
>

      {/* Explore Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 0px 35px rgba(0,229,255,.7)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
        group
        relative
        overflow-hidden
       w-full
sm:w-auto

px-6
sm:px-8

py-3
sm:py-4

rounded-2xl

font-bold

text-base
sm:text-lg
        text-black
        bg-gradient-to-r
        from-cyan-400
        to-blue-500
        shadow-[0_0_40px_rgba(0,229,255,.35)]
        "
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          <FaRocket />
          Explore Universe
        </span>

        {/* Shine Effect */}
        <span
          className="
          absolute
          top-0
          left-[-120%]
          h-full
          w-1/2
          rotate-12
          bg-white/40
          blur-md
          transition-all
          duration-700
          group-hover:left-[120%]
          "
        />
      </motion.button>

      {/* Trailer Button */}
      <motion.button
        whileHover={{
          scale: 1.05,
          borderColor: "#00E5FF",
        }}
        whileTap={{ scale: 0.95 }}
        className="
        group
        relative
        overflow-hidden
w-full
sm:w-auto

px-6
sm:px-8

py-3
sm:py-4

rounded-2xl
        border
        border-white/20
        backdrop-blur-xl
        text-white
        font-semibold
text-base
sm:text-lg
        bg-white/5
        "
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          <FaPlay />
          Watch Trailer
        </span>

        <div
          className="
          absolute
          inset-0
          bg-cyan-500/10
          scale-0
          group-hover:scale-100
          transition-all
          duration-500
          rounded-2xl
          "
        />
      </motion.button>
    </div>
  );
}