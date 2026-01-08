import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimelineEducation from "./TimelineEducation";
import TimelineProfessional from "./TimelineProfessional";

export default function TabsViewClassic() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Tab Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-8">
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

        <button
          onClick={() => setActiveTab("professional")}
          className={`p-4 rounded-xl font-medium transition-all
            ${
              activeTab === "professional"
                ? "bg-(--accent-primary) text-white"
                : "bg-(--bg-secondary) border border-(--accent-primary)"
            }`}
        >
          Experience
        </button>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="rounded-xl p-6 bg-(--bg-secondary) border border-(--border-color)"
        >
          {activeTab === "education" && <TimelineEducation />}
          {activeTab === "professional" && <TimelineProfessional />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
