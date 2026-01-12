import { motion } from "framer-motion";
import sectionHeaderIcon from "../../assets/icons/span-icon.png";
import CoderProfile from "../ui/CoderProfile";
import TabsViewClassic from "../ui/TabsViewClassic";
import MarqueeSkills from "../ui/MarqueeSkills";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaRobot,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="w-[90%] max-w-7xl mx-auto pt-28 flex flex-col gap-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* SectionHeader */}
          <div>
            {/* Titile */}
            <div className="flex justify-center items-center gap-3">
              <h6 className="text-5xl font-bold">
                About <span className="text-(--accent-primary)">Me</span>
              </h6>
              <span className="">
                <img
                  src={sectionHeaderIcon}
                  alt=""
                  className="section-header-icon"
                />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            {/* LeftColumn - ProfileCard */}
            <CoderProfile />
          </div>
          <div className="flex-1">
            {/* RightColum - Tabs */}
            <TabsViewClassic />
          </div>
        </div>

        {/* TechnologiesIMaster */}
        <div>
          <h6 className="text-4xl md:text-5xl text-center font-bold mb-15">
            Technologies I{" "}
            <span className="text-(--accent-primary)">Master</span>
          </h6>
          {/* SkillsMarquee */}
          <MarqueeSkills
            speed={70}
            pauseOnHover
            className="hover:cursor-pointer"
          >
            <FaHtml5 className="text-[#E34F26] text-7xl" />
            <SiMongodb className="text-[#47A248] text-7xl" />
            <SiExpress className="text-(--accent-primary) text-7xl" />
            <FaReact className="text-[#61DAFB] text-7xl" />
            <FaGitAlt className="text-[#F05032] text-7xl" />
            <FaNodeJs className="text-[#339933] text-7xl" />
            <SiTailwindcss className="text-[#38B2AC] text-7xl" />
            <SiPostman className="text-[#FF6C37] text-7xl" />
            <IoLogoFirebase className="text-[#FFCA28] text-7xl" />
            <SiNextdotjs className="text-(--accent-primary) text-7xl" />
            <FaCss3 className="text-[#1572B6] text-7xl" />
            <SiJavascript className="text-[#F7DF1E] text-7xl" />
            <FaRobot className="text-[#FF6F61] text-7xl" />
            <FaGithub className="text-(--accent-primary) text-7xl" />
          </MarqueeSkills>
        </div>
      </div>
    </section>
  );
};

export default About;
