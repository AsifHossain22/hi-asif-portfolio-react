import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { motion } from "framer-motion";

import { useState } from "react";
import projectsData from "../../data/projectData";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-28">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* SectionHeader */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-(--accent-primary)">Projects</span>
        </h2>

        {/* ProjectsSlider */}
        <Swiper
          // modules={[Autoplay]}
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} onOpen={setActiveProject} />
              </SwiperSlide>
            ))}
          </motion.div>
        </Swiper>

        {/* Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
