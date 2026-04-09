import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import ProtectedLink from "@/components/ProtectedLink";
import { projects } from "@/data/projects";

const FeaturedWork = () => {
  // Bento grid layout: first card is large (spans 2 cols), rest alternate
  const getGridClass = (index: number) => {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    return "md:col-span-1";
  };

  return (
    <section id="work" className="py-24 md:py-32 px-6 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">Selected Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My Work</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:border-border hover:shadow-lg hover:-translate-y-1 animate-fade-in ${getGridClass(index)}`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-48 md:h-56"}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                      {!project.isPublic && (
                        <Lock className="h-3 w-3 text-muted-foreground" />
                      )}
                    </div>
                    <h3 className={`font-bold mb-2 tracking-tight ${index === 0 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{project.role}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{project.timeline}</span>
                    </div>

                    {/* Hover arrow */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
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
