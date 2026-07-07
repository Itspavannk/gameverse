import {
  FaPlay,
  FaHeart,
  FaStar,
  FaGamepad,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function GameSlide({ game }) {
  return (
    <motion.div
      className="game-slide"
      initial={{ opacity: 0, scale: .95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .6 }}
    >
      {/* LEFT COVER */}

      <motion.div
        className="cover-panel"
        whileHover={{
          rotateY: -8,
          rotateX: 5,
          scale: 1.04,
        }}
      >
        <img
          src={game.image}
          alt={game.title}
          className="game-cover"
        />

        <div className="cover-glow" />
      </motion.div>

      {/* RIGHT VIDEO */}

      <div className="video-panel">

        <video
          src={game.video}
          autoPlay
          muted
          loop
          playsInline
          className="game-video"
        />

        {/* DARK GRADIENT */}

        <div className="video-gradient" />

        {/* CONTENT ON VIDEO */}

        <motion.div
          className="video-content"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: .25,
            duration: .6,
          }}
        >

          <div className="top-badges">

            <span className="genre">

              <FaGamepad />

              {game.genre}

            </span>

            <span className="rating">

              <FaStar />

              {game.rating}

            </span>

          </div>

          <h1>

            {game.title}

          </h1>

          <h3>

            {game.studio}

          </h3>

          <p>

            {game.description}

          </p>

          <div className="video-buttons">

            <button className="play-btn">

              <FaPlay />

              Play Now

            </button>

            <button className="wish-btn">

              <FaHeart />

              Wishlist

            </button>

          </div>

        </motion.div>

      </div>

    </motion.div>
  );
}