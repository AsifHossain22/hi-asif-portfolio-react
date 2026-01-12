import logo from "../../../assets/logos/hi-asif-logo.png";
import { navLinks } from "../../../data/navLinks";
import useScrollSpy from "../../../hooks/UseScrollSpy";
import PrimaryButton from "../../ui/PrimaryButton";
import { motion } from "framer-motion";

const Navbar = () => {
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <header className="fixed top-6 z-50 w-full flex justify-center pointer-events-none">
      {/* FloatingGlassContainer */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto w-[90%] max-w-7xl rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <div className="flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <a href="#home">
            <img
              src={logo}
              alt="Hi ASIF | Frontend Developer | MERN Stack Developer"
              className="w-25 md:w-35 lg:w-45"
            />
          </a>

          {/* DesktopMenu */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-(--accent-primary)"
                    : "text-(--text-primary) hover:text-(--accent-primary)"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* CallToActionButton */}
          <PrimaryButton />
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
