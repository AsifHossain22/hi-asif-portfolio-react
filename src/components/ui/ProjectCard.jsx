import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-[var(--bg-secondary)] rounded-xl overflow-hidden shadow-lg group"
    >
      {/* Image container */}
      <div className="h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            w-full transition-transform duration-[4000ms]
            group-hover:-translate-y-[60%]
          "
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400">{project.shortDesc}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-[var(--bg-primary)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-3">
          <div className="flex gap-4 text-lg">
            <a href={project.github} target="_blank">
              <FaGithub />
            </a>
            <a href={project.live} target="_blank">
              <FaExternalLinkAlt />
            </a>
          </div>

          <button
            onClick={() => onOpen(project)}
            className="text-sm text-[var(--accent-primary)]"
          >
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
