import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const KesselRunCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
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
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=700&fit=crop"
              alt="Kessel Run Design Work"
              className="w-full h-auto"
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

      {/* Image with Caption */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
              alt="Application dashboard design"
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            Designing intuitive interfaces for complex intelligence workflows
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
            The design process follows the Double Diamond framework, broken into four phases—two for divergent thinking (exploring possibilities) and two for convergent thinking (focusing on solutions).
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

      {/* Stats Grid */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Designers Supported</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-secondary">6</p>
              <p className="text-sm text-muted-foreground">Operational Missions</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Applications Built</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-secondary">1000s</p>
              <p className="text-sm text-muted-foreground">Daily Intelligence Inputs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Image Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4 italic">
                Facilitating design critiques and team collaboration
              </p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                  alt="Design process"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4 italic">
                Establishing design processes and standards
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
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=500&fit=crop"
              alt="Design system components"
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            Building consistency across the USAF application suite through design systems
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
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

      <Footer />
    </div>
  );
};

export default KesselRunCaseStudy;