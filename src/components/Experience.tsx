import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { experiences } from "@/data/experiences";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-10 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
            <a href="/James_Loughlin_CV_2025v3.pdf" download>
              <Button className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Experience Cards - Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`hover-lift animate-fade-in group cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary mb-3">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
