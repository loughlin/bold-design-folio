import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyProgress from "@/components/CaseStudyProgress";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import CaseStudySideNav from "@/components/CaseStudySideNav";
import CaseStudyMetadata from "@/components/CaseStudyMetadata";
import ImageFrame from "@/components/ImageFrame";
import ArtifactCard from "@/components/ArtifactCard";
import KeyTakeaway from "@/components/KeyTakeaway";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import kesselRunCaoc from "@/assets/kessel-run-caoc.jpg";
import kesselRunHq from "@/assets/kessel-run-hq.jpg";
import kesselRunCaoc2021 from "@/assets/kessel-run-caoc-2021.jpg";
import kesselRunCaoc2003 from "@/assets/kessel-run-caoc-2003.jpg";
import kesselRunLeadership from "@/assets/kessel-run-leadership.jpg";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "opportunity", label: "The Opportunity" },
  { id: "process", label: "Design Process" },
  { id: "impact", label: "Measurable Impact" },
  { id: "time-to-value", label: "Time to Value" },
  { id: "heuristics", label: "Heuristics" },
  { id: "role", label: "My Role" },
  { id: "transformation", label: "Transformation" },
  { id: "reflection", label: "Reflection" },
];

const KesselRunCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Leading Design at Kessel Run — James Loughlin"
        description="How James Loughlin built and led the design organization at Kessel Run, a USAF software unit, scaling human-centered design across mission-critical products."
        path="/case-study/kessel-run"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Leading Design at Kessel Run",
          author: { "@type": "Person", name: "James Loughlin" },
          description: "Building and leading a design organization inside a USAF software unit.",
        }}
      />
      <CaseStudyProgress />
      <Navigation />
      <main id="main">


      {/* Hero */}
      <section className="pt-24 pb-8 px-6">
        <div className="container mx-auto max-w-reading">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 rounded-[14px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <p className="text-[11px] font-technical font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            UX Leadership · 2021 – Present
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Leading Design at Kessel Run
          </h1>
          <p className="text-lg text-foreground/80 font-medium animate-fade-in mb-2">Modernizing USAF Software Delivery</p>
          <p className="text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Building a design culture from the ground up inside one of the most demanding software environments I've ever worked in.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-reading animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <ImageFrame
            src={kesselRunCaoc2021}
            alt="Combined Air Operations Center — real-time intelligence and targeting workflows"
            caption="Operations Center"
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* Body with sticky side nav */}
      <div className="container mx-auto max-w-content px-6 flex gap-12">
        <CaseStudySideNav sections={sections} />

        <div className="flex-1 min-w-0 max-w-reading">
          {/* Overview */}
          <section id="overview" className="section-spacing scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
            <CaseStudyMetadata
              role="Portfolio Design Lead"
              timeline="2021 – Present"
              team="15+ Designers, 5 Applications, 6 Missions"
            />
            <KeyTakeaway>
              My job was never just about the screens. It was about building the conditions where good work becomes the default.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Kessel Run is the U.S. Air Force's in-house software factory. Small, agile teams. Real operational stakes. Software that warfighters actually depend on to do their jobs.
              </p>
              <p>
                I spent four-plus years there as Portfolio Design Lead, embedded across five applications built around targeting and geo-intelligence. The work lives on classified networks, but the design challenges were ones any design leader would recognize.
              </p>
              <p>
                Teams solving the same problems independently, inconsistent experiences eroding user trust, and a growing organization that needed structure without losing the energy that makes good design possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ArtifactCard
                label="Tools & Methods"
                icon="🛠"
                items={["Figma", "Miro", "Jira", "Confluence", "Design Critiques", "Double Diamond"]}
              />
              <ArtifactCard
                label="Team Structure"
                icon="👥"
                items={["15+ Designers Managed", "5 Applications", "6 Operational Missions", "Cross-functional Pods"]}
              />
            </div>
          </section>

          {/* Problem Statement */}
          <section id="problem" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Problem</h2>
            <KeyTakeaway>
              How might we unify fragmented design practices to deliver consistent, mission-critical experiences at scale?
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-[14px] bg-destructive/5 p-6 space-y-3 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-destructive text-sm">Before</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>Design decisions made in silos</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>No shared design language</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>Inconsistent experiences eroded trust</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>Limited visibility into career growth</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>Duplicated effort creating design debt</li>
                </ul>
              </div>
              <div className="rounded-[14px] bg-primary/5 p-6 space-y-3 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-primary text-sm">After</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Unified design system + shared library</li>
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Cross-team rituals for alignment</li>
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Consistent interaction patterns</li>
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Clear career ladders</li>
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Shared tooling cut redundant effort</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Opportunity */}
          <section id="opportunity" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Opportunity</h2>
            <KeyTakeaway>
              Kessel Run understood early that design was a strategic investment, not a finishing step.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Air Force needed modern, cloud-native software to replace legacy systems that were slow, siloed, and built for a different era. The demand for real-time intelligence was outpacing what those systems could support.
              </p>
              <p>
                Our role was to build software that actually helped people work under pressure. That meant marrying good UX practice with agile delivery, inside the constraints of classified networks and high-stakes mission contexts.
              </p>
            </div>
          </section>

          {/* Design Process */}
          <section id="process" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Design Process</h2>
            <KeyTakeaway>
              The Double Diamond gave designers a common vocabulary and helped stakeholders understand where we were in a project.
            </KeyTakeaway>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We used the Double Diamond as our shared process language. It framed design as a discipline with distinct modes of thinking rather than a linear march toward a predetermined solution.
            </p>

            <div className="flex justify-center py-8 mb-8">
              <div className="flex items-center gap-0 max-w-full w-full">
                {[
                  { name: "Discover", type: "divergent" },
                  { name: "Define", type: "convergent" },
                  { name: "Develop", type: "divergent" },
                  { name: "Deliver", type: "convergent" }
                ].map((phase, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div
                      className={`h-20 flex items-center justify-center relative ${
                        phase.type === "divergent"
                          ? "bg-gradient-to-r from-primary/20 to-primary/40"
                          : "bg-gradient-to-r from-primary/40 to-primary/20"
                      } ${index === 0 ? "rounded-l-xl" : ""} ${index === 3 ? "rounded-r-xl" : ""}`}
                    >
                      <span className="font-semibold text-foreground text-sm md:text-base">{phase.name}</span>
                    </div>
                    <span className={`text-[10px] font-technical mt-2 block ${phase.type === "divergent" ? "text-primary" : "text-muted-foreground"}`}>
                      {phase.type === "divergent" ? "Divergent" : "Convergent"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Discover", desc: "Getting close to users through hands-on research.", items: ["Contextual inquiries", "Stakeholder interviews", "Direct observation"] },
                { name: "Define", desc: "Turning research into clear problem statements.", items: ["Problem framing", "Journey mapping", "Requirements synthesis"] },
                { name: "Develop", desc: "Testing solutions with the whole team.", items: ["Concept ideation", "Rapid prototyping", "Design critiques"] },
                { name: "Deliver", desc: "Shipping validated work through structured testing.", items: ["Usability testing", "Design handoff", "Continuous iteration"] },
              ].map((phase, index) => (
                <ArtifactCard key={index} label={phase.name} items={phase.items} className="!p-6" />
              ))}
            </div>
          </section>

          {/* Impact Metrics */}
          <section id="impact" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Measurable Impact</h2>
            <KeyTakeaway>
              Measurable outcomes across design delivery, retention, and operational reach.
            </KeyTakeaway>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
              {[
                { value: "40%", label: "Faster Design Delivery" },
                { value: "85%", label: "Designer Retention Rate" },
                { value: "5", label: "Applications Shipped" },
                { value: "1,000s", label: "Daily Active Users" },
              ].map((stat, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-4 shadow-elevated ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { value: "15+", label: "Designers Managed" },
                { value: "6", label: "Missions Supported" },
                { value: "4+", label: "Years Leading Design" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 mt-12 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">40% Faster Design Delivery</h3>
                <p>Standardizing handoff processes and building shared component libraries eliminated back-and-forth caused by inconsistent tooling.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">85% Designer Retention Rate</h3>
                <p>Retention went up as a direct result of investing in team culture, psychological safety, and career progression designers could see.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">5 Applications Shipped</h3>
                <p>Five products across targeting and geo-intelligence, each with distinct user groups, mission contexts, and design challenges.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">1,000s of Daily Active Users</h3>
                <p>Products in active daily use across the Air Force, generating thousands of intelligence inputs that feed real operational decisions.</p>
              </div>
            </div>
          </section>

          {/* Time to Value */}
          <section id="time-to-value" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Time to Value</h2>
            <KeyTakeaway>
              Design leadership accelerated value delivery across every measurable dimension.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { value: "40%", label: "Faster Delivery", desc: "Standardizing design-to-dev handoff reduced time between finalized design and developer pickup." },
                { value: "35%", label: "Less Rework", desc: "Post-handoff design changes dropped once we introduced structured critique and alignment checkpoints." },
                { value: "67%", label: "Faster Onboarding", desc: "Getting a new designer productive went from six weeks to two through centralized documentation and team rituals.", tag: "6 â†’ 2 weeks" },
                { value: "60%", label: "Research Coverage", desc: "Validating features before build became standard — a cultural shift, not just a metric." },
              ].map((card, i) => (
                <div key={i} className="rounded-[14px] border border-border/60 bg-card p-6 space-y-3 shadow-elevated ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-3xl font-bold text-primary">{card.value}</p>
                      <p className="text-sm font-medium">{card.label}</p>
                    </div>
                    {card.tag && (
                      <span className="text-[10px] font-technical text-muted-foreground bg-muted px-2 py-1 rounded">{card.tag}</span>
                    )}
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full" style={{ width: card.value }} />
                  </div>
                  <p className="text-xs text-muted-foreground">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Heuristics */}
          <section id="heuristics" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Heuristic Evaluation</h2>
            <KeyTakeaway>
              Nielsen's heuristics gave our recommendations credibility with stakeholders who might otherwise have read them as subjective.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "User Control & Freedom", desc: "Consistent undo/redo patterns and confirmation dialogs for high-consequence actions.", before: 2, after: 4 },
                { name: "Visibility of System Status", desc: "Real-time feedback for data sync, processing states, and system health.", before: 2, after: 5 },
                { name: "Match Real World", desc: "Mission language replaced technical jargon through direct access to warfighters.", before: 3, after: 5 },
                { name: "Error Recovery", desc: "Plain-language error messages telling users what went wrong and what to do about it.", before: 1, after: 4 },
                { name: "Flexibility & Efficiency", desc: "Keyboard shortcuts and customizable dashboards for experienced operators.", before: 2, after: 4 },
                { name: "Consistency & Standards", desc: "Cross-team design standards unified interaction patterns across the portfolio.", before: 2, after: 5 },
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

          {/* Photos */}
          <section className="section-spacing border-t border-border/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ImageFrame src={kesselRunHq} alt="Kessel Run headquarters building in Boston — agile software factory for USAF" caption="HQ Boston" aspectRatio="4/3" />
                <p className="text-sm text-muted-foreground text-center mt-4 italic">Kessel Run headquarters in Boston</p>
              </div>
              <div>
                <ImageFrame src={kesselRunLeadership} alt="Cross-functional design leadership collaboration with Air Forces Central command" caption="Leadership Collaboration" aspectRatio="4/3" />
                <p className="text-sm text-muted-foreground text-center mt-4 italic">Cross-functional collaboration with Air Force leadership</p>
              </div>
            </div>
          </section>

          {/* My Role */}
          <section id="role" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">My Role</h2>
            <KeyTakeaway>
              I set the standards that defined what good design looked like — then spent most of my time making sure teams could meet them.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                As Portfolio Design Lead, I owned design strategy and execution across a five-application suite spanning six operational missions. I directly managed six product designers and mentored an additional ten.
              </p>
              <p>
                The role sat at the intersection of people leadership, design operations, and hands-on craft. On any given week I might be running a critique, working through career development, aligning on roadmap priorities, or reviewing research outputs.
              </p>
            </div>

            <ArtifactCard
              label="Key Responsibilities"
              icon="📋"
              className="mt-8"
              items={[
                "Partnered with users and Air Force leadership to prioritize capability needs",
                "Built and maintained design career ladders with DesignOps",
                "Centralized design documentation and shared resources",
                "Facilitated team rituals and served as Psychological Safety facilitator",
              ]}
            />
          </section>

          {/* Full Width Image */}
          <section className="section-spacing border-t border-border/30">
            <ImageFrame
              src={kesselRunCaoc2003}
              alt="Combined Air Operations Center at Prince Sultan Air Base — command and control environment"
              caption="Command & Control"
              aspectRatio="16/9"
            />
            <p className="text-sm text-muted-foreground text-center mt-4 italic">
              Air Force command and control operations supporting mission-critical software
            </p>
          </section>

          {/* Workflow Transformation */}
          <section id="transformation" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Transformation</h2>
            <KeyTakeaway>
              From siloed design work to a portfolio-wide design community with shared standards.
            </KeyTakeaway>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[14px] bg-destructive/5 p-6 space-y-4 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-destructive text-sm">Before</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>Designers worked in silos</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>Career progression contained within teams</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>Handoff procedures varied by team</li>
                  <li className="flex items-start gap-2"><span className="text-destructive">âœ—</span>User research rarely documented or shared</li>
                </ul>
              </div>
              <div className="rounded-[14px] bg-primary/5 p-6 space-y-4 ring-1 ring-inset ring-[hsl(var(--image-stroke))]">
                <h3 className="font-semibold text-primary text-sm">After</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Cross-team design community with shared rituals</li>
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Formal mentorship structures</li>
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Standardized handoff reduced time by 33%</li>
                  <li className="flex items-start gap-2"><span className="text-primary">âœ“</span>Centralized research library</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section id="reflection" className="section-spacing border-t border-border/30 scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Reflection</h2>
            <KeyTakeaway>
              The most impactful thing I did was protect the space for good work to happen.
            </KeyTakeaway>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Design leadership, at its core, is a support function. The best work happened when people felt safe to take risks, confident in the tools and processes around them, and connected to why their work mattered.
              </p>
              <p>
                If I had to do it over, I'd invest even earlier in cross-team connection. The rituals we built — critique sessions, portfolio reviews, informal design community meetups — created compounding value over time.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyFooterNav currentSlug="kessel-run" />
      </main>
      <Footer />
    </div>
  );
};

export default KesselRunCaseStudy;
