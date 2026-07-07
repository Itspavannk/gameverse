import "./Showcase.css";
import GameCarousel from "./GameCarousel";

export default function Showcase() {
  return (
    <section className="showcase" id="showcase">

      <div className="showcase-left">
        <div
    className="controller-placeholder"
    id="showcase-controller-target"
>
        </div>
      </div>

      {/* Right Side */}
      <div className="showcase-right">
        <span className="section-tag">FEATURED COLLECTION</span>

        <h2>
          Discover The
          <br />
          Next Generation
          <br />
          Of Gaming
        </h2>

        <GameCarousel />
      </div>

    </section>
  );
}