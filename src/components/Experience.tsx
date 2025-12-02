import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Kessel Run | United States Air Force",
      role: "Portfolio Design Lead, T&G",
      period: "2022 - Present",
      description: "Lead product design strategy and execution for the T&G portfolio, supporting six critical operational missions across the Air Force. Direct and mentor a team of 6 product designers while providing guidance and support to 12 additional design reports. Establish design standards, facilitate cross-functional collaboration, and drive user-centered design practices across multiple product teams. Champion design thinking and psychological safety within complex, mission-critical environments.",
      icon: "🇺🇸",
    },
    {
      company: "Kessel Run | United States Air Force",
      role: "Product Designer",
      period: "2019 - 2022",
      description: "Led design of enterprise B2B cloud-native applications. Facilitated team rituals and established consistency processes across USAF application suite.",
      icon: "🇺🇸",
    },
    {
      company: "Hyland Software",
      role: "Brainware Analyst Lead",
      period: "2018 - 2019",
      description: "Led issue resolution and customization for Brainware systems. Composed internal documentation and handled change requests.",
      icon: "💼",
    },
    {
      company: "Lexmark Enterprise Software",
      role: "Professional Services Consultant",
      period: "2014 - 2018",
      description: "Led content team solution requirement gathering, design, and support. Professional coordination and delivery of ECM software.",
      icon: "🖨️",
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-serif font-bold border-2 border-foreground px-4 py-1 rounded-lg">
              JL
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Building design culture in defense tech
          </p>
        </div>

        {/* Experience Cards - Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`hover-lift animate-fade-in ${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-primary mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Card */}
        <Card className="mt-12 hover-lift animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Building2 className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-lg font-semibold">University of Iowa</p>
                <p className="text-muted-foreground">
                  Bachelor of Arts in Journalism • Bachelor of Science in Computer Informatics
                </p>
                <p className="text-sm text-muted-foreground mt-1">May 2010</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
