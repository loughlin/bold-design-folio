import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import ProtectedLink from "@/components/ProtectedLink";
import designStudioStickyNotes from "@/assets/design-studio-sticky-notes.jpg";
import uxResearchPreview from "@/assets/ux-research-preview.avif";
import kesselRunLeadershipVisit from "@/assets/kessel-run-leadership-visit.jpg";
import designSystemPreview from "@/assets/design-system-preview.avif";

const FeaturedWork = () => {
  const projects = [
    {
      title: "UX Leadership",
      subtitle: "UX Manager + Leader",
      description: "Advocating for design in mission critical USAF applications, transitioning how the USAF delivers software.",
      role: "Portfolio Design Lead",
      timeline: "2021 - Present",
      image: kesselRunLeadershipVisit,
      link: "/case-study/kessel-run",
      isPublic: true,
    },
    {
      title: "Portfolio Design System",
      subtitle: "Design Systems + Component Libraries",
      description: "Led design system roll out across five operational missions, establishing consistency standards for USAF software applications.",
      role: "UX Manager + Product Designer",
      timeline: "2019 - 2023",
      image: designSystemPreview,
      link: "/case-study/design-system",
      isPublic: true,
    },
    {
      title: "UX Research Initiatives",
      subtitle: "User Research + Synthesis",
      description: "Defined research practices and standards for a software suite of products, enabling teams to validate designs and de-risk decisions.",
      role: "UX Manager",
      timeline: "2021 - 2023",
      image: uxResearchPreview,
      link: "/case-study/warfighter-research",
      isPublic: false,
    },
    {
      title: "USAF Mission Reporting",
      subtitle: "Product Design + Integration",
      description: "Eliminating manual calculation and data entry for a uniform and accessible source of truth for USAF mission data.",
      role: "UX Manager + Product Designer",
      timeline: "2019 - 2021",
      image: designStudioStickyNotes,
      link: "/case-study/marauder",
      isPublic: false,
    },
  ];

  return (
    <section id="work" className="py-16 px-6 scroll-mt-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold">Case Studies</h2>
        </div>

        {/* Case Study Cards - Vertical Stack */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover-lift animate-fade-in border-0 shadow-lg" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-transparent lg:bg-gradient-to-l" />
                </div>

                {/* Content Side */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-card">
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-primary uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold flex items-center gap-3">
                      {project.title}
                      {!project.isPublic && (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {project.description}
                    </p>
                    
                    {/* Project Meta */}
                    <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-semibold text-foreground">Role:</span> {project.role}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Timeline:</span> {project.timeline}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      {project.isPublic ? (
                        <Link to={project.link}>
                          <Button size="lg" className="group/btn">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      ) : (
                        <ProtectedLink to={project.link}>
                          <Button size="lg" className="group/btn">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </ProtectedLink>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
