import { useEffect } from "react";
import Seo from "@/components/Seo";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyProgress from "@/components/CaseStudyProgress";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import CaseStudySideNav from "@/components/CaseStudySideNav";
import CaseStudyMetadata from "@/components/CaseStudyMetadata";
import ArtifactCard from "@/components/ArtifactCard";
import KeyTakeaway from "@/components/KeyTakeaway";
import ImageFrame from "@/components/ImageFrame";
import userResearchInterview from "@/assets/user-research-interview.jpg";
import stagesUxResearch from "@/assets/stages-ux-research.webp";
import uxResearchProcess from "@/assets/ux-research-process.webp";
import ResearchOutcomesChart from "@/components/ResearchOutcomesChart";
import ResearchSessionsChart from "@/components/ResearchSessionsChart";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "methodology", label: "Methodology" },
  { id: "research-methods", label: "Research Methods" },
  { id: "design-process", label: "Design Process" },
  { id: "before-after", label: "Before & After" },
  { id: "heuristics", label: "Heuristics" },
  { id: "time-to-value", label: "Time to Value" },
  { id: "outcomes", label: "Outcomes" },
  { id: "learnings", label: "Learnings" },
];

const heuristics = [
  { name: "Match Real World", desc: "Research-informed terminology replaced engineer assumptions.", before: 2, after: 5 },
  { name: "User Control & Freedom", desc: "Feedback drove undo/redo patterns and flexible workflows.", before: 2, after: 4 },
  { name: "Error Prevention", desc: "Testing identified error-prone workflows invisible in design reviews.", before: 2, after: 4 },
  { name: "Recognition over Recall", desc: "Card sorting optimized information architecture.", before: 2, after: 5 },
  { name: "Flexibility & Efficiency", desc: "Power user workarounds designed into the product — 25% faster task completion.", before: 2, after: 4 },
  { name: "Help & Documentation", desc: "Research insights embedded into component guidelines.", before: 1, after: 4 },
];

const engagementMetrics = [
  { value: "3 weeks", label: "Faster Development", desc: "Validating concepts before development meant fewer fundamental problems mid-build.", pct: 60 },
  { value: "$500K+", label: "Costs Avoided", desc: "Features that wouldn't have solved user problems caught before development investment.", pct: 85 },
  { value: "65%", label: "Less Rework", desc: "Post-launch design changes dropped once research was embedded early.", pct: 65 },
  { value: "35%", label: "Higher Adoption", desc: "User satisfaction improved from 6.2 to 8.4 out of 10 across tested applications.", pct: 84 },
];

const beforeItems = [
  "Siloed research with no standardized processes",
  "Product decisions driven by stakeholder assumptions",
  "Research insights lost between projects",
  "Limited direct user access",
  "Research conducted after development began",
  "No way to measure research impact",
];

const afterItems = [
  "Unified research ops with standardized templates",
  "Evidence-based decision making tied to metrics",
  "Centralized insight repository with 50+ findings",
  "Direct user engagement through established channels",
  "Research embedded early, reducing rework by 65%",
  "Quarterly impact reporting to leadership",
];

const WarfighterResearchCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Building a Research Practice from Zero — James Loughlin"
        description="Embedding UX research into product teams serving warfighters: $500K+ in costs avoided, 65% less rework, and a 35% lift in user adoption."
        path="/case-study/warfighter-research"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Building a Research Practice from Zero",
          author: { "@type": "Person", name: "James Loughlin" },
          description: "Standing up a research practice for operational users from the ground up.",
        }}
      />
      <CaseStudyProgress />
      <Navigation />
      <main id="main">


      {/* Hero */}
      <section className="pt-24 pb-8 px-6">
        <div className="container mx-auto max-w-reading">
          <Link to="/#work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 rounded-[14px]">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          <p className="text-[11px] font-technical font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            UX Manager & Lead Researcher · 2021 – 2024
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Building a Research Practice from Zero
          </h1>
          <p className="text-lg text-foreground/80 font-medium animate-fade-in mb-2">Grounding product decisions in user evidence</p>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            De-risking product decisions with qualitative research, and convincing an engineering-first organization to trust what users said.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-reading animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <ImageFrame src={userResearchInterview} alt="Field user research interview with military operators in operational environment" caption="Field Research" aspectRatio="16/7" />
        </div>
      </section>

      {/* Body with side nav */}
      <div className="container mx-auto max-w-content px-6 flex gap-12">
        <CaseStudySideNav sections={sections} />

        <div className="flex-1 min-w-0 max-w-reading">
          {/* Overview */}
          <section id="overview" className="section-spacing scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
            <CaseStudyMetadata
              role="UX Manager & Lead Researcher"
              timeline="2021 – 2024"
              team="2 Designers, 8 Product Teams"
            />
            <KeyTakeaway>
              The goal wasn't more research sessions — it was changing how the organization thought about research.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Product teams were making design decisions based almost entirely on stakeholder assumptions. There was no shared methodology, no centralized place for insights to live, and no expectation that user evidence should drive decisions.
              </p>
              <p>
                Over three years, we built that practice from the ground up — from a nice-to-have to a standard part of how products got built.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ArtifactCard label="Methods" icon="🔬" items={["Contextual Inquiry", "Usability Testing", "Participatory Workshops", "Card Sorting", "Diary Studies"]} />
              <ArtifactCard label="Outputs" icon="📊" items={["Research Briefs", "Opportunity Maps", "Impact-Effort Matrices", "Insight Library (50+)", "Quarterly Reports"]} />
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Problem</h2>
            <KeyTakeaway>
              The cost of no research showed up in low adoption, confused interfaces, and rework cycles.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                A merger brought teams with different habits and no common research standards. Nobody had a direct line to end users. Findings that existed were scattered and rarely connected to product decisions.
              </p>
            </div>
            <div className="rounded-[14px] bg-amber-500/5 p-8 ring-1 ring-inset ring-amber-500/20">
              <p className="text-[11px] font-technical font-semibold tracking-[0.15em] uppercase text-amber-600 mb-4">Problem Statement</p>
              <p className="text-lg font-medium leading-relaxed">
                How might we establish research practices that give product teams direct access to users' needs, validate design decisions early, and build empathy for operators in high-stakes environments?
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section id="methodology" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Methodology</h2>
            <KeyTakeaway>
              Four stages adapted from standard UX practice for classified operational environments.
            </KeyTakeaway>
            <div className="flex justify-center py-4 mb-4">
              <img src={stagesUxResearch} alt="Four stages of UX research methodology — discovery, exploring, testing, and listening" className="max-w-2xl w-full rounded-[14px] grayscale" />
            </div>
            <div className="flex justify-center py-6">
              <div className="flex items-center gap-0 max-w-full w-full">
                {[
                  { name: "Discovery", type: "divergent" },
                  { name: "Exploring", type: "convergent" },
                  { name: "Testing", type: "divergent" },
                  { name: "Listening", type: "convergent" },
                ].map((phase, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className={`h-20 flex items-center justify-center ${index % 2 === 0 ? "bg-gradient-to-r from-primary/20 to-primary/40" : "bg-gradient-to-r from-primary/40 to-primary/20"} ${index === 0 ? "rounded-l-xl" : ""} ${index === 3 ? "rounded-r-xl" : ""}`}>
                      <span className="font-semibold text-foreground text-sm">{phase.name}</span>
                    </div>
                    <span className="text-[10px] font-technical mt-2 block text-muted-foreground">
                      {phase.type === "divergent" ? "Divergent" : "Convergent"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Research Methods */}
          <section id="research-methods" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Research Methods</h2>
            <KeyTakeaway>
              60+ sessions: contextual inquiries, usability testing, and participatory workshops.
            </KeyTakeaway>
            <div className="flex justify-center py-4 mb-6">
              <img src={uxResearchProcess} alt="UX research process diagram — structured approach to user research in defense environments" className="max-w-3xl w-full rounded-[14px] grayscale" />
            </div>
            <ul className="space-y-4">
              {[
                "30+ contextual inquiries and shadowing sessions in actual work environments.",
                "30+ moderated usability sessions with task-based protocols and think-aloud methods.",
                "Participatory design workshops where operators co-created solutions with designers.",
                "Established recruitment channels, alignment processes, and shared standards across teams.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 rounded-[14px] bg-muted/50 border border-border ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
              <ResearchSessionsChart />
            </div>
          </section>

          {/* Design Process */}
          <section id="design-process" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Design Process</h2>
            <KeyTakeaway>
              Research findings are only useful if people act on them.
            </KeyTakeaway>
            {[
              { title: "1. Research Strategy & Alignment", items: ["Goals tied to product success metrics", "Hypotheses written before sessions", "Researchers embedded early in planning cycles"] },
              { title: "2. Mixed Methods Research", items: ["Generative research through field observations", "Moderated usability with think-aloud protocols", "Large-scale surveys for quantification", "Triangulation across methods to reduce bias"] },
              { title: "3. Synthesis & Stakeholder Engagement", items: ["Opportunity maps and impact-effort matrices", "Co-interpretation workshops with cross-functional teams", "Delivery sessions structured around product OKRs"] },
              { title: "4. Documentation & Operationalization", items: ["Centralized repositories with standard templates", "Searchable insight library with tagging", "Research readiness gates in delivery processes"] },
            ].map((step, i) => (
              <div key={i} className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Before & After */}
          <section id="before-after" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Before & After</h2>
            <KeyTakeaway>
              From siloed, assumption-driven design to standardized, evidence-based practice.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[14px] bg-destructive/5 p-6 space-y-3 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-destructive text-sm">Before</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {beforeItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-destructive">âœ—</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[14px] bg-primary/5 p-6 space-y-3 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-primary text-sm">After</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {afterItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-primary">âœ“</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Heuristics */}
          <section id="heuristics" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Heuristic Evaluation</h2>
            <KeyTakeaway>
              Tracking usability improvements using Nielsen's heuristics as a consistent framework.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {heuristics.map((h, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-6 space-y-3 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{i + 1}</div>
                    <h3 className="font-semibold text-sm">{h.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                  <div className="flex items-center gap-2 text-[11px] font-technical">
                    <span className="text-destructive">Before: {h.before}/5</span>
                    <span className="text-muted-foreground">â†’</span>
                    <span className="text-primary font-medium">After: {h.after}/5</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Time to Value */}
          <section id="time-to-value" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Time to Value</h2>
            <KeyTakeaway>
              Research accelerated value delivery and avoided $500K+ in unnecessary development costs.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engagementMetrics.map((m, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-6 space-y-3 shadow-elevated ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <div>
                    <p className="text-3xl font-bold text-primary">{m.value}</p>
                    <p className="text-sm font-medium">{m.label}</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full" style={{ width: `${m.pct}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes */}
          <section id="outcomes" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Outcomes</h2>
            <KeyTakeaway>
              User satisfaction improved from 6.2 to 8.4 across all tested applications.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "User satisfaction improved from 6.2 to 8.4 across tested applications.",
                "Research became standard practice across all 6 portfolio missions.",
                "A searchable library of 50+ insights with tagging by topic, product, and segment.",
                "15 designers and PMs trained in research methods with embedded readiness gates.",
                "Quarterly research impact reporting connected activity to product performance.",
                "Centralized repositories with standard templates for all research artifacts.",
              ].map((outcome, i) => (
                <div key={i} className="p-6 rounded-[14px] border border-border/60 bg-card">
                  <p className="text-sm leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-[14px] bg-muted/50 border border-border ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
              <ResearchOutcomesChart />
            </div>
          </section>

          {/* Learnings */}
          <section id="learnings" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Learnings</h2>
            <KeyTakeaway>
              The turning point came from specificity — not summary reports, but moments of direct user contact.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The hardest part wasn't the research itself. It was earning the credibility to have findings taken seriously by teams that had been shipping software without direct user access for years.
              </p>
              <p>
                Broad claims didn't move people. A clip of an operator struggling with a specific workflow, played in a planning meeting, did. Embedding researchers within product teams rather than housing them centrally was the structural decision that made the difference.
              </p>
              <p>
                The insight library was more valuable than we anticipated. Research compounds when it's findable.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooterNav currentSlug="warfighter-research" />
      </main>
      <Footer />
    </div>
  );
};

export default WarfighterResearchCaseStudy;
