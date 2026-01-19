import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProtectedLink from "@/components/ProtectedLink";
import agileTeamStandup from "@/assets/agile-team-standup.jpg";

const FeaturedCaseStudy = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wide uppercase text-primary mb-4">
                Featured Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leading Design at Kessel Run
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Led design for enterprise cloud-native applications supporting user 
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
              <h3 className="text-xl font-bold">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                I helped build, maintain and connect five independent applications within the problem space of targeting and geo-intelligence. Pushing for design excellence and the end goal of accessible intelligence worldwide on classified networks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout, I helped transform outdated services into useful and pleasant to engage with products. As of today the products I've contributed to and led the design initiatives on are accessed by users daily and generate thousands of active intelligence inputs for the United States Air Force.
              </p>
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

            <ProtectedLink to="/case-study/kessel-run" className="mt-4 inline-block">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group/btn">
                View Full Case Study
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </ProtectedLink>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={agileTeamStandup}
                alt="Kessel Run Design Work"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-xl max-w-xs">
              <p className="text-sm font-semibold">Supporting</p>
              <p className="text-3xl font-bold">6 Missions</p>
              <p className="text-sm">across the USAF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
