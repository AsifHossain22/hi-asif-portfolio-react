import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import heroImage from "../../assets/images/hi-asif.jpg";
import waveIcon from "../../assets/icons/wave-icon.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col-reverse lg:flex-col justify-center items-center gap-2 px-6 relative overflow-hidden pt-28">
        {/* LeftItem - FloatingAnimatedQuote */}
        <div className="hidden lg:block hero-badge hero-badge-left text-center">
          <span className="quote-icon text-left">“</span>
          <p>
            Self-taught developer focused on learning and turning your ideas
            into powerful digital solutions that drive real business results.
          </p>
        </div>

        {/* RightItem - FloatingCountUpAnimatedExperienceBadge */}
        <div className="hero-badge hero-badge-right hidden lg:block">
          <div className="exp-number">
            <CountUp end={3} duration={6} enableScrollSpy />+
          </div>
          <div className="exp-text">Years Experience</div>
        </div>

        {/* HeroImageAndOrbitIcon */}
        <div className="relative flex items-center justify-center">
          {/* OrbitIcon */}
          <div className="orbit-ring">
            {/* MongoDB */}
            <span className="orbit-item orbit-a">
              <span className="orbit-icon">
                <SiMongodb />
              </span>
            </span>
            {/* ExpressJS */}
            <span className="orbit-item orbit-b">
              <span className="orbit-icon">
                <SiExpress />
              </span>
            </span>
            {/* ReactJS */}
            <span className="orbit-item orbit-c">
              <span className="orbit-icon">
                <FaReact />
              </span>
            </span>
            {/* NodeJS */}
            <span className="orbit-item orbit-d">
              <span className="orbit-icon">
                <FaNodeJs />
              </span>
            </span>
          </div>

          {/* HeroImage */}
          <div className="relative z-10 rounded-full p-1.5 bg-(--bg-primary) my-20">
            <img
              src={heroImage}
              alt="Hi ASIF | Frontend Developer | MERN Stack Developer"
              className="w-50 h-50 md:w-72 md:h-72 rounded-full object-cover"
            />
          </div>
        </div>

        {/* TextContainer */}
        <div>
          {/* TitleAndDesignation */}
          <div className="flex flex-col items-center text-center gap-5 mb-7">
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-(--bg-secondary) border border-(--accent-primary)">
              <span className="font-medium">Hi there!</span>
              <span className="animate-wave">
                <img src={waveIcon} alt="Wave Icon" className="w-4" />
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold">
              I’m <span className="text-(--accent-primary)">Asif</span>
            </h1>

            <div className="text-lg md:text-3xl font-semibold h-10.5">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          {/* CallToActionButton */}
          <div className="flex flex-col-reverse md:flex-row gap-7 md:gap-12 mb-14">
            <a
              href=""
              className="cta-primary text-center border border-(--accent-primary) hover:bg-transparent hover:text-(--accent-primary) transition-all duration-300"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="cta-outline text-center hover:bg-(--accent-primary) hover:text-(--text-inverted) transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
