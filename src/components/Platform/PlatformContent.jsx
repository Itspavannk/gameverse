import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function PlatformContent({ platform }) {
  return (
    <motion.div
      key={platform.id}
      className="platform-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* LEFT SIDE */}

      <div className="platform-left">

        <span
          className="platform-badge"
          style={{ color: platform.color }}
        >
          {platform.name.toUpperCase()}
        </span>

        <h2>{platform.name}</h2>

        <p>{platform.description}</p>

        <div className="platform-games">

          {platform.games.map((game) => (

            <div
              key={game}
              className="platform-game"
            >
              <FaCheckCircle
                style={{ color: platform.color }}
              />

              <span>{game}</span>

            </div>

          ))}

        </div>

        <button
          className="platform-btn"
          style={{
            background: platform.color,
          }}
        >
          Explore Platform

          <FaArrowRight />

        </button>

      </div>

      {/* CENTER */}

      <div className="platform-center">

        <div
id="platform-ring"
className="controller-ring"
          style={{
            borderColor: platform.color,
            boxShadow: `0 0 60px ${platform.color}33`,
          }}
        >

          <div
            className="controller-glow"
            style={{
              background: platform.color,
            }}
          />

          {/* Controller will come here */}

          <div id="platform-controller-target"></div>

        </div>

      </div>


    </motion.div>
  );
}