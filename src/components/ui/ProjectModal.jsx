import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/80 z-50 overflow-y-auto"
    >
      <div className="max-w-5xl mx-auto p-6 text-white">
        <button onClick={onClose} className="text-3xl absolute top-6 right-6">
          <IoClose />
        </button>

        <img src={project.image} alt="" className="w-full rounded-xl mb-6" />

        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        <div className="space-y-4">
          <p>
            <strong>Problem:</strong> {project.caseStudy.problem}
          </p>
          <p>
            <strong>Solution:</strong> {project.caseStudy.solution}
          </p>

          <div>
            <strong>Key Features:</strong>
            <ul className="list-disc ml-6">
              {project.caseStudy.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <p>
            <strong>Learnings:</strong> {project.caseStudy.learnings}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModal;
