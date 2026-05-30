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
import ImageFrame from "@/components/ImageFrame";
import missionReportingInterface from "@/assets/mission-reporting-interface.png";
import uxWorkflowPlanning from "@/assets/ux-workflow-planning.jpg";
import f35AerialRefueling from "@/assets/f35-aerial-refueling.jpg";
import marauderTimelineEvents from "@/assets/marauder-timeline-events.png";
import marauderDataIngestion from "@/assets/marauder-data-ingestion.png";
import marauderMissionInsert from "@/assets/marauder-mission-insert.png";
import marauderMissionNarrative from "@/assets/marauder-mission-narrative.png";
import marauderServiceBlueprint from "@/assets/marauder-service-blueprint.png";
import marauderDependencies from "@/assets/marauder-dependencies-q4.png";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "gallery", label: "Product Gallery" },
  { id: "background", label: "Background" },
  { id: "users", label: "The Users" },
  { id: "problem", label: "The Problem" },
  { id: "research", label: "Research" },
  { id: "breakthrough", label: "Breakthrough" },
  { id: "scope", label: "Scope Adjustment" },
  { id: "results", label: "Results" },
  { id: "learnings", label: "Learnings" },
];

const MissionReportingCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Replacing Manual Calculations with Trust — James Loughlin"
        description="Designing the F-35 mission reporting product — replacing manual calculations and spreadsheets with automation that pilots and intel analysts can trust."
        path="/case-study/mission-reporting"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Replacing Manual Calculations with Trust",
          author: { "@type": "Person", name: "James Loughlin" },
          description: "Digitizing F-35 mission reporting for accuracy and trust.",
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
            UX Manager + Product Designer · 2018 – 2023
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Replacing Manual Calculations with Trust
          </h1>
          <p className="text-lg text-foreground/80 font-medium animate-fade-in mb-2">Digitizing Mission Reporting for Accuracy</p>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Streamlining data entry through automation to transform how the Air Force disseminates mission data.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-reading animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <ImageFrame src={f35AerialRefueling} alt="F-35 aerial refueling operation — mission context for intelligence reporting workflows" caption="Mission Context" aspectRatio="16/9" />
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
              role="UX Manager + Product Designer"
              timeline="2018 – 2023"
              team="2 Designers, 4 Engineers, 1 PM"
            />
            <KeyTakeaway>
              This project shaped me more than any other — I learned how to ship software people actually depend on under pressure.
            </KeyTakeaway>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I joined as a product designer and eventually oversaw it as a manager. I owned the design process end to end — research, concept generation, testing, and iteration — as we built out the mission reporting tool.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ArtifactCard label="Methods" icon="🔬" items={["Contextual Inquiry", "User Journey Mapping", "Prototype Testing", "Service Blueprinting"]} />
              <ArtifactCard label="Deliverables" icon="📦" items={["Workflow Diagrams", "Problem Statements", "Design Specs", "Integration Docs"]} />
            </div>
          </section>

          {/* Product Gallery */}
          <section id="gallery" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Product Gallery</h2>
            <KeyTakeaway>
              Visuals from the third iteration — key features and interfaces after user adoption.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DeviceFrame src={marauderTimelineEvents} alt="Mission timeline events UI — chronological mission data entry interface" caption="Timeline Events" />
              <DeviceFrame src={marauderDataIngestion} alt="Data ingestion dashboard — automated import from external intelligence sources" caption="Data Ingestion" />
              <DeviceFrame src={marauderMissionInsert} alt="Mission insert form — structured data capture for intelligence reporting" caption="Mission Insert" />
              <DeviceFrame src={marauderMissionNarrative} alt="Mission narrative editor — formatted text entry for operational reports" caption="Mission Narrative" />
            </div>
            <p className="text-center text-sm text-muted-foreground italic mt-6">
              Screenshots from Version 3 of the mission reporting application.
            </p>
          </section>

          {/* Background */}
          <section id="background" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Background</h2>
            <KeyTakeaway>
              We started by fixing reporting. Then we realized we were building a single source of truth.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The reporting tool most of the Air Force used technically worked, but it wasn't built for their specific mission types. Reports were filed and then lost — unavailable when context from past missions could have made a real difference.
              </p>
              <p>
                As the tool grew, we turned toward replacing the legacy system. That brought strict requirements from ACC and the intelligence community, plus a fielded product we had to replace without breaking existing workflows.
              </p>
            </div>
            <div className="mt-8">
              <DeviceFrame src={marauderServiceBlueprint} alt="Service blueprint mapping the air domain mission reporting workflow end-to-end" caption="Service Blueprint" />
            </div>
            <p className="text-sm italic text-muted-foreground mt-4">
              Note: All sensitive information has been removed. Application name redacted for security.
            </p>
          </section>

          {/* Users */}
          <section id="users" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Users</h2>
            <KeyTakeaway>
              Three distinct roles with different needs — all operating in high-pressure, time-sensitive environments.
            </KeyTakeaway>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span><strong className="text-foreground">Mission drafters</strong> — captured mission information immediately after operations, under tight deadlines.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span><strong className="text-foreground">Reviewers</strong> — validated format requirements, accuracy, and proper classification markings.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span><strong className="text-foreground">Approvers</strong> — gave final sign-off before reports went to external agencies.</span>
              </li>
            </ul>
          </section>

          {/* Problem */}
          <section id="problem" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Problem</h2>
            <KeyTakeaway>
              Users manually entered multiple data fields and calculated all route times by hand for every report.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We saw an opportunity to automate several fields by pulling data from external sources — first through manual document ingestion, then through API integrations.
              </p>
              <p>
                We migrated data sources from an internal backend to consuming directly from multiple external tools, using that transition to fix real pain points.
              </p>
            </div>
            <div className="mt-8">
              <DeviceFrame src={missionReportingInterface} alt="High-fidelity UI dashboard for mission reporting — version 3 report drafting interface" caption="v3 Report Draft" />
            </div>
          </section>

          {/* Research */}
          <section id="research" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Research</h2>
            <KeyTakeaway>
              Two big pain points: manual calculations for key fields, and heavy manual data entry.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                Before jumping into solutions, we interviewed users at five mission operations centers. From those conversations, we built a user journey map, workflow diagram, and problem statement.
              </p>
              <p>
                There was no single source of truth for mission data across the network — solving that became a priority because we believed it would unlock our ability to scale.
              </p>
            </div>
            <ImageFrame src={uxWorkflowPlanning} alt="User journey mapping and research workshop artifacts — sticky notes and workflow diagrams" caption="Workshop Artifacts" aspectRatio="16/7" />
          </section>

          {/* Breakthrough */}
          <section id="breakthrough" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Breakthrough</h2>
            <div className="rounded-[14px] bg-primary/5 p-8 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
              <p className="text-[11px] font-technical font-semibold tracking-[0.15em] uppercase text-primary mb-4">The Breakthrough</p>
              <KeyTakeaway>
                We weren't just building a better form. We were creating a single source of truth.
              </KeyTakeaway>
              <p className="text-muted-foreground leading-relaxed">
                During user interviews, one operations center lead mentioned spending hours each week reconciling data between systems. This insight shifted our entire approach — we focused on making our tool the authoritative source other systems could consume.
              </p>
            </div>
          </section>

          {/* Scope */}
          <section id="scope" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Scope Adjustment</h2>
            <KeyTakeaway>
              We adjusted scope — delaying the map integration while still delivering core value.
            </KeyTakeaway>
            <div className="mt-4">
              <ImageFrame src={marauderDependencies} alt="Product dependencies diagram showing integration points across mission systems" caption="Dependencies (Blurred)" aspectRatio="16/9" className="[&_img]:blur-[2px]" />
            </div>
            <p className="text-sm italic text-muted-foreground mt-3">Data blurred for security.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-[14px] bg-destructive/5 p-6 space-y-3 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-destructive text-sm">Before Adjustment</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Full map integration</li>
                  <li>• Visual interface for data</li>
                  <li>• Complete automation</li>
                </ul>
              </div>
              <div className="rounded-[14px] bg-primary/5 p-6 space-y-3 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-primary text-sm">After Adjustment</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Modern UI without map</li>
                  <li>• Reduced data entry</li>
                  <li>• Automated calculations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results */}
          <section id="results" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Results</h2>
            <KeyTakeaway>
              Met or exceeded all but one success metric. Integration completed in 4 months.
            </KeyTakeaway>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { value: "3 of 5", label: "Fields Automated" },
                { value: "100%", label: "Calc Automation" },
                { value: "4 months", label: "To Production" },
                { value: "20 min", label: "Saved Per Report" },
              ].map((m, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-4 text-center shadow-elevated ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <p className="text-2xl font-bold text-primary">{m.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Heuristics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { name: "Error Prevention", desc: "Automated calculations eliminated manual math errors.", before: 2, after: 5 },
                { name: "Visibility of Status", desc: "Real-time sync indicators show data freshness.", before: 1, after: 4 },
                { name: "Flexibility & Efficiency", desc: "Auto-populated fields cut data entry from 5 to 2.", before: 2, after: 4 },
                { name: "Match Real World", desc: "Terminology aligned with actual mission processes.", before: 3, after: 5 },
              ].map((h, i) => (
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

          {/* Learnings */}
          <section id="learnings" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Learnings</h2>
            <KeyTakeaway>
              Bring engineers in early. Ship value as soon as possible, then iterate.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The biggest lesson: if I'd involved engineers in the design process sooner, they could have flagged feasibility issues that would have saved time and set better user expectations.
              </p>
              <p>
                Having a long-term vision matters, but feasibility has to shape the path. That lesson has stuck with me through every project since.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooterNav currentSlug="mission-reporting" />
      </main>
      <Footer />
    </div>
  );
};

export default MissionReportingCaseStudy;
