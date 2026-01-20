import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Kessel Run | United States Air Force",
      role: "UX Design Manager",
      period: "2022 - Present",
      description: "As the Portfolio Design Leader I drove product design strategy and execution for software suite containing five software applications and one hardware solution, supporting six critical operational missions across the United States Air Force. Directly mentored and led a team of six product designers while providing guidance and support for an additional ten design reports. Set design standards, practices, and procedures while facilitating cross-functional collaboration between teams. Advocated for user-centered design practices across multiple product teams while championing design thinking and advocating psychological safety.",
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
      role: "Professional Services",
      period: "2014 - 2018",
      description: "Led content team solution requirement gathering, design, and support. Professional consultant coordination and delivery of ECM software.",
      icon: "🖨️",
    },
  ];

  return (
    <section id="experience" className="py-12 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-10 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
            <a href="/James_Loughlin_CV_2025v3.pdf" download>
              <Button className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Experience Cards - Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      </div>
    </section>
  );
};

export default Experience;
