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
              <Button size="sm" variant="outline" asChild className="ml-auto">
                <a href="/James_Loughlin_Resume_2026_v4.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold">
              Hi, I'm James. <span className="text-gradient">I design user-friendly software using a human-centered approach.</span>
            </h1>

            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Design Leader and UX Manager who believes the human side of software matters most. User empathy isn't just a nice to have, it's the foundation of good design culture. Iteration is key: you keep rebuilding, refining, and reshaping until the experience finally clicks.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                As a leader, I build design culture by showing what deeper problem understanding can do for product development. I'm passionate about instilling design principles in others and helping teams grow.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Outside of work, I'm on the soccer field, lifting weights at the gym, or reading about new technologies. But mostly, I'm with my wife and our three kids. My reminder that designing for humans means designing for real, complex, wonderful people.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                I stay hungry to learn, evolve, and create whatever comes next.
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
                <a href="/James_Loughlin_Resume_2026_v4.pdf" download>
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
