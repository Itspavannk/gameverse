import { useState } from "react";
const BASE = import.meta.env.BASE_URL;

import "./Upcoming.css";

import ReleaseCard from "./ReleaseCard";
import Timeline from "./Timeline";

const games = [
  {
    title: "Grand Theft Auto VI",
    release: "MAY 26",
    releaseDate: "2026-05-26T00:00:00",

    rating: "9.9",

    accent: "#00E5FF",

    image: `${BASE}games/gta6.jpg`,

    video: `${BASE}videos/gta6.mp4`,

    description:
      "Experience Vice City like never before in Rockstar's biggest open world adventure."
  },

  {
    title: "Ghost of Yōtei",

    release: "OCT 02",

    releaseDate: "2025-10-02T00:00:00",

    rating: "9.8",

    accent: "#F97316",

    image: `${BASE}games/ghost.jpg`,

    video: `${BASE}videos/ghost.mp4`,

    description:
      "Forge a new legend across breathtaking landscapes inspired by feudal Japan."
  },

  {
    title: "Resident Evil 9",

    release: "FEB 27",

    releaseDate: "2026-02-27T00:00:00",

    rating: "9.6",

    accent: "#EF4444",

    image: `${BASE}games/re9.jpg`,

    video: `${BASE}videos/re9.mp4`,

    description:
      "A terrifying new survival horror experience built for next-generation consoles."
  },

  {
    title: "Marvel 1943",

    release: "MAR 18",

    releaseDate: "2026-03-18T00:00:00",

    rating: "9.5",

    accent: "#FFD700",

    image: `${BASE}games/marvel1943.jpg`,

    video: `${BASE}videos/marvel1943.mp4`,

    description:
      "Fight across occupied Paris in an epic Marvel adventure."
  },

  {
    title: "The Witcher IV",

    release: "TBA",

    releaseDate: "2026-12-31T00:00:00",

    rating: "9.9",

    accent: "#A855F7",

    image: `${BASE}games/witcher4.jpg`,

    video: `${BASE}videos/witcher4.mp4`,

    description:
      "Begin a brand-new saga in the Witcher universe with stunning visuals."
  },
];

export default function Upcoming() {

  const [activeGame, setActiveGame] = useState(games[0]);

  return (

    <section id="upcoming" className="upcoming-section">

      <div className="upcoming-header">

        <span>

          NEXT GENERATION

        </span>

        <h2>

          Upcoming Releases

        </h2>

        <p>

          Discover the biggest AAA titles launching soon.

        </p>

      </div>

      <ReleaseCard game={activeGame} />

      <Timeline

        games={games}

        activeGame={activeGame}

        setActiveGame={setActiveGame}

      />

    </section>

  );

}