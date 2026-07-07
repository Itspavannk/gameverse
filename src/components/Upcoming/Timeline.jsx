import { motion } from "framer-motion";

export default function Timeline({
  games,
  activeGame,
  setActiveGame,
}) {
  return (
    <div className="timeline">

      <div className="timeline-line" />

      {games.map((game, index) => (

        <motion.div
          key={game.title}
          className={`timeline-item ${
            activeGame.title === game.title
              ? "active"
              : ""
          }`}
          onClick={() => setActiveGame(game)}
          whileHover={{
            y: -8,
            scale: 1.05,
          }}
        >

          <div
            className="timeline-dot"
            style={{
              background: game.accent,
            }}
          />

          <span className="timeline-date">

            {game.release}

          </span>

          <img
            src={game.image}
            alt={game.title}
            className="timeline-cover"
          />

          <h3>

            {game.title}

          </h3>

        </motion.div>

      ))}

    </div>
  );
}