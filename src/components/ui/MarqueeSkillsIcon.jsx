import React from "react";
import Marquee from "react-fast-marquee";

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
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

// MongoDBIcon
const MongoDB = () => <SiMongodb style={{ color: "#47A248" }} />;
// ExpressJSIcon
const ExpressJS = () => <SiExpress style={{ color: "#000000" }} />;
// ReactJSIcon
const ReactJS = () => <FaReact style={{ color: "#61DAFB" }} />;
// NodeJSIcon
const NodeJS = () => <FaNodeJs style={{ color: "#339933" }} />;
// FirebaseIcon
const Firebase = () => <SiFirebase style={{ color: "#FFCA28" }} />;
// HTMLIcon
const HTML = () => <FaHtml5 style={{ color: "#E34F26" }} />;
// CSSIcon
const CSS = () => <FaCss3 style={{ color: "#1572B6" }} />;
// JavaScriptIcon
const JavaScript = () => <SiJavascript style={{ color: "#F7DF1E" }} />;
// TailwindCSSIcon
const TailwindCSS = () => <SiTailwindcss style={{ color: "#38B2AC" }} />;
// GitIcon
const Git = () => <FaGitAlt style={{ color: "#F05032" }} />;
// GitHubIcon
const GitHub = () => <FaGithub style={{ color: "#181717" }} />;
// RestAPIsIcon
const RestAPIs = () => <SiPostman style={{ color: "#FF6C37" }} />;
// NextJSIcon
const NextJS = () => <SiNextdotjs style={{ color: "#000000" }} />;
// AIIcon
const AI = () => <FaRobot style={{ color: "#FF6F61" }} />;

const logos1 = [
  {
    id: 1,
    component: <MongoDB />,
  },
  {
    id: 2,
    component: <ExpressJS />,
  },
  {
    id: 3,
    component: <ReactJS />,
  },
  {
    id: 4,
    component: <NodeJS />,
  },
  {
    id: 5,
    component: <Firebase />,
  },
  {
    id: 6,
    component: <HTML />,
  },
  {
    id: 7,
    component: <CSS />,
  },
  {
    id: 8,
    component: <JavaScript />,
  },
  {
    id: 9,
    component: <TailwindCSS />,
  },
  {
    id: 10,
    component: <Git />,
  },
  {
    id: 11,
    component: <GitHub />,
  },
  {
    id: 12,
    component: <RestAPIs />,
  },
  {
    id: 12,
    component: <NextJS />,
  },
];
function MarqueeSkillsIcon() {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  const Marquee = ({ logos, direction = "forwards" }) => {
    const numItems = logos.length;
    const speed = "25s";
    const itemWidth = "120px";
    const itemGap = "25px";
    return (
      <div
        className="max-w-full overflow-hidden"
        style={{
          "--speed": speed,
          "--numItems": numItems,
          "--item-width": itemWidth,
          "--item-gap": itemGap,
          "--direction": direction,
          maskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
        }}
      >
        <div
          className="w-max flex"
          style={{
            "--track-width": `calc(var(--item-width) * ${numItems})`,
            "--track-gap": `calc(var(--item-gap) * ${numItems})`,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="shrink-0 flex justify-center items-center bg-white/10 border border-black rounded-2xl text-white"
              style={{
                width: "var(--item-width)",
                aspectRatio: "1 / 1.2",
                marginRight: "var(--item-gap)",
                animation: `marquee-move var(--speed) linear infinite ${direction}`,
              }}
            >
              <div className="text-6xl">{logo.component}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="items-center overflow-hidden">
      <div className=" flex flex-col gap-y-6">
        <Marquee logos={logos1} />
      </div>
    </div>
  );
}
export default MarqueeSkillsIcon;
