import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudySection {
  title: string;
  content: string | string[];
}

interface DesignProcessPhase {
  name: string;
  type: "divergent" | "convergent";
  description: string;
  activities: string[];
}

interface HeuristicItem {
  name: string;
  description: string;
  before: number;
  after: number;
}

interface EngagementMetric {
  value: string;
  label: string;
  description: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  problem: string;
  problemStatement: string;
  role: string;
  timeline: string;
  team: string;
  designProcess?: DesignProcessPhase[];
  process: CaseStudySection[];
  research?: CaseStudySection;
  heuristics?: HeuristicItem[];
  engagementMetrics?: EngagementMetric[];
  beforeAfter?: {
    before: { image: string; caption: string };
    after: { image: string; caption: string };
  };
  outcomes: string[];
  images?: { url: string; caption: string }[];
}

const CaseStudyLayout = ({
  title,
  subtitle,
  heroImage,
  overview,
  problem,
  problemStatement,
  role,
  timeline,
  team,
  designProcess,
  process,
  research,
  heuristics,
  engagementMetrics,
  beforeAfter,
  outcomes,
  images,
}: CaseStudyLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/#work">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4 mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">{title}</h1>
            <p className="text-2xl text-muted-foreground">{subtitle}</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img src={heroImage} alt={title} className="w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">ROLE</h3>
                <p className="text-lg">{role}</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">TIMELINE</h3>
                <p className="text-lg">{timeline}</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">TEAM</h3>
                <p className="text-lg">{team}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{overview}</p>
          </div>
        </div>
      </section>

      {/* Problem & Problem Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{problem}</p>
          </div>

          <Card className="bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-sm font-semibold text-primary mb-4">PROBLEM STATEMENT</h3>
              <p className="text-xl font-medium leading-relaxed">{problemStatement}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Design Process Methodology - Double Diamond */}
      {designProcess && designProcess.length > 0 && (
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Design Process Methodology</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The design process follows the Double Diamond framework, broken into four phases: two for divergent thinking (exploring possibilities) and two for convergent thinking (focusing on solutions).
              </p>
            </div>

            {/* Double Diamond Visual */}
            <div className="flex justify-center py-8">
              <div className="flex items-center gap-0 max-w-4xl w-full">
                {designProcess.map((phase, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div 
                      className={`h-24 flex items-center justify-center relative ${
                        phase.type === "divergent" 
                          ? "bg-gradient-to-r from-primary/20 to-primary/40" 
                          : "bg-gradient-to-r from-primary/40 to-primary/20"
                      } ${index === 0 ? "rounded-l-xl" : ""} ${index === designProcess.length - 1 ? "rounded-r-xl" : ""}`}
                    >
                      <span className="font-semibold text-foreground">{phase.name}</span>
                    </div>
                    <span className={`text-xs mt-2 block ${phase.type === "divergent" ? "text-primary" : "text-secondary"}`}>
                      {phase.type === "divergent" ? "Divergent" : "Convergent"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designProcess.map((phase, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${phase.type === "divergent" ? "bg-primary" : "bg-secondary"}`} />
                      <h3 className="font-semibold text-lg">{phase.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Insights */}
      {research && (
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold">{research.title}</h2>
            {Array.isArray(research.content) ? (
              <ul className="space-y-4">
                {research.content.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed">{research.content}</p>
            )}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <h2 className="text-3xl font-bold animate-fade-in">Design Process</h2>
          {process.map((section, index) => (
            <div key={index} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-2xl font-semibold">{section.title}</h3>
              {Array.isArray(section.content) ? (
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Comparison */}
      {beforeAfter && (
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl space-y-8">
            <h2 className="text-3xl font-bold animate-fade-in">Before & After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardContent className="p-0">
                  <img src={beforeAfter.before.image} alt="Before" className="w-full h-80 object-cover rounded-t-lg" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Before</h4>
                    <p className="text-muted-foreground">{beforeAfter.before.caption}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-0">
                  <img src={beforeAfter.after.image} alt="After" className="w-full h-80 object-cover rounded-t-lg" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2">After</h4>
                    <p className="text-muted-foreground">{beforeAfter.after.caption}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Heuristics Evaluation */}
      {heuristics && heuristics.length > 0 && (
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl space-y-8">
            <h2 className="text-3xl font-bold animate-fade-in">Usability Heuristics Evaluation</h2>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              How the design improved usability across Nielsen's heuristics
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heuristics.map((heuristic, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-sm">{heuristic.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{heuristic.description}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-destructive">Before: {heuristic.before}/5</span>
                      <span className="text-muted-foreground">→</span>
                      <span className="text-primary font-medium">After: {heuristic.after}/5</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Engagement Metrics - Time to Value */}
      {engagementMetrics && engagementMetrics.length > 0 && (
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl space-y-8">
            <h2 className="text-3xl font-bold animate-fade-in">Time to Value</h2>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              How the design accelerated value delivery
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {engagementMetrics.map((metric, index) => (
                <Card key={index} className="border-l-4 border-l-primary animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 space-y-2">
                    <p className="text-3xl font-bold text-primary">{metric.value}</p>
                    <p className="text-sm font-medium">{metric.label}</p>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      {images && images.length > 0 && (
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl space-y-8">
            {images.map((image, index) => (
              <div key={index} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={image.url} alt={image.caption} className="w-full rounded-2xl" />
                <p className="text-center text-muted-foreground">{image.caption}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Outcomes */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl space-y-8">
          <h2 className="text-3xl font-bold animate-fade-in">Outcomes & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">{outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl font-bold">Interested in learning more?</h2>
          <Link to="/#work" className="inline-block mt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View More Case Studies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyLayout;
