import { motion } from "framer-motion";
import sectionHeaderIcon from "../../assets/icons/span-icon.png";
import CoderProfile from "../ui/CoderProfile";
import TabsViewClassic from "../ui/TabsViewClassic";
import MarqueeSkills from "../ui/MarqueeSkills";
import { skills } from "../../data/skills";
import SkillPill from "../ui/SkillPill";

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
        <div className="">
          <h6 className="text-4xl md:text-5xl text-center font-bold mb-5">
            Technologies I{" "}
            <span className="text-(--accent-primary)">Master</span>
          </h6>
          {/* SkillsMarquee */}
          <MarqueeSkills
            speed={70}
            pauseOnHover
            className="hover:cursor-pointer"
          >
            <div className="overflow-hidden w-full py-6">
              <div className="flex gap-6 animate-marquee">
                {[...skills, ...skills].map((skill, i) => (
                  <SkillPill key={i} {...skill} />
                ))}
              </div>
            </div>
          </MarqueeSkills>
        </div>
      </div>
    </section>
  );
};

export default About;
