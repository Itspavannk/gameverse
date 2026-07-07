import { motion } from "framer-motion";

import Galaxy from "../Galaxy/Galaxy";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "./ScrollIndicator";
import Particles from "../Effects/Particles";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#030014] pt-32">

      {/* Galaxy Background */}
      <Galaxy />
      <Particles />

      {/* Purple Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-600/20 blur-[180px]" />

      {/* Cyan Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Pink Glow */}
      <div className="absolute top-1/2 left-[-120px] w-[350px] h-[350px] rounded-full bg-pink-500/20 blur-[120px]" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero Container */}
      <div
        className="
          relative z-20
          max-w-[1600px] mx-auto
          min-h-screen
          flex flex-col lg:flex-row
          items-center
          justify-center lg:justify-between
          px-6 sm:px-8 lg:px-20
          pt-10 lg:pt-0
        "
      >

        {/* Left Side */}
        <motion.div
          className="
            w-full lg:w-[45%]
            flex flex-col
            justify-center
            items-center lg:items-start
            text-center lg:text-left
          "
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroContent />

          <div className="mt-10">
            <HeroButtons />
          </div>
        </motion.div>

        {/* Desktop Decorative Rings */}
        <motion.div
          className="
            hidden lg:flex
            w-[35%]
            justify-center
            items-start
            relative
            -mt-72
          "
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[520px] h-[520px] rounded-full border border-cyan-400/30"
            />

            {/* Spacer */}
            <div className="w-[520px] h-[520px]" />

          </div>

        </motion.div>

      </div>

      <ScrollIndicator />

    </section>
  );
}