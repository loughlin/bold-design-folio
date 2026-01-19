import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";


const DesignSystemCaseStudy = () => {
  const keySkills = [
    "Mentorship & Leadership",
    "Component Libraries",
    "Stakeholder Management",
    "Documentation",
    "Dev/Design Pairing",
  ];

  const toolsUsed = [
    "Figma Suite",
    "Adobe Creative Cloud",
    "React",
    "HTML/CSS",
    "Github",
  ];

  const designProcessPhases = [
    {
      name: "Discover",
      type: "divergent" as const,
      description: "Understanding the problem space through research and exploration.",
    },
    {
      name: "Define",
      type: "convergent" as const,
      description: "Synthesizing insights to define clear problem statements.",
    },
    {
      name: "Develop",
      type: "divergent" as const,
      description: "Generating and iterating on potential solutions.",
    },
    {
      name: "Deliver",
      type: "convergent" as const,
      description: "Refining and delivering the final solution.",
    },
  ];

  const challenges = [
    "Products were using a variety of technical stacks, in addition to an assortment of custom components and different component libraries.",
    "Products were overly attached to their unique solutions to common user problems, increasing the amount of developer hours spent on front end stories.",
    "Any out-of-the-box component library adopted as a basis for the design system would lack documentation for custom or organization-specific components.",
    "Existing wireframe libraries would lack the unique theming and custom components, inhibiting designers' ability to build wireframes and prototypes quickly.",
  ];

  const keyAchievements = [
    "Reduction in front end story frequency of 48%.",
    "Reduction in developer days spent per year on front end by over 2,000 (avg per 10-person developer team).",
    "Three day reduction in average front end story completion time.",
    "Created a pathway for Air Force-wide source code and artifact sharing.",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in">
            T&G Portfolio Design System
          </h1>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-serif font-semibold animate-fade-in">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            As Kessel Run's product offerings grew, so too did the need for unified user experiences, interaction patterns, color and component libraries. What started as 8-10 unrelated applications quickly grew into interconnected portfolios and suites of products with similar user and data sets. Unified design and developer language across these systems granted Kessel Run greater flexibility with the allocation of design and developer resources.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-serif font-semibold animate-fade-in">Problem Statement</h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Inconsistent user interfaces across products within the organization steepened the learning curve for the growing amount of overlapping user sets. Custom-first front ends increased design and development time, and prevented organization-wide branding initiatives. The problem facing the design system was two-fold:
          </p>
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl font-medium italic text-foreground">
              How might we decrease error rates and onboarding time for users so that they spend a greater amount of time completing job-related tasks?
            </p>
            <p className="text-xl font-medium italic text-foreground">
              How might we decrease the amount of designer and developer hours dedicated to UI enhancement so that usability, user experience, product security, reliability, and database management can be prioritized?
            </p>
          </div>
        </div>
      </section>

      {/* UX Metrics */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h3 className="text-2xl font-serif font-semibold mb-6">Metrics</h3>
          <ul className="space-y-3">
            <li className="text-lg text-muted-foreground">Task completion rate: time on core functions vs. interface navigation</li>
            <li className="text-lg text-muted-foreground">User error frequency: incidents caused by inconsistent UI patterns</li>
            <li className="text-lg text-muted-foreground">Developer velocity: front end story throughput and cycle time</li>
          </ul>
        </div>
      </section>



      {/* Process Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Process</h2>
          
          {/* Double Diamond Visual */}
          <div className="flex justify-center py-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-0 max-w-3xl w-full">
              {designProcessPhases.map((phase, index) => (
                <div key={index} className="flex-1 text-center">
                  <div 
                    className={`h-20 flex items-center justify-center relative ${
                      phase.type === "divergent" 
                        ? "bg-gradient-to-r from-primary/20 to-primary/40" 
                        : "bg-gradient-to-r from-primary/40 to-primary/20"
                    } ${index === 0 ? "rounded-l-xl" : ""} ${index === designProcessPhases.length - 1 ? "rounded-r-xl" : ""}`}
                  >
                    <span className="font-semibold text-foreground text-sm">{phase.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The design process is broken down into four phases, two for divergent thinking, and two more for convergent thinking. Each phase has multiple practices within to help create positive user outcomes.
          </p>

          {/* Challenges */}
          <div className="space-y-6 pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The main challenges of creating a design system were identified through an initial scoping effort that included stakeholder interviews, technical research, market research, and interviews with the product teams that would be utilizing the design system. Four key challenges emerged from these interviews:
            </p>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Statistics Callout */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center space-y-4 animate-fade-in">
          <p className="text-7xl md:text-8xl font-serif font-bold text-primary">95%</p>
          <p className="text-xl text-muted-foreground">of product teams</p>
          <p className="text-2xl font-medium text-foreground">currently using React</p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            We evaluated the tech stack of every product team at Kessel Run to determine commonalities. The overwhelming majority were using React for front end development, which informed our technical foundation decisions.
          </p>
        </div>
      </section>


      {/* Adoption Story */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Measuring Adoption Impact</h2>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One established team with a product in production, active users, fully custom front end designs, and a nonlinear user flow underwent the adoption of the design system at the insistence of their portfolio leadership. My team began combing through their backlog, tracking every single front end story in their team's history.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              In their first 10 months of existence they utilized no design system and built everything from scratch. During that time they had an average of 3.80 design stories requested per week and it took each story an average of 22.18 days to be completed.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              After adoption, their design story requests were nearly cut in half, dropping from 3.80 to 1.95 stories requested per week. Story complexity increased 36 percent, but stories took an average of about 3 less days to complete. Per commit the developers were touching fewer files, inserting 20% less lines, and deleting 35% less lines.
            </p>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8">
                <p className="text-xl font-medium text-foreground text-center">
                  In short, developers were doing more complex design stories faster, while the product manager requested them less often.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results and Learnings */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl space-y-12">
          <h2 className="text-4xl font-serif font-semibold text-center animate-fade-in">Results and Learnings</h2>
          
          {/* Key Achievements */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-semibold">Key Achievements</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At its peak, the design system was adopted in some way or another by all eligible product teams. Adoption was never made compulsory by leadership and many teams only chose to adopt once the system offered enough value to their product. The design system was so successful the CXO of the Air Force approached the team about making the design system an Air Force-wide effort.
            </p>
            <ul className="space-y-4">
              {keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-lg text-foreground">{achievement}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold">Impact</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The design system fundamentally transformed how 40+ product teams approached front end development, creating organizational efficiency while ensuring consistent user experiences across the entire product ecosystem.
            </p>
          </div>

          {/* Learnings */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold">What did I learn?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The design system became a passion project for every member of our team. Treating developers as the primary users of the system turned out to be one of our smartest decisions and directly influenced how intuitive the final product became.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This focus occasionally frustrated designers who felt the system catered more to the engineering side. We created a Developer Engagement Program to build subject matter expertise across product teams. In hindsight, a similar initiative for designers would have strengthened adoption and advocacy within the design community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leading this effort, I treated the design system like any other product. I stayed focused on user needs while balancing stakeholder requirements, iterating toward something that delivered real value.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Key Skills */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Key Skills</h3>
                    <ul className="space-y-2">
                      {keySkills.map((skill, index) => (
                        <li key={index} className="text-muted-foreground text-sm">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Used */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Tools Used</h3>
                    <ul className="space-y-2">
                      {toolsUsed.map((tool, index) => (
                        <li key={index} className="text-muted-foreground text-sm">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Deliverables</h3>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground text-sm">React Component Library</li>
                      <li className="text-muted-foreground text-sm">Figma Design Kit</li>
                      <li className="text-muted-foreground text-sm">Documentation Site</li>
                      <li className="text-muted-foreground text-sm">Contribution Guidelines</li>
                      <li className="text-muted-foreground text-sm">Adoption Playbook</li>
                    </ul>
                  </div>

                  {/* Time Frame */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Time Frame</h3>
                    <p className="text-muted-foreground text-sm">
                      Sept 2019 - Sept 2023 (4 Years)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl font-serif font-semibold">Interested in learning more?</h2>
          <Link to="/#work" className="inline-block mt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View More Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DesignSystemCaseStudy;
