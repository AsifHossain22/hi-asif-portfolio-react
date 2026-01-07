import React from "react";
import Theme from "../../hooks/Theme";
import { Moon, Sun } from "lucide-react";

const PrimaryButton = () => {
  const { theme, toggleTheme } = Theme();

  return (
    <>
      <div className="flex items-center gap-3">
        {/* CallToActionButton */}
        <a
          href="#contact"
          className="
          
                flex items-center justify-center
                px-3 py-1 md:px-4 md:py-2 rounded-xl
                text-xs md:text-sm font-semibold
                transition-all duration-300
                border border-[var(--accent-primary)]
                hover:bg-transparent hover:text-[var(--accent-primary)]
                cta-primary
              "
        >
          Let’s Talk
        </a>

        {/* ThemeToggleButton */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-transparent border border-[var(--border-color)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {theme === "dark" ? (
            <Sun size={18} className="text-[var(--accent-primary)]" />
          ) : (
            <Moon size={18} className="text-[var(--accent-primary)]" />
          )}
        </button>
      </div>
    </>
  );
};

export default PrimaryButton;
