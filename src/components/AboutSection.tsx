import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Linkedin, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-10">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Design Leader and UX Manager who believes the human side of software matters most. User empathy isn't just a nice thing to have, it is the foundation of good design culture. Beyond that, iteration is key. You keep rebuilding, refining, and reshaping until the experience finally clicks.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                As a UX Manager and leader in design I try to build not only on design culture but showcasing what knowing more about our problems can do to help move products forward. I'm passionate about instilling design principles in others, helping teams grow. I always try to stay hungry to learn, evolve, and create whatever comes next.
              </p>
            </div>

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

          {/* Right Column - Info Card */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl leading-none">→</span>
                    <span className="text-muted-foreground">Advocating the value of design using honest communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl leading-none">→</span>
                    <span className="text-muted-foreground">Mentoring and developing designers using pragmatic partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl leading-none">→</span>
                    <span className="text-muted-foreground">Facilitating psychological safety to build relationships that help solve problems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
