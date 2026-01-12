import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;

      // smooth threshold with hysteresis
      if (currentScroll > 350 && !visible) {
        setVisible(true);
      } else if (currentScroll < 200 && visible) {
        setVisible(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Scroll to top"
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.92 }}
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 24,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 24,
            filter: "blur(6px)",
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          className="
            fixed bottom-20 md:bottom-6 right-6 z-50
            h-12 w-12
            flex items-center justify-center
            rounded-xl
            bg-(--accent-primary)
            text-(--text-inverted)
            shadow-lg
            cursor-pointer cta-primary
          "
        >
          {/* Icon */}
          <motion.span className="relative">
            <FaArrowUp size={18} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
