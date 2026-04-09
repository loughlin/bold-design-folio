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
            Building a design culture from the ground up inside one of the most demanding software environments I've ever worked in.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span>2021 – Present</span>
            <span>•</span>
            <span>UX & Product Lead</span>
          </div>
        </div>
      </section>


      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Kessel Run is the U.S. Air Force's in-house software factory. Small, agile teams. Real operational stakes. Software that warfighters actually depend on to do their jobs.
            </p>
            <p>
              I spent four-plus years there as Portfolio Design Lead, embedded across five applications built around targeting and geo-intelligence. The work lives on classified networks, but the design challenges were ones any design leader would recognize: teams solving the same problems independently, inconsistent experiences eroding user trust, and a growing organization that needed structure without losing the energy that makes good design possible in the first place.
            </p>
            <p>
              My job was never just about the screens. It was about building the conditions where good work becomes the default.
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
                  <li>• Design decisions were made in silos. Teams solved the same problems without knowing the other had already tried</li>
                  <li>• No shared design language meant the same interaction could look and behave differently across products</li>
                  <li>• Inconsistent experiences eroded trust with users who moved between applications regularly</li>
                  <li>• Designers had limited visibility into what career growth actually looked like inside their teams</li>
                  <li>• Duplicated effort across teams was quietly accumulating into real design debt</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-6 space-y-3">
                <h3 className="font-semibold text-primary">After</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• A unified design system and shared component library gave every team a common foundation</li>
                  <li>• Cross-team rituals created regular space for designers to align, give feedback, and stay connected</li>
                  <li>• Consistent interaction patterns reduced the cognitive load for users switching between applications</li>
                  <li>• Clear career ladders gave designers something concrete to orient their growth around</li>
                  <li>• Shared tooling and documentation cut redundant effort and gave teams more time for harder problems</li>
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
              The Air Force needed modern, cloud-native software to replace legacy systems that were slow, siloed, and built for a different era of operations. The demand for real-time intelligence was outpacing what those systems could support.
            </p>
            <p>
              Our role was to build software that actually helped people work under pressure. That meant marrying good UX practice with the pace of an agile delivery team, inside the constraints of classified networks and high-stakes mission contexts. It's not a combination that comes with a playbook.
            </p>
            <p>
              Kessel Run understood early that design was a strategic investment, not a finishing step. We built a design organization to match that belief: structured enough to hold standards, flexible enough to stay close to what users needed.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process Methodology */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Design Process</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We used the Double Diamond as our shared process language across teams. It gave designers a common vocabulary and helped stakeholders understand where we were at any point in a project. More importantly, it framed design as a discipline with distinct modes of thinking rather than a linear march toward a predetermined solution.
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
              <p className="text-sm text-muted-foreground">Getting close to users and missions through hands-on research.</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Contextual inquiries</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Stakeholder interviews</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Direct observation of workflows in operational environments</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary" />
                <h3 className="font-semibold">Define</h3>
              </div>
              <p className="text-sm text-muted-foreground">Turning research into clear problem statements and requirements teams could act on.</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Problem framing</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Journey mapping</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Requirements synthesis that teams could actually build from</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="font-semibold">Develop</h3>
              </div>
              <p className="text-sm text-muted-foreground">Testing solutions with the whole team, not just the designers in the room.</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Concept ideation</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Rapid prototyping</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Design critiques</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary" />
                <h3 className="font-semibold">Deliver</h3>
              </div>
              <p className="text-sm text-muted-foreground">Shipping validated work through structured testing, clean handoff, and continuous iteration based on what real users told us after launch.</p>
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
              <p className="text-4xl font-bold text-secondary">1,000s</p>
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
              <p className="text-sm text-muted-foreground">Operational Missions Supported</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4+</p>
              <p className="text-sm text-muted-foreground">Years Leading Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact Descriptions */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">40% Faster Design Delivery</h3>
              <p>This came from standardizing handoff processes and building out shared component libraries that every team drew from. The speed wasn't about moving faster in a careless way. It was about eliminating the back-and-forth caused by inconsistent tooling, undocumented decisions, and patterns that each team was reinventing independently.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">85% Designer Retention Rate</h3>
              <p>Retention went up as a direct result of investing in team culture, psychological safety, and career progression that designers could actually see. People stayed because they felt supported, had room to grow, and were doing work that mattered. That combination is harder to build than most organizations acknowledge.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">5 Applications Shipped</h3>
              <p>Five products across the targeting and geo-intelligence problem space, each with distinct user groups, mission contexts, and design challenges. Shipped, maintained, and continuously improved over four years.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">1,000s of Daily Active Users</h3>
              <p>The products are in active daily use across the Air Force, generating thousands of intelligence inputs that feed real operational decisions. That's the number I come back to when I think about why the work mattered.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">15+ Designers Managed</h3>
              <p>I directly led six product designers and provided mentorship across an additional ten embedded in product teams throughout the portfolio.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">6 Operational Missions Supported</h3>
              <p>The application suite touched six distinct operational missions, each with its own workflows, terminology, and user needs. Staying close to that context required constant coordination between design, product, and mission stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Metrics - Time to Value */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-4">Time to Value</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            How the design accelerated value delivery
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
                <p className="text-xs text-muted-foreground">Standardizing design-to-dev handoff reduced the time between a finalized design and a developer picking it up. Common patterns, documented decisions, and shared libraries meant fewer clarification cycles and more time actually building.</p>
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
                <p className="text-xs text-muted-foreground">Post-handoff design changes dropped significantly once we introduced structured critique and alignment checkpoints earlier in the process. Catching misalignments before handoff is far cheaper than catching them after a developer has already built the thing.</p>
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
                <p className="text-xs text-muted-foreground">When I arrived, getting a new designer productive took around six weeks. By centralizing documentation, building onboarding guides grounded in real project context, and establishing team rituals that new people could step into immediately, we brought that down to two. That matters a lot when you're scaling a team under pressure.</p>
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
                <p className="text-xs text-muted-foreground">We set a goal of validating features before build rather than after. Reaching 60% coverage was less about hitting a number and more about a cultural shift: research becoming a standard part of delivery rather than something teams squeezed in when they had time.</p>
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
            We used Nielsen's heuristics as a structured lens for evaluating design quality across the portfolio, both as a diagnostic tool and as a way to communicate design value to people who weren't designers. Framing improvements in terms of established principles gave our recommendations credibility with stakeholders who might otherwise have read them as subjective preference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</div>
                <h3 className="font-semibold text-sm">User Control and Freedom</h3>
              </div>
              <p className="text-sm text-muted-foreground">We established consistent undo/redo patterns and confirmation dialogs for high-consequence actions across the suite. In mission-critical workflows, giving users a clear path to recover from a mistake is not a nice-to-have.</p>
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
              <p className="text-sm text-muted-foreground">Real-time feedback for data sync, processing states, and system health was inconsistent or missing entirely in early versions. We built shared patterns for status communication that teams could implement consistently across all five applications.</p>
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
              <p className="text-sm text-muted-foreground">Early designs used system language instead of mission language. Direct access to warfighters through user research let us replace technical jargon with terminology that matched how people actually thought and talked about their work.</p>
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
              <p className="text-sm text-muted-foreground">Cryptic error codes were replaced with plain-language messages that told users what went wrong and what they could do about it. A small change with an outsized impact on trust.</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-destructive">Before: 1/5</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary font-medium">After: 4/5</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">5</div>
                <h3 className="font-semibold text-sm">Flexibility and Efficiency</h3>
              </div>
              <p className="text-sm text-muted-foreground">We introduced keyboard shortcuts and customizable dashboard configurations for experienced operators. Users who knew what they were doing could move through workflows 35% faster, validated through task-time testing with operators who used the tools daily.</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-destructive">Before: 2/5</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary font-medium">After: 4/5</span>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">6</div>
                <h3 className="font-semibold text-sm">Consistency and Standards</h3>
              </div>
              <p className="text-sm text-muted-foreground">Cross-team design standards unified interaction patterns across the portfolio. Users moving between applications didn't have to relearn basic interactions, a meaningful improvement in an environment where cognitive load is already high.</p>
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
              As Portfolio Design Lead, I owned design strategy and execution across a five-application software suite and one hardware solution, spanning six operational missions. I directly managed six product designers and provided mentorship to an additional ten across the portfolio.
            </p>
            <p>
              The role sat at the intersection of people leadership, design operations, and hands-on craft. On any given week I might be running a design critique, working through a career development conversation with a designer who wasn't sure what their next step looked like, aligning with product leadership on roadmap priorities, or reviewing research outputs with a team navigating a genuinely hard user problem. The range was part of what made the work interesting.
            </p>
            <p>
              I set the standards that defined what good design looked like across the portfolio, and then spent most of my time making sure teams had the support, tools, and psychological safety to actually meet them.
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
              <span className="text-lg text-muted-foreground">Partnered with users and Air Force leadership to identify and prioritize capability needs</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary text-2xl leading-none">•</span>
              <span className="text-lg text-muted-foreground">Built and maintained design career ladders with DesignOps to support professional growth at every level</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary text-2xl leading-none">•</span>
              <span className="text-lg text-muted-foreground">Centralized design documentation and shared resources to reduce redundant effort across teams</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary text-2xl leading-none">•</span>
              <span className="text-lg text-muted-foreground">Facilitated team rituals and served as a Psychological Safety facilitator across the design community</span>
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
                  <span>Designers worked in silos and rarely shared information, contacts, or context across team boundaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Career progression was largely contained within individual application teams, with little visibility across the portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Handoff procedures varied by team, which complicated staffing decisions and slowed ramp-up time for anyone moving between projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>User research existed but wasn't always documented or shared in a way that could inform decisions beyond the team that conducted it</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-primary">After</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>A cross-team design community with shared rituals created consistent connection and alignment across the portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Formal evaluation and mentorship structures gave designers a visible path and meaningful support at every career stage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Standardized handoff expectations between design and development reduced time from backlog to production by 33%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Expanded research standards and clearer guidance on prioritized design artifacts improved how insights flowed into product decisions across teams</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Validation Insights */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">What Testing Revealed</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Usability testing with warfighters has a way of reorienting your priorities quickly. Our initial designs prioritized completeness over clarity, and users operating under pressure did not have time for dense interfaces. Iterative testing led to a 35% reduction in cognitive load through progressive disclosure patterns, which in practice meant redesigning the information hierarchy around what users needed in the moment versus what could wait.
            </p>
            <p>
              Accessibility audits surfaced keyboard navigation gaps that weren't obvious in standard testing conditions. In operational environments, mouse usage is often impractical, so this was a real usability failure, not a compliance checkbox. We established accessibility champions on each team and reached WCAG 2.1 AA compliance across the entire product suite.
            </p>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">What We Learned</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Building a design practice inside a high-stakes, fast-moving organization means making peace with the tension between speed and quality, and developing good judgment about when each one needs to give a little.
            </p>
            <p>
              The biggest unlock was investing in team culture early. Psychological safety wasn't a soft priority. It was a strategic one. Teams that felt safe to share unfinished work, surface concerns, and admit uncertainty consistently produced better outcomes and stayed together longer. That's not intuition. We saw it directly in retention, in the quality of critique, and in how teams responded when things went sideways.
            </p>
            <p>
              Embedding designers within product teams while maintaining a strong cross-team community turned out to be the right structural balance. Designers developed deep product and user context without losing the shared perspective and standards that come from being part of something larger than a single team.
            </p>
            <p>
              Working directly with warfighters, despite the logistical complexity of classified research environments, was irreplaceable. There is no substitute for watching real users work through real problems in real conditions. It built credibility with stakeholders and shaped the products we shipped in ways that no amount of secondhand information could have.
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
              The infrastructure we built was designed to outlast any individual's time on the project. Career ladders that scale from junior to principal level, cross-team rituals that adapt as new products launch, research practices that transfer to new mission areas. The foundation is flexible enough to grow with the organization, and that was entirely intentional. Good design leadership should leave things better than it found them.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
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

export default KesselRunCaseStudy;
