import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

export default function FAQItem({ faq, open, onClick }) {
  return (
    <motion.div
      className={`faq-card ${open ? "active" : ""}`}
      layout
      transition={{ duration: 0.45 }}
    >
      <button
        className="faq-question"
        onClick={onClick}
      >
        <div className="faq-left">

          <span className="faq-icon">
            {faq.icon}
          </span>

          <h3>
            {faq.question}
          </h3>

        </div>

        <motion.div
          className="faq-plus"
          animate={{
            rotate: open ? 45 : 0,
          }}
          transition={{
            duration: 0.35,
          }}
        >
          <FaPlus />
        </motion.div>
      </button>

      <AnimatePresence>

        {open && (

          <motion.div
            className="faq-answer"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <p>
              {faq.answer}
            </p>
          </motion.div>

        )}

      </AnimatePresence>
    </motion.div>
  );
}