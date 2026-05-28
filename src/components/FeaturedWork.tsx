import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import ProtectedLink from "@/components/ProtectedLink";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

const ProjectLink = ({
  project,
  children,
  className,
}: {
  project: Project;
  children: React.ReactNode;
  className?: string;
}) =>
  project.isPublic ? (
    <Link to={project.link} className={className ?? "block"}>
      {children}
    </Link>
  ) : (
    <ProtectedLink to={project.link} className={className}>
      {children}
    </ProtectedLink>
  );

const FeaturedWork = () => {
  const [featured, ...rest] = projects;

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

        <div className="flex flex-col gap-6">
          {/* Featured first card — full width, horizontal layout on desktop */}
          {featured && (
            <ProjectLink project={featured} className="block animate-fade-in">
              <div className="group relative overflow-hidden rounded-[14px] border border-border bg-card transition-[transform,border-color,box-shadow] duration-500 hover:border-border/80 hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative overflow-hidden h-56 md:h-auto md:w-[55%] shrink-0">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--image-stroke))] pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-7 md:p-10 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <p className="font-technical text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">
                          {featured.subtitle}
                        </p>
                        {!featured.isPublic && <Lock className="h-3 w-3 text-muted-foreground" />}
                      </div>
                      <h3 className="font-bold tracking-tight text-2xl md:text-3xl leading-snug mb-3">
                        {featured.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {featured.description}
                      </p>
                    </div>

                    <div className="space-y-3 mt-6">
                      {featured.outcome && (
                        <p className="font-technical text-[11px] text-primary font-medium tracking-wide">
                          {featured.outcome}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{featured.role}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span>{featured.timeline}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-40 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                          View
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProjectLink>
          )}

          {/* Remaining cards — 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project, index) => (
              <ProjectLink key={index} project={project} className="block">
                <div
                  className="group relative overflow-hidden rounded-[14px] border border-border bg-card transition-[transform,border-color,box-shadow] duration-500 hover:border-border/80 hover:shadow-lg hover:-translate-y-0.5 animate-fade-in flex flex-col"
                  style={{ animationDelay: `${(index + 1) * 0.08}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-52 md:h-60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
                      {!project.isPublic && <Lock className="h-3 w-3 text-muted-foreground" />}
                    </div>
                    <h3 className="font-bold mb-2 tracking-tight text-xl md:text-2xl leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto space-y-3">
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
                        <div className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-40 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                          View
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ProjectLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
