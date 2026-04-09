import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
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
              className="w-full h-full object-cover max-w-md mx-auto lg:mx-0 lg:max-w-none rounded-[24px] grayscale"
            />
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Role tagline */}
            <div className="flex flex-wrap gap-2 items-center">
              {["Design Leadership", "UX Strategy", "Team Building"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
              <Button size="sm" variant="outline" asChild className="ml-auto rounded-[24px]">
                <a href="/James_Loughlin_Resume_2026_v6.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Hi, I'm James. <span className="text-gradient">I design software and build the teams that ship it.</span>
            </h1>

            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                I started as a product designer. Moved into management when I figured out the design wasn't usually the problem — getting it through the org was. So I learned that part too.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Now I spend most of my time on people and process: helping designers get better, cutting the stuff that slows everything down, and staying close enough to actual users that we don't start shipping features for ourselves.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Outside of work I'm on the soccer field, at the gym, or deep in something about AI. Mostly though I'm with my wife and three kids. They're a pretty good gut check on whether anything is actually usable.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              {[
                { value: "8+", label: "Years Experience" },
                { value: "12+", label: "Products Shipped" },
                { value: "20+", label: "Designers Mentored" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="default" asChild className="rounded-[24px]">
                <a href="mailto:jloughlin87@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button size="default" variant="outline" asChild className="rounded-[24px]">
                <a href="https://www.linkedin.com/in/jameslloughlin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button size="default" variant="outline" asChild className="rounded-[24px]">
                <a href="/James_Loughlin_Resume_2026_v6.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
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