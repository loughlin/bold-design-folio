import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import kesselRunCaoc from "@/assets/kessel-run-caoc.jpg";
import kesselRunHq from "@/assets/kessel-run-hq.jpg";
import kesselRunCaoc2021 from "@/assets/kessel-run-caoc-2021.jpg";
import kesselRunCaoc2003 from "@/assets/kessel-run-caoc-2003.jpg";
import kesselRunLeadership from "@/assets/kessel-run-leadership.jpg";

const KesselRunCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Leading Design at Kessel Run
          </h1>
          <p className="text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Developing a design practice for mission-critical USAF applications
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span>2022-2025</span>
            <span>•</span>
            <span>UX & Product Lead</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in aspect-[21/9]" style={{ animationDelay: "0.3s" }}>
            <img
              src={kesselRunCaoc}
              alt="Combined Air Operations Center at Al Udeid Air Base, Qatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I helped build, maintain and connect five independent applications within the problem space of targeting and geo-intelligence. Pushing for design excellence and the end goal of accessible intelligence worldwide on classified networks.
            </p>
            <p>
              Throughout, I helped transform outdated services into useful and pleasant to engage with products. As of today the products I've contributed to and led the design initiatives on are accessed by users daily and generate thousands of active intelligence inputs for the United States Air Force.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Problem Statement</h2>
          <div className="space-y-6">
            <p className="text-xl font-medium italic text-foreground">
              How might we unify fragmented design practices across multiple product teams to deliver consistent, mission-critical experiences while scaling a growing design organization?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-background rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-destructive">Before</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Siloed design decisions across teams</li>
                  <li>• No shared design language or patterns</li>
                  <li>• Inconsistent user experiences</li>
                  <li>• Limited career growth for designers</li>
                  <li>• Duplicated design effort</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-primary">After</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Unified design system and processes</li>
                  <li>• Cross-team collaboration rituals</li>
                  <li>• Consistent experience patterns</li>
                  <li>• Clear career ladders for designers</li>
                  <li>• Shared component libraries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image with Caption */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
            <img
              src={kesselRunCaoc2021}
              alt="U.S. Central Command's Combined Air Operations Center at Al Udeid Air Base"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            Combined Air Operations Center operations and intelligence workflows
          </p>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Opportunity</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The United States Air Force needed modern, cloud-native applications to support critical operational missions. Legacy systems were siloed, difficult to use, and unable to scale with growing demands for real-time intelligence.
            </p>
            <p>
              Our role was to craft effective experiences that empowered users to accomplish their missions more efficiently while maintaining the security and reliability required for classified operations.
            </p>
            <p>
              Kessel Run recognized that investing in world-class UX was a strategic priority. We built a design team and established processes that facilitated creativity, collaboration, and user-centered design across multiple product teams.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process Methodology */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Design Process Methodology</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The design process follows the Double Diamond framework, broken into four phases: two for divergent thinking (exploring possibilities) and two for convergent thinking (focusing on solutions).
          </p>

          {/* Double Diamond Visual */}
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
                  <span className={`text-xs mt-2 block ${phase.type === "divergent" ? "text-primary" : "text-secondary"}`}>
                    {phase.type === "divergent" ? "Divergent" : "Convergent"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="font-semibold">Discover</h3>
              </div>
              <p className="text-sm text-muted-foreground">Understanding user contexts and mission requirements through immersive research.</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Contextual inquiries</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Stakeholder interviews</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Workflow observation</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary" />
                <h3 className="font-semibold">Define</h3>
              </div>
              <p className="text-sm text-muted-foreground">Synthesizing insights into clear problem definitions and design requirements.</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Problem framing</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Journey mapping</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Requirements synthesis</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="font-semibold">Develop</h3>
              </div>
              <p className="text-sm text-muted-foreground">Generating solutions through iterative design and cross-functional collaboration.</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Concept ideation</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Prototyping</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Design critiques</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary" />
                <h3 className="font-semibold">Deliver</h3>
              </div>
              <p className="text-sm text-muted-foreground">Refining and implementing validated solutions for mission-critical operations.</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Usability testing</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Design handoff</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Continuous iteration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Measurable Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">40%</p>
              <p className="text-sm text-muted-foreground">Faster Design Delivery</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-secondary">85%</p>
              <p className="text-sm text-muted-foreground">Designer Retention Rate</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Applications Shipped</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-secondary">1000s</p>
              <p className="text-sm text-muted-foreground">Daily Active Users</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Designers Managed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">6</p>
              <p className="text-sm text-muted-foreground">Operational Missions</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4+</p>
              <p className="text-sm text-muted-foreground">Years Leading Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Metrics - Time to Value */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-4">Time to Value</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            How design leadership accelerated value delivery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 space-y-4 border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-3xl font-bold text-primary">40%</p>
                  <p className="text-sm font-medium">Faster Delivery</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full" style={{ width: '40%' }} />
                </div>
                <p className="text-xs text-muted-foreground">Design-to-dev handoff time reduction</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 space-y-4 border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-3xl font-bold text-primary">35%</p>
                  <p className="text-sm font-medium">Less Rework</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full" style={{ width: '35%' }} />
                </div>
                <p className="text-xs text-muted-foreground">Post-handoff design changes eliminated</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 space-y-4 border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-3xl font-bold text-primary">67%</p>
                  <p className="text-sm font-medium">Faster Onboarding</p>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">6 → 2 weeks</span>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full" style={{ width: '67%' }} />
                </div>
                <p className="text-xs text-muted-foreground">New designer time to productivity</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 space-y-4 border">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-3xl font-bold text-primary">60%</p>
                  <p className="text-sm font-medium">Research Coverage</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full" style={{ width: '60%' }} />
                </div>
                <p className="text-xs text-muted-foreground">Features validated before build</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heuristics Evaluation */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-2xl font-bold text-center">Usability Heuristics Evaluation</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            How design leadership improved usability across Nielsen's heuristics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</div>
                <h3 className="font-semibold text-sm">User Control & Freedom</h3>
              </div>
              <p className="text-sm text-muted-foreground">Established undo/redo patterns and confirmation dialogs for critical actions in mission-critical workflows.</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-destructive">Before: 2/5</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary font-medium">After: 4/5</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</div>
                <h3 className="font-semibold text-sm">Visibility of System Status</h3>
              </div>
              <p className="text-sm text-muted-foreground">Implemented real-time feedback for data sync, processing states, and system health across all applications.</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-destructive">Before: 2/5</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary font-medium">After: 5/5</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</div>
                <h3 className="font-semibold text-sm">Match Real World</h3>
              </div>
              <p className="text-sm text-muted-foreground">User research informed terminology and workflows that matched actual mission planning language and processes.</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-destructive">Before: 3/5</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary font-medium">After: 5/5</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">4</div>
                <h3 className="font-semibold text-sm">Error Recovery</h3>
              </div>
              <p className="text-sm text-muted-foreground">Clear error messages with actionable recovery steps replaced cryptic system codes across the product suite.</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-destructive">Before: 1/5</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary font-medium">After: 4/5</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">5</div>
                <h3 className="font-semibold text-sm">Flexibility & Efficiency</h3>
              </div>
              <p className="text-sm text-muted-foreground">Keyboard shortcuts and customizable dashboards enabled power users to complete tasks 35% faster.</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-destructive">Before: 2/5</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary font-medium">After: 4/5</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">6</div>
                <h3 className="font-semibold text-sm">Consistency & Standards</h3>
              </div>
              <p className="text-sm text-muted-foreground">Cross-team design standards unified interaction patterns, reducing learning curve when switching between applications.</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-destructive">Before: 2/5</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary font-medium">After: 5/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src={kesselRunHq}
                  alt="Col. Richard Lopez briefs at Kessel Run headquarters in Boston"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4 italic">
                Kessel Run headquarters in Boston, Massachusetts
              </p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src={kesselRunLeadership}
                  alt="Air Forces Central leadership"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4 italic">
                Cross-functional collaboration with Air Force leadership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">My Role</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              As Portfolio Design Lead, I led product design strategy and execution for a software suite containing five software applications and one hardware solution, supporting six critical operational missions across the United States Air Force.
            </p>
            <p>
              I directly mentored and led a team of six product designers while providing guidance and support for an additional ten design reports. I set design standards, practices and procedures while facilitating cross-functional collaboration between teams.
            </p>
            <p>
              Throughout my tenure, I advocated for user-centered design practices across multiple product teams while championing design thinking and advocating psychological safety.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">Key Responsibilities</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-primary text-2xl leading-none">•</span>
              <span className="text-lg text-muted-foreground">Collaborate with users and leadership teams to identify capability needs</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary text-2xl leading-none">•</span>
              <span className="text-lg text-muted-foreground">Establish design career ladders with DesignOps for professional development</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary text-2xl leading-none">•</span>
              <span className="text-lg text-muted-foreground">Centralize documentation and resources to reduce redundant processes</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary text-2xl leading-none">•</span>
              <span className="text-lg text-muted-foreground">Facilitate team rituals and practices as Psychological Safety facilitator</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
            <img
              src={kesselRunCaoc2003}
              alt="Combined Air Operations Center at Prince Sultan Air Base, Saudi Arabia"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            Air Force command and control operations supporting mission-critical software
          </p>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Workflow Transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-destructive/5 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-destructive">Before</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Designers worked in silos with no shared resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>No clear career progression or growth opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Inconsistent handoff processes caused rework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>User research rarely informed design decisions</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-primary">After</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Cross-team design community with shared rituals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Established career ladders with mentorship programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Standardized handoff reduced developer rework by 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Research embedded in every product team's workflow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Results</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Today, the products I've contributed to and led the design initiatives on are accessed by users daily across the United States Air Force, generating thousands of active intelligence inputs.
            </p>
            <p>
              The design systems and processes established have increased consistency across the USAF application suite, reducing design debt and enabling faster delivery of new features.
            </p>
            <p>
              Our investment in design culture and psychological safety has resulted in a thriving design team that continues to deliver mission-critical capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Testing & Validation Insights */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">What Testing Revealed</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Usability testing with warfighters uncovered critical insights that reshaped our approach. Users needed information at a glance during high-pressure operations—our initial designs were too dense. Iterative testing led to a 35% reduction in cognitive load through progressive disclosure patterns.
            </p>
            <p>
              Accessibility audits revealed keyboard navigation gaps that affected users in operational environments where mouse usage was impractical. We established accessibility champions on each team, resulting in WCAG 2.1 AA compliance across all products.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholder Feedback */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">What Stakeholders Said</h2>
          <div className="bg-primary/5 rounded-xl p-8 space-y-4">
            <blockquote className="text-lg italic text-foreground leading-relaxed">
              "The design team's transformation has been remarkable. They've built a culture where designers feel empowered to advocate for users while delivering at the speed our missions require."
            </blockquote>
            <p className="text-sm text-muted-foreground">— Program Leadership</p>
          </div>
        </div>
      </section>

      {/* Tools and Methods */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Tools and Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Design Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Figma</li>
                <li>Miro</li>
                <li>Adobe Creative Suite</li>
                <li>Zeplin</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Research Methods</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Contextual Inquiry</li>
                <li>Usability Testing</li>
                <li>Stakeholder Interviews</li>
                <li>Journey Mapping</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Leadership Practices</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Design Critiques</li>
                <li>Career Coaching</li>
                <li>Psychological Safety</li>
                <li>Cross-team Rituals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">What did we learn?</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Building a design practice in a high stakes environment requires balancing speed with quality. We learned that investing in team culture and psychological safety paid dividends in creativity and retention.
            </p>
            <p>
              Cross-functional collaboration was essential. By embedding designers within product teams while maintaining a strong design community, we achieved both deep product knowledge and shared best practices.
            </p>
            <p>
              User research in classified environments presents unique challenges, but direct access to warfighters transformed our design decisions and built credibility with stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Future Growth */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Designed for Future Growth</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The design infrastructure we established scales with the organization. Career ladders accommodate growth from junior to principal levels, cross-team rituals adapt as new products launch, and our research practices transfer to new mission areas. This foundation continues to support the organization's expansion into new domains.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Interested in learning more?</h2>
          <Link to="/#work">
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

export default KesselRunCaseStudy;