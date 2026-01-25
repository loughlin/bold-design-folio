import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import jamesProfileBw from "@/assets/james-profile-bw.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-6 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-10">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Photo */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative">
              <img 
                src={jamesProfileBw} 
                alt="James Loughlin" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl"
              />
              {/* Location badge */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Boston, MA</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Role tagline */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Design Leadership
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                UX Strategy
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Team Building
              </span>
            </div>

            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Design Leader and UX Manager who believes the human side of software matters most. User empathy isn't just a nice thing to have, it is the foundation of good design culture. Beyond that, iteration is key. You keep rebuilding, refining, and reshaping until the experience finally clicks.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                As a UX Manager and leader in design I try to build not only on design culture but showcasing what knowing more about our problems can do to help move products forward. I'm passionate about instilling design principles in others, helping teams grow. I always try to stay hungry to learn, evolve, and create whatever comes next.
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
                <a href="/James_Loughlin_CV_2025v3.pdf" download>
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
