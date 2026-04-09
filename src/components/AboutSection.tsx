import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import jamesProfileBw from "@/assets/james-profile-bw.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="pt-8 pb-24 md:pb-32 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column - Photo */}
          <div className="lg:col-span-5 animate-fade-in">
            <img
              src={jamesProfileBw}
              alt="James Loughlin"
              className="w-full h-full object-cover max-w-md mx-auto lg:mx-0 lg:max-w-none rounded-2xl grayscale"
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
              <Button size="sm" variant="outline" asChild className="ml-auto rounded-full">
                <a href="/James_Loughlin_Resume_2026_v6.pdf" download>
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  Resume
                </a>
              </Button>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Hi, I'm James. <span className="text-gradient">I help teams build software that actually works for the people using it.</span>
            </h1>

            <div className="space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                I started as a hands-on product designer and grew into management because I kept seeing the same thing: great design work dying in organizations that didn't know how to support it. So I learned how to build the conditions where good work becomes the default.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                These days I spend most of my time helping designers grow, removing the things that slow teams down, and making sure what we ship actually solves real problems. I care less about pixel-perfect screens and more about whether the people using our software can get their job done without fighting the interface.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Outside of work, I'm on the soccer field, at the gym, or reading about how AI is changing the way we build software. Mostly though, I'm with my wife and our three kids — my daily reminder that designing for humans means designing for real, messy, wonderful people.
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
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="default" asChild className="rounded-full">
                <a href="mailto:jloughlin87@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button size="default" variant="outline" asChild className="rounded-full">
                <a href="https://www.linkedin.com/in/jameslloughlin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button size="default" variant="outline" asChild className="rounded-full">
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
