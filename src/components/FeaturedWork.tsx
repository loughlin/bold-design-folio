import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import ProtectedLink from "@/components/ProtectedLink";
import { projects } from "@/data/projects";

const FeaturedWork = () => {
  return (
    <section id="work" className="section-spacing px-6 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="section-header-spacing animate-fade-in">
          <p className="font-technical text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-2">
            Selected Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My Work</h2>
        </div>

        {/* Project grid â€” editorial 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const CardWrapper = ({ children }: { children: React.ReactNode }) =>
              project.isPublic ? (
                <Link to={project.link} className="block">{children}</Link>
              ) : (
                <ProtectedLink to={project.link}>{children}</ProtectedLink>
              );

            return (
              <CardWrapper key={index}>
                <div
                  className="group relative overflow-hidden rounded-[14px] border border-border bg-card transition-all duration-500 hover:border-border/80 hover:shadow-lg hover:-translate-y-0.5 animate-fade-in flex flex-col"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-52 md:h-60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--image-stroke))] pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-technical text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">
                        {project.subtitle}
                      </p>
                      {!project.isPublic && (
                        <Lock className="h-3 w-3 text-muted-foreground" />
                      )}
                    </div>

                    <h3 className="font-bold mb-2 tracking-tight text-xl md:text-2xl leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto space-y-3">
                      {/* Outcome metric â€” the key addition */}
                      {project.outcome && (
                        <p className="font-technical text-[11px] text-primary font-medium tracking-wide">
                          {project.outcome}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{project.role}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span>{project.timeline}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          View
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
