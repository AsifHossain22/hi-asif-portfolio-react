import React from "react";
import { navLinks } from "../../../data/navLinks";
import useScrollSpy from "../../../hooks/UseScrollSpy";

const MobileNav = () => {
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 lg:hidden w-[90%] max-w-7xl mx-auto">
      <div className="-translate-x-1/2">
        <div className="flex items-center justify-between gap-2 rounded-2xl backdrop-blur-lg px-4 py-2 shadow-lg border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;

            // ToolTipVisibleCondition
            // const showTooltip = isActive && activeSection !== "contact";

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative flex items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 ${
                  isActive ? "bg-white/10 text-white" : "text-white/70"
                }`}
              >
                {/* FloatingLabel - Tooltip */}
                <span
                  className={`absolute -top-12 flex flex-col items-center transition-all duration-300
  ${
    isActive
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-2 scale-95 pointer-events-none"
  }`}
                >
                  {/* TooltipBox */}
                  <span
                    className="relative px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap
    bg-black/80 text-white backdrop-blur-md shadow-lg"
                  >
                    {link.label}

                    {/* Arrow */}
                    <span className="absolute left-1/2 -bottom-1 h-2 w-2 bg-black/80 rotate-45 -translate-x-1/2" />
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
