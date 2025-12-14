import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProtectedLink from "@/components/ProtectedLink";
import designSystemComponents from "@/assets/design-system-components.jpg";
import uxUserResearch from "@/assets/ux-user-research.jpg";
import cloudApplicationDashboard from "@/assets/cloud-application-dashboard.jpg";
import designCareerFramework from "@/assets/design-career-framework.jpg";

const FeaturedWork = () => {
  const projects = [
    {
      title: "T&G Portfolio Design System",
      description: "Led design systems initiative across 6 operational missions, establishing consistency standards for USAF applications.",
      image: designSystemComponents,
      size: "large",
      link: "/case-study/design-system",
    },
    {
      title: "Organizational Research Reboot",
      description: "Conducted qualitative user research with users to de-risk product ideas and validate designs.",
      image: uxUserResearch,
      size: "medium",
      link: "/case-study/warfighter-research",
    },
    {
      title: "Cloud-Native Application Suite",
      description: "Applications supporting USAF critical global operations.",
      image: cloudApplicationDashboard,
      size: "medium",
      link: "/case-study/cloud-application",
    },
    {
      title: "DesignOps & Career Ladders",
      description: "Established design career frameworks and operational processes supporting 15+ designers.",
      image: designCareerFramework,
      size: "small",
      link: "/case-study/designops",
    },
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-serif font-bold border-2 border-foreground px-4 py-1 rounded-lg">
              JL
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">Featured Projects</h2>
          </div>
        </div>

        {/* Two Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Large Project Card */}
          <Card className="group overflow-hidden hover-lift animate-fade-in">
            <div className="relative h-96 overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
              <CardContent className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="text-3xl font-bold mb-3">{projects[0].title}</h3>
                <p className="text-lg mb-4 text-background/90">{projects[0].description}</p>
                <ProtectedLink to={projects[0].link}>
                  <Button variant="secondary" className="group/btn">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </ProtectedLink>
              </CardContent>
            </div>
          </Card>

          {/* Medium Project Card */}
          <Card className="group overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="relative h-96 overflow-hidden">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
              <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="text-2xl font-bold mb-3">{projects[1].title}</h3>
                <p className="text-sm mb-4 text-background/90">{projects[1].description}</p>
                <ProtectedLink to={projects[1].link}>
                  <Button size="sm" variant="secondary" className="group/btn">
                    View Case Study
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </ProtectedLink>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <ProtectedLink to="/projects">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              See All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ProtectedLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
