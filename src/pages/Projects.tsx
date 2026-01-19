import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import uxResearchStickyNotes from "@/assets/ux-research-sticky-notes.jpg";
import cloudApplicationDashboard from "@/assets/cloud-application-dashboard.jpg";
import designCareerFramework from "@/assets/design-career-framework.jpg";

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const projects = [
    {
      title: "Reworking UX Research",
      description: "Conducted qualitative user research with users to de-risk product ideas and validate designs.",
      image: uxResearchStickyNotes,
      link: "/case-study/warfighter-research",
    },
    {
      title: "Cloud-Native Application Suite",
      description: "Applications supporting USAF critical global operations.",
      image: cloudApplicationDashboard,
      link: "/case-study/cloud-application",
    },
    {
      title: "DesignOps & Career Ladders",
      description: "Established design career frameworks and operational processes supporting 15+ designers.",
      image: designCareerFramework,
      link: "/case-study/designops",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-serif font-bold border-2 border-foreground px-4 py-1 rounded-lg">
                JL
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">All Projects</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* All Projects Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Additional Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
                  <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-3 text-background/90">{project.description}</p>
                    <Link to={project.link}>
                      <Button size="sm" variant="secondary" className="group/btn">
                        View Case Study
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
