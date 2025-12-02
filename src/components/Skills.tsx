import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Users, 
  Palette, 
  Workflow, 
  Code, 
  MessageSquare 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Lightbulb,
      title: "Facilitation & Human-Centered Design",
      description: "Leading design studios, workshops, and user research to solve complex problems with empathy.",
    },
    {
      icon: Palette,
      title: "Design Systems & DesignOps",
      description: "Building scalable design systems and operational frameworks for consistency and efficiency.",
    },
    {
      icon: Users,
      title: "Team Leadership & Psychological Safety",
      description: "Supervising designers and fostering collaborative environments where teams thrive.",
    },
    {
      icon: Workflow,
      title: "Lean UX & Agile Methodologies",
      description: "Integrating design thinking with agile practices for rapid, iterative delivery.",
    },
    {
      icon: Code,
      title: "Technical Understanding",
      description: "Working knowledge of design tools, version control, and development workflows.",
    },
    {
      icon: MessageSquare,
      title: "Stakeholder Communication",
      description: "Collaborating with leadership and users to align design with mission needs.",
    },
  ];

  const tools = [
    "Figma",
    "Sketch",
    "Miro",
    "Lucid",
    "Mural",
    "Git",
    "Adobe CC",
    "Airtable",
    "ChatGPT",
    "Claude",
    "Material Design",
    "Warp",
    "Framer",
    "Notion",
  ];

  return (
    <section id="approach" className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-serif font-bold border-2 border-foreground px-4 py-1 rounded-lg">
              JL
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">Approach & Skills</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Building design excellence through collaboration and systems thinking
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((skill, index) => (
            <Card
              key={index}
              className="hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <Card className="hover-lift animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
