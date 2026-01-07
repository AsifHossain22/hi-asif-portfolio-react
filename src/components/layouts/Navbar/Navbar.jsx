import logo from "../../../assets/logos/hi-asif-logo.png";
import { navLinks } from "../../../data/navLinks";
import useScrollSpy from "../../../hooks/UseScrollSpy";
import PrimaryButton from "../../ui/PrimaryButton";

const Navbar = () => {
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <header className="fixed top-6 z-50 w-full flex justify-center pointer-events-none">
      {/* FloatingGlassContainer */}
      <div className="pointer-events-auto w-[90%] max-w-7xl rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <a href="#home">
            <img
              src={logo}
              alt="Hi ASIF | Frontend React Developer | Full-Stack Web Developer"
              className="w-24 h-8 md:w-30 md:h-10 lg:w-40 lg:h-12"
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
                    ? "text-[var(--accent-primary)]"
                    : "text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* CallToActionButton */}
          <PrimaryButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
