// SeraUIComponent - TabsViewClassic

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimelineEducation from "./TimelineEducation";
import TimelineExperience from "./TimelineExperience";

export default function TabsViewClassic() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* TabButtons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setActiveTab("experience")}
          className={`p-4 rounded-xl font-medium transition-all
            ${
              activeTab === "experience"
                ? "bg-(--accent-primary) text-white"
                : "bg-(--bg-secondary) border border-(--accent-primary)"
            }`}
        >
          Experience
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`p-4 rounded-xl font-medium transition-all
            ${
              activeTab === "education"
                ? "bg-(--accent-primary) text-white"
                : "bg-(--bg-secondary) border border-(--accent-primary)"
            }`}
        >
          Education
        </button>
      </div>

      {/* AnimatedContent */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="rounded-xl p-6 bg-(--bg-secondary) border border-(--border-color)"
        >
          {activeTab === "experience" && <TimelineExperience />}
          {activeTab === "education" && <TimelineEducation />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
