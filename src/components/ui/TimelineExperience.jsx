import React, { useState } from "react";

const TimelineExperience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const experienceData = [
    // {
    //   id: "experience-1",
    //   subject: "Full Stack Developer & Continuous Learner",
    //   institute: "Independent Learning & Experimentation",
    //   duration: "Ongoing",
    //   description: [
    //     "Continuously learning modern web technologies and best practices",
    //     "Experimenting with Next.js, AI tools and performance optimization techniques",
    //     "Refactoring code to improve readability, scalability and maintainability",
    //     "Building real-world inspired projects to solve practical problems",
    //     "Actively improving problem-solving and debugging skills",
    //   ],
    // },
    {
      id: "experience-2",
      subject: "MERN Stack Developer (Project-Based Learning)",
      institute: "Self-Learning & Real-World Practice",
      duration: "Ongoing",
      description: [
        "Built full-stack applications using MongoDB, Express.js, React and Node.js",
        "Designed RESTful APIs and handled CRUD operations on the backend",
        "Integrated frontend and backend with proper data flow and error handling",
        "Used MongoDB for database modeling and data management",
        "Implemented authentication and basic authorization logic",
        "Deployed and tested applications locally and in production environments",
      ],
    },
    {
      id: "experience-3",
      subject: "Frontend Developer (Self-Taught)",
      institute: "Personal Projects & Portfolio",
      duration: "Jul, 2024 — Jul, 2025",
      description: [
        "Built responsive and accessible user interfaces using HTML, CSS, JavaScript and React",
        "Developed reusable React components and managed state using hooks",
        "Implemented modern UI designs with Tailwind CSS and CSS animations",
        "Optimized performance and improved UX for mobile and desktop devices",
        "Worked with REST APIs to fetch and display dynamic data",
        "Version controlled projects using Git and GitHub",
      ],
    },
    {
      id: "experience-4",
      subject: "Web Development Foundations",
      institute: "Self-Learning & Practice Projects",
      duration: "Dec, 2022 — Dec, 2023",
      description: [
        "Learned core web technologies including HTML, CSS and JavaScript",
        "Built static and interactive websites using semantic HTML and modern CSS",
        "Practiced DOM manipulation and basic logic using JavaScript",
        "Worked with jQuery for simple UI interactions and effects",
        "Created and customized websites using WordPress themes and plugins",
        "Gained strong fundamentals in web layout, responsiveness and browser behavior",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center px-3">
        <h2 className="text-3xl md:text-4xl text-(--text-primary) font-semibold">
          My <span className="text-(--accent-primary)">Experience</span>
        </h2>
        <div className="max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left">
          {experienceData.map((education, index) => (
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

export default TimelineExperience;
