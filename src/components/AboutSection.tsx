import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import jamesProfileBw from "@/assets/james-profile-bw.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="pt-8 section-spacing px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Photo */}
          <div className="lg:col-span-5 animate-fade-in">
            <img
              src={jamesProfileBw}
              alt="James Loughlin"
              width={800}
              height={1000}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover max-w-md mx-auto lg:mx-0 lg:max-w-none rounded-[14px] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Role tagline */}
            <div className="space-y-1">
              <p className="font-technical text-[11px] font-bold text-foreground uppercase tracking-[0.18em]">
                James Loughlin
              </p>
              <p className="font-technical text-[11px] text-muted-foreground tracking-[0.12em]">
                UX Design - Software Manager - AI Consulting
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Eight years designing software. Three of them managing the team.
            </h1>

            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                I came up as a product designer, spent several years shipping software, then moved into management. The shift happened gradually. Design problems were solvable. The organizational ones were messier and nobody was really owning them.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Most of my time now goes into managing people and unblocking process — growing junior designers, keeping the team connected to actual users, cutting whatever's making things slow. Less glamorous than shipping product, but it matters more at scale.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Outside work: soccer, the gym, and whatever I'm reading about design and AI this month. My wife and three kids fill in the rest. They're a reliable gut check — kids don't let anything confusing slide.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              {[
                { value: "8yr", label: "in UX design" },
                { value: "12", label: "products shipped" },
                { value: "20+", label: "designers mentored" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="default" asChild className="rounded-[14px]">
                <a href="mailto:jloughlin87@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button size="default" variant="outline" asChild className="rounded-[14px]">
                <a href="https://www.linkedin.com/in/jameslloughlin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;