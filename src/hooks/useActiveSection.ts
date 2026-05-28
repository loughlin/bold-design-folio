import { useEffect, useState } from "react";

const TRACKED_SECTIONS = ["about", "work", "approach", "experience", "contact"] as const;

export function useActiveSection(): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of TRACKED_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return active;
}
