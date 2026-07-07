import "./Platform.css";
import { useState } from "react";
const BASE = import.meta.env.BASE_URL;


import PlatformTabs from "./PlatformTabs";
import PlatformContent from "./PlatformContent";

const platforms = [
  {
    id: "playstation",
    name: "PlayStation",
    color: "#0070F3",
    logo: `${BASE}platforms/playstation.png`,
    controller: `${BASE}platforms/ps-controller.png`,
    description:
      "Experience cinematic exclusives built for PlayStation 5.",

    games: [
      "Marvel's Spider-Man 2",
      "God of War Ragnarök",
      "Ghost of Yōtei",
      "Horizon Forbidden West"
    ]
  },

  {
    id: "xbox",
    name: "Xbox",
    color: "#16A34A",
    logo: `${BASE}platforms/xbox.png`,
    controller: `${BASE}platforms/xbox-controller.png`,

    description:
      "Jump into Game Pass and Microsoft's biggest exclusives.",

    games: [
      "Halo Infinite",
      "Forza Horizon 5",
      "Fable",
      "Gears of War"
    ]
  },

  {
    id: "pc",
    name: "PC Gaming",
    color: "#00E5FF",

    logo: `${BASE}platforms/pc.png`,

    controller: `${BASE}platforms/pc-controller.png`,

    description:
      "Unlimited performance with Steam, Epic and RTX graphics.",

    games: [
      "Cyberpunk 2077",
      "Counter Strike 2",
      "Valorant",
      "Dota 2"
    ]
  },

  {
    id: "nintendo",
    name: "Nintendo",

    color: "#E11D48",

    logo: `${BASE}platforms/nintendo.png`,

    controller: `${BASE}platforms/switch.png`,

    description:
      "Iconic adventures designed for every generation.",

    games: [
      "Zelda",
      "Mario Wonder",
      "Pokémon Legends",
      "Metroid Prime"
    ]
  }
];

export default function PlatformUniverse() {

  const [active, setActive] = useState(platforms[0]);

  return (

    <section
      className="platform-section"
      id="platform"
    >

      <div className="platform-header">

        <span>

          GAMING ECOSYSTEM

        </span>

        <h2>

          Choose Your Platform

        </h2>

        <p>

          Explore every gaming universe from one place.

        </p>

      </div>

      <PlatformTabs

        platforms={platforms}

        active={active}

        setActive={setActive}

      />

      <PlatformContent

        platform={active}

      />

    </section>

  );

}