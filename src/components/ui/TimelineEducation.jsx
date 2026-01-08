import { useState, useCallback, memo } from "react";
import { ChevronDown } from "lucide-react";

// EducationData
const educationData = [
  {
    id: "education-1",
    subject: "BSc in Artificial Intelligence & Computer Science",
    institute: "University of Birmingham Dubai",
    duration: "September, 2025 — Present",
    description: [
      "Data Structures & Algorithms, Databases and Web Programming, Functional Programming, Object-Oriented Programming, Operating Systems and Systems Programming, Theories of Computation, Artificial Intelligence I & II, Computer Systems and Professional Practice, Mathematical and Logical Foundations of Computer Science, Security and Networks, Software Engineering, Computer Science Project.",
    ],
  },
  {
    id: "education-2",
    subject: "HSC - Intermediate",
    institute: "Govt. Devendra College",
    duration: "2017 — 2018",
    description: ["Group of Science"],
  },
  {
    id: "education-3",
    subject: "SSC - Secondary School",
    institute: "Singair Pilot High School",
    duration: "2015 — 2016",
    description: ["Group of Science"],
  },
];

// TimelineItem
const TimelineItem = memo(function TimelineItem({ item, expanded, onToggle }) {
  return (
    <div className="mb-6 border-white/10">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full text-left p-5 rounded-lg bg-(--bg-secondary) border border-white/10"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{item.subject}</h3>
            <p className="text-sm text-(--text-secondary)">{item.institute}</p>
            <p className="text-sm text-(--text-secondary)">{item.duration}</p>
          </div>

          <ChevronDown
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {expanded && (
        <div className="p-5 text-sm text-(--text-secondary)">
          {item.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      )}
    </div>
  );
});

// MainComponent
export default function TimelineEducation() {
  const [expanded, setExpanded] = useState(new Set());

  const toggle = useCallback((id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="border-white/10">
      <h2 className="text-3xl font-bold text-center mb-10">
        My <span className="text-(--accent-primary)">Education</span>
      </h2>

      {educationData.map((item) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={toggle}
        />
      ))}
    </div>
  );
}
