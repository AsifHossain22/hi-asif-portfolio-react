import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../hooks/animation";

const ServiceCard = ({ title, shortTitle, description, icon: Icon }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [openModal, setOpenModal] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <>
      {/* ServiceCard */}
      <motion.div
        variants={fadeUp}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative w-full max-w-sm h-96 rounded-xl p-0.5 bg-(--bg-secondary) backdrop-blur-md overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        {/* HoverGlow */}
        {visible && (
          <div
            className="pointer-events-none blur-xl bg-linear-to-r from-(--accent-primary) via-(--accent-primary)/50 to-(--bg-primary) absolute z-0"
            style={{
              top: position.y - 120,
              left: position.x - 120,
              width: 240,
              height: 240,
              borderRadius: "50%",
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 bg-(--bg-secondary) p-6 h-full w-full rounded-[10px] flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-(--bg-primary) shadow-md mb-5 text-(--accent-primary)">
            <Icon size={36} />
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-(--text-primary)">{title}</h2>

          {/* ShortTitle */}
          <p className="text-sm text-(--accent-primary) font-medium mb-3">
            {shortTitle}
          </p>

          {/* Description */}
          <p className="text-sm text-(--text-secondary) px-3 line-clamp-4">
            {description}
          </p>

          <span className="mt-auto text-sm text-(--accent-primary) font-medium">
            Click for details →
          </span>
        </div>
      </motion.div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-(--bg-secondary] max-w-lg w-full rounded-xl p-6 relative"
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-4 text-xl text-(--text-primary)"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-(--bg-primary) text-(--accent-primary)">
                <Icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-(--accent-primary)">{shortTitle}</p>
              </div>
            </div>

            <p className="text-sm text-(--text-secondary) leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
