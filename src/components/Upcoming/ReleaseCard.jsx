import { motion } from "framer-motion";
import {
  FaPlay,
  FaHeart,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

import Countdown from "./Countdown";

export default function ReleaseCard({ game }) {
  return (
    <motion.div
      className="release-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Trailer */}

      <video
        className="release-video"
        src={game.video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}

      <div className="release-overlay" />

      {/* Glow */}

      <div
        className="release-glow"
        style={{
          background: game.accent,
        }}
      />

      {/* Content */}

      <div className="release-content">

        <span className="release-tag">
          UPCOMING RELEASE
        </span>

        <h1>{game.title}</h1>

        <div className="release-info">

          <span>

            <FaStar />

            {game.rating}

          </span>

          <span>

            <FaCalendarAlt />

            {game.release}

          </span>

        </div>

        <p>

          {game.description}

        </p>

        <Countdown targetDate={game.releaseDate} />

        <div className="release-buttons">

          <button className="preorder-btn">

            <FaPlay />

            PRE-ORDER

          </button>

          <button className="wishlist-btn">

            <FaHeart />

            WISHLIST

          </button>

        </div>

      </div>

    </motion.div>
  );
}