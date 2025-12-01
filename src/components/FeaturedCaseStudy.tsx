import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedCaseStudy = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop"
                alt="Kessel Run Design Work"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="text-sm font-semibold">Supporting</p>
              <p className="text-3xl font-bold">6 Missions</p>
              <p className="text-sm">across the USAF</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <span className="inline-block text-sm font-semibold tracking-wide uppercase text-primary mb-4">
                Featured Case Study
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Leading Design at Kessel Run
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Led design for enterprise B2B cloud-native applications supporting user 
              operations across the United States Air Force. Managed design research, 
              facilitated team rituals, and established design systems to increase consistency 
              across the USAF application suite.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Designers Supported</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-secondary">6</p>
                <p className="text-sm text-muted-foreground">Operational Missions</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-secondary">100%</p>
                <p className="text-sm text-muted-foreground">Mission Focused</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Key Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl leading-none">•</span>
                  <span className="text-muted-foreground">Collaborate with users and leadership teams to identify capability needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl leading-none">•</span>
                  <span className="text-muted-foreground">Establish design career ladders with DesignOps for professional development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl leading-none">•</span>
                  <span className="text-muted-foreground">Centralize documentation and resources to reduce redundant processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-2xl leading-none">•</span>
                  <span className="text-muted-foreground">Facilitate team rituals and practices as Psychological Safety facilitator</span>
                </li>
              </ul>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Full Case Study
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
