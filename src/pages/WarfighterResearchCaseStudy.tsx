import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import userResearchInterview from "@/assets/user-research-interview.jpg";
import stagesUxResearch from "@/assets/stages-ux-research.webp";
import uxResearchProcess from "@/assets/ux-research-process.webp";
import ResearchOutcomesChart from "@/components/ResearchOutcomesChart";
import ResearchSessionsChart from "@/components/ResearchSessionsChart";

const WarfighterResearchCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const designProcessPhases = [
    {
      name: "Discovery",
      type: "divergent" as const,
      description: "Understanding the problem space before any solutions are on the table. Field studies, diary studies, user interviews, and stakeholder interviews to gather foundational context on user needs, workflows, and constraints.",
      activities: ["Field studies", "Diary studies", "User interviews", "Stakeholder interviews", "Requirements gathering"]
    },
    {
      name: "Exploring",
      type: "convergent" as const,
      description: "Synthesizing what we learned into design direction. Competitive analysis, persona building, task analysis, journey mapping, and card sorting to move from raw observations to actionable insights.",
      activities: ["Competitive analysis", "Persona building", "Task analysis", "Journey mapping", "Card sorting"]
    },
    {
      name: "Testing",
      type: "divergent" as const,
      description: "Pressure-testing design solutions against real user expectations. Moderated usability sessions, benchmark testing, accessibility evaluation, and A/B testing to validate before development investment locked in.",
      activities: ["Usability testing", "Benchmark testing", "Accessibility evaluation", "A/B testing"]
    },
    {
      name: "Listening",
      type: "convergent" as const,
      description: "Ongoing feedback after launch. Surveys, product analytics, search-log analysis, and usability-bug reviews to catch what pre-launch testing missed and feed continuous improvement.",
      activities: ["Surveys", "Analytics reviews", "Search-log analysis", "FAQ reviews"]
    },
  ];

  const researchMethodology = [
    "Conducted more than 30 contextual inquiries and shadowing sessions with operational users in their natural work environments — watching people do their actual jobs rather than asking them to describe those jobs from memory.",
    "Ran more than 30 moderated usability testing sessions with active duty personnel using task-based protocols and think-aloud methods, giving us a direct window into how users processed information and where interfaces broke their expectations.",
    "Ran participatory design workshops where operational users co-created solutions alongside designers. Card sorting and prototype feedback in those sessions did something beyond just gathering data — it built trust.",
    "Established participant recruitment channels, stakeholder alignment processes, and common points of contact for research standards across all product teams. That infrastructure sounds unglamorous, but it was what made the research program scalable rather than dependent on individual heroics."
  ];

  const processSteps = [
    {
      title: "1. Research Strategy and Alignment",
      content: [
        "Every research engagement started with clearly defined goals tied to product success metrics — adoption rates, error reduction, user satisfaction. Before a single session was scheduled, we wrote hypotheses about what we expected to find.",
        "That discipline kept research focused on decision-critical questions rather than general curiosity, which mattered in an environment where user access was limited and every session had to count.",
        "We embedded researchers early in planning cycles so user evidence could influence roadmaps before priorities were locked.",
        "Research Briefs for each project defined objectives, audiences, measures of success, and deliverables before the work began — giving stakeholders a clear picture of what they were getting and when."
      ]
    },
    {
      title: "2. Mixed Methods Research",
      content: [
        "Generative research through contextual inquiries, diary studies, and field observations at operational bases gave us the foundational understanding of what users' lives actually looked like.",
        "Moderated usability sessions with think-aloud protocols validated whether design concepts held up when real people tried to use them.",
        "Large-scale surveys helped us quantify pain points and preferences across a user base too large to reach entirely through qualitative methods.",
        "Triangulating across methods was intentional. Any single method has blind spots. Combining them reduced bias and gave teams higher confidence in the findings they were building products around."
      ]
    },
    {
      title: "3. Synthesis and Stakeholder Engagement",
      content: [
        "Research findings are only useful if people act on them. We translated insights into decision-ready artifacts — opportunity maps, impact-effort matrices, clear recommendations tied to specific product decisions.",
        "We facilitated synthesis workshops with cross-functional teams so findings weren't handed down from on high but co-interpreted with the people who would need to act on them.",
        "Delivery sessions were structured around product OKRs rather than data summaries. Stakeholders didn't need a research report; they needed to know what to do next and why."
      ]
    },
    {
      title: "4. Documentation and Operationalization",
      content: [
        "We built centralized research repositories with standard templates for plans, screeners, moderator guides, and reports — so institutional knowledge didn't walk out the door every time someone rotated off a team.",
        "A searchable insight library with tagging systems for topics, products, and user segments meant findings from one team's research could inform another team's decisions months later.",
        "We linked research insights directly to product tickets and documentation for traceability, and established research readiness gates in delivery processes so that 'we haven't validated this with users' became a legitimate reason to pause rather than an inconvenient comment in a planning meeting."
      ]
    }
  ];

  const heuristics = [
    {
      name: "Match Real World",
      description: "Research-informed terminology and workflows replaced engineer assumptions about how users talked about their work. When you watch someone do their job for an hour, you stop guessing what words they use.",
      before: 2,
      after: 5
    },
    {
      name: "User Control & Freedom",
      description: "Direct user feedback drove the introduction of undo/redo patterns and flexible workflows that matched how operators actually moved through tasks rather than how designers assumed they would.",
      before: 2,
      after: 4
    },
    {
      name: "Error Prevention",
      description: "Usability testing identified error-prone workflows that looked fine in design reviews but fell apart under real conditions. Confirmation dialogs and validation patterns came directly from watching users make mistakes we hadn't anticipated.",
      before: 2,
      after: 4
    },
    {
      name: "Recognition over Recall",
      description: "Card sorting and tree testing with actual users optimized the information architecture in ways that internal review never would have surfaced. The result was a measurable reduction in cognitive load during high-pressure operations.",
      before: 2,
      after: 5
    },
    {
      name: "Flexibility & Efficiency",
      description: "Research revealed how power users had developed workarounds for the limitations in existing interfaces. Designing those shortcuts into the product rather than around it enabled 25% faster task completion for experienced operators.",
      before: 2,
      after: 4
    },
    {
      name: "Help & Documentation",
      description: "Research insights embedded into component guidelines provided contextual help grounded in real usage patterns rather than assumptions about what users would need to know.",
      before: 1,
      after: 4
    }
  ];

  const engagementMetrics = [
    {
      value: "3 weeks",
      label: "Faster Development",
      description: "Validating concepts before development began meant teams weren't discovering fundamental problems halfway through a build. Early-stage research moved the point of failure to where it was cheap to fix.",
      percentage: 60
    },
    {
      value: "$500K+",
      label: "Costs Avoided",
      description: "Features that wouldn't have solved user problems were caught and redirected before development investment was made. This number is conservative — based on average feature development spend for features research directly prevented.",
      percentage: 85
    },
    {
      value: "65%",
      label: "Less Rework",
      description: "Post-launch design changes dropped significantly once research was embedded early in planning cycles. The correlation was direct: teams that validated before build had fewer surprises after launch.",
      percentage: 65
    },
    {
      value: "35%",
      label: "Higher Adoption",
      description: "User satisfaction scores improved from 6.2 to 8.4 out of 10 across tested applications. That improvement was consistent across the portfolio, not isolated to individual products.",
      percentage: 84
    }
  ];

  const beforeItems = [
    "Siloed research practices with no standardized processes or shared methodologies across teams",
    "Product decisions driven by stakeholder assumptions rather than user evidence",
    "Research insights lost between projects with no centralized place to find them",
    "Limited direct user access, with teams relying on second-hand information from people who thought they knew what users needed",
    "Research conducted after development had already begun, turning findings into expensive rework",
    "No way to measure whether research was actually influencing product outcomes"
  ];

  const afterItems = [
    "Unified research operations with standardized templates and methodologies across all product teams",
    "Evidence-based decision making tied to specific product success metrics",
    "Centralized insight repository with 50-plus tagged findings accessible to all teams",
    "Direct user engagement through established recruitment channels and operational access",
    "Research embedded early in planning cycles, reducing post-launch rework by 65%",
    "Quarterly research impact reporting connecting research activity directly to product performance"
  ];

  const outcomes = [
    "User satisfaction improved from 6.2 to 8.4 out of 10 across tested applications, measured consistently using the same instruments before and after the research program was established.",
    "User research became standard practice across all six Targeting and Geo-intelligence portfolio missions, with consistent methodology that transferred between teams rather than living in the heads of individual researchers.",
    "A searchable library of 50-plus research insights with tagging by topic, product, and user segment meant findings compounded over time instead of expiring when a project ended.",
    "Centralized research repositories with standard templates for plans, screeners, moderator guides, and reports gave every team a starting point rather than a blank page.",
    "Fifteen designers and product managers were trained in research methods, with research readiness gates embedded into delivery processes so the practice could sustain itself beyond any individual's involvement.",
    "Quarterly research impact reporting to leadership connected research activity directly to product performance, giving the program a business case that didn't depend on people taking its value on faith."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in">
            Organizational Research Reboot
          </h1>
          <p className="text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            De-risking product decisions through qualitative user research — and convincing an engineering-first organization to trust what users actually said.
          </p>
          <p className="text-lg text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            2021 – 2024 · UX Manager & Lead UX Researcher
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
                <p className="text-lg">2021 – 2024</p>
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
              When I took this on, product teams across the Kessel Run portfolio were making design decisions based almost entirely on stakeholder assumptions. Some teams had done pockets of research, but findings rarely left the room they were created in. There was no shared methodology, no centralized place for insights to live, and no established expectation that user evidence should drive product decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The goal wasn't just to run more research sessions. It was to change how the organization thought about research — from a nice-to-have that happened when someone had bandwidth, to a standard part of how products got built. That kind of shift is harder than it sounds in an environment that was built by engineers, for engineers, and had been operating that way for years.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over three years, working with a research team of two designers and collaborating across eight product teams, we built that practice from the ground up.
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
              Product teams were designing based on what stakeholders assumed users needed. A merger of outside programs brought teams with different habits and no common research standards into the same portfolio. Nobody had a direct line to end users. Findings that did exist were scattered, inconsistently documented, and rarely connected back to actual product decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The cost of this wasn't always visible right away. It showed up later, in features that launched to low adoption, in interfaces that confused the people who needed to use them most, and in rework cycles that ate into timelines that were already tight.
            </p>
          </div>

          <Card className="bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-sm font-semibold text-primary mb-4">PROBLEM STATEMENT</h3>
              <p className="text-xl font-medium leading-relaxed">
                How might we establish research practices that give product teams direct access to users' needs, validate design decisions early, and build empathy for users operating in high-stakes mission-critical environments — while making that information accessible and actionable for stakeholders who need to act on it?
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
              We organized the research program around four distinct stages, adapted from standard UX practice to fit the pace and constraints of a classified operational environment. The framework gave teams a shared language for where they were in the process and what kind of evidence was appropriate at each stage.
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
            We used a mixed-methods approach throughout — qualitative methods to understand the why behind user behavior, quantitative methods to confirm whether what we observed was widespread and significant enough to act on. Neither alone was sufficient. Together they gave product teams evidence they could actually defend in prioritization conversations.
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

          {/* Research Sessions Chart */}
          <div className="mt-12 p-8 rounded-xl bg-muted/50 border border-border">
            <ResearchSessionsChart />
          </div>
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
          <h2 className="text-3xl font-bold animate-fade-in">Before and After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-destructive/20 animate-fade-in">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-destructive">Before</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {beforeItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-destructive mt-1">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-primary">After</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {afterItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
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
            We tracked usability improvements using Nielsen's heuristics as a consistent framework across the portfolio, giving us a structured way to compare where products started and where research-informed design took them.
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
          <h2 className="text-3xl font-bold animate-fade-in">Outcomes and Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">{outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Outcomes Chart */}
          <div className="mt-12 p-8 rounded-xl bg-background border border-border">
            <ResearchOutcomesChart />
          </div>
        </div>
      </section>

      {/* What We Learned */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-8 animate-fade-in">
          <h2 className="text-3xl font-bold">What We Learned</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The hardest part of this work wasn't the research itself. It was earning the credibility to have research findings taken seriously by teams that had been building software without direct user access for years and had shipped products anyway.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The turning point came from specificity. Broad claims about user needs didn't move people. A clip of an operator struggling with a specific workflow in a usability session, played in a planning meeting, did. The research program gained traction when it stopped delivering summary reports and started delivering moments of direct user contact that stakeholders couldn't rationalize away.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Embedding researchers within product teams rather than housing them in a centralized research function was the structural decision that made the difference. Researchers who sat in standups, attended backlog refinement sessions, and had relationships with developers got their findings acted on. Researchers who parachuted in with a report did not.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The insight library was more valuable than we anticipated. Research compounds when it's findable. Teams stopped duplicating discovery work when they could search what other teams had already learned. That alone changed the economics of the program significantly.
            </p>
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

      <Footer />
    </div>
  );
};

export default WarfighterResearchCaseStudy;
