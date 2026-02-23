import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import dataDashboardPreview from "@/assets/data-dashboard-preview.jpg";
import dashboardApiView from "@/assets/dashboard-api-view.jpg";
import dashboardMetricsView from "@/assets/dashboard-metrics-view.jpg";
import DashboardOutcomesChart from "@/components/DashboardOutcomesChart";
import DashboardMockup from "@/components/DashboardMockup";

const OperationalDashboardCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/#work">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to My Work
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4 mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Operational Data Dashboard</h1>
            <p className="text-2xl text-muted-foreground">Redesigning a monitoring tool that engineers had built for engineers — and making it work for the operators who actually depended on it.</p>
          </div>
          <div className="overflow-hidden animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img src={dataDashboardPreview} alt="Operational Data Dashboard" className="w-full h-[500px] object-cover" />
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
                <p className="text-lg">UX Manager & Product Designer</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">TIMELINE</h3>
                <p className="text-lg">2019 – 2021</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">TEAM</h3>
                <p className="text-lg">2 Product Designers, 6 Engineers, 1 PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This was one of my earlier projects at Kessel Run, and in some ways one of the most formative. The team had a monitoring dashboard that technically worked. It showed status. It had data. But operators weren't getting what they needed from it, and the engineering team — talented as they were — wasn't sure how to close that gap on their own.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My job was to figure out what operators actually needed, translate that into a design the engineering team could build, and navigate the back-and-forth between user needs and technical constraints that comes with any dashboard project done well.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Working with two product designers, six engineers, and a product manager, we redesigned the dashboard from the ground up across three interconnected views: a system-level overview, a data source view, and a granular metrics view.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Problem Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The existing dashboard was sparse. Basic status indicators, minimal context, no trend data, no way to understand whether what you were seeing was normal or cause for concern. Engineers had built it to show that systems were running. Operators needed it to tell them <em>how</em> systems were running — and to give them enough context to communicate problems clearly to the engineering teams they depended on for fixes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The gap between those two things was bigger than anyone had fully acknowledged before research started.
            </p>
          </div>

          <Card className="bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-sm font-semibold text-primary mb-4">PROBLEM STATEMENT</h3>
              <p className="text-xl font-medium leading-relaxed">
                How might we design a dashboard that delivers the right value and KPIs to operators, helping them monitor data flows and communicate effectively with engineering teams?
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Design Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We used the Double Diamond framework to structure the work, moving through four phases that kept us from jumping to solutions before we understood the problem.
            </p>
          </div>

          {/* Double Diamond Visual */}
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-0 max-w-4xl w-full">
              {[
                { name: "Discover", type: "divergent" },
                { name: "Define", type: "convergent" },
                { name: "Develop", type: "divergent" },
                { name: "Deliver", type: "convergent" },
              ].map((phase, index) => (
                <div key={index} className="flex-1 text-center">
                  <div
                    className={`h-24 flex items-center justify-center relative ${
                      phase.type === "divergent"
                        ? "bg-gradient-to-r from-primary/20 to-primary/40"
                        : "bg-gradient-to-r from-primary/40 to-primary/20"
                    } ${index === 0 ? "rounded-l-xl" : ""} ${index === 3 ? "rounded-r-xl" : ""}`}
                  >
                    <span className="font-semibold text-foreground">{phase.name}</span>
                  </div>
                  <span className={`text-xs mt-2 block ${phase.type === "divergent" ? "text-primary" : "text-secondary"}`}>
                    {phase.type === "divergent" ? "Divergent" : "Convergent"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Discover",
                type: "divergent",
                description: "Market research on Grafana-style monitoring tools, user interviews with operators, and mapping existing fragmented tooling.",
                activities: ["Market research on data visualization dashboards", "User interviews to understand operator priorities", "Mapping existing fragmented tools and workflows"],
              },
              {
                name: "Define",
                type: "convergent",
                description: "Defining key metrics, mapping monitoring workflows, and establishing design principles around scannability.",
                activities: ["Key metrics and data hierarchies", "User journey mapping for monitoring workflows", "Design principles for scannability"],
              },
              {
                name: "Develop",
                type: "divergent",
                description: "Figuring out how the dashboard scales from overview to granular data without losing users in transition.",
                activities: ["Early concepts evolving with new insights", "Scaling from overview to granular views", "Filtering and navigation pattern iterations"],
              },
              {
                name: "Deliver",
                type: "convergent",
                description: "Testing with operators, workshopping with engineers, and negotiating what was technically possible.",
                activities: ["Testing with operators and administrators", "Feasibility workshops with engineers", "Constraint negotiation and design refinement"],
              },
            ].map((phase, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 ${phase.type === "divergent" ? "bg-primary" : "bg-secondary"}`} />
                    <h3 className="font-semibold text-lg">{phase.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
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

      {/* Understanding Our Users */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Understanding Our Users</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              User interviews surfaced consistent patterns across the team. System health visibility was non-negotiable — every single person we talked to identified it as critical. Historical trend data mattered to the majority, because operators weren't just monitoring current state; they were trying to recognize patterns over time and make judgments about what was normal. Configurable alert thresholds came up repeatedly as something the existing tool didn't support but people genuinely needed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Two distinct user groups emerged with meaningfully different priorities. System administrators were focused on overall health and reliability standards across the full portfolio of data sources. Mission operators were narrower in focus but higher in stakes — they needed to know whether the data feeding mission planning was accurate and available right now.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Designing for both without making the interface feel like it was trying to serve everyone at once was one of the more interesting tensions in the project.
            </p>
          </div>

          <ul className="space-y-4 animate-fade-in">
            {[
              "100% of users cited system health visibility as critical — 6/6 users said this",
              "83% needed historical trend data for pattern recognition — 5/6 users said this",
              "83% wanted configurable alert thresholds to customize notifications — 5/6 users said this",
              "System administrators monitor overall health and ensure systems meet reliability standards",
              "Mission operators track data availability to ensure planning has accurate information",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary mt-2 mr-4 flex-shrink-0" />
                <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Restructuring IA + Dashboard Mockup */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Restructuring the Information Architecture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Early in the project I sat down with engineers to understand how the dashboard worked technically. That conversation was more useful than I expected. The underlying data had a natural hierarchy: three main views organized around System Overview, Data Source, and individual Metrics. Each organization could also have an optional sign-in page for team access.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rather than fighting that structure, I leaned into it. Data starts broad at the system level and becomes progressively more detailed as users drill into specific sources and then into specific metrics. That hierarchy became the backbone of the redesign — a clear path from anomaly detection at the top level to root cause investigation at the bottom.
            </p>
          </div>

          {/* Dashboard Mockup Visual */}
          <div className="animate-fade-in">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* Redesigning the Dashboard */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Redesigning the Dashboard</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The original dashboard gave you a status and a title. That was about it. The redesign added several layers that operators said they needed but the existing tool didn't provide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Data cards and summary tables gave operators a fast-scan surface for system health without requiring them to open individual views. Trend charts surfaced performance patterns over time rather than just point-in-time status. Filters let users navigate large datasets — and this turned out to matter more than I initially assumed, because testing revealed that operators routinely monitor dozens of data sources simultaneously, not the handful I had designed for in early concepts.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold">View 1: System Overview</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A high-level view of performance across all data sources for an organization. The line chart shows throughput over time with a scrollable legend for filtering across large source sets. Summary cards surface health status and endpoint counts per source, giving operators a single place to spot anomalies and compare environments before drilling deeper.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold">View 2: Data Source View</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A focused view on a single data source — its performance trends, request frequency, timestamps, latency metrics, error rates, and connected feeds. This is where operators go when something in the overview view catches their attention and they need more context before escalating.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold">View 3: Metrics View</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The most granular level — detailed statistics on specific endpoint performance including average, max, min, and standard deviation of response times, plus error rates and error types broken down by percentile. This view was designed specifically to give operators the language they needed to communicate clearly with engineering teams rather than describing problems in vague terms.
            </p>
          </div>
        </div>
      </section>

      {/* What Testing Revealed */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">What Testing Revealed</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operators pushed the designs in directions I hadn't anticipated. The need for more contextual data — timestamps, historical comparisons, frequency information — came up consistently. Without that context, users could see that something was wrong but couldn't communicate it precisely to engineers or determine whether it was a new problem or a recurring one.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The scale of what operators were monitoring also surprised me. I had initially designed with a handful of data sources in mind. Testing made it clear that real workflows involved dozens. That insight directly drove the redesign of the filtering experience — the scrollable legend wasn't a nice-to-have, it was the only way to make the interface usable at actual operational scale.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold">Navigating Constraints</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Implementing feedback from operators didn't happen in a straight line. I was still developing my technical vocabulary at this point in my career, and the gap between what users asked for and what I could confidently spec for engineers was real. The solution was to stop trying to bridge that gap alone and start workshopping directly with the engineering team.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bringing user feedback into those conversations rather than translated design requirements changed the dynamic. Engineers understood user problems better when they heard them directly, and they were more inventive about solutions when they understood the underlying need rather than a design spec that may or may not have captured it accurately. That collaboration pattern — researcher and engineer solving the same problem together rather than passing artifacts back and forth — was something I carried forward into every project after this one.
            </p>
          </div>
        </div>
      </section>

      {/* Time to Value + Outcomes Chart */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-8">
          <h2 className="text-3xl font-bold animate-fade-in">Time to Value</h2>

          {/* Outcomes Chart Visual */}
          <div className="animate-fade-in">
            <DashboardOutcomesChart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {[
              {
                value: "90%",
                label: "Task Success Rate",
                description: "In moderated usability sessions, operators completed the task of identifying underperforming systems without assistance at a 90% success rate.",
                percentage: 90,
              },
              {
                value: "4/5",
                label: "Confidence Score",
                description: "After completing tasks, operators rated their confidence in evaluating system performance at 4 out of 5 on average.",
                percentage: 80,
              },
              {
                value: "60%",
                label: "Context Switching Reduction",
                description: "Consolidating fragmented monitoring tools into a unified interface cut the time operators spent switching between tools by 60%.",
                percentage: 60,
              },
              {
                value: "3x",
                label: "Faster Issue Detection",
                description: "Time to identify system anomalies improved threefold compared to the original tooling — the number that resonated most with skeptical stakeholders.",
                percentage: 75,
              },
            ].map((metric, index) => (
              <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-3xl font-bold text-primary">{metric.value}</p>
                      <p className="text-sm font-medium">{metric.label}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary/40 to-primary transition-all duration-1000"
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

      {/* Final Design Images */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl space-y-8">
          {[
            {
              url: dataDashboardPreview,
              caption: "Final Design: System Overview — A high-level view showing performance for all data sources. The line chart shows throughput over time, paired with a scrollable legend for filtering. Summary cards display health status and total endpoints per source.",
            },
            {
              url: dashboardApiView,
              caption: "Final Design: Data Source View — Focused on a single data source, this view shows performance trends, request frequency, timestamps, and connected feeds. A scrollable legend supports quick filtering, while the table below lists each route with method and response details.",
            },
            {
              url: dashboardMetricsView,
              caption: "Final Design: Metrics View — A detailed breakdown of individual endpoint performance. Metrics include average, max, min, and standard deviation of response times, plus error rates and types split between percentiles for clearer insight.",
            },
          ].map((image, index) => (
            <div key={index} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={image.url} alt={image.caption} className="w-full" />
              <p className="text-center text-muted-foreground">{image.caption}</p>
            </div>
          ))}
          <p className="text-center text-sm text-muted-foreground italic pt-4 border-t border-border">
            Note: The data and text represented in these images have been modified and anonymized due to the secure nature of this work.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl space-y-8">
          <h2 className="text-3xl font-bold animate-fade-in">Outcomes & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "All designs were validated against engineering constraints before handoff — not as a final checkbox but as an ongoing part of the process throughout the project.",
              "Usability testing with operators and system administrators gave the team direct evidence about what was working and what needed to change, rather than relying on internal judgment.",
              "The redesign consolidated fragmented tooling into a single interface that operators could actually rely on, and surfaced insights about real monitoring workflows the team wouldn't have found without direct user access.",
              "That evidence validated the research approach as much as the design itself — and made the case for embedding user research earlier in future projects.",
            ].map((outcome, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">{outcome}</p>
                </CardContent>
              </Card>
            ))}
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
    </div>
  );
};

export default OperationalDashboardCaseStudy;
