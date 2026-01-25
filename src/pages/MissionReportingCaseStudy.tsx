import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cloudApplicationDashboard from "@/assets/cloud-application-dashboard.jpg";
import uxWorkflowPlanning from "@/assets/ux-workflow-planning.jpg";

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
      
      {/* Hero Section - Dark Background */}
      <section className="bg-foreground text-background pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-background hover:bg-background/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-4xl">
            Eliminating manual calculation and data entry to transform how the Air Force plans mission reporting.
          </h1>
          
          <div className="flex flex-wrap gap-8 text-sm text-background/70">
            <div>
              <span className="uppercase tracking-wider">Company</span>
              <span className="mx-2">|</span>
              <span className="text-background">Kessel Run</span>
            </div>
            <div>
              <span className="uppercase tracking-wider">Year</span>
              <span className="mx-2">|</span>
              <span className="text-background">2019 - 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-foreground pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={cloudApplicationDashboard} 
              alt="Mission Reporting Application Interface" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* TLDR Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">TLDR</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As the lead designer on our team, I was responsible for the entire design process, from research to solution generation and evaluation as we built a new feature for the mission reporting tool. The actual name of the application was redacted due to security concerns. Through this project, I experienced significant growth, as I was exposed to new challenges and learned valuable lessons. For instance, I learned the importance of involving engineers early in the process and accounting for unforeseen complexity.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Background</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The mission reporting tool changed the way the Air Force develops software and later resulted in the creation of Kessel Run. The application started with the goal of solving the specific problem of mission reporting and was wildly successful. After growing quickly as an organization, Kessel Run turned its sights on deprecating the old legacy system that was being used in Air Operation Centers. This would require the mission reporting tool, which was not originally built to integrate, to fit into a larger suite of applications and adapt to the new process of the users.
            </p>
            <p className="text-sm italic text-muted-foreground/70">
              Note: All sensitive information has been removed from this case study and the application name has been redacted due to security concerns. This case study has been approved for publication by the Kessel Run Security team.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">The Problem</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              As a team, we decided to start by targeting the mission data domain. In the current interface, users were required to enter five data fields for each mission report created and manually calculate all route times. I determined that we could automate three of the five data fields with an integration with the external data management system. In addition to the needed integration, the mission reporting tool would also need to consume additional data that would enable an automatic calculation of the route times.
            </p>
            <p>
              We began migrating our data sources from our internal backend to consuming directly from the external data management tool. We took this opportunity to address significant user pain surrounding the process of managing and interacting with mission data.
            </p>
          </div>
        </div>
      </section>

      {/* Interface Images */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="rounded-xl overflow-hidden bg-muted/50 p-8 text-center">
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-muted-foreground/30 rounded-lg">
              <p className="text-muted-foreground italic">Image blurred due to releasability restrictions</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Existing Mission Reporting Interface</p>
          </div>
        </div>
      </section>

      {/* Exploratory Research */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Exploratory Research</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Before ideation, I conducted user interviews with 5 mission planners and created a user journey map to illustrate the process the users follow to create mission reports and plan missions using the data. From this, I identified two major pains to solve: the mission reporting tool relied on manual "route" calculation and heavy data entry from the user to properly calculate mission data.
          </p>
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
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Prototype Testing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Now understanding the users' problem space, I began designing and testing potential concepts. After a few rounds of iteration, I felt I had a good solution that addressed the users' pain, providing more automation, a more visual map interface and achieved the business goal of integrating with the external data management application. I was stoked and users loved it!
          </p>
        </div>
      </section>

      {/* Adjusting the Scope */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Adjusting the Scope</h2>
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

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Results</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              The integration with the external data management system was completed in four months. The solution met or exceeded all but one of our success metrics. Unfortunately, the automation of transit data entry was deprioritized due to technical and timeline constraints. Our team moved on to the next domain area to integrate within the suite, taking lessons learned from this first iteration with us.
            </p>
            <p>
              My biggest takeaway from this experience was to seek out engineering feedback early and often. If I had brought my engineers into my design process earlier, they would have been able to give me the feedback that would have saved time, allowed for better user expectation management, and kept me focused on the problems at hand. It is good to have a long term vision for what the ideal state would be, but feasibility is an important factor to consider so that we can provide user value as soon as possible. This is something that I have continued to reflect back on during my career and has allowed me to create more effective and feasible designs.
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
