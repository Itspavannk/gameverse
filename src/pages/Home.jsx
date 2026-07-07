import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Showcase from "../components/Showcase/Showcase";
import GamesGrid from "../components/GamesGrid/GamesGrid";
import Upcoming from "../components/Upcoming/Upcoming";
import PlatformUniverse from "../components/Platform/PlatformUniverse";
import { containerRef } from "../components/Controller3D/FloatingController";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Home() {

  const lockedToRing = useRef(false);

  useEffect(() => {

    const isDesktop = window.innerWidth >= 1200;
const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;
const isMobile = window.innerWidth < 768;

if (isMobile) {
  const container = containerRef.current;

  if (container) {
    container.style.display = "none";
  }

  return;
}

const CONTROLLER = {
  width: isDesktop ? 750 : isTablet ? 520 : 280,
  height: isDesktop ? 550 : isTablet ? 380 : 200,
};

    const HERO_SCROLL  = 1000;
    const START_TOP    = 15;
    const END_TOP      = 35;
    const finalX = isDesktop
  ? -(window.innerWidth * 0.55)
  : isTablet
  ? -(window.innerWidth * 0.35)
  : -(window.innerWidth * 0.15);

    let originalParent = null;

    const lerp = (a, b, t) => a + (b - a) * t;
    const set  = (el, styles) => Object.assign(el.style, styles);

    // Get the ring's current screen center coords
    const getRingCenter = () => {
      const ring = document.getElementById("platform-ring");
      if (!ring) return null;
      const r = ring.getBoundingClientRect();
      return {
        left: r.left + r.width  / 2,
        top:  r.top  + r.height / 2,
      };
    };

    const applyScrollState = (container) => {
      const scrollY = window.scrollY;
      const heroProgress = Math.min(scrollY / HERO_SCROLL, 1);

      const showcase     = document.getElementById("showcase");
      const platform     = document.getElementById("platform");
      const showcaseRect = showcase?.getBoundingClientRect();
      const platformRect = platform?.getBoundingClientRect();

      // ── PLATFORM ZONE ────────────────────────────────────────────
      if (platformRect && platformRect.top < window.innerHeight * 0.7) {

        // raw progress: 0 when platformRect.top = 70vh, 1 when = -30vh
        const raw = Math.min(
          Math.max((window.innerHeight * 0.7 - platformRect.top) / (window.innerHeight * 1.5), 0),
          1
        );
        const progress = raw * raw * (3 - 2 * raw); // smooth step

        // Start: right edge of screen, top-right
        const startLeft = isDesktop
  ? window.innerWidth * 0.82
  : isTablet
  ? window.innerWidth * 0.72
  : window.innerWidth * 0.60;
        const startTop  = window.innerHeight * 0.25;

        // End: ring center (live from DOM so it's always accurate)
        const ring = getRingCenter();
        const endLeft = ring ? ring.left  : window.innerWidth * 0.8;
        const endTop  = ring ? ring.top   : window.innerHeight * 0.5;

        const left = lerp(startLeft, endLeft, progress);
        const top  = lerp(startTop,  endTop,  progress);

        if (progress >= 0.99) {
          // LOCKED — pinned exactly at ring center, no more movement
          lockedToRing.current = true;
          set(container, {
            position:   "fixed",
            left:       `${endLeft}px`,
            top:        `${endTop}px`,
            right:      "auto",
width: `${CONTROLLER.width}px`,
height: `${CONTROLLER.height}px`,
            opacity:    "1",
            visibility: "visible",
            zIndex:     "50",
            transform:  "translate(-50%, -50%) scale(1)",
            transition: "none",
          });
        } else {
lockedToRing.current = false;

const startScale = isDesktop ? 0.5 : isTablet ? 0.45 : 0.4;

set(container, {
    position: "fixed",
    left: `${left}px`,
    top: `${top}px`,
    right: "auto",
    width: `${CONTROLLER.width}px`,
    height: `${CONTROLLER.height}px`,
    opacity: `${Math.min(progress * 2, 1)}`,
    visibility: "visible",
    zIndex: "50",
    transform: `translate(-50%, -50%) scale(${startScale + progress * (1 - startScale)})`,
    transition: "none",
});
        }
        return;
      }

      // Left platform zone — reset lock
      if (lockedToRing.current) lockedToRing.current = false;

      // ── HERO SLIDING ─────────────────────────────────────────────
      if (heroProgress < 1) {
        set(container, {
          position:   "fixed",
          right:      "1%",
          left:       "auto",
          top:        `${lerp(START_TOP, END_TOP, heroProgress)}%`,
width: `${CONTROLLER.width}px`,
height: `${CONTROLLER.height}px`,
          opacity:    "1",
          visibility: "visible",
          zIndex:     "30",
          transform:  `translateX(${finalX * heroProgress}px) scale(1)`,
        });
        return;
      }

      // ── SHOWCASE VISIBLE ─────────────────────────────────────────
      const showcaseBottom = showcaseRect?.bottom ?? 0;

      if (showcaseBottom > window.innerHeight * 1.2) {
        set(container, {
          position:   "fixed",
         left: isDesktop
  ? "-85px"
  : isTablet
  ? "-45px"
  : "-20px",
          top:        "35%",
          right:      "auto",
width: `${CONTROLLER.width}px`,
height: `${CONTROLLER.height}px`,
          opacity:    "1",
          visibility: "visible",
          zIndex:     "30",
          transform:  "none",
        });
        return;
      }

      // ── SHOWCASE FADING (sliding into sections 3-4) ──────────────
      if (showcaseBottom > 0) {
        const fade = Math.min(
          (window.innerHeight - showcaseBottom) / window.innerHeight,
          1
        );
        set(container, {
          position:   "fixed",
         left: isDesktop
  ? "-85px"
  : isTablet
  ? "-45px"
  : "-20px",
          top:        "35%",
width: `${CONTROLLER.width}px`,
height: `${CONTROLLER.height}px`,
          opacity:    `${1 - fade}`,
          visibility: "visible",
          zIndex:     "30",
          transform:  `translateY(${fade * 350}px)`,
        });
        return;
      }

      // ── HIDDEN (sections 3-4, between showcase and platform) ─────
      set(container, {
        opacity:    "0",
        visibility: "hidden",
      });
    };

    let onScroll;

    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      originalParent = container.parentNode;

      // Immediately set to right side so refresh never shows wrong start
      set(container, {
        position:   "fixed",
        right:      "1%",
        left:       "auto",
        top:        `${START_TOP}%`,
width: `${CONTROLLER.width}px`,
height: `${CONTROLLER.height}px`,
        visibility: "visible",
        opacity:    "1",
        transform:  "",
        zIndex:     "30",
      });

      applyScrollState(container);

      onScroll = () => applyScrollState(container);
      window.addEventListener("scroll", onScroll, { passive: true });
    }, 300);

    return () => {
      clearTimeout(timer);
      if (onScroll) window.removeEventListener("scroll", onScroll);
    };

  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <GamesGrid />
      <Upcoming />
      <PlatformUniverse />
      <FAQ />
      <Footer/>
     <ScrollToTop />
    </>
  );
}