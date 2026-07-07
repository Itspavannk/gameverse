import { Swiper, SwiperSlide } from "swiper/react";
const BASE = import.meta.env.BASE_URL;

import {
  Pagination,
  Autoplay,
 
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import GameSlide from "./GameSlide";

const games = [
  {
    title: "Grand Theft Auto VI",
    studio: "Rockstar Games",
    genre: "Open World",
    rating: "9.9",
    description:
      "Experience Vice City like never before in Rockstar's biggest open-world adventure.",
    image: `${BASE}games/gta6.jpg`,
    video: `${BASE}videos/gta6.mp4`,
  },

  {
    title: "Cyberpunk 2077",
    studio: "CD Projekt RED",
    genre: "RPG",
    rating: "9.7",
    description:
      "Explore Night City with breathtaking visuals and futuristic action.",
    image: `${BASE}games/cyberpunk.jpg`,
    video: `${BASE}videos/cyberpunk.mp4`,
  },

  {
    title: "Black Myth Wukong",
    studio: "Game Science",
    genre: "Action RPG",
    rating: "9.8",
    description:
      "Become the Destined One in one of the most beautiful action RPGs ever created.",
    image: `${BASE}games/wukong.jpg`,
    video: `${BASE}videos/wukong.mp4`,
  },
];

export default function GameCarousel() {
  return (
    <Swiper
      modules={[
        Pagination,
        Autoplay,
       
      ]}
      slidesPerView={1}
      loop
      
      speed={900}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      {games.map((game) => (
        <SwiperSlide key={game.title}>
          <GameSlide game={game} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}