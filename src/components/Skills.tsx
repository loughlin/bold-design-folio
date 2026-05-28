import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <section id="approach" className="section-spacing px-6 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="section-header-spacing animate-fade-in">
          <p className="font-technical text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-2">
            How I Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Approach + Skills</h2>
        </div>

        {/* Editorial list — 2 columns, no cards, divider rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 animate-fade-in">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="py-6 border-t border-border flex gap-5 group"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <span className="font-technical text-[11px] font-semibold text-muted-foreground/50 pt-0.5 w-5 shrink-0 tabular-nums">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight mb-1.5 group-hover:text-primary transition-colors duration-200">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
