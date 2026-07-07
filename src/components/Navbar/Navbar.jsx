import { Link,} from "react-router-dom";
import { FaGamepad, FaSearch, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";import { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import "./Navbar.css";

export default function Navbar() {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const visible = useRef(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY < 80) {
        // Always show at top of page
        show();
      } else if (diff > 8 && visible.current) {
        // Scrolling down — hide
        hide();
      } else if (diff < -8 && !visible.current) {
        // Scrolling up — show
        show();
      }

      lastScrollY.current = currentY;
    };

    const hide = () => {
      if (!navRef.current) return;
      navRef.current.style.transform = "translateX(-50%) translateY(-120px)";
      navRef.current.style.opacity = "0";
      visible.current = false;
    };

    const show = () => {
      if (!navRef.current) return;
      navRef.current.style.transform = "translateX(-50%) translateY(0px)";
      navRef.current.style.opacity = "1";
      visible.current = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (!section) return;

  const offset = 100;

  window.scrollTo({
    top: section.offsetTop - offset,
    behavior: "smooth",
  });

  setMenuOpen(false);
};

  return (
    <motion.nav
      ref={navRef}
      className="navbar"
      style={{
        x: "-50%",
        transition: "transform 0.4s ease, opacity 0.4s ease",
      }}
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">

        <Link to="/" className="logo">
          <FaGamepad />
          <span>GAMEVERSE</span>
        </Link>

<div className="nav-links">

  <button onClick={() => scrollToSection("home")}>
    Home
  </button>

  <button onClick={() => scrollToSection("showcase")}>
    Showcase
  </button>

  <button onClick={() => scrollToSection("games")}>
    Games
  </button>

  <button onClick={() => scrollToSection("upcoming")}>
    Upcoming
  </button>

  <button onClick={() => scrollToSection("platform")}>
    Platform
  </button>

</div>

<div className="nav-icons">
  <button className="icon-btn">
    <FaSearch />
  </button>

  <button className="icon-btn">
    <FaUserCircle />
  </button>
</div>

{/* Mobile Menu Button */}
<button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>

           </div>

<AnimatePresence>
  {menuOpen && (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0, y: -25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <button onClick={() => scrollToSection("home")}>
        Home
      </button>

      <button onClick={() => scrollToSection("showcase")}>
        Showcase
      </button>

      <button onClick={() => scrollToSection("games")}>
        Games
      </button>

      <button onClick={() => scrollToSection("upcoming")}>
        Upcoming
      </button>

      <button onClick={() => scrollToSection("platform")}>
        Platform
      </button>
      
    </motion.div>
  )}
</AnimatePresence>

    </motion.nav>
  );
}