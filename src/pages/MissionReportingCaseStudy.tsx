import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import missionReportingInterface from "@/assets/mission-reporting-interface.png";
import uxWorkflowPlanning from "@/assets/ux-workflow-planning.jpg";
import f35AerialRefueling from "@/assets/f35-aerial-refueling.jpg";

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
            <span>2019 - 2021</span>
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
            First as a product designer on the software team and later overseeing it from a managing position, I was responsible for the design process, from research to solution generation and evaluation as we built out and expanded upon the capability for the mission reporting tool. Through my time on this project I experienced significant growth not only as a designer but as a professional and product owner. I was exposed to new challenges and difficult stakeholders which allowed me to learn valuable lessons in deploying software quickly and productively. From knowing the importance of involving engineers early in the process to accounting for unforeseen complexity and juggling stakeholders.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Background</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The mission reporting tool utilized by the majority of the USAF was functional but not custom to their mission type. Mission information was often filed but lost and unavailable to sources months or years later when valuable context could have been provided from data on formerly flown missions in a given area or region. This mission reporting application aimed to change the way the Air Force develops software but also the way USAF intelligence personal accessed that data. The application started with the goal of solving the specific problem of mission reporting and was successful in adoption before expanding to various domains and capabilities.
            </p>
            <p>
              After growing the solution, the tool quickly turned its sights on deprecating the old legacy system that was being used in Air Operation Centers and in other regions. This would require the mission reporting tool which was not originally built to integrate, to fit into a larger suite of applications and adapt to the new process of the users as well as make its data available to external intelligence agencies and tools.
            </p>
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
              Our primary users were intelligence personnel working in Air Operations Centers across the globe. These operators work in high-pressure, time-sensitive environments where accurate mission data can mean the difference between mission success and failure. They needed to create detailed reports quickly while managing multiple concurrent missions and coordinating with various agencies.
            </p>
            <p>
              Secondary users included intelligence analysts at external agencies who consumed this data to inform strategic decisions. For them, the pain was different: data was often stale, inconsistent, or simply inaccessible when they needed it most. Historical mission data that could provide crucial context was buried in systems that didn't communicate with each other.
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
              As a team, we decided to start by targeting the mission data domain. In the current interface, users were required to enter multiple data fields for each mission report created and manually calculate all route times. Not only would some information required not be pertinent to a given mission type it might be completely unknown.
            </p>
            <p>
              We determined that we could automate multiple data fields by importing from sources. First via a manual method of document ingestion and later through third party API integrations with an integration to external data management systems. In addition to the needed integration, the mission reporting tool would also need to consume additional data that would enable an automatic calculation of the route times on certain mission events, fuel levels, aircraft load outs and additional information.
            </p>
            <p>
              We began migrating our data sources from our internal back end to consuming directly from multiple external data management tools. We took this opportunity to address significant user pain surrounding the process of managing and interacting with mission data, by giving different methods to capture that data and define it for a given mission type and location as well as identifying the authoring group and persons.
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
              Before ideation, our team conducted user interviews with 5 mission operations centers to gauge their interest and use. One single group was then marked as our primary use case to vet and test ideas and concepts for deployment. Through this process myself and the software team worked to create a user journey map, workflow and problem statement to illustrate the process the users follow to create mission reports and how that information then feeds back to plan missions using the data.
            </p>
            <p>
              From this we identified two major pains to solve: the mission reporting tool relied on manual "route" calculation and heavy data entry from the user to properly calculate mission data. Additionally there was no given source of truth for mission data to provide across the network, so we worked to solve that task as we had several assumptions it would aid our ability to provide reporting at scale going forward.
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
            Understanding the users problem space is really only the beginning, and something that is going to evolve as we build out software. As a team we began designing and testing potential concepts, iterating based on feedback from the field. After a few rounds of iteration we felt we had a good solution that addressed the users' pain, providing more automation, adding a more visual map interface and achieved the business goal of integrating with at least one external data management application. We were excited that users seemed to find the product useful in a space where before there was frustration, but were also conscious of future growth within the problem space.
          </p>
        </div>
      </section>

      {/* The Breakthrough - Turning Point */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">The Breakthrough</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl font-medium text-foreground">
              The moment that changed everything: we realized we weren't just building a better form—we were creating a single source of truth.
            </p>
            <p>
              During user interviews, one operations center lead mentioned offhand that they spent hours each week reconciling data between systems. Different tools showed different mission states, and no one knew which was "real." This wasn't a data entry problem—it was a data trust problem.
            </p>
            <p>
              This insight shifted our entire approach. Instead of optimizing for faster input, we focused on making our tool the authoritative source that other systems could consume. The integrations we built weren't just about pulling data in—they were about pushing reliable data out across the network.
            </p>
          </div>
        </div>
      </section>

      {/* Adjusting the Scope */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Adjusting the Scope</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Although the solution had great support from the users, we quickly ran into feasibility issues with integrating a map into a classified environment. Working with my engineers and product manager, we adjusted the scope of the feature to delay the map integrations but still allow users to benefit from a more modern UI, reduced data entry and automated calculations.
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
                  <span>5 manual data entry fields per mission report</span>
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
              Usability testing also uncovered that users preferred the form-based interface over the map view for routine operations—the visual map was valuable for complex scenarios but added cognitive load for standard workflows. This insight validated our scope adjustment decision.
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
              My biggest takeaway from this experience was to seek out engineering feedback early and often. If I had brought my engineers into my design process earlier, they would have been able to give me the feedback that would have saved time, allowed for better user expectation management, and kept me focused on the problems at hand.
            </p>
            <p>
              It is good to have a long term vision for what the ideal state would be, but feasibility is an important factor to consider so that we can provide user value as soon as possible. This is something that I have continued to reflect back on during my career and has allowed me to create more effective and feasible designs.
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

export default MissionReportingCaseStudy;
