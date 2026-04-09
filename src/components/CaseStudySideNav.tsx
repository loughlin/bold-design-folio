import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

interface CaseStudySideNavProps {
  sections: Section[];
}

const CaseStudySideNav = ({ sections }: CaseStudySideNavProps) => {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to top
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden xl:block sticky top-32 self-start w-48 shrink-0">
      <p className="text-[10px] font-technical font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
        On this page
      </p>
      <ul className="space-y-1 border-l border-border/50">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => handleClick(s.id)}
              className={`block w-full text-left pl-4 py-1.5 text-[12px] leading-tight transition-all duration-200 border-l-2 -ml-[1px] ${
                activeId === s.id
                  ? "border-primary text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CaseStudySideNav;
