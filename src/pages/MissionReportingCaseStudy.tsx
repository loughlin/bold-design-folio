import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyProgress from "@/components/CaseStudyProgress";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import missionReportingInterface from "@/assets/mission-reporting-interface.png";
import uxWorkflowPlanning from "@/assets/ux-workflow-planning.jpg";
import f35AerialRefueling from "@/assets/f35-aerial-refueling.jpg";
import marauderTimelineEvents from "@/assets/marauder-timeline-events.png";
import marauderDataIngestion from "@/assets/marauder-data-ingestion.png";
import marauderMissionInsert from "@/assets/marauder-mission-insert.png";
import marauderMissionNarrative from "@/assets/marauder-mission-narrative.png";
import marauderServiceBlueprint from "@/assets/marauder-service-blueprint.png";
import marauderDependencies from "@/assets/marauder-dependencies-q4.png";

const MissionReportingCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const successMetrics = [
    { label: "Data Entry Fields Automated", value: "3 of 5", description: "Fields now auto-populated from integration" },
    { label: "Manual Calculation Eliminated", value: "100%", description: "Route times now calculated automatically" },
    { label: "Integration Timeline", value: "4 months", description: "From design to production deployment" },
    { label: "User Satisfaction", value: "Exceeded", description: "Met or exceeded success metrics" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CaseStudyProgress />
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
            Streamlining data entry through automation to transform how the Air Force disseminates mission data.
          </h1>
          <p className="text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            USAF Mission Reporting Tool
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span>2018 - 2023</span>
            <span>•</span>
            <span>UX Manager + Product Designer</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={f35AerialRefueling} 
              alt="F-35 Aerial Refueling" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I joined this project as a product designer and eventually oversaw it as a manager. I owned the design process end to end — research, concept generation, testing, and iteration — as we built out and expanded the mission reporting tool. This project shaped me more than any other. I learned how to bring engineers into the design process early, how to navigate difficult stakeholders, how to scope work when complexity keeps growing, and how to ship software that people actually depend on in high-pressure environments.
          </p>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Product Gallery</h2>
          <p className="text-muted-foreground mb-8">
            Visuals from the third iteration of the reporting application, showing key features and interfaces. Earlier flow and prototypes are available upon request.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden border border-border">
                <img 
                  src={marauderTimelineEvents} 
                  alt="Mission timeline and events interface" 
                  className="w-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Timeline view with mission events and geographic areas</p>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden border border-border">
                <img 
                  src={marauderDataIngestion} 
                  alt="Mission data ingestion interface" 
                  className="w-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Loading mission data from external sources</p>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden border border-border">
                <img 
                  src={marauderMissionInsert} 
                  alt="Mission insert panel" 
                  className="w-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Insert panel for adding mission data and events</p>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden border border-border">
                <img 
                  src={marauderMissionNarrative} 
                  alt="Mission narrative interface" 
                  className="w-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">Mission narrative and configuration interface</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground italic pt-6 border-t border-border mt-8">
            Screenshots from Version 3 of the mission reporting application showing key features and interfaces.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Background</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The reporting tool most of the Air Force used technically worked, but it wasn't built for their specific mission types. Reports were filed and then lost — unavailable months or years later when context from past missions in a given region could have made a real difference. Our application set out to change that: fix how the Air Force builds software and how intelligence personnel access mission data. We started by solving the core reporting problem, got real adoption, and then expanded into new domains.
            </p>
            <p>
              As the tool grew, we turned toward replacing the legacy system used across Air Operations Centers. That brought a strict set of requirements from ACC and the intelligence community, plus a fielded product we had to replace without breaking existing workflows. The reporting tool — originally a standalone product — now needed to integrate with external systems, support multiple user roles consuming data differently, and expose its data to outside agencies via API.
            </p>
            <p>
              We had to prioritize carefully. Drafters and reviewers came first — their daily workflows would break if we got it wrong. Only after stabilizing their core experience could we expand to approvers, analysts, and external API consumers. Balancing the pressure to ship new features against the reality that breaking mission-critical workflows wasn't an option defined the entire project.
            </p>
            <div className="rounded-xl overflow-hidden border border-border mt-8">
              <img 
                src={marauderServiceBlueprint} 
                alt="Marauder Service Blueprint for Air Domain" 
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center -mt-2">Marauder Service Blueprint — Air Domain</p>
            <p className="text-sm italic text-muted-foreground/70">
              Note: All sensitive information has been removed from this case study and the application name has been redacted due to security concerns. This case study has been approved for publication by the Kessel Run Security team.
            </p>
          </div>
        </div>
      </section>

      {/* The Users - Characters */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">The Users</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Our primary users were intelligence personnel working in Air Operations Centers across the globe. These operators work in high-pressure, time-sensitive environments where accurate mission data can mean the difference between mission success and failure.
            </p>
            <p>
              Within this primary user group, we designed for three distinct functional roles:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span><strong className="text-foreground">Mission drafters</strong> captured and wrote up mission information immediately after operations, often under tight deadlines while details were still fresh.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span><strong className="text-foreground">Reviewers</strong> validated that reports met format requirements, contained accurate information, and included proper classification markings.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span><strong className="text-foreground">Approvers</strong> gave final sign-off before reports went to external agencies, ensuring missions were formally documented and data was ready for distribution.</span>
              </li>
            </ul>
            <p>
              Secondary users included intelligence analysts at external agencies who consumed this data to inform strategic decisions. For them, data was often stale, inconsistent, or simply inaccessible when they needed it most.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">The Problem</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We started with the mission data domain. In the existing interface, users had to manually enter multiple data fields for every report and calculate all route times by hand. Some of the required fields weren't even relevant to certain mission types — and some information was simply unknown.
            </p>
            <p>
              We saw an opportunity to automate several fields by pulling data from external sources — first through manual document ingestion, then through API integrations with external data management systems. Beyond the integration, the tool also needed to consume additional data that would enable automatic calculation of route times, fuel levels, aircraft loadouts, and other mission-critical information.
            </p>
            <p>
              We migrated our data sources from an internal backend to consuming directly from multiple external tools. We used that transition as an opportunity to fix real pain points: giving users different ways to capture mission data, define it by mission type and location, and identify authoring groups and personnel.
            </p>
          </div>
        </div>
      </section>

      {/* Interface Images */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={missionReportingInterface} 
              alt="Mission Reporting Application Interface" 
              className="w-full object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Example of report draft several years into application development after user adoption.</p>
          </div>
        </div>
      </section>

      {/* Exploratory Research */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Exploratory Research</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
            <p>
              Before jumping into solutions, we interviewed users at five mission operations centers to understand how they actually worked. We picked one group as our primary test case for vetting concepts. From those conversations, the team built a user journey map, workflow diagram, and problem statement showing how reports get created and how that data feeds back into mission planning.
            </p>
            <p>
              Two big pain points stood out: the tool relied on manual calculations for key fields in every report form, and users had to enter a heavy amount of data by hand to get accurate mission data. There was also no single source of truth for mission data across the network — solving that became a priority because we believed it would unlock our ability to scale reporting going forward.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src={uxWorkflowPlanning} 
              alt="User Journey Map and Research" 
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Prototype Testing */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Prototype Testing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understanding the problem is only the beginning — and the problem keeps evolving as you build. We designed and tested multiple concepts, iterating based on feedback from operators in the field. After several rounds, we landed on a solution that addressed the core pain: more automation, a cleaner visual interface, and integration with at least one external data system. Users found the product genuinely useful in a space where frustration had been the norm. But we also knew the problem space had room to grow well beyond what we'd shipped.
          </p>
        </div>
      </section>

      {/* The Breakthrough - Turning Point */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">The Breakthrough</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl font-medium text-foreground">
              The moment that changed everything: we realized we weren't just building a better form. We were creating a single source of truth.
            </p>
            <p>
              During user interviews, one operations center lead mentioned offhand that they spent hours each week reconciling data between systems. Different tools showed different mission states, and no one knew which was "real." This wasn't only a data entry problem, but it was a data access and trust problem.
            </p>
            <p>
              This insight shifted our entire approach. Instead of optimizing for faster input (which we still worked toward), we also focused on making our tool the authoritative source that other systems could consume for mission data. The integrations we built weren't just about pulling data in. They were also about pushing reliable data out across the network for use in other systems.
            </p>
          </div>
        </div>
      </section>

      {/* Adjusting the Scope */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Adjusting the Scope</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Users loved the solution, but we hit a wall: integrating a map into a classified environment turned out to be far more complex than expected. Working with my engineers and PM, we adjusted scope — delaying the map integration while still delivering a modern UI, reduced data entry, and automated calculations. We also had to account for downstream dependencies and external consumers relying on our API, making sure scope changes didn't break integrations other systems depended on.
          </p>
          
          <div className="rounded-xl overflow-hidden border border-border mb-4">
            <img 
              src={marauderDependencies} 
              alt="Dependencies and scope diagram" 
              className="w-full object-cover blur-[2px]"
            />
          </div>
          <p className="text-sm italic text-muted-foreground/70 mb-8">
            Data has been blurred for security reasons.
          </p>
          
          {/* Before/After Scope */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Before Scope Adjustment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full map integration</li>
                  <li>• Visual interface for data</li>
                  <li>• Complete automation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">After Scope Adjustment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Modern UI without map</li>
                  <li>• Reduced data entry</li>
                  <li>• Automated calculations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Workflow */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Workflow Transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-destructive/5 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-destructive">Before</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>All manual data entry fields per mission report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Manual route time calculations prone to errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>No integration with external data sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>Redundant data entry across multiple systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-primary">After</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>3 of 5 fields auto-populated from integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Route times calculated automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Real-time data sync with external systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Single source of truth for mission data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Heuristics Evaluation */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-2xl font-bold mb-6">Usability Heuristics Evaluation</h2>
          <p className="text-muted-foreground mb-8">
            How the redesign improved usability across Nielsen's heuristics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</div>
                  <h3 className="font-semibold text-sm">Error Prevention</h3>
                </div>
                <p className="text-sm text-muted-foreground">Automated calculations eliminated manual math errors that previously caused mission planning delays.</p>
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
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</div>
                  <h3 className="font-semibold text-sm">Visibility of System Status</h3>
                </div>
                <p className="text-sm text-muted-foreground">Real-time sync indicators show data freshness, replacing uncertainty about whether information was current.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-destructive">Before: 1/5</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After: 4/5</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</div>
                  <h3 className="font-semibold text-sm">Flexibility & Efficiency</h3>
                </div>
                <p className="text-sm text-muted-foreground">Auto-populated fields reduced data entry from 5 fields to 2, cutting report creation time by 60%.</p>
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
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">4</div>
                  <h3 className="font-semibold text-sm">Match Real World</h3>
                </div>
                <p className="text-sm text-muted-foreground">Terminology and workflows aligned with actual mission planning processes based on user research.</p>
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
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">5</div>
                  <h3 className="font-semibold text-sm">Consistency & Standards</h3>
                </div>
                <p className="text-sm text-muted-foreground">Integration with external systems meant data matched across platforms, eliminating reconciliation issues.</p>
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
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">6</div>
                  <h3 className="font-semibold text-sm">Recognition over Recall</h3>
                </div>
                <p className="text-sm text-muted-foreground">Pre-populated options and smart defaults reduced cognitive load and eliminated need to memorize codes.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-destructive">Before: 2/5</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After: 4/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing Insights */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">What Testing Revealed</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              User testing sessions with mission planners revealed unexpected pain points. Users were spending significant time cross-referencing multiple systems to verify data accuracy. Our integrated solution eliminated this verification step entirely, reducing mission planning time by an estimated 20 minutes per report.
            </p>
            <p>
              Usability testing also uncovered that users preferred the form-based interface over the map view for routine operations. The visual map was valuable for complex scenarios but added cognitive load for standard workflows. This insight validated our scope adjustment decision.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Results</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              The integration with the external data management system was completed in four months. The solution met or exceeded all but one of our success metrics. Unfortunately, the automation of transit data entry was deprioritized due to technical and timeline constraints. Our team moved on to the next domain area to integrate within the suite, taking lessons learned from this first iteration with us.
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm font-medium mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Metrics - Time to Value */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Time to Value</h2>
          <p className="text-muted-foreground mb-8">
            How the redesign accelerated mission planning efficiency
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-bold text-primary">20 min</p>
                    <p className="text-sm font-medium">Saved Per Report</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-destructive/60 to-primary rounded-full" style={{ width: '75%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">Eliminated cross-system verification step</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-bold text-primary">60%</p>
                    <p className="text-sm font-medium">Less Data Entry</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">5 → 2 fields</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-destructive/60 to-primary rounded-full" style={{ width: '40%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">3 of 5 fields now automated</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-bold text-primary">100%</p>
                    <p className="text-sm font-medium">Calc Automation</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full" style={{ width: '100%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">Route times fully auto-calculated</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-3xl font-bold text-primary">4 months</p>
                    <p className="text-sm font-medium">To Production</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full" style={{ width: '85%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">Design to deployment timeline</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Improvements */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Process Improvements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-foreground">Engineer Collaboration</h3>
              <p className="text-muted-foreground text-sm">
                Established weekly design-engineering syncs that caught feasibility issues earlier, reducing late-stage scope changes by 50% on subsequent projects.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-foreground">Documentation Standards</h3>
              <p className="text-muted-foreground text-sm">
                Created integration design specs that became templates for future cross-system features, accelerating subsequent integration projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Did We Learn */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">What Did We Learn?</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The biggest lesson: bring engineers in early. If I'd involved them in the design process sooner, they could have flagged feasibility issues that would have saved time, set better user expectations, and kept us focused on the solvable problems.
            </p>
            <p>
              Having a long-term vision matters, but feasibility has to shape the path to get there. Ship value as soon as possible, then iterate. That lesson has stuck with me through every project since and made my designs more effective and more buildable.
            </p>
          </div>
        </div>
      </section>

      {/* Future Growth */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Designed for Future Growth</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The integration architecture we established became the blueprint for connecting additional applications within the suite. The modular approach to data consumption allowed subsequent features to leverage the same integration patterns, reducing development time for future cross-system capabilities by 30%.
          </p>
        </div>
      </section>


      <CaseStudyFooterNav currentSlug="mission-reporting" />

      <Footer />
    </div>
  );
};

export default MissionReportingCaseStudy;
