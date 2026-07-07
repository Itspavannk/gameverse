import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./GamesGrid.css";
const BASE = import.meta.env.BASE_URL;

const games = [
  {
    id: 1,
    title: "Elden Ring",
    studio: "FromSoftware",
    genre: "Action RPG",
    rating: "9.8",
    year: "2022",
    tag: "GOTY",
    tagColor: "#FFD700",
    accent: "#C084FC",
    image: `${BASE}games/eldenring.jpg`,
    description: "An open-world masterpiece forged from darkness and legend.",
    size: "large",
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    studio: "CD Projekt RED",
    genre: "RPG",
    rating: "9.7",
    year: "2020",
    tag: "TRENDING",
    tagColor: "#00E5FF",
    accent: "#00E5FF",
    image: `${BASE}games/eldenring.jpg`,
    description: "Neon-drenched open world of crime and corporate warfare.",
    size: "medium",
  },
  {
    id: 3,
    title: "Black Myth: Wukong",
    studio: "Game Science",
    genre: "Action",
    rating: "9.6",
    year: "2024",
    tag: "NEW",
    tagColor: "#4ADE80",
    accent: "#4ADE80",
    image: `${BASE}games/eldenring.jpg`,
    description: "Ancient mythology reimagined through breathtaking action.",
    size: "medium",
  },
    {
    id: 6,
    title: "Baldur's Gate 3",
    studio: "Larian Studios",
    genre: "RPG",
    rating: "9.9",
    year: "2023",
    tag: "MASTERPIECE",
    tagColor: "#A78BFA",
    accent: "#A78BFA",
    image: `${BASE}games/eldenring.jpg`,
    description: "The definitive RPG of a generation. Every choice matters.",
    size: "small",
  },
  {
    id: 4,
    title: "Grand Theft Auto VI",
    studio: "Rockstar Games",
    genre: "Open World",
    rating: "???",
    year: "2025",
    tag: "COMING SOON",
    tagColor: "#F97316",
    accent: "#F97316",
    image: `${BASE}games/eldenring.jpg`,
    description: "Return to Vice City in Rockstar's most ambitious world yet.",
    size: "wide",
  },
  {
    id: 5,
    title: "Valorant",
    studio: "Riot Games",
    genre: "Tactical FPS",
    rating: "9.2",
    year: "2020",
    tag: "ESPORTS",
    tagColor: "#FF4655",
    accent: "#FF4655",
    image: `${BASE}games/eldenring.jpg`,
    description: "Precision gunplay meets tactical hero abilities.",
    size: "small",
  },

];

function GameCard({ game, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`gc-card gc-card--${game.size}`}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ "--accent": game.accent }}
    >
      {/* Image */}
      <div className="gc-card__bg">
        <img
          src={game.image}
          alt={game.title}
          className="gc-card__img"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1.0)" }}
        />
      </div>

      {/* Gradients */}
      <div className="gc-card__gradient" />
      <div
        className="gc-card__glow"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at 50% 110%, ${game.accent}40 0%, transparent 65%)`,
        }}
      />
      <div className="gc-card__shimmer" style={{ opacity: hovered ? 1 : 0 }} />

      {/* Top row */}
      <div className="gc-card__top">
        <span
          className="gc-card__tag"
          style={{
            color: game.tagColor,
            borderColor: `${game.tagColor}55`,
            background: `${game.tagColor}15`,
          }}
        >
          {game.tag}
        </span>
        <span className="gc-card__year">{game.year}</span>
      </div>

      {/* Bottom content */}
      <div className="gc-card__content">
        <div className="gc-card__genre" style={{ color: game.accent }}>
          {game.genre}
        </div>

        <h3 className="gc-card__title">{game.title}</h3>

        <p
          className="gc-card__desc"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {game.description}
        </p>

        <div className="gc-card__footer">
          <span className="gc-card__studio">{game.studio}</span>
          <span
            className="gc-card__rating"
            style={{ color: game.accent, borderColor: `${game.accent}44` }}
          >
            ★ {game.rating}
          </span>
        </div>

        <button
          className="gc-card__cta"
          style={{
            opacity: hovered ? 1 : 0,
            background: game.accent,
            transform: hovered ? "translateY(0)" : "translateY(14px)",
          }}
        >
          Play Now →
        </button>
      </div>

      {/* Border */}
      <div
        className="gc-card__border"
        style={{
          borderColor: hovered ? `${game.accent}70` : "rgba(255,255,255,0.06)",
        }}
      />
    </motion.div>
  );
}

export default function GamesGrid() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="gc-section" id="games">

      {/* Header */}
      <div className="gc-header" ref={headerRef}>
        <motion.div
          className="gc-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          animate={headerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gc-line" />
          GAME VAULT
          <span className="gc-line gc-line--right" />
        </motion.div>

        <motion.h2
          className="gc-title"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          THE GREATEST
          <br />
          <span className="gc-title--grad">GAMES EVER</span>
          <br />
          CRAFTED
        </motion.h2>

        <motion.p
          className="gc-sub"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Handpicked by our community of 5M+ players. Only the elite make the cut.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="gc-grid">
        {games.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        className="gc-footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <button className="gc-btn">
          Explore All 250+ Games <span>→</span>
        </button>
      </motion.div>

    </section>
  );
}