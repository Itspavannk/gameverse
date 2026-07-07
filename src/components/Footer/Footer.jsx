import "./Footer.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Background Glow */}
      <div className="footer-bg"></div>
      <div className="footer-grid"></div>

      <div className="footer-container">

        {/* Newsletter */}
        <div className="newsletter">

          <span className="footer-tag">
            JOIN THE GAMEVERSE
          </span>

          <h2>
            Ready For Your Next Adventure?
          </h2>

          <p>
            Get exclusive gaming news, platform updates,
            tournaments and early access directly to your inbox.
          </p>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email..."
            />

            <button>
              Join Now
              <FaArrowRight />
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="footer-divider"></div>

        {/* Main Footer */}

        <div className="footer-main">

          {/* Brand */}

          <div className="footer-brand">

            <h2>GAMEVERSE</h2>

            <p>
              Explore every gaming universe from one premium platform.
            </p>

          </div>

          {/* Explore */}

          <div className="footer-column">

            <h3>Explore</h3>

            <a href="#">Games</a>
            <a href="#">Platforms</a>
            <a href="#">News</a>
            <a href="#">Reviews</a>

          </div>

          {/* Community */}

          <div className="footer-column">

            <h3>Community</h3>

            <a href="#">Discord</a>
            <a href="#">Forums</a>
            <a href="#">Leaderboard</a>
            <a href="#">Events</a>

          </div>

          {/* Support */}

          <div className="footer-column">

            <h3>Support</h3>

            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>

          </div>

        </div>

        {/* Divider */}

        <div className="footer-divider"></div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © 2026 GAMEVERSE • Built for Gamers Worldwide
          </p>

<div className="footer-social">

  <a
    href="https://www.instagram.com/its_pavan_nk/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://wa.me/918310511024"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://x.com/PavanNa51774169"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://www.youtube.com/@PavanNaik-ye9pd"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>

  <a
    href="https://github.com/Itspavannk"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

</div>

        </div>

      </div>

    </footer>
  );
}