import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { experiences } from "@/data/experiences";

const Experience = () => {
  return (
    <section id="experience" className="section-spacing px-6 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="section-header-spacing animate-fade-in">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">Career</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
            </div>
            <a href="/James_Loughlin_Resume_2026_v6.pdf" download>
              <Button variant="outline" className="gap-2 rounded-[14px]">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Experience Cards â€” 24px uniform gutters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group p-6 rounded-[14px] border border-border/60 bg-card transition-all duration-400 hover:border-border hover:shadow-md hover:-translate-y-1 animate-fade-in ${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4 mt-1">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium text-primary mb-3">
                {exp.company}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;