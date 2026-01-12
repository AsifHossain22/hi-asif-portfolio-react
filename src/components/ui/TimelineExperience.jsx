import React, { useState } from "react";
import { experienceData } from "../../data/experienceData";

const TimelineExperience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="flex flex-col items-center text-center px-3">
        <h2 className="text-3xl md:text-4xl text-(--text-primary) font-semibold">
          My <span className="text-(--accent-primary)">Experience</span>
        </h2>
        <div className="max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left">
          {experienceData.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col items-start w-full"
            >
              <button
                className="flex items-center justify-between w-full cursor-pointer bg-linear-to-r from-(--accent-primary) to-(--accent-primary)/25 p-4 rounded text-left"
                onClick={() =>
                  setOpenIndex(
                    openIndex === experience.id ? null : experience.id
                  )
                }
              >
                {/* ExperienceItem */}
                <div className="flex flex-col gap-1 w-full">
                  <h2 className="text-sm lg:text-xl">{experience.subject}</h2>

                  <p className="flex flex-col lg:flex-row justify-between w-full">
                    <span className="text-xs lg:text-base">
                      {experience.institute}
                    </span>
                    <span className="text-xs lg:text-sm whitespace-nowrap">
                      {experience.duration}
                    </span>
                  </p>
                </div>

                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  fill="#fa614f"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === experience.id ? "rotate-180" : ""
                  } transition-all duration-300`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke=""
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`text-sm text-(--text-secondary) px-4 overflow-hidden transition-all duration-300 ${
                  openIndex === experience.id
                    ? "opacity-100 max-h-96 translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {/* ExperienceDescriptionItem */}
                <ul className="list-disc pl-4">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelineExperience;
