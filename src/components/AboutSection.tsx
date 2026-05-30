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
              Fifteen years working in technology. Eight years designing software.
            </h1>

            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                I came up as a software consultant before transitioning to product design. I spent several years shipping software before I moved into UX management. The shift happened gradually, but as I came to realize design problems were solvable, organizational ones were more complicated and needed someone to own them and advocate for design growth internally.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Most of my time and effort after my transition into management went into mentoring people, unblocking and laying down organizational process that let the teams under me work uninhibited. I'm also a strong advocate for growing junior designers, keeping teams connected to users in the field and helping to cut blockers slowing us down. A shift and maybe a bit less glamorous than shipping product, but it really helped me feel an impact at scale.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Outside of work I enjoy sports with my kids (mainly soccer at the moment), staying healthy at the gym and reading whatever I can get my hands on (mainly AI or UX Design books as of late). My wife and three kids fill in the rest!
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