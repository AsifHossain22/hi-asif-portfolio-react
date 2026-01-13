import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-(--bg-secondary) rounded-xl overflow-hidden shadow-lg group"
    >
      {/* ImageContainer */}
      <div className="h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full transition-transform duration-5000
            group-hover:-translate-y-[75%]
          "
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400">{project.shortDesc}</p>

        {/* TechStack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-(--bg-primary)"
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
            className="text-sm text-(--accent-primary)"
          >
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
