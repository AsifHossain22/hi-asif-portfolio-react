import React, { useState } from "react";

const TimelineEducation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const educationData = [
    {
      id: "education-1",
      subject: "BSc in Artificial Intelligence & Computer Science",
      institute: "University of Birmingham Dubai",
      duration: "Sep, 2025 — Present",
      description: [
        "Data Structures & Algorithms",
        "Databases and Web Programming",
        "Functional Programming",
        "Object-Oriented Programming",
        "Operating Systems and Systems Programming",
        "Theories of Computation",
        "Artificial Intelligence I & II",
        "Computer Systems and Professional Practice",
        "Mathematical and Logical Foundations of Computer Science",
        "Security and Networks",
        "Software Engineering",
        "Computer Science Project",
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
  return (
    <>
      <div className="flex flex-col items-center text-center px-3">
        <h2 className="text-3xl md:text-4xl text-(--text-primary) font-semibold">
          My <span className="text-(--accent-primary)">Education</span>
        </h2>
        <div className="max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left">
          {educationData.map((education, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-linear-to-r from-(--accent-primary) to-(--accent-primary)/25 p-4 rounded"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex flex-col gap-1 w-full">
                  <h2 className="text-sm lg:text-xl">{education.subject}</h2>

                  <div className="flex flex-col lg:flex-row justify-between w-full">
                    <span className="text-xs lg:text-base">
                      {education.institute}
                    </span>
                    <span className="text-xs lg:text-sm whitespace-nowrap">
                      {education.duration}
                    </span>
                  </div>
                </div>

                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  fill="#fa614f"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
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
              </div>
              <div
                className={`text-sm text-(--text-secondary) px-4 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "opacity-100 max-h-96 translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                <ul className="list-disc pl-4">
                  {education.description.map((item, i) => (
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

export default TimelineEducation;
