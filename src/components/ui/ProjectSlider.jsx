import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ProjectCard = ({ project, onOpen }) => {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ rotateX: 4, rotateY: -4, y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="
        relative bg-(--bg-secondary)
        rounded-xl p-6 shadow-lg
        overflow-hidden cursor-pointer
        h-full flex flex-col
      "
      onClick={() => onOpen(project)}
    >
      {/* Hover Glow */}
      {hovered && (
        <div
          className="absolute z-0 blur-2xl bg-(--accent-primary)/30"
          style={{
            top: pos.y - 120,
            left: pos.x - 120,
            width: 240,
            height: 240,
            borderRadius: "50%",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full gap-4">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="rounded-lg h-44 w-full object-cover"
        />

        <h3 className="text-lg font-semibold text-(--text-primary)">
          {project.title}
        </h3>

        <p className="text-sm text-(--text-secondary)">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-(--accent-primary)/10 text-(--accent-primary)"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
