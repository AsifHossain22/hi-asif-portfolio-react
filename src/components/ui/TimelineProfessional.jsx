import { useState, useCallback, memo } from "react";
import { ChevronDown } from "lucide-react";
import experienceData from "../../data/experienceData";

// TimelineItem
const TimelineItem = memo(function TimelineItem({ item, expanded, onToggle }) {
  return (
    <div className="mb-6">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full text-left p-5 rounded-lg bg-(--bg-secondary) border border-white/10"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{item.role}</h3>
            <p className="text-sm text-(--text-secondary)">{item.duration}</p>
            <p className="text-sm text-(--text-secondary)">
              {item.description}
            </p>
          </div>

          <ChevronDown
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {expanded && (
        <div className="p-5 text-sm text-(--text-secondary)">
          {item.keyPoints.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      )}
    </div>
  );
});

// MainComponent
export default function TimelineProfessional() {
  const [expanded, setExpanded] = useState(new Set());

  const toggle = useCallback((id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10">
        My <span className="text-(--accent-primary)">Experience</span>
      </h2>

      {experienceData.map((item) => (
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
