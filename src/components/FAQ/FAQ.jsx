import "./FAQ.css";
import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    icon: "🎮",
    question: "Which gaming platforms are supported?",
    answer:
      "Our ecosystem supports PlayStation, Xbox, Nintendo Switch and PC Gaming with a unified experience.",
  },
  {
    icon: "⚡",
    question: "Can I access games across multiple devices?",
    answer:
      "Yes. Your profile and library stay synchronized across supported devices for a seamless experience.",
  },
  {
    icon: "☁️",
    question: "Do you support cloud gaming?",
    answer:
      "Cloud gaming is available for supported titles depending on your subscription and region.",
  },
  {
    icon: "🛡️",
    question: "Is multiplayer secure?",
    answer:
      "All multiplayer services use secure authentication and encrypted communication for player safety.",
  },
  {
    icon: "🚀",
    question: "How often is new content released?",
    answer:
      "New releases, seasonal events and featured games are added regularly throughout the year.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section">

      <div className="faq-header">

        <span>SUPPORT</span>

        <h2>
          Frequently Asked
          <br />
          Questions
        </h2>

        <p>
          Everything you need to know about our gaming ecosystem.
        </p>

      </div>

      <div className="faq-list">

        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            open={open === index}
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          />
        ))}

      </div>

      <div className="faq-bottom">

        <h3>Still have questions?</h3>

        <p>
          Our gaming specialists are ready to help anytime.
        </p>

        <button>
          Contact Support
        </button>

      </div>

    </section>
  );
}