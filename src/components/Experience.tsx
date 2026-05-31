import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { experiences } from "@/data/experiences";
import { RESUME_PDF_PATH } from "@/constants";
import Reveal from "@/components/Reveal";

const Experience = () => {
  return (
    <section id="experience" className="section-spacing px-6 scroll-mt-20">
      <Reveal className="container mx-auto">
        {/* Section Header */}
        <div className="section-header-spacing animate-fade-in">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
            <a href={RESUME_PDF_PATH} download>
              <Button variant="outline" className="gap-2 rounded-[14px]">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Editorial list — divider rows, period as leading metadata */}
        <div className="animate-fade-in">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-6 border-t border-border group"
            >
              <div className="md:col-span-3">
                <span className="font-technical text-[13px] text-muted-foreground tabular-nums">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-primary">
                    {exp.company}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-reading">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Experience;
