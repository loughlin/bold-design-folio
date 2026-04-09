import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <section id="approach" className="section-spacing px-6 bg-muted/40 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="section-header-spacing animate-fade-in">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">How I Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Approach + Skills</h2>
        </div>

        {/* Skills Grid — 24px uniform gutters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-[24px] border border-border/60 bg-card transition-all duration-400 hover:border-border hover:shadow-md hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;