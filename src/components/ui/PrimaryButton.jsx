import React from "react";

const PrimaryButton = () => {
  return (
    <>
      {/* CallToActionButton */}
      <a
        href=""
        className="relative hidden items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-red-500 text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 active:scale-9"
      >
        {/* GlowLayer */}
        <span className="hidden absolute inset-0 rounded-xl bg-red-500 blur-md opacity-40 animate-pulse" />

        {/* ButtonText */}
        <span className="hidden relative z-10 whitespace-nowrap">
          Let’s Talk
        </span>
      </a>

      <div class="hover:scale-110 duration-300 inline-block">
        <a href="#contact" class="gradientButtonColor">
          <span class="button pulseBox animateButton px-5 py-2 rounded-lg font-medium">
            Let's Talk
          </span>
        </a>
      </div>
    </>
  );
};

export default PrimaryButton;
