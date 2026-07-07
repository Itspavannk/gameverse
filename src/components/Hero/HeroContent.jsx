import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGamepad,
  FaFire,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

export default function HeroContent() {
  return (
<div className="w-full max-w-xl lg:max-w-xl text-center lg:text-left">
 

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      className="font-['Orbitron']
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
xl:text-8xl
font-black
leading-none
text-white"
      >
        LEVEL UP
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4 }}
className="font-['Orbitron']
mt-2
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
xl:text-7xl
font-black
bg-gradient-to-r
from-cyan-400
via-purple-500
to-pink-500
bg-clip-text
text-transparent"
      >
        YOUR DESTINY
      </motion.h2>

      {/* Animated Text */}
      <div className="font-['Orbitron']
mt-6
lg:mt-8
text-lg
sm:text-xl
lg:text-2xl
text-cyan-300
font-semibold
h-10">
        <TypeAnimation
          sequence={[
            "Explore Infinite Worlds",
            1800,
            "Battle Legendary Bosses",
            1800,
            "Compete With Millions",
            1800,
            "Become A Gaming Legend",
            1800,
          ]}
          wrapper="span"
          repeat={Infinity}
          speed={40}
        />
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1 }}
       className="
mt-6
lg:mt-8
text-gray-300
text-base
sm:text-lg
leading-7
lg:leading-8"
      >
        Experience the future of gaming real-time multiplayer experiences, tournaments,
        AI recommendations and a next-generation gaming community.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.3 }}
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
lg:gap-6
mt-10
lg:mt-12"      >

        <div className="
rounded-2xl
bg-white/5
backdrop-blur-xl
border
border-white/10
p-4
sm:p-5">
          <FaGamepad className="text-cyan-400 text-2xl sm:text-3xl mb-3"/>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">250+</h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Games
          </p>
        </div>

        <div className="
rounded-2xl
bg-white/5
backdrop-blur-xl
border
border-white/10
p-4
sm:p-5">
          <FaUsers className="text-cyan-400 text-2xl sm:text-3xl mb-3"/>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            5M+
          </h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Players
          </p>
        </div>

        <div className="
rounded-2xl
bg-white/5
backdrop-blur-xl
border
border-white/10
p-4
sm:p-5">
          <FaTrophy className="text-cyan-400 text-2xl sm:text-3xl mb-3"/>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            100+
          </h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Tournaments
          </p>
        </div>

      </motion.div>

    </div>
  );
}