import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import userResearchInterview from "@/assets/user-research-interview.jpg";
import stagesUxResearch from "@/assets/stages-ux-research.webp";
import uxResearchProcess from "@/assets/ux-research-process.webp";

const WarfighterResearchCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const designProcessPhases = [
    {
      name: "Discovery",
      type: "divergent" as const,
      description: "Understanding the problem space through field studies, diary studies, user interviews, and stakeholder interviews to gather essential information about user needs.",
      activities: ["Field studies", "Diary studies", "User interviews", "Stakeholder interviews", "Requirements gathering"]
    },
    {
      name: "Exploring",
      type: "convergent" as const,
      description: "Synthesizing gathered information through competitive analysis, persona building, task analysis, journey mapping, and card sorting to inform design decisions.",
      activities: ["Competitive analysis", "Persona building", "Task analysis", "Journey mapping", "Card sorting"]
    },
    {
      name: "Testing",
      type: "divergent" as const,
      description: "Validating design solutions through qualitative usability testing, benchmark testing, accessibility evaluation, and A/B testing against user expectations.",
      activities: ["Usability testing", "Benchmark testing", "Accessibility evaluation", "A/B testing"]
    },
    {
      name: "Listening",
      type: "convergent" as const,
      description: "Continuous improvement through surveys, product analytics reviews, search-log analysis, and usability-bug reviews to gather ongoing feedback.",
      activities: ["Surveys", "Analytics reviews", "Search-log analysis", "FAQ reviews"]
    },
  ];

  const researchMethodology = [
    "Conducted 30+ contextual inquiries and shadowing sessions with operational users in their natural environment, providing valuable insights into behaviors and preferences that only direct observation can reveal.",
    "Facilitated 30+ usability testing sessions with active duty personnel using task-based moderated sessions and think-aloud protocols to uncover users' thoughts, feelings, and motivations.",
    "Ran participatory design workshops with operational users to co-create solutions, employing card sorting and prototype feedback techniques to build application trust.",
    "Established research operations including participant recruitment, stakeholder alignment, and common points of contact for research standards across all product teams.",
    "Created and contributed to research artifacts and repositories with clear documentation, visual aids, and user personas to enhance understanding across the organization.",
    "Developed a structured research framework encompassing discovery, exploration, testing, and listening phases with actionable steps to guide research teams seamlessly."
  ];

  const processSteps = [
    {
      title: "1. Research Strategy & Alignment",
      content: [
        "Defined research goals tied to product success metrics including adoption rates, error reduction, and user satisfaction",
        "Established hypotheses before research began to focus on decision-critical questions rather than exploratory curiosity",
        "Embedded researchers early in planning cycles so user evidence could influence roadmaps and feature prioritization",
        "Created Research Briefs for each project outlining objectives, audiences, measures of success, and deliverables"
      ]
    },
    {
      title: "2. Mixed Methods Research",
      content: [
        "Conducted generative research through contextual inquiries, diary studies, and field observations at operational bases",
        "Ran task-based moderated usability sessions with think-aloud protocols to validate design concepts",
        "Deployed large-scale surveys with behavioral segments to quantify pain points and preferences",
        "Triangulated insights across qualitative and quantitative methods to reduce bias and increase confidence"
      ]
    },
    {
      title: "3. Synthesis & Stakeholder Engagement",
      content: [
        "Translated insights into decision-ready artifacts including opportunity maps, impact-effort matrices, and clear recommendations",
        "Facilitated research synthesis workshops with cross-functional teams to co-interpret findings",
        "Delivered findings in digestible sessions tied to product OKRs rather than data dumps",
        "Built centralized research repositories with standard templates for plans, screeners, guides, and reports"
      ]
    },
    {
      title: "4. Documentation & Operationalization",
      content: [
        "Created searchable insight libraries with tagging systems for topics, products, and user segments",
        "Linked research insights directly to product tickets and documentation for traceability",
        "Established research readiness gates in delivery processes to ensure evidence informed decisions",
        "Defined 'Research Done' criteria requiring evidence that directly influences product decisions"
      ]
    }
  ];

  const heuristics = [
    {
      name: "Match Real World",
      description: "Research-informed terminology and workflows replaced engineer assumptions, aligning with actual mission planning language.",
      before: 2,
      after: 5
    },
    {
      name: "User Control & Freedom",
      description: "User feedback drove undo/redo patterns and flexible workflows that matched how operators actually work.",
      before: 2,
      after: 4
    },
    {
      name: "Error Prevention",
      description: "Usability testing identified error-prone workflows, leading to confirmation dialogs and validation patterns.",
      before: 2,
      after: 4
    },
    {
      name: "Recognition over Recall",
      description: "Card sorting and tree testing optimized information architecture, reducing cognitive load during high-stress operations.",
      before: 2,
      after: 5
    },
    {
      name: "Flexibility & Efficiency",
      description: "Research revealed power user shortcuts and customization needs, enabling 25% faster task completion.",
      before: 2,
      after: 4
    },
    {
      name: "Help & Documentation",
      description: "User research insights embedded into component guidelines provided contextual help for designers.",
      before: 1,
      after: 4
    }
  ];

  const engagementMetrics = [
    {
      value: "3 weeks",
      label: "Faster Development",
      description: "Reduced feature cycle through early validation",
      percentage: 60
    },
    {
      value: "$500K+",
      label: "Costs Avoided",
      description: "Features prevented that wouldn't solve problems",
      percentage: 85
    },
    {
      value: "65%",
      label: "Less Rework",
      description: "Reduced post-launch design changes",
      percentage: 65
    },
    {
      value: "35%",
      label: "Higher Adoption",
      description: "User satisfaction 6.2 → 8.4/10",
      percentage: 84
    }
  ];

  const outcomes = [
    "Improved user satisfaction scores from 6.2 to 8.4/10 across tested applications through research-informed design decisions",
    "Established user research as standard practice across all 6 T&G Portfolio missions with consistent methodology",
    "Created searchable library of 50+ research insights with tagging systems for topics, products, and user segments",
    "Built centralized research repositories with standard templates for plans, screeners, moderator guides, and reports",
    "Trained 15 designers and product managers in research methods, establishing research readiness gates in delivery processes",
    "Established quarterly research impact reporting to leadership, tying research directly to product performance metrics"
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
            Organizational Research Reboot
          </h1>
          <p className="text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            De-risking product decisions through qualitative user research
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img src={userResearchInterview} alt="User research interview" className="w-full h-[500px] object-cover" />
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
                <p className="text-lg">UX Manager & Lead UX Researcher</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">TIMELINE</h3>
                <p className="text-lg">2021 - 2023</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">TEAM</h3>
                <p className="text-lg">Research team of 2 designers, collaborated with 8 product teams</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Led comprehensive user research initiatives with users across multiple USAF missions to validate product concepts, uncover user needs, and reduce risk before significant development investment. This research program established user-centered design practices within a traditionally engineering-focused environment.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Product teams were making critical design decisions based on stakeholder assumptions only. A merger of outside programs needed to be realigned to modern research methods and practices. Teams lacked direct access to end users and relied on second hand information or stakeholder knowledge and had no established standardized research processes for assimilating or disseminating findings to justify and support work.
            </p>
          </div>

          <Card className="bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-sm font-semibold text-primary mb-4">PROBLEM STATEMENT</h3>
              <p className="text-xl font-medium leading-relaxed">
                How might we establish research practices that give product teams direct access to users' needs, validate design decisions early, and build empathy for users operating in high-stakes mission-critical environments while making that information accessible and digestible to stakeholders?
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Design Process Methodology */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">The Four Stages of UX Research</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The UX research process unfolds in four distinct stages: Discovery, Exploring, Testing, and Listening. Each stage plays a pivotal role in shaping the user experience, from setting clear objectives to translating findings into actionable design decisions.
            </p>
          </div>

          {/* Stages Diagram */}
          <div className="flex justify-center py-4">
            <img src={stagesUxResearch} alt="Four stages of UX research: Discovery, Exploring, Testing, and Listening" className="max-w-2xl w-full rounded-xl grayscale" />
          </div>

          {/* Double Diamond Visual */}
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-0 max-w-4xl w-full">
              {designProcessPhases.map((phase, index) => (
                <div key={index} className="flex-1 text-center">
                  <div 
                    className={`h-24 flex items-center justify-center relative ${
                      phase.type === "divergent" 
                        ? "bg-gradient-to-r from-primary/20 to-primary/40" 
                        : "bg-gradient-to-r from-primary/40 to-primary/20"
                    } ${index === 0 ? "rounded-l-xl" : ""} ${index === designProcessPhases.length - 1 ? "rounded-r-xl" : ""}`}
                  >
                    <span className="font-semibold text-foreground">{phase.name}</span>
                  </div>
                  <span className={`text-xs mt-2 block ${phase.type === "divergent" ? "text-primary" : "text-muted-foreground"}`}>
                    {phase.type === "divergent" ? "Divergent" : "Convergent"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Descriptions with Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcessPhases.map((phase, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${phase.type === "divergent" ? "bg-primary" : "bg-muted-foreground"}`} />
                    <h3 className="font-semibold text-lg">{phase.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
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

      {/* Research Methodology */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-8 animate-fade-in">
          <h2 className="text-3xl font-bold">Research Methodology</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our research methodology combined qualitative and quantitative approaches, employing a mix of methods for comprehensive understanding. Qualitative methods like interviews and observation provided depth into users' thoughts and motivations, while quantitative methods such as surveys and analytics offered statistical significance for data-driven decisions.
          </p>
          
          {/* Research Process Diagram */}
          <div className="flex justify-center py-4">
            <img src={uxResearchProcess} alt="Key steps in the UX research process" className="max-w-3xl w-full rounded-xl grayscale" />
          </div>
          
          <ul className="space-y-4">
            {researchMethodology.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <h2 className="text-3xl font-bold animate-fade-in">Design Process</h2>
          {processSteps.map((section, index) => (
            <div key={index} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-2xl font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-8">
          <h2 className="text-3xl font-bold animate-fade-in">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-destructive/20 animate-fade-in">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-destructive">Before Research Operations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Siloed research practices with no standardized processes or shared methodologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Product decisions based on stakeholder assumptions rather than user evidence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Research insights lost between teams with no centralized repository</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Limited direct user access, relying on second-hand information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Research conducted after development began, leading to costly rework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>No research impact metrics or connection to product outcomes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-primary">After Research Operations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Unified research operations with standardized templates and methodologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Evidence-based decision making tied to product success metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Centralized insight repositories with searchable, tagged findings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Direct user engagement through established recruitment channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Research embedded early in planning cycles, reducing rework by 65%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Quarterly research impact reporting tied to product performance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Heuristics Evaluation */}
      <section className="py-16 px-6 bg-muted/30">
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

      {/* Engagement Metrics - Time to Value */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-8">
          <h2 className="text-3xl font-bold animate-fade-in">Time to Value</h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            How research accelerated value delivery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementMetrics.map((metric, index) => (
              <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-3xl font-bold text-primary">{metric.value}</p>
                      <p className="text-sm font-medium">{metric.label}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full transition-all duration-1000" 
                        style={{ width: `${metric.percentage}%` }} 
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

export default WarfighterResearchCaseStudy;