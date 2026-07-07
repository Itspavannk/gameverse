import { motion } from "framer-motion";

export default function PlatformTabs({
  platforms,
  active,
  setActive,
}) {
  return (
    <div className="platform-tabs">

      {platforms.map((platform) => (

<motion.button
  key={platform.id}
  className={`platform-tab ${
    active.id === platform.id ? "active" : ""
  }`}
  onClick={() => setActive(platform)}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
>

  <img
    src={platform.logo}
    className="platform-bg"
    alt={platform.name}
  />

  <div className="platform-overlay"></div>

  <div className="platform-info">

    <h3>{platform.name}</h3>

  </div>

  {active.id === platform.id && (
    <motion.div
      layoutId="platformLine"
      className="platform-line"
      style={{
        background: platform.color,
      }}
    />
  )}

</motion.button>

      ))}

    </div>
  );
}