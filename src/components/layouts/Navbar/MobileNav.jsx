import React from "react";
import { navLinks } from "../../../data/navLinks";
import useScrollSpy from "../../../hooks/UseScrollSpy";

const MobileNav = () => {
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 lg:hidden w-[90%] max-w-7xl mx-auto">
      <div className="-translate-x-1/2">
        <div
          className="
            flex items-center justify-between gap-2
            px-4 py-2
            rounded-2xl
            backdrop-blur-lg
            shadow-lg
            border border-white/10
            transition-colors duration-300
          "
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative flex items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-(--accent-primary) text-(--text-inverted)"
                    : "text-(--text-secondary)"
                }`}
              >
                {/* FloatingLabel - Tooltip */}
                <span
                  className={`absolute -top-12 flex flex-col items-center transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                  }`}
                >
                  {/* TooltipBox */}
                  <span
                    className="relative px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap 
                  bg-(--accent-primary) text-(--text-inverted) backdrop-blur-md shadow-lg border-white/10"
                  >
                    {link.label}

                    {/* TooltipArrow */}
                    <span className="absolute left-1/2 -bottom-1 h-2 w-2 rotate-45 -translate-x-1/2 bg-(--accent-primary) border-r border-b border-(--accent-primary)" />
                  </span>
                </span>

                {/* NavIcon */}
                <Icon size={20} className="shirnk-0" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
