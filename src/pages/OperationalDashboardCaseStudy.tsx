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
import DashboardOutcomesChart from "@/components/DashboardOutcomesChart";
import SystemOverviewMockup from "@/components/SystemOverviewMockup";
import DataSourceMockup from "@/components/DataSourceMockup";
import MetricsViewMockup from "@/components/MetricsViewMockup";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "process", label: "Design Process" },
  { id: "users", label: "Users" },
  { id: "ia", label: "Information Architecture" },
  { id: "redesign", label: "Redesign" },
  { id: "testing", label: "Testing" },
  { id: "outcomes", label: "Outcomes" },
];

const OperationalDashboardCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Command Center: Real-Time Data Flows — James Loughlin"
        description="Redesigning an operational monitoring dashboard for real-time data flows — 90% task success, 3× faster issue detection, and 60% less context switching."
        path="/case-study/operational-dashboard"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Command Center: Real-Time Data Flows",
          author: { "@type": "Person", name: "James Loughlin" },
          description: "Redesigning a monitoring dashboard for operators.",
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
            UX Manager & Product Designer · 2019 – 2021
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Command Center: Real-Time Data Flows</h1>
          <p className="text-lg text-foreground/80 font-medium animate-fade-in mb-2">Helping Operators See What Matters, Fast</p>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Redesigning a monitoring tool that engineers had built for engineers — and making it work for the operators who depended on it.
          </p>
        </div>
      </section>

      {/* Hero Mockup */}
      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-reading animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <SystemOverviewMockup />
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
              role="UX Manager & Product Designer"
              timeline="2019 – 2021"
              team="2 Designers, 6 Engineers, 1 PM"
            />
            <KeyTakeaway>
              Operators weren't getting what they needed — and the engineering team wasn't sure how to close the gap.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The team had a monitoring dashboard that technically worked. It showed status. It had data. But operators weren't getting what they needed from it.
              </p>
              <p>
                My job was to figure out what operators needed, translate that into a design the engineering team could build, and navigate the back-and-forth between user needs and technical constraints.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ArtifactCard label="Methods" icon="🔬" items={["User Interviews", "Market Research (Grafana)", "Workflow Mapping", "Usability Testing"]} />
              <ArtifactCard label="Tools" icon="🛠" items={["Figma", "Miro", "React", "D3.js / Recharts"]} />
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Problem</h2>
            <KeyTakeaway>
              Engineers built it to show that systems were running. Operators needed it to tell them how.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                The existing dashboard was sparse. Basic status indicators, minimal context, no trend data, no way to understand whether what you were seeing was normal or cause for concern.
              </p>
            </div>
            <div className="rounded-[14px] bg-amber-500/5 p-8 ring-1 ring-inset ring-amber-500/20">
              <p className="text-[11px] font-technical font-semibold tracking-[0.15em] uppercase text-amber-600 mb-4">Problem Statement</p>
              <p className="text-lg font-medium leading-relaxed">
                How might we design a dashboard that delivers the right KPIs to operators, helping them monitor data flows and communicate effectively with engineering teams?
              </p>
            </div>
          </section>

          {/* Design Process */}
          <section id="process" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Design Process</h2>
            <KeyTakeaway>
              The Double Diamond framework kept us from jumping to solutions before understanding the problem.
            </KeyTakeaway>
            <div className="flex justify-center py-6 mb-6">
              <div className="flex items-center gap-0 max-w-full w-full">
                {["Discover", "Define", "Develop", "Deliver"].map((name, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className={`h-20 flex items-center justify-center ${index % 2 === 0 ? "bg-gradient-to-r from-primary/20 to-primary/40" : "bg-gradient-to-r from-primary/40 to-primary/20"} ${index === 0 ? "rounded-l-xl" : ""} ${index === 3 ? "rounded-r-xl" : ""}`}>
                      <span className="font-semibold text-foreground text-sm">{name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Discover", items: ["Market research on Grafana-style dashboards", "User interviews with operators", "Mapping existing fragmented tools"] },
                { title: "Define", items: ["Key metrics and data hierarchies", "Monitoring workflow mapping", "Design principles for scannability"] },
                { title: "Develop", items: ["Overview to granular view scaling", "Filtering and navigation iterations", "Concepts evolving with new insights"] },
                { title: "Deliver", items: ["Testing with operators & admins", "Feasibility workshops with engineers", "Constraint negotiation & refinement"] },
              ].map((phase, i) => (
                <ArtifactCard key={i} label={phase.title} items={phase.items} className="!p-6" />
              ))}
            </div>
          </section>

          {/* Users */}
          <section id="users" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Users</h2>
            <KeyTakeaway>
              Two distinct user groups with meaningfully different priorities — designing for both was key.
            </KeyTakeaway>
            <ul className="space-y-3">
              {[
                "100% cited system health visibility as critical (6/6 users)",
                "83% needed historical trend data for pattern recognition (5/6)",
                "83% wanted configurable alert thresholds (5/6)",
                "System administrators monitor overall health and reliability standards",
                "Mission operators track data availability for accurate planning",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Information Architecture */}
          <section id="ia" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Information Architecture</h2>
            <KeyTakeaway>
              System Overview â†’ Data Source â†’ Metrics: a clear path from anomaly detection to root cause.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                The underlying data had a natural hierarchy. Rather than fighting that structure, I leaned into it — data starts broad at the system level and becomes detailed as users drill in.
              </p>
            </div>
            <SystemOverviewMockup />
          </section>

          {/* Redesign */}
          <section id="redesign" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Redesign</h2>
            <KeyTakeaway>
              The redesign added several layers that operators needed but the existing tool didn't provide.
            </KeyTakeaway>

            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">View 1: System Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  High-level performance across all data sources. Line chart with throughput, scrollable legend for filtering, summary cards with health status.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">View 2: Data Source View</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Focused view on a single source — performance trends, request frequency, latency, error rates, and connected feeds.
                </p>
                <DataSourceMockup />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">View 3: Metrics View</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The most granular level — detailed statistics designed to give operators the language to communicate clearly with engineering.
                </p>
                <MetricsViewMockup />
              </div>
            </div>
          </section>

          {/* Testing */}
          <section id="testing" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Testing</h2>
            <KeyTakeaway>
              Operators pushed designs in directions I hadn't anticipated — real workflows involved dozens of data sources.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The need for contextual data — timestamps, historical comparisons, frequency — came up consistently. Without it, users could see something was wrong but couldn't communicate it precisely.
              </p>
              <p>
                The scale surprised me. I'd designed for a handful of sources. Testing revealed operators routinely monitor dozens simultaneously — driving the scrollable legend from nice-to-have to necessity.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Navigating Constraints</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bringing user feedback directly to engineering conversations — rather than translating into design specs — changed the dynamic. That collaboration pattern became something I carried into every project after.
              </p>
            </div>
          </section>

          {/* Outcomes */}
          <section id="outcomes" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Outcomes</h2>
            <KeyTakeaway>
              90% task success rate, 3x faster issue detection, 60% less context switching.
            </KeyTakeaway>

            <div className="mb-8">
              <DashboardOutcomesChart />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { value: "90%", label: "Task Success" },
                { value: "4/5", label: "Confidence Score" },
                { value: "60%", label: "Less Context Switching" },
                { value: "3x", label: "Faster Detection" },
              ].map((m, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-4 text-center shadow-elevated ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <p className="text-2xl font-bold text-primary">{m.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Final Mockups */}
            <div className="space-y-6 mt-12">
              <SystemOverviewMockup />
              <DataSourceMockup />
              <MetricsViewMockup />
              <p className="text-center text-sm text-muted-foreground italic pt-4 border-t border-border">
                Mockups anonymized. Actual interface built for classified operational networks.
              </p>
            </div>

            {/* Outcome Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                "All designs validated against engineering constraints before handoff — not as a checkbox but as an ongoing process.",
                "Usability testing gave direct evidence about what was working, rather than relying on internal judgment.",
                "The redesign consolidated fragmented tooling into a single interface operators could rely on.",
                "The evidence validated research as much as the design — making the case for embedding research earlier.",
              ].map((outcome, i) => (
                <div key={i} className="p-6 rounded-[14px] border border-border/60 bg-card">
                  <p className="text-sm leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooterNav currentSlug="operational-dashboard" />
      </main>
      <Footer />
    </div>
  );
};

export default OperationalDashboardCaseStudy;
