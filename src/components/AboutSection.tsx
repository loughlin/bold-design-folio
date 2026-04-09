import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import jamesProfileBw from "@/assets/james-profile-bw.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 px-6 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column - Photo */}
          <div className="lg:col-span-5 animate-fade-in">
            <img 
              src={jamesProfileBw} 
              alt="James Loughlin" 
              className="w-full h-full object-cover max-w-md mx-auto lg:mx-0 lg:max-w-none shadow-2xl grayscale"
            />
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Role tagline */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium">
                Design Leadership
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium">
                UX Strategy
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium">
                Team Building
              </span>
              <Button size="lg" variant="outline" asChild className="ml-auto">
                <a href="/James_Loughlin_Resume_2026_v6.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold">
              Hi, I'm James. <span className="text-gradient">I help teams build software that actually works for the people using it.</span>
            </h1>

            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started as a hands-on product designer and grew into management because I kept seeing the same thing: great design work dying in organizations that didn't know how to support it. So I learned how to build the conditions where good work becomes the default.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                These days I spend most of my time helping designers grow, removing the things that slow teams down, and making sure what we ship actually solves real problems. I care less about pixel-perfect screens and more about whether the people using our software can get their job done without fighting the interface.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Outside of work, I'm on the soccer field, at the gym, or reading about how AI is changing the way we build software. Mostly though, I'm with my wife and our three kids — my daily reminder that designing for humans means designing for real, messy, wonderful people.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">12+</div>
                <div className="text-sm text-muted-foreground">Products Shipped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Designers Mentored</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="mailto:jloughlin87@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/jameslloughlin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/James_Loughlin_Resume_2026_v6.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
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
