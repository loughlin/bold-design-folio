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
import DeviceFrame from "@/components/DeviceFrame";
import AdoptionImpactTable from "@/components/AdoptionImpactTable";
import PortfolioEfficiencyChart from "@/components/PortfolioEfficiencyChart";
import dsDesignTokens from "@/assets/ds-design-tokens.png";
import dsComponentLibrary from "@/assets/ds-component-library.png";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "metrics", label: "Success Metrics" },
  { id: "time-to-value", label: "Time to Value" },
  { id: "process", label: "Design Process" },
  { id: "adoption", label: "Adoption Impact" },
  { id: "heuristics", label: "Heuristics" },
  { id: "before-after", label: "Before & After" },
  { id: "results", label: "Results" },
];

const challenges = [
  "Products ran different tech stacks with a mix of custom components and third-party libraries.",
  "Teams were attached to their own solutions, making adoption a change management challenge.",
  "No off-the-shelf library could cover custom, organization-specific components.",
  "Existing wireframe kits didn't carry Kessel Run's theming or custom components.",
];

const keyAchievements = [
  "A 48% reduction in front end story frequency.",
  "Over 2,000 developer days saved per year per 10-person team.",
  "A three-day reduction in average story completion time.",
  "A pathway for Air Force-wide source code and artifact sharing.",
];

const DesignSystemCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="One Design System for Five Missions — James Loughlin"
        description="Building an enterprise design system across five mission-critical products — 48% reduction in front-end story frequency and 2,000+ developer days saved per year."
        path="/case-study/design-system"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "One Design System for Five Missions",
          author: { "@type": "Person", name: "James Loughlin" },
          description: "Enterprise design system serving five operational products.",
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
            Design Systems Lead · 2019 – 2023
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">One Design System for Five Missions</h1>
          <p className="text-lg text-foreground/80 font-medium animate-fade-in mb-2">The shared foundation under five operational products</p>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Giving a growing suite of mission-critical applications one design language instead of five drifting ones.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-reading animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <DeviceFrame src={dsDesignTokens} alt="Design tokens system — color, typography, and spacing definitions for scalable design systems" caption="Design Tokens" />
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
              role="Design Systems Lead"
              timeline="2019 – 2023"
              team="40+ Product Teams, 5 Applications"
            />
            <KeyTakeaway>
              Design systems don't fail because the components are bad. They fail because the organization isn't ready.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                When I joined, Kessel Run had grown from independent applications into an interconnected portfolio with overlapping user bases, shared data, and no common design language. Every team was solving the same problems in isolation.
              </p>
              <p>
                Built on MUI as an open source foundation and extended with custom components and tokens developed through direct team feedback, the design system became the shared infrastructure that let teams stop reinventing the wheel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ArtifactCard label="Tools" icon="🛠" items={["MUI (Material UI)", "Figma", "Storybook", "React", "TypeScript"]} />
              <ArtifactCard label="Skills" icon="💡" items={["Mentorship & Leadership", "Component Libraries", "Stakeholder Management", "Documentation", "Dev/Design Pairing"]} />
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Problem</h2>
            <KeyTakeaway>
              The problem was really two problems sitting on top of each other.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                Inconsistent UIs steepened the learning curve for an increasingly overlapping user base. Custom front ends meant more time spent on work already done elsewhere.
              </p>
            </div>
            <div className="space-y-4 rounded-[14px] bg-amber-500/5 p-6 ring-1 ring-inset ring-amber-500/20">
              <p className="text-lg font-medium italic text-foreground">
                How might we decrease error rates and onboarding time so users spend more time on mission-critical tasks?
              </p>
              <p className="text-lg font-medium italic text-foreground">
                How might we reduce designer and developer hours on UI work so teams can prioritize harder product problems?
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-sm font-technical font-semibold tracking-[0.15em] uppercase text-muted-foreground">Key Challenges</p>
              <ul className="space-y-3">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{c}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Success Metrics */}
          <section id="metrics" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Success Metrics</h2>
            <KeyTakeaway>
              We measured success across task completion, error rates, and developer velocity.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "⏱️", title: "Task Completion", desc: "Time on core functions vs. navigating the interface" },
                { icon: "⚠️", title: "User Error Rate", desc: "Incidents caused by inconsistent UI patterns" },
                { icon: "🚀", title: "Developer Velocity", desc: "Front end story throughput and cycle time" },
              ].map((m, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-6 text-center shadow-elevated ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <span className="text-2xl">{m.icon}</span>
                  <h3 className="text-sm font-semibold text-foreground mt-3">{m.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Time to Value */}
          <section id="time-to-value" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Time to Value</h2>
            <KeyTakeaway>
              The design system accelerated value delivery across every metric we tracked.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { value: "3 days", label: "Faster Story Completion", tag: "22 → 19 days", desc: "Pre-built, tested components meant developers started from a reliable baseline." },
                { value: "48%", label: "Fewer Design Stories", tag: "3.8 → 1.95/week", desc: "Documented, approved components meant fewer tickets to redesign solved problems." },
                { value: "2 weeks", label: "Designer Onboarding", tag: "6+ → 2 weeks", desc: "Shared Figma kit and documentation gave new designers a foundation from day one." },
                { value: "2,000+", label: "Dev Days Saved/Year", tag: "per 10-dev team", desc: "That number compounds across an organization the size of Kessel Run." },
              ].map((card, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-6 space-y-3 shadow-elevated ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-3xl font-bold text-primary">{card.value}</p>
                      <p className="text-sm font-medium">{card.label}</p>
                    </div>
                    <span className="text-[10px] font-technical text-muted-foreground bg-muted px-2 py-1 rounded">{card.tag}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-border/50">
              <PortfolioEfficiencyChart />
            </div>
          </section>

          {/* Component Library */}
          <section className="section-spacing border-t border-border/30">
            <DeviceFrame src={dsComponentLibrary} alt="Component library built on MUI — custom themed React components for scalable design systems" caption="Component Library" />
          </section>

          {/* Process */}
          <section id="process" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Design Process</h2>
            <KeyTakeaway>
              We applied the same Double Diamond process to the system itself — and built it through direct team feedback.
            </KeyTakeaway>
            <div className="flex justify-center py-8">
              <div className="flex items-center gap-0 max-w-3xl w-full">
                {["Discover", "Define", "Develop", "Deliver"].map((name, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className={`h-20 flex items-center justify-center ${index % 2 === 0 ? "bg-gradient-to-r from-primary/20 to-primary/40" : "bg-gradient-to-r from-primary/40 to-primary/20"} ${index === 0 ? "rounded-l-xl" : ""} ${index === 3 ? "rounded-r-xl" : ""}`}>
                      <span className="font-semibold text-foreground text-sm">{name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[14px] bg-primary/5 p-8 text-center ring-1 ring-inset ring-[hsl(var(--image-stroke))] mt-8">
              <p className="text-6xl md:text-7xl font-bold text-primary">95%</p>
              <p className="text-muted-foreground mt-2">of product teams currently using React</p>
              <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
                That single data point made the decision to build on MUI straightforward — starting from a foundation teams already knew.
              </p>
            </div>
          </section>

          {/* Adoption Impact */}
          <section id="adoption" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Adoption Impact</h2>
            <KeyTakeaway>
              Developers were doing more complex work faster, while PMs requested that work less often.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                In 10 months before adoption, the team averaged 3.80 design stories per week at 22.18 days per story. After adoption, design story requests dropped to 1.95/week. Story complexity increased by 36%, yet completion time dropped by three days.
              </p>
            </div>
            <div className="mt-8">
              <AdoptionImpactTable />
            </div>
          </section>

          {/* Heuristics */}
          <section id="heuristics" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Heuristic Evaluation</h2>
            <KeyTakeaway>
              Usability improvements measured against Nielsen's heuristics as the design system matured.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Consistency & Standards", desc: "Eliminated 40+ inconsistent UI patterns across products.", before: 2, after: 5 },
                { name: "Error Prevention", desc: "Built-in validation reduced user input errors by 45%.", before: 2, after: 4 },
                { name: "Recognition over Recall", desc: "Consistent iconography enabled knowledge transfer between apps.", before: 2, after: 5 },
                { name: "Flexibility & Efficiency", desc: "Keyboard shortcuts enabled 30% faster task completion.", before: 2, after: 4 },
                { name: "Aesthetic & Minimal", desc: "Standardized spacing and typography reduced cognitive noise.", before: 3, after: 5 },
                { name: "Help & Documentation", desc: "Component-level docs reduced support requests by 60%.", before: 1, after: 5 },
              ].map((h, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-6 space-y-3 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{i + 1}</div>
                    <h3 className="font-semibold text-sm">{h.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                  <div className="flex items-center gap-2 text-[11px] font-technical">
                    <span className="text-destructive">Before: {h.before}/5</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-primary font-medium">After: {h.after}/5</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Before & After */}
          <section id="before-after" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Before & After</h2>
            <KeyTakeaway>
              From custom builds averaging 22 days per story to a shared system adopted voluntarily.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[14px] bg-destructive/5 p-6 space-y-4 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-destructive text-sm">Before Design System</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-destructive">✗</span>Custom components from scratch, 22 days/story</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">✗</span>Inconsistent patterns increased errors</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">✗</span>No shared language across 40+ teams</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">✗</span>Accessibility compliance varied by team</li>
                </ul>
              </div>
              <div className="rounded-[14px] bg-primary/5 p-6 space-y-4 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-primary text-sm">After Design System</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span>Story completion dropped to 19 days</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span>Consistent patterns reduced errors</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span>Unified library adopted by all teams</li>
                  <li className="flex items-start gap-2"><span className="text-primary">✓</span>WCAG 2.1 AA built into every component</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results */}
          <section id="results" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Results</h2>
            <KeyTakeaway>
              The CXO of the Air Force approached the team about expanding the system Air Force-wide.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                At its peak, the design system was adopted by every eligible product team. Most teams chose to adopt once the system offered enough clear value — which is exactly how it should work.
              </p>
            </div>
            <ul className="space-y-3 mt-6">
              {keyAchievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-lg text-foreground">{a}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 space-y-4 text-muted-foreground leading-relaxed">
              <h3 className="text-lg font-semibold text-foreground">What We Learned</h3>
              <p>
                The technical work of building a design system is hard. The organizational work of getting people to use it is harder. Building on MUI rather than from scratch was one of the best calls we made — it gave teams a familiar foundation and let us focus on extending it.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooterNav currentSlug="design-system" />
      </main>
      <Footer />
    </div>
  );
};

export default DesignSystemCaseStudy;
