import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Linkedin, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="prose prose-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm James Loughlin, a Design Leader and problem solver. I combine human-centered design with user empathy to build design culture and solve problems. I see design as imagining the best possible experience for someone and steadily moving toward it: rebuilding, refining, and reshaping until it finally feels inevitable.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Learning is what keeps that process alive. My only real rule is simple: keep working and keep growing, even through uncertainty, ambiguity, and the moments where giving up feels easier.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                My work sits at the intersection of craft, thinking, and empathy. And as a designer, I'll always stay hungry to learn, evolve, and create whatever comes next: something human, intentional, and unmistakably right.
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

          {/* Right Column - Info Cards */}
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

            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
                <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                  "Design is not just about making things look good. It's about solving real 
                  problems for real people, building systems that scale, and creating 
                  environments where teams can thrive."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
