import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActionSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - offset;

          if (window.scrollY >= top) {
            setActionSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);
  return activeSection;
}
