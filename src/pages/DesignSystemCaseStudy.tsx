import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";


const DesignSystemCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const keySkills = [
    "Mentorship & Leadership",
    "Component Libraries",
    "Stakeholder Management",
    "Documentation",
    "Dev/Design Pairing",
  ];

  const toolsUsed = [
    "Figma Suite",
    "Adobe Creative Cloud",
    "React",
    "HTML/CSS",
    "Github",
  ];

  const designProcessPhases = [
    {
      name: "Discover",
      type: "divergent" as const,
      description: "Understanding the problem space through research and exploration.",
    },
    {
      name: "Define",
      type: "convergent" as const,
      description: "Synthesizing insights to define clear problem statements.",
    },
    {
      name: "Develop",
      type: "divergent" as const,
      description: "Generating and iterating on potential solutions.",
    },
    {
      name: "Deliver",
      type: "convergent" as const,
      description: "Refining and delivering the final solution.",
    },
  ];

  const challenges = [
    "Products were using a variety of technical stacks, in addition to an assortment of custom components and different component libraries.",
    "Products were overly attached to their unique solutions to common user problems, increasing the amount of developer hours spent on front end stories.",
    "Any out-of-the-box component library adopted as a basis for the design system would lack documentation for custom or organization-specific components.",
    "Existing wireframe libraries would lack the unique theming and custom components, inhibiting designers' ability to build wireframes and prototypes quickly.",
  ];

  const keyAchievements = [
    "Reduction in front end story frequency of 48%.",
    "Reduction in developer days spent per year on front end by over 2,000 (avg per 10-person developer team).",
    "Three day reduction in average front end story completion time.",
    "Created a pathway for Air Force-wide source code and artifact sharing.",
  ];

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
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in">
            Portfolio Design System
          </h1>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-serif font-semibold animate-fade-in">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            As Kessel Run's product offerings grew, so too did the need for unified user experiences, interaction patterns, color and component libraries. What started as 8-10 unrelated applications quickly grew into interconnected portfolios and suites of products with similar user and data sets. Unified design and developer language across these systems granted Kessel Run greater flexibility with the allocation of design and developer resources.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-serif font-semibold animate-fade-in">Problem Statement</h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Inconsistent user interfaces across products within the organization steepened the learning curve for the growing amount of overlapping user sets. Custom-first front ends increased design and development time, and prevented organization-wide branding initiatives. The problem facing the design system was two-fold:
          </p>
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl font-medium italic text-foreground">
              How might we decrease error rates and onboarding time for users so that they spend a greater amount of time completing job-related tasks?
            </p>
            <p className="text-xl font-medium italic text-foreground">
              How might we decrease the amount of designer and developer hours dedicated to UI enhancement so that usability, user experience, product security, reliability, and database management can be prioritized?
            </p>
          </div>
        </div>
      </section>

      {/* UX Metrics */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl animate-fade-in">
          <h2 className="text-4xl font-serif font-semibold text-center mb-12">Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Task Completion</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Time on core functions vs. interface navigation
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">User Error Rate</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Incidents caused by inconsistent UI patterns
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Developer Velocity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Front end story throughput and cycle time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Metrics - Time to Value */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl animate-fade-in">
          <h2 className="text-4xl font-serif font-semibold text-center mb-4">Time to Value</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            How the design system accelerated value delivery across the organization
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-bold text-primary">3 days</p>
                    <p className="text-sm font-medium">Faster Story Completion</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">22 → 19 days</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Before</span>
                    <span>After</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-destructive/60 to-primary rounded-full transition-all duration-1000" style={{ width: '86%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">14% reduction in cycle time</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-bold text-primary">48%</p>
                    <p className="text-sm font-medium">Fewer Design Stories</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">3.8 → 1.95/week</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Before</span>
                    <span>After</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-destructive/60 to-primary rounded-full transition-all duration-1000" style={{ width: '52%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">Nearly half the design overhead</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-bold text-primary">2 weeks</p>
                    <p className="text-sm font-medium">Designer Onboarding</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">6+ → 2 weeks</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Before</span>
                    <span>After</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-destructive/60 to-primary rounded-full transition-all duration-1000" style={{ width: '33%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">67% faster time to productivity</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-bold text-primary">2,000+</p>
                    <p className="text-sm font-medium">Dev Days Saved/Year</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">per 10-dev team</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Efficiency Gain</span>
                    <span>100%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full transition-all duration-1000" style={{ width: '95%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">Massive ROI on design system investment</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Process</h2>
          
          {/* Double Diamond Visual */}
          <div className="flex justify-center py-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-0 max-w-3xl w-full">
              {designProcessPhases.map((phase, index) => (
                <div key={index} className="flex-1 text-center">
                  <div 
                    className={`h-20 flex items-center justify-center relative ${
                      phase.type === "divergent" 
                        ? "bg-gradient-to-r from-primary/20 to-primary/40" 
                        : "bg-gradient-to-r from-primary/40 to-primary/20"
                    } ${index === 0 ? "rounded-l-xl" : ""} ${index === designProcessPhases.length - 1 ? "rounded-r-xl" : ""}`}
                  >
                    <span className="font-semibold text-foreground text-sm">{phase.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The design process is broken down into four phases, two for divergent thinking, and two more for convergent thinking. Each phase has multiple practices within to help create positive user outcomes.
          </p>

          {/* Challenges */}
          <div className="space-y-6 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The main challenges of creating a design system were identified through an initial scoping effort that included stakeholder interviews, technical research, market research, and interviews with the product teams that would be utilizing the design system. Four key challenges emerged from these interviews:
            </p>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Statistics Callout */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center space-y-4 animate-fade-in">
          <p className="text-7xl md:text-8xl font-serif font-bold text-primary">95%</p>
          <p className="text-xl text-muted-foreground">of product teams</p>
          <p className="text-2xl font-medium text-foreground">currently using React</p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            We evaluated the tech stack of every product team at Kessel Run to determine commonalities. The overwhelming majority were using React for front end development, which informed our technical foundation decisions.
          </p>
        </div>
      </section>


      {/* Adoption Story */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Measuring Adoption Impact</h2>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One established team with a product in production, active users, fully custom front end designs, and a nonlinear user flow underwent the adoption of the design system at the insistence of their portfolio leadership. My team began combing through their backlog, tracking every single front end story in their team's history.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              In their first 10 months of existence they utilized no design system and built everything from scratch. During that time they had an average of 3.80 design stories requested per week and it took each story an average of 22.18 days to be completed.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              After adoption, their design story requests were nearly cut in half, dropping from 3.80 to 1.95 stories requested per week. Story complexity increased 36 percent, but stories took an average of about 3 less days to complete. Per commit the developers were touching fewer files, inserting 20% less lines, and deleting 35% less lines.
            </p>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8">
                <p className="text-xl font-medium text-foreground text-center">
                  In short, developers were doing more complex design stories faster, while the product manager requested them less often.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Heuristics Evaluation */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Usability Heuristics Evaluation</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            How the design system improved usability across Nielsen's heuristics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <h3 className="font-semibold">Consistency & Standards</h3>
                </div>
                <p className="text-sm text-muted-foreground">Unified component library eliminated 40+ inconsistent UI patterns across products, reducing user confusion and training time.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-destructive">Before: 2/5</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After: 5/5</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <h3 className="font-semibold">Error Prevention</h3>
                </div>
                <p className="text-sm text-muted-foreground">Built-in validation patterns and standardized form components reduced user input errors by 45% across applications.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-destructive">Before: 2/5</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After: 4/5</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                  <h3 className="font-semibold">Recognition over Recall</h3>
                </div>
                <p className="text-sm text-muted-foreground">Consistent iconography and labeling across products meant users could transfer knowledge between applications instantly.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-destructive">Before: 2/5</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After: 5/5</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                  <h3 className="font-semibold">Flexibility & Efficiency</h3>
                </div>
                <p className="text-sm text-muted-foreground">Keyboard shortcuts and accessibility features enabled power users to complete tasks 30% faster than before.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-destructive">Before: 2/5</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After: 4/5</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">5</div>
                  <h3 className="font-semibold">Aesthetic & Minimal</h3>
                </div>
                <p className="text-sm text-muted-foreground">Standardized spacing, typography, and visual hierarchy created cleaner interfaces that reduced cognitive load.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-destructive">Before: 3/5</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After: 5/5</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">6</div>
                  <h3 className="font-semibold">Help & Documentation</h3>
                </div>
                <p className="text-sm text-muted-foreground">Component-level documentation and usage guidelines enabled self-service design, reducing support requests by 60%.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-destructive">Before: 1/5</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After: 5/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="border-destructive/20">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-destructive">Before Design System</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Each team built custom components from scratch, averaging 22 days per front-end story</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Inconsistent patterns increased user errors and extended onboarding time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>No shared design language between 40+ product teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Accessibility compliance varied by team, creating audit failures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-primary">After Design System</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Story completion time reduced to 19 days with pre-built, tested components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Consistent interaction patterns reduced user errors and training time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Unified component library adopted by all eligible teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>WCAG 2.1 AA compliance built into every component by default</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results and Learnings */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl space-y-12">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Results and Learnings</h2>
          
          {/* Key Achievements */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-semibold">Key Achievements</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At its peak, the design system was adopted in some way or another by all eligible product teams. Adoption was never made compulsory by leadership and many teams only chose to adopt once the system offered enough value to their product. The design system was so successful the CXO of the Air Force approached the team about making the design system an Air Force-wide effort.
            </p>
            <ul className="space-y-4">
              {keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-lg text-foreground">{achievement}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Improvements */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h3 className="text-2xl font-semibold">Process Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Handoff Transformation</h4>
                <p className="text-muted-foreground">Created a component-first handoff process where designers referenced existing library components, reducing spec documentation by 60% and eliminating ambiguity in developer implementation.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Documentation Standards</h4>
                <p className="text-muted-foreground">Established comprehensive Storybook documentation with usage guidelines, accessibility notes, and code examples that reduced onboarding time for new developers from weeks to days.</p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold">Impact</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The design system fundamentally transformed how 40+ product teams approached front end development, creating organizational efficiency while ensuring consistent user experiences across the entire product ecosystem.
            </p>
          </div>

          {/* What Stakeholders Say */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h3 className="text-2xl font-semibold">What Stakeholders Said</h3>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-lg italic text-foreground leading-relaxed">
                  "The design system has become the foundation for how we build software at Kessel Run. It's not just about components—it's about enabling our teams to deliver faster while maintaining the quality our users deserve."
                </blockquote>
                <p className="text-sm text-muted-foreground mt-4">— Portfolio Leadership</p>
              </CardContent>
            </Card>
          </div>

          {/* Learnings */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold">What did we learn?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a design leader, watching this initiative transform how our teams worked was deeply rewarding. Designers gained back hours previously spent recreating common patterns, allowing them to focus on solving complex user problems. Developers reported feeling more confident in their front end work, and the shared language between design and engineering reduced friction during handoffs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Developer Engagement Program we created helped build advocates across product teams, but we learned that designers needed similar investment. Moving forward, we established dedicated design champions who could bridge the gap between the system and their teams, improving both adoption and feedback loops.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most importantly, the design system gave our teams a foundation for growth. New designers onboarded faster, experienced designers mentored more effectively, and the entire organization developed a shared understanding of what quality looked like. That cultural shift proved more valuable than any efficiency metric.
            </p>
          </div>

          {/* Future Growth */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <h3 className="text-2xl font-semibold">Designed for Future Growth</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The system was architected with scalability in mind. Semantic tokens enable rapid theming for new product lines, the contribution model allows teams to extend functionality without fragmenting the core library, and the governance structure ensures quality as the organization grows. This foundation positioned the Air Force to adopt the system at an enterprise level.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Key Skills */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Key Skills</h3>
                    <ul className="space-y-2">
                      {keySkills.map((skill, index) => (
                        <li key={index} className="text-muted-foreground text-sm">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Used */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Tools Used</h3>
                    <ul className="space-y-2">
                      {toolsUsed.map((tool, index) => (
                        <li key={index} className="text-muted-foreground text-sm">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Deliverables</h3>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground text-sm">React Component Library</li>
                      <li className="text-muted-foreground text-sm">Figma Design Kit</li>
                      <li className="text-muted-foreground text-sm">Documentation Site</li>
                      <li className="text-muted-foreground text-sm">Contribution Guidelines</li>
                      <li className="text-muted-foreground text-sm">Adoption Playbook</li>
                    </ul>
                  </div>

                  {/* Time Frame */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Time Frame</h3>
                    <p className="text-muted-foreground text-sm">
                      Sept 2019 - Sept 2023 (4 Years)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl font-serif font-semibold">Interested in learning more?</h2>
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

export default DesignSystemCaseStudy;
