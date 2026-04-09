import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdoptionImpactTable from "@/components/AdoptionImpactTable";
import PortfolioEfficiencyChart from "@/components/PortfolioEfficiencyChart";
import dsDesignTokens from "@/assets/ds-design-tokens.png";
import dsComponentLibrary from "@/assets/ds-component-library.png";


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


  const designProcessPhases = [
    {
      name: "Discover",
      type: "divergent" as const,
      description: "Understanding the problem space through research and talking to the people doing the work.",
    },
    {
      name: "Define",
      type: "convergent" as const,
      description: "Turning what we learned into clear problem statements worth solving.",
    },
    {
      name: "Develop",
      type: "divergent" as const,
      description: "Generating solutions and iterating until they hold up under real conditions.",
    },
    {
      name: "Deliver",
      type: "convergent" as const,
      description: "Refining, testing, and shipping the final solution.",
    },
  ];

  const challenges = [
    "Products ran different tech stacks with a mix of custom components and third-party libraries — any unified foundation felt out of reach.",
    "Teams were attached to their own solutions for common problems, making adoption as much a change management challenge as a design one.",
    "No off-the-shelf component library could cover the custom, organization-specific components teams actually needed — and without documentation for those, adoption would stall.",
    "Existing wireframe kits didn't carry Kessel Run's theming or custom components, leaving designers unable to prototype quickly even after the engineering side was solved.",
  ];

  const keyAchievements = [
    "A 48% reduction in front end story frequency.",
    "Over 2,000 developer days saved per year per 10-person team.",
    "A three-day reduction in average story completion time.",
    "A pathway established for Air Force-wide source code and artifact sharing that extended well beyond our original scope.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/#work" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-fade-in">
            Portfolio Design System
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Building a shared design language across a growing suite of mission-critical applications, and the organizational work it took to make it stick.
          </p>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            September 2019 – September 2023 · Design Systems Lead
          </p>
        </div>
      </section>

      {/* Design Tokens Hero Image */}
      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-4xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img src={dsDesignTokens} alt="Design Tokens — Color, Typography & Spacing" className="w-full rounded-lg shadow-md" />
          <p className="text-center text-muted-foreground text-sm mt-4">Design Tokens — Color, Typography & Spacing</p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-serif font-semibold animate-fade-in">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Design systems don't fail because the components are bad. They fail because the organization isn't ready for them, or because the team building the system loses sight of who it's actually for.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            When I joined this effort, Kessel Run had grown from a handful of independent applications into an interconnected portfolio of products with overlapping user bases, shared data, and no common design language. Every team was solving the same problems in isolation. Every new product started from scratch. The gap between what we were building and what a mature software organization should look like was widening fast.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            The design system was our answer to that gap. Built on MUI as an open source foundation and extended with custom components and tokens developed through direct feedback from our product teams, it became the shared infrastructure that let designers and developers stop reinventing the wheel and start doing more interesting work.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-serif font-semibold animate-fade-in">Problem Statement</h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Inconsistent user interfaces across products steepened the learning curve for an increasingly overlapping user base. Custom front ends on every team meant more design and development time spent on work that had already been done elsewhere in the organization, often multiple times over.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.15s" }}>
            The problem was really two problems sitting on top of each other:
          </p>
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl font-medium italic text-foreground">
              How might we decrease error rates and onboarding time for users so they spend more of their time on mission-critical tasks rather than navigating unfamiliar interfaces?
            </p>
            <p className="text-xl font-medium italic text-foreground">
              How might we reduce the designer and developer hours spent on UI work so that teams can prioritize usability, security, reliability, and the harder product problems that actually require original thinking?
            </p>
          </div>
        </div>
      </section>

      {/* UX Metrics */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl font-serif font-semibold text-center mb-12">Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Task Completion</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                   Time on core functions versus time spent navigating the interface itself
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
                   Incidents caused by inconsistent UI patterns, giving us a concrete signal of how much the lack of shared standards was affecting real users
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
                   Front end story throughput and cycle time, which gave us the clearest picture of organizational efficiency gains over time
                 </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Metrics - Time to Value */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl font-serif font-semibold text-center mb-4">Time to Value</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            How the design system accelerated value delivery
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
                  <p className="text-xs text-muted-foreground">Pre-built, tested components meant developers could start from a reliable baseline instead of a blank file</p>
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
                  <p className="text-xs text-muted-foreground">When components are already designed, documented, and approved, product managers stop opening tickets to redesign things that are already solved</p>
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
                  <p className="text-xs text-muted-foreground">The shared Figma kit, documentation, and component library gave new designers a foundation to build on from day one</p>
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
                  <p className="text-xs text-muted-foreground">That number compounds across an organization the size of Kessel Run, and it's what eventually got the attention of Air Force leadership</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Efficiency Chart Graphic */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <PortfolioEfficiencyChart />
          </div>
        </div>
      </section>

      {/* Design System Artifacts */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-8 animate-fade-in">
          <div className="space-y-4">
            <img src={dsComponentLibrary} alt="Component Library — Custom MUI Theme" className="w-full rounded-lg shadow-md" />
            <p className="text-center text-muted-foreground text-sm">Component Library — Custom MUI Theme</p>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-8">
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
            The same Double Diamond process that guided our product work shaped how we approached the design system itself. The initial scoping effort included stakeholder interviews, technical research, market research, and direct conversations with the product teams who would be the system's primary users.
          </p>

          {/* Challenges */}
          <div className="space-y-6 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Four challenges surfaced consistently across those conversations:
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
            We addressed the first challenge by auditing the tech stack across every product team. That single data point made the decision to build on MUI straightforward. Rather than designing a system in isolation, we started from a foundation teams were already familiar with and extended it through a structured feedback loop.
          </p>
        </div>
      </section>


      {/* Adoption Story */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Measuring Adoption Impact</h2>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One of the clearest signals of the design system's value came from a controlled comparison we ran with an established team that had a product in production, active users, a fully custom front end, and a nonlinear user flow. Their portfolio leadership asked them to adopt the design system. We started tracking everything.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              In their first 10 months before adoption, the team averaged 3.80 design stories per week at an average completion time of 22.18 days per story.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              After adoption, design story requests dropped to 1.95 per week. Story complexity increased by 36%, which is worth noting because it means the remaining stories were harder, not simpler. Despite that, average completion time dropped by about three days. Developers were touching fewer files per commit, inserting 20% fewer lines of code, and deleting 35% fewer lines.
            </p>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8">
                <p className="text-xl font-medium text-foreground text-center">
                  The summary version: developers were doing more complex work faster, while the product manager was requesting that work less often. That combination is unusual. It's what good design system adoption actually looks like.
                </p>
              </CardContent>
            </Card>

            {/* Adoption Impact Table Graphic */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <AdoptionImpactTable />
            </div>
          </div>
        </div>
      </section>

      {/* Heuristics Evaluation */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Usability Heuristics Evaluation</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            We used Nielsen's heuristics to evaluate usability improvements across the portfolio as the design system matured, giving us a structured way to communicate impact beyond internal metrics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <h3 className="font-semibold">Consistency & Standards</h3>
                </div>
                <p className="text-sm text-muted-foreground">A unified component library eliminated over 40 inconsistent UI patterns across products. Users who moved between applications stopped having to relearn basic interactions, and training time dropped accordingly.</p>
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
                <p className="text-sm text-muted-foreground">Built-in validation patterns and standardized form components reduced user input errors by 45% across applications. Designing error prevention into the component itself meant teams didn't have to remember to implement it independently.</p>
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
                <p className="text-sm text-muted-foreground">Consistent iconography and labeling across products meant users could transfer knowledge between applications without reorientation. When things look and behave the same way, users build mental models that actually transfer.</p>
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
                <p className="text-sm text-muted-foreground">Keyboard shortcuts and accessibility features enabled experienced users to complete tasks 30% faster. These weren't afterthoughts bolted onto existing components; they were built into the system from the start.</p>
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
                <p className="text-sm text-muted-foreground">Standardized spacing, typography, and visual hierarchy created cleaner interfaces with less cognitive noise. Consistency in visual language is one of those things users rarely notice consciously, but feel immediately when it's absent.</p>
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
                <p className="text-sm text-muted-foreground">Component-level documentation and usage guidelines enabled self-service design and development, reducing support requests by 60%. A design system without documentation is just a Figma file nobody trusts.</p>
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
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="border-destructive/20">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-destructive">Before Design System</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Each team built custom components from scratch, averaging 22 days per front end story</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Inconsistent patterns increased user errors and extended onboarding time for both users and new team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>No shared design language existed across 40-plus product teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Accessibility compliance varied by team and individual, creating audit failures that were expensive to remediate after the fact</span>
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
                    <span>Story completion time dropped to 19 days using pre-built, tested components that teams could trust out of the box</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Consistent interaction patterns reduced user errors and shortened training time across the portfolio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>A unified component library was adopted by all eligible teams, most of them voluntarily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>WCAG 2.1 AA compliance was built into every component by default, removing the dependency on individual teams to get it right</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results and Learnings */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-12">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Results and Learnings</h2>
          
          {/* Key Achievements */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-semibold">Key Achievements</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At its peak, the design system had been adopted in some form by every eligible product team at Kessel Run. Adoption was never mandated by leadership. Most teams chose to adopt once the system offered enough clear value to their product, which is exactly how it should work. A design system that people adopt because they want to is fundamentally different from one they're forced into.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              The clearest measure of success came when the CXO of the Air Force approached the team about expanding the system into an Air Force-wide effort. That conversation didn't happen because of a slide deck. It happened because the results were visible and the case was already made.
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
                <p className="text-muted-foreground">We created a component-first handoff process where designers referenced existing library components rather than speccing UI from scratch. Spec documentation dropped by 60% and the ambiguity that typically slows developer implementation largely disappeared.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Documentation Standards</h4>
                <p className="text-muted-foreground">We built out comprehensive Storybook documentation with usage guidelines, accessibility notes, and code examples. The goal was a system that new developers and designers could navigate independently, without needing a team member to walk them through it. That standard of documentation is harder to maintain than it sounds, and keeping it current required treating docs as a first-class deliverable rather than an afterthought.</p>
              </div>
            </div>
          </div>

          {/* Impact */}
          {/* Learnings */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold">What We Learned</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The technical work of building a design system is genuinely hard. The organizational work of getting people to use it is harder.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Early on we invested heavily in a Developer Engagement Program to build advocates across product teams. It worked, but it revealed a gap: designers needed the same investment. We eventually established dedicated design champions who could bridge the system and their teams, which improved both adoption rates and the quality of feedback coming back into the system. That two-way channel between the core team and the people using it daily is what kept the system honest and grounded in real product needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The decision to build on MUI rather than from scratch was one of the best calls we made. It gave teams a foundation they already understood, a massive library of accessible components to start from, and an active open source community maintaining the underlying code. Our job became extending and theming it to fit Kessel Run's context rather than solving problems that had already been solved. That's a very different scope of work, and it let us move faster and deliver more value earlier.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The cultural shift that came with the design system turned out to matter more than any individual efficiency metric. New designers onboarded faster. Experienced designers spent more time on the problems that actually required original thinking. Design and engineering developed a shared language that reduced friction during handoffs in ways that are hard to quantify but easy to feel. That shift was the real return on the investment.
            </p>
          </div>

          {/* Future Growth */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            <h3 className="text-2xl font-semibold">Designed for Future Growth</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The system was built to scale beyond its original context. Semantic tokens enable rapid theming for new product lines. The contribution model lets teams extend functionality without fragmenting the core library. The governance structure was designed to maintain quality as the organization grows and new contributors come in without deep context on earlier decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              That foundation is what made the conversation about an Air Force-wide adoption credible. A system built to solve one team's problems in one moment doesn't earn that kind of consideration. One built with the next five years in mind does.
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
        <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl font-serif font-semibold">Interested in learning more?</h2>
          <Link to="/#work" className="inline-block mt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View More Case Studies
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignSystemCaseStudy;
